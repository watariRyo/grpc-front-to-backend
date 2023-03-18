<script lang="ts">
//   const getNavCssClass = (path: string) => {
//     console.log($page.url.pathname)
//     if (path === $page.url.pathname) {
//       return "inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
//     } else {
//       return "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
//     }
//   }

  const navItems: { path: string; label: string }[] = [
    {
      path: '/',
      label: 'Home',
    //   tailwindClass: getNavCssClass('/')
    },
    {
      path: '/tag',
      label: 'My Tag',
    //   tailwindClass: getNavCssClass('/tag')
    },
    {
      path: '/group',
      label: 'My Group',
    //   tailwindClass: getNavCssClass('/group')
    },
    {
      path: '/user',
      label: 'User Setting',
    //   tailwindClass: getNavCssClass('/user')
    }
  ]

</script>

<nav class="hidden gap-12 lg:flex">
    {#each navItems as item}
      <a href={item.path} class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">{item.label}</a>
    {/each}
  </nav>