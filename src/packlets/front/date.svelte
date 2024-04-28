<script lang="ts">
  import { draggable } from '@neodrag/svelte'
</script>

<p
  class="absolute left-8 top-8 z-[41] cursor-grab select-none rounded bg-ม่วงคราม px-4 py-1 text-xl font-medium text-ขาวผ่อง"
  use:draggable={{ bounds: 'body' }}
>
  Sat, 19th October 2024
</p>
