import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'

type Context = Writable<number>

export function setCount(start?: number) {
	const count = writable<number>(start ?? 0)
	setContext('count', count)
}

export function getCount() {
	return getContext<Context>('count')
}
