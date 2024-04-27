<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Balloon from './balloon.svelte'

  interface Item {
    id: string
    size: number
    horizontal: number
    initialHeight: number
  }

  let balloons: Item[] = []

  const handleEnd = (event: CustomEvent<string>) => {
    balloons = balloons.filter(balloon => balloon.id !== event.detail)
  }

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    const size = Math.floor(Math.random() * 200) + 60

    const item: Item = {
      id: (Math.random() + 1).toString(36).substring(7),
      size,
      horizontal: e.pageX - (size / 2),
      initialHeight: window.outerHeight - e.pageY - size
    }

    balloons = [...balloons, item]
  }
</script>

<section class="h-screen flex justify-center items-center flex-col relative overflow-hidden" on:mousedown={handleClick}>
    <slot />
    {#each balloons as { id, size, horizontal, initialHeight } (`balloon-${id}`)}
      <Balloon
        id={id}
        size={size}
        horizontal={horizontal}
        initialHeight={initialHeight}
        on:end={handleEnd}
      />
    {/each}
</section>
