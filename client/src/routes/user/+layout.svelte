<script lang="ts">
	import type { LayoutData } from "./$types";


    export let data: LayoutData;

    $: user = data.user
</script>

<h1>{user?.userID}</h1>
<slot />