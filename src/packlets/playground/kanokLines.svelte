<script lang="ts">
  import Kanok from '$sprites/kanok.svelte'
  import { pickRandom } from '$playground/pickRandom'
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  export let padding: number = 0
  export let length: number
</script>

<div class="flex">
  <div style={`padding-left: ${8 * padding}rem`}></div>
  {#each Array.from({ length }) as _}
    <Kanok
      size="l"
      color={pickRandom(['yellow', 'orange', 'blue', 'green'])}
      variant={pickRandom(['invert-x', 'invert-xy', 'normal'])}
      animate
    />
  {/each}
</div>
