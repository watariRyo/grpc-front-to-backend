<script lang="ts">
    import { createPromiseClient, createConnectTransport } from "@bufbuild/connect-web"
	import { UserService } from "../proto/user_connectweb";

    const transport = createConnectTransport({
        baseUrl: "/"
    })

    // クライアント作成
    // TODO: createPromiseClient is deprecated.
    const client = createPromiseClient(UserService, transport)

    const hoge = async() => {
            const res = await client.registerUser({
            userId: "hoge",
            password: "hoge",
        })
    }

    // // サーバーリクエスト実行
    // const res = await client.greet({name: "名前"});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
