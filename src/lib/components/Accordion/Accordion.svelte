<script lang="ts">
	import { setAccordionOptions } from './context'

	export let collapse = false
	export let bg = 'bg-blue-600'
	export let text = 'text-white'

	setAccordionOptions({ collapse })
</script>

<div class="accordion w-[60ch] rounded {bg} p-4 {text} shadow">
	<slot />
</div>
