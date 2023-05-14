import { writable, derived, readable } from "svelte/store";

export const appId = writable();

export const formData = writable({});

export const loadData = writable({});
