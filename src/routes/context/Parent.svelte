<script lang="ts">
	import { getCount } from './instanceContext'

	const count = getCount()
</script>

<div class="container h-full border p-16">
	<p class="mb-4">Parent: {$count}</p>
	<slot />
</div>
