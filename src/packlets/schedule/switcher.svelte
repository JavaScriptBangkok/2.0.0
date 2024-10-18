<script lang="ts">
    import { clsx } from 'clsx'
    import { writable } from "svelte/store"

    export let workshopHtml: string
    export let conferenceHtml: string

    let modeValue: string
    export const switchMode = writable(typeof window !== 'undefined' && localStorage.getItem("jsbkk:switchMode") || "work")
    switchMode.subscribe(value => {
      modeValue = value
      if (typeof window !== 'undefined')
        localStorage.setItem("jsbkk:switchMode", value)
    })
</script>

<div class="flex justify-center pb-8">
    <span class="isolate inline-flex rounded-md shadow-sm">
      <button
          on:click={() => switchMode.set('work')}
          class={clsx(
              modeValue === 'work' ? "bg-brand-orange hover:bg-orange-600 text-white" : "bg-white text-gray-900  hover:bg-gray-50",
              "relative inline-flex items-center rounded-l-md px-4 py-2 text-lg font-semibold ring-1 ring-inset ring-gray-300 focus:z-10"
          )}>
          Day 1
      </button>
      <button
          on:click={() => switchMode.set('conf')}
          class={clsx(
              modeValue === 'conf' ? "bg-brand-orange hover:bg-orange-600 text-white" : "bg-white text-gray-900  hover:bg-gray-50",
              "relative -ml-px inline-flex items-center rounded-r-md px-4 py-2 text-lg font-semibold ring-1 ring-inset ring-gray-300 focus:z-10"
          )}>
          Day 2
      </button>
    </span>
</div>

<h1 class="font-bold text-3xl md:text-4xl">
    {#if modeValue === 'work'}
        Workshop
    {:else}
        Conference
    {/if}
</h1>
<h2 class="md:text-lg pb-8">
    {#if modeValue === 'work'}
        (Fri) October 18, 2024 @Microsoft Thailand
    {:else}
        (Sat) October 19, 2024 @True Digital Park
    {/if}
</h2>

{@html modeValue === 'work' ? workshopHtml : conferenceHtml}
