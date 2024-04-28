<script lang="ts">
  import Inner from '$sprites/inner.svelte'
  import Outer from '$sprites/outer.svelte'
  import { onMount, createEventDispatcher } from 'svelte'

  interface ComponentEvent {
    end: string
  }

  export let id: string
  export let size: number = 150
  export let horizontal: number = 0
  export let vertical: number | undefined
  export let acceleration = 6 // px/s^2

  const colors = [
    'text-น้ำครั่ง',
    'text-ครามฝรั่ง',
    'text-แดงดอกกระมุท',
    'text-นวลจันทร์',
  ]

  const dispatch = createEventDispatcher<ComponentEvent>()

  let ended = false
  const variant = Math.floor(Math.random() * 100) % 2 === 0 ? 'inner' : 'outer'
  const color = colors[Math.floor(Math.random() * colors.length)]

  // by default, if initialHeight is not provided, size will determine height position
  const currentWidth = horizontal + size / 2 - window.innerWidth / 2
  let currentHeight =
    (vertical ? vertical - size / 2 : -size) + window.innerHeight / 2
  let mountedAt = performance.now()

  onMount(() => {
    let frame = requestAnimationFrame(function loop() {
      if (ended) return

      const time = (performance.now() - mountedAt) / 1000
      const distance = 0.5 * acceleration * time ** 2

      // calculate new height based on initial height and distance, would fly up
      currentHeight = currentHeight - distance

      // stop when it overshoots viewport height
      if (-currentHeight - size * 2 > window.innerHeight) {
        ended = true
      }

      frame = requestAnimationFrame(loop)
    })

    return () => {
      ended = true
      cancelAnimationFrame(frame)
    }
  })

  // send signal if animation ended
  $: {
    if (ended) dispatch('end', id)
  }

  $: computedStyle = `width:${size}px;height:${size}px;transform:translate3d(${currentWidth}px,${currentHeight}px, 0);`
</script>

{#if variant === 'inner'}
  <Inner class="absolute {color}" style={computedStyle} />
{:else}
  <Outer class="absolute {color}" style={computedStyle} />
{/if}
