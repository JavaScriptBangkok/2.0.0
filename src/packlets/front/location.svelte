<script lang="ts">
  import { draggable } from '@neodrag/svelte'
</script>

<p
  class="absolute bottom-8 right-8 z-[41] cursor-grab select-none rounded bg-ม่วงคราม px-4 py-1 text-xl font-medium text-ขาวผ่อง"
  use:draggable={{ bounds: 'body' }}
>
  True Digital Park West
</p>
