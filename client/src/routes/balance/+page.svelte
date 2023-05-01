<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import IncomeAndExpenditure from "$components/IncomeAndExpenditure.svelte";
    import Modal from "$components/Modal.svelte";
	import type { Balance } from "$lib/model/balance";
	import type { UserTag } from "$lib/model/userTag";
    import type { ActionData, LayoutData } from "./$types";
  
    export let data: LayoutData;
    export let form: ActionData
    let topbar: HTMLElement;
    let scrollY: number;
    let headerOpacity = 0;
    let showModal = false;
    let isLoading = false;
    let error = "";
  
    $: if (topbar) {
          headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;
      }
  
    $: incomes = data.balances.filter((balance: Balance)=>{
      return balance.classification == "INCOME"
    })
    $: expenditures = data.balances.filter((balance: Balance)=>{
      return balance.classification == "EXPENDITURE"
    })

    $: incomesTag = data.userTags.filter((userTag: UserTag)=>{
        return userTag.grant_limit == "INCOME" || userTag.grant_limit == "BOTH"
    })

    $: expenditureTag = data.userTags.filter((userTag: UserTag)=>{
        return userTag.grant_limit == "EXPENDITURE" || userTag.grant_limit == "BOTH"
    })

    $: userTags = data.userTags
    $: balanceTags = incomesTag

    $: occurrenceDate = getToday()

    const getToday = () => {
        var today = new Date();
        today.setDate(today.getDate());
        var yyyy = today.getFullYear();
        var mm = ("0" + (today.getMonth() + 1)).slice(-2);
        var dd = ("0" + today.getDate()).slice(-2);
        return yyyy + '-' + mm + '-' + dd
    }

    const balanceTagChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        if (target.value == "INCOME") {
            balanceTags = incomesTag
        } else {
            balanceTags = expenditureTag
        }
    }

    const userTagChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        
        if (Number(target.value) == 0) {
            incomes = data.balances.filter((balance: Balance) => {            
                return balance.classification == "INCOME"
            })
            expenditures = data.balances.filter((balance: Balance) => {            
                return balance.classification == "EXPENDITURE"
            })
        } else {
            incomes = data.balances.filter((balance: Balance) => {            
                return balance.classification == "INCOME" && balance.user_tag_id == BigInt(target.value)
            })
            expenditures = data.balances.filter((balance: Balance) => {            
                return balance.classification == "EXPENDITURE" && balance.user_tag_id == BigInt(target.value)
            })
        }
    }

    const updateBalanceList = (data: Balance) => {
        console.log("updateBalanceList")
        if (data.classification == "INCOME") {
            incomes = [...incomes, data].sort((i1: Balance, i2: Balance) => {
            if (i1.occurrence_date > i2.occurrence_date) {
                return 1;
            }

            if (i1.occurrence_date < i2.occurrence_date) {
                return -1;
            }
            return 0
            })            
            console.log(incomes)
        } else {
            expenditures = [...expenditures, data].sort((e1: Balance, e2: Balance) => {
            if (e1.occurrence_date > e2.occurrence_date) {
                return 1;
            }

            if (e1.occurrence_date < e2.occurrence_date) {
                return -1;
            }
            return 0
            })
        }
    }

  </script>
  
  <div class="flex flex-row mx-auto max-w-screen-2xl justify-between mb-2">
    <select on:change={userTagChange} class="rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring w-auto jus">
        <option value=0>ALL</option>
        {#each userTags as userTag}
            <option value={userTag.id}>{userTag.tag_name}</option>
        {/each}
    </select>
    <button class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold bg-indigo-300 text-gray-600 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-100 focus-visible:ring active:text-indigo-600 md:text-base" on:click={() => (showModal = true)}>+</button>
  </div>
  <Modal bind:showModal>
    {#if error}
        <p style="color:red">{error}</p>
    {/if}
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <form class="mx-auto max-w-screen-2xl px-4 md:px-8" action="?/registerBalance" method="POST" use:enhance={({form}) => {
        isLoading = true
        return async ({result}) => {
            isLoading = false
            if (result.type === 'failure') {
                await applyAction(result)
            }
            else if (result.type === 'error') {
                error = result.error.message;
            } else {
                form.reset()
                updateBalanceList(result.data)
                form.occurrence_date.value = getToday()
                occurrenceDate = getToday()
                showModal = false
                await applyAction(result)
            }
        }
        }}>
            <div class="mb-10 md:mb-16">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Add New Income or Expenditure</h2>          
            </div>
        
            <div class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">            
            <div class="sm:col-span-2">
                <label for="name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name *</label>
                <input name="name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                <br>
                {#if form?.nameMissing}
                    <p style="color: red; margin-bottom: 0">Name is Required!</p>
                {/if}
            </div>

            <div class="sm:col-span-2">
                <label for="amount" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Amount *</label>
                <input name="amount" type="number" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {#if form?.amountMissing}
                    <p style="color: red; margin-bottom: 0">Amount is Required!</p>
                {/if}
            </div>
        
            <div class="sm:col-span-2">
                <label for="classification" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Income or Expenditure</label>
                <select name="classification" on:change={balanceTagChange} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                    <option value="INCOME">Income</option>
                    <option value="EXPENDITURE">Expenditure</option>
                </select>
            </div>
        
            <div class="sm:col-span-2">
                <label for="tag" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Tag</label>
                <select name="tag" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                    {#each balanceTags as balanceTag}
                        <option value={balanceTag.id}>{balanceTag.tag_name}</option>
                    {/each}
                </select>
            </div>

            <div class="sm:col-span-2">
                <label for="occurrence_date" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date *</label>
                <input name="occurrence_date" type="date" bind:value={occurrenceDate} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {#if form?.occurrenceDateMissing}
                    <p style="color: red; margin-bottom: 0">Date is Required!</p>
                {/if}
                {#if form?.occurrenceInvalidDate}
                    <p style="color: red; margin-bottom: 0">Invalid Date Format!</p>
                {/if}
            </div>
        
            <div class="flex items-center justify-between sm:col-span-2">
                <button type="submit" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                <span class="text-sm text-gray-500">*Required</span>
            </div>
        
            <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
            </div>
        </form>
        </div>
  </Modal>
  <div class="flex flex-row mx-auto max-w-screen-2xl justify-center">
      <div class="border-2 w-1/2">
          <ul>
            <li class="bg-indigo-500 text-gray-100">INCOME</li>
            {#each incomes as income, i}
                <IncomeAndExpenditure balance={income} isPaintBackground={i % 2 == 0} userTags={incomesTag} parentUpdate={updateBalanceList} />
            {/each}
          </ul>
      </div>
      <div class="border-2 w-1/2">
          <ul>
                <li class="bg-indigo-500 text-gray-100">EXPENDITURE</li>
                {#each expenditures as expenditure, i}
                    <IncomeAndExpenditure balance={expenditure} isPaintBackground={i % 2 == 0} userTags={expenditureTag} parentUpdate={updateBalanceList} />
                {/each}
          </ul>
      </div>
  </div>
  