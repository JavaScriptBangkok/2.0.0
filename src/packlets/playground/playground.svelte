<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Balloon from './balloon.svelte'
  import { onMount } from 'svelte'

  interface Item {
    id: string
    size: number
    horizontal: number
    vertical?: number
  }

  let balloons: Item[] = []

  const addBalloon = (x: number, y = 0) => {
    const size = Math.floor(Math.random() * 300300) + 60

    const item: Item = {
      id: (Math.random() + 1).toString(36).substring(7),
      size,
      horizontal: x - size / 2,
      vertical: y + size,
    }

    balloons = [...balloons, item]
  }

  const handleEnd = (event: CustomEvent<string>) => {
    balloons = balloons.filter(balloon => balloon.id !== event.detail)
  }

  const handleClick: MouseEventHandler<HTMLElement> = e => {
    addBalloon(e.pageX, -window.outerHeight + e.pageY)
  }

  onMount(() => {
    // randomly generate balloons
    const interval = setInterval(() => {
      addBalloon(Math.floor(Math.random() * window.outerWidth))
      addBalloon(Math.floor(Math.random() * window.outerWidth))
      addBalloon(Math.floor(Math.random() * window.outerWidth))
      addBalloon(Math.floor(Math.random() * window.outerWidth))
    }, 600)

    return () => clearInterval(interval)
  })
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
