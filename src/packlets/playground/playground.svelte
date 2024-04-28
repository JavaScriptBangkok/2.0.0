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

  const addBalloon = (
    x = Math.floor(Math.random() * window.innerWidth),
    y = 0,
    half = false
  ) => {
    const size = Math.floor(Math.random() * 300) + 60

    const item: Item = {
      id: (Math.random() + 1).toString(36).substring(7),
      size,
      horizontal: x - size / 2,
      vertical: y + (half ? size / 2 : size),
    }

    balloons = [...balloons, item]
  }

  const handleEnd = (event: CustomEvent<string>) => {
    balloons = balloons.filter(balloon => balloon.id !== event.detail)
  }

  const handleClick: MouseEventHandler<HTMLElement> = e => {
    addBalloon(e.pageX, -window.innerHeight + e.pageY, true)
  }

  onMount(() => {
    // randomly generate balloons
    const random = (amount: number) => {
      for (let i = 0; i < amount; i++)
        setTimeout(() => addBalloon(), Math.floor(Math.random() * 10000) % 1000)
    }

    let interval = 0
    let balloonPerSet = 0

    // monitor window size
    const handleResize = () => {
      const targetSize =
        window.innerWidth < 600 ? 3 : window.innerWidth < 1000 ? 4 : 5

      if (balloonPerSet !== targetSize) {
        clearInterval(interval)
        balloonPerSet = targetSize
        interval = setInterval(() => random(balloonPerSet), 800)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  })
</script>

<section
  class="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden"
  on:mousedown={handleClick}
  role="none"
>
  <slot />
  {#each balloons as { id, size, horizontal, vertical } (`balloon-${id}`)}
    <Balloon {id} {size} {horizontal} {vertical} on:end={handleEnd} />
  {/each}
</section>
