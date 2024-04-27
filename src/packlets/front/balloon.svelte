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
    export let initialHeight: number | undefined = undefined
    export let acceleration = -150 // px/s^2

    const colors = [
      'text-น้ำครั่ง',
      'text-ครามฝรั่ง',
      'text-แดงดอกกระมุท',
      'text-นวลจันทร์'
    ]

    const dispatch = createEventDispatcher<ComponentEvent>()

    let ended = false
    const variant = Math.floor(Math.random() * 100) % 2 === 0 ? 'inner' : 'outer'
    const color = colors[Math.floor(Math.random() * colors.length)]

    // by default, if initialHeight is not provided, size will determine height position
    let currentHeight = initialHeight ?? -size
    let mountedAt = performance.now()

    const frame = () => {
        if (ended) return

        const time = (performance.now() - mountedAt) / 1000
        const distance = 0.5 * acceleration * time ** 2

        // calculate new height based on initial height and distance, would fly up
        currentHeight = initialHeight ? initialHeight - distance : -size + distance

        // stop when it overshoots viewport height
        if (currentHeight > window.innerHeight) {
          ended = true
        }

        requestAnimationFrame(frame)
    }

    onMount(() => {
      requestAnimationFrame(frame)

      return () => {
        ended = true
      }
    })

    // send signal if animation ended
    $: {
      if (ended)
        dispatch('end', id)
    }
</script>

{#if variant === 'inner'}
  <Inner class="absolute {color}" style="width:{size}px;height:{size}px;left:{horizontal};bottom:{currentHeight};" />
{:else}
  <Outer class="absolute {color}" style="width:{size}px;height:{size}px;left:{horizontal};bottom:{currentHeight};" />
{/if}
