<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  let topbar: HTMLElement;
  let scrollY: number;
  let headerOpacity = 0;

  $: if (topbar) {
		headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;
	}

  $: balances = data.balances
</script>

<ul>
    {#each balances as balance}
        <li>{balance.name}</li>
    {/each}
</ul>