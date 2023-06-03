<script lang="ts">
	import { setCount, getCount } from './instanceContext'

	setCount()

	const count = getCount()

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? ($count += 1) : ($count -= 1)
	}
</script>

<div on:wheel={updateCount} class="h-full border p-20 text-center">
	<p class="mb-4">Grandparent: {$count}</p>
	<slot />
</div>
