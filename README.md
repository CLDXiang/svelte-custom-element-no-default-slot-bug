# Reproduce Svelte Custom Element No Slot Bug

This is a reproduction repository for Svelte Custom Element slot bug.

When Svelte creates a custom element, if no child elements are initially passed in, the default `<slot>` tag will not be created, causing subsequently added child elements to not be rendered in the slot.

## Related files

[MyElement.svelte](./src/MyElement.svelte)
[index.html](./index.html)
[app/main.ts](./app/main.ts)

## Reproduction steps

```bash
npm run dev
```

Two my-elements will be created, one red and one green. The red one has no child elements when created, while the green one has. Clicking on them will append child elements to them.

It can be observed that the red my-element does not change after clicking, and the `<slot>` tag is not created in its DOM tree, causing the newly added child elements to not be placed in the slot.

The green one works as expected.
