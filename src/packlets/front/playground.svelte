<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Balloon from './balloon.svelte'

  interface Item {
    id: string
    size: number
    horizontal: number
    vertical?: number
  }

  let balloons: Item[] = []

  const handleEnd = (event: CustomEvent<string>) => {
    balloons = balloons.filter(balloon => balloon.id !== event.detail)
  }

  const handleClick: MouseEventHandler<HTMLElement> = e => {
    const size = Math.floor(Math.random() * 200) + 60

    const item: Item = {
      id: (Math.random() + 1).toString(36).substring(7),
      size,
      horizontal: e.pageX - size / 2,
      vertical: -window.outerHeight + e.pageY + size,
    }

    balloons = [...balloons, item]
  }
</script>

<section
  class="relative flex h-screen flex-col items-center justify-center overflow-hidden"
  on:mousedown={handleClick}
  role="none"
>
  <slot />
  {#each balloons as { id, size, horizontal, vertical } (`balloon-${id}`)}
    <Balloon {id} {size} {horizontal} {vertical} on:end={handleEnd} />
  {/each}
</section>
