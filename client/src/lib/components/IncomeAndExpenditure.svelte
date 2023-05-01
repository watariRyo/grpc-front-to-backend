<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import type { Balance } from "$lib/model/balance";
	import { GetFormatDate } from "$lib/model/date";
	import type { UserTag } from "$lib/model/userTag";
	import type { ActionData } from "../../routes/balance/$types";
	import Modal from "./Modal.svelte";


    export let balance: Balance
    export let isPaintBackground: boolean
    export let userTags: Array<UserTag>
    export let parentUpdate:  (data: Balance) => void
    let showModal: boolean = false
    let isLoading:  boolean = false
    let error = "";
    let isNameEmpty = false
    let isOccurenceDateEmpty = false
    let isAmountEmpty = false
    $: name = showModal ? balance.name : ""
    $: amount = showModal ? balance.amount : ""
    $: occurrenceDate = showModal ? GetFormatDate(balance.occurrence_date) : ""

    $: liClasses = isPaintBackground ? "border-b-2" : "border-b-2 bg-indigo-200"

    const isEmpty = (event: Event) => {
        const target = event.target as HTMLInputElement
         console.log(target.name)
         console.log(target.value)
         if (!target.value) {
            switch (target.name){
                case "name":
                    isNameEmpty = true
                    break
                case "occurrence_date":
                    isOccurenceDateEmpty = true
                    break
                case "amount":
                    isAmountEmpty = true
                    break
                default:
                    break
             }
         } else {
            switch (target.name){
                case "name":
                    isNameEmpty = false
                    break
                case "occurrence_date":
                    isOccurenceDateEmpty = false
                    break
                case "amount":
                    isAmountEmpty = false
                    break
                default:
                    break
             }
         }
    }

</script>

<li class={liClasses}>
    <div class="flex flex-row justify-start">
        <div class="columns-1">{GetFormatDate(balance.occurrence_date)}</div>
        <div class="ml-2">{balance.name}</div>
        <div class="mr-2 ml-auto">{balance.amount}</div>
        <button on:click={() => showModal = true}><i class="mi mi-edit"></i></button>
    </div>
    <Modal bind:showModal>
        {#if error}
            <p style="color:red">{error}</p>
        {/if}
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <form class="mx-auto max-w-screen-2xl px-4 md:px-8" action="/balance?/updateBalance" method="POST" use:enhance={({form}) => {
                isLoading = true
                return async ({result}) => {
                    isLoading = false
                    if (result.type === 'failure') {
                        await applyAction(result)
                    }
                    else if (result.type === 'error') {
                        error = result.error.message;
                    } else {
                        showModal = false
                        form.reset()
                        parentUpdate(result.data)
                        // await applyAction(result)
                    }
                }
                }}>
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Update Income or Expenditure</h2>          
                </div>

                <div class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                    <div class="sm:col-span-2">
                        <label for="name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name *</label>
                        <input value={name} name="name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" on:input={isEmpty}/>
                        {#if isNameEmpty}
                            <p style="color: red; margin-bottom: 0">Name is Required!</p>
                        {/if}
                        <!-- {isNameEmpty && <p style="color: red; margin-bottom: 0">Invalid Date Format!</p>} -->
                    </div>
                    <div class="sm:col-span-2">
                        <label for="tag" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Tag</label>
                        <select name="tag" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
                            {#each userTags as userTag}
                                {#if userTag.id == balance.user_tag_id}
                                    <option selected value={userTag.id}>{userTag.tag_name}</option>
                                {:else}
                                    <option value={userTag.id}>{userTag.tag_name}</option>
                                {/if}
                            {/each}
                        </select>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="occurrence_date" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date *</label>
                        <input name="occurrence_date" type="date" value={occurrenceDate} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" on:input={isEmpty} />
                        {#if isOccurenceDateEmpty}
                            <p style="color: red; margin-bottom: 0">Date is Invalid!</p>
                        {/if}
                    </div>
                    <div class="sm:col-span-2">
                        <label for="amount" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Amount *</label>
                        <input name="amount" value={amount} type="number" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" on:input={isEmpty} />
                        {#if isAmountEmpty}
                            <p style="color: red; margin-bottom: 0">Amount is Required!</p>
                        {/if}
                    </div>

                    <input name="classification" type="hidden" value={balance.classification} />
                    <input name="id" type="hidden" value={balance.id} />

                    <div class="flex items-center justify-between sm:col-span-2">
                        <button type="submit" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                        <span class="text-sm text-gray-500">*Required</span>
                    </div>
    
                </div>
            </form>
        </div>
    </Modal>
</li>
