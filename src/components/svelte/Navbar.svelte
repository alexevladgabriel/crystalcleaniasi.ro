<script>
  import clx from "classnames";
  export let path;
  export let links;
  export let open = true;
  export let cta = `Contactează-ne`;
  export let phone = import.meta.env.CCI_PHONE;

  const handleClick = () => {
    open = !open;
  };
</script>

<nav class="flex items-center justify-between lg:justify-evenly" aria-label="Global">
  <div class="flex">
    <a href="/" rel="prefetch" class="-m-1.5 p-1.5">
      <span class="sr-only">CrystalClean</span>
      <span class="text-xl font-bold text-blue-500">CrystalClean</span>
    </a>
  </div>
  <div class="flex lg:hidden">
    <button
      on:click={handleClick}
      type="button"
      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span class="sr-only">Open main menu</span>
      <!-- Heroicon name: outline/bars-3 -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div class="hidden lg:flex lg:gap-x-12">
    {#each links as { name, slug }}
      <a
        rel="prefetch"
        href={slug}
        class={clx(
          "text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600",
          path === slug && "text-blue-600"
        )}
      >
        {name}
      </a>
    {/each}
  </div>
  <div class="hidden lg:flex">
    <!-- <a href="tel:+0731558888" class="text-sm font-semibold leading-6 text-amber-500 hover:text-amber-600"
      >Contactează-ne <span aria-hidden="true">&rarr;</span></a
    > -->
    <a
      href={`tel:${phone}`}
      class="flex items-center rounded-md bg-amber-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
    >
      <svg class="w-4 h-4 inline-block fill-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
        />
      </svg>
      {cta} <span class="ml-2" aria-hidden="true">&rarr;</span></a
    >
    <slot />
  </div>
</nav>
<!-- Mobile menu, show/hide based on menu open state. -->
<div id="menu" role="dialog" class="transition-opacity" aria-modal="true" hidden={open}>
  <div onfocus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
    <div class="flex items-center justify-between">
      <a href="/" rel="prefetch" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <span class="text-xl font-bold text-blue-500">CrystalClean</span>
      </a>
      <button on:click={handleClick} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Close menu</span>
        <!-- Heroicon name: outline/x-mark -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="mt-6 flow-root">
      <div class="-my-6 divide-y divide-gray-500/10">
        <div class="space-y-2 py-6">
          {#each links as { name, slug }}
            <a
              rel="prefetch"
              href={slug}
              class={clx(
                "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10",
                path === slug && "bg-blue-400/10 text-blue-400"
              )}>{name}</a
            >
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
