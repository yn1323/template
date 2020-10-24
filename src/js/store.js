import {writable, derived} from 'svelte/store'

export const sample = writable(0)

// Like Getter
export const increment = derived(sample, $sample => $sample + 1)
