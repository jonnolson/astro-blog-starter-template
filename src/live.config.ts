import { defineLiveCollection } from "astro:content";
import { emdashLoader } from "emdash/runtime";

// EmDash content (managed in the admin at /_emdash/admin).
// File-based collections in content.config.ts keep working alongside it.
export const collections = {
	_emdash: defineLiveCollection({ loader: emdashLoader() }),
};
