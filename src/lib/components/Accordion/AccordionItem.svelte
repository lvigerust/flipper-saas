<script lang="ts">
	import { slide } from 'svelte/transition'
	import { getAccordionOptions } from './context'

	export let open: boolean = false

	const componentId = crypto.randomUUID()

	const { collapse, activeComponentId } = getAccordionOptions()

	function setActive() {
		$activeComponentId = componentId
	}

	function toggleOpen() {
		open = !open
	}

	function handleClick() {
		collapse ? setActive() : toggleOpen()
	}

	$: open && collapse && setActive()
	$: isActive = $activeComponentId === componentId
	$: isOpen = collapse ? isActive : open
</script>

<button
	on:click={handleClick}
	aria-expanded={isOpen}
	aria-controls="accordion-{componentId}"
	class="accordion-toggle flex w-full cursor-pointer justify-between rounded bg-none p-4 font-semibold text-inherit transition-colors duration-100 hover:bg-blue-700"
>
	<div class="arccordion-title">
		<slot name="title" />
	</div>

	<div class="accordion-caret" class:open={isOpen} class:close={!isOpen}>👉</div>
</button>

{#if isOpen}
	<div
		transition:slide|local
		role="region"
		aria-hidden={!isOpen}
		aria-labelledby="accordion-{componentId}"
		class="accordion-content p-4"
	>
		<slot name="content" />
	</div>
{/if}

<style>
	.open {
		transform: rotate(90deg);
		transition: transform 0.2s ease;
	}
	.close {
		transform: rotate(0deg);
		transition: transform 0.2s ease;
	}
</style>
