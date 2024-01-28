import { writable } from 'svelte/store'

export const expandNav = writable(false)

export const platform = writable('mobile')

export const orientation = writable('landscape')