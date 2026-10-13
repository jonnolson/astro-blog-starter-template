---
title: "Getting Started with This Blog"
description: "A quick tour of how posts work in this Astro blog, and how to write your own."
pubDate: "Oct 13 2026"
heroImage: "/blog-placeholder-1.jpg"
---

Welcome! This is an example post showing how content works in this Astro blog. Use it as a template for your own writing.

## Where posts live

Every post is a Markdown (`.md`) or MDX (`.mdx`) file in `src/content/blog/`. The filename becomes the URL, so this file, `getting-started.md`, is served at `/blog/getting-started/`.

## Frontmatter

Each post starts with a frontmatter block that is validated against the schema in `src/content.config.ts`:

```yaml
---
title: "Getting Started with This Blog"
description: "A short summary shown in listings and meta tags."
pubDate: "Oct 13 2026"
updatedDate: "Oct 14 2026" # optional
heroImage: "/blog-placeholder-1.jpg" # optional, from /public
---
```

If a required field is missing or has the wrong type, Astro will show an error when you run the dev server or build.

## Writing content

You can use all the usual Markdown features:

- **Bold** and _italic_ text
- [Links](https://docs.astro.build)
- Lists, like this one
- `Inline code` and fenced code blocks

> Blockquotes work too, which is handy for callouts and quotes.

Here's a code sample:

```js
export function greet(name) {
	return `Hello, ${name}!`;
}
```

## Next steps

1. Duplicate this file and give it a new name.
2. Update the frontmatter.
3. Write your post and watch it appear at `http://localhost:4321/blog/`.

Happy writing!
