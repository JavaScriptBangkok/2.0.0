<script lang="ts">
  import Kanok from '$sprites/kanok.svelte'
  import { pickRandom } from '$playground/pickRandom'
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  export let size: 's' | 'm' | 'l' = 'l'
  export let padding: number = 0
  export let length: number

  const basePadding = size === 'l' ? 8 : size === 'm' ? 4 : 2
</script>

<div class="flex">
  <div style={`padding-left: ${basePadding * padding}rem`}></div>
  {#each Array.from({ length }) as _}
    <Kanok
      size={size}
      color={pickRandom(['yellow', 'orange', 'blue', 'green'])}
      variant={pickRandom(['invert-x', 'invert-xy', 'normal'])}
      animate
    />
  {/each}
</div>
