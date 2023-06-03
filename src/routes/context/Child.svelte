<script lang="ts">
	import { getCount } from './instanceContext'

	const count = getCount()
</script>

<div class="container flex h-full items-center justify-center border">
	<p>Child: {$count}</p>
	<slot />
</div>
