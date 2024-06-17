<script lang="ts">
  import { draggable } from '@neodrag/svelte'
</script>

<div
  class="absolute left-8 top-8 z-[41] cursor-grab select-none rounded bg-ม่วงคราม px-4 py-1.5 text-xl font-medium text-ขาวผ่อง"
  use:draggable={{ bounds: 'body' }}
>
  <p>October 18, 2024</p>
  <p>Microsoft Thailand</p>
</div>

<div
  class="absolute bottom-8 left-8 z-[41] cursor-grab select-none rounded bg-ม่วงคราม px-4 py-1.5 text-xl font-medium text-ขาวผ่อง"
  use:draggable={{ bounds: 'body' }}
>
  <p>October 19, 2024</p>
  <p>True Digital Park West</p>
</div>
