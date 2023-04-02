<script lang="ts">
    import Modal from "$components/Modal.svelte";
    import type { LayoutData } from "./$types";
  
    export let data: LayoutData;
    let topbar: HTMLElement;
    let scrollY: number;
    let headerOpacity = 0;
    let showModal = false;
  
    $: if (topbar) {
          headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;
      }
  
    $: incomes = data.balances.filter((balance: any)=>{
      return balance.classification == "INCOME"
    })
    $: expenditures = data.balances.filter((balance: any)=>{
      return balance.classification == "EXPENDITURE"
    })
  
    const test = () => {
      alert("hoge")
      showModal = false
    }
  </script>
  
  <div class="flex flex-row mx-auto max-w-screen-2xl justify-end">
      <select>
          <option value="0">hoge1</option>
          <option value="1">hoge2</option>
          <option value="2">hoge3</option>
      </select>
      <button on:click={() => (showModal = true)}>add</button>
  </div>
  <Modal bind:showModal>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="mb-10 md:mb-16">
                  <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Add New Income or Expenditure</h2>          
              </div>
          
              <div class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">            
                <div class="sm:col-span-2">
                    <label for="company" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name</label>
                    <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
            
                <div class="sm:col-span-2">
                    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Income or Expenditure</label>
                    <select class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                        <option value="INCOME">Income</option>
                        <option value="EXPENDITURE">Expenditure</option>
                    </select>
                </div>
            
                <div class="sm:col-span-2">
                    <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Tag</label>
                    <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
            
                <div class="flex items-center justify-between sm:col-span-2">
                    <button on:click={test} class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
            
                    <span class="text-sm text-gray-500">*Required</span>
                </div>
            
                <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                </div>
            </div>
          </div>
  </Modal>
  <div class="flex flex-row mx-auto max-w-screen-2xl justify-center">
      <div class="border-2 w-1/2">
          <ul>
              <li class="bg-indigo-500 text-gray-100">INCOME</li>
              {#each incomes as income, i}
                  {#if i % 2 == 0}
                      <li class="border-b-2">{income.occurrence_date} {income.name}</li>
                  {:else}
                      <li class="border-b-2 bg-indigo-200">{income.occurrence_date} {income.name}</li>
                  {/if}
              {/each}
          </ul>
      </div>
      <div class="border-2 w-1/2">
          <ul>
              <li class="bg-indigo-500 text-gray-100">EXPENDITURE</li>
              {#each expenditures as expenditure, i}
                  {#if i % 2 == 0}
                      <li class="border-b-2">{expenditure.occurrence_date} {expenditure.name}</li>
                  {:else}
                      <li class="border-b-2 bg-indigo-200">{expenditure.occurrence_date} {expenditure.name}</li>
                  {/if}
              {/each}
          </ul>
      </div>
  </div>
  