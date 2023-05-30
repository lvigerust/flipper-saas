import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import type { ActiveId, AccordionOptions, CollapseContext, ActiveIdContext } from './types'

const activeComponentId = writable<ActiveId>(null)

export function setAccordionOptions({ collapse }: AccordionOptions) {
	{
		setContext<CollapseContext>('collapse', collapse)
		setContext<ActiveIdContext>('active', activeComponentId)
	}
}
export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
	return { collapse, activeComponentId }
}
