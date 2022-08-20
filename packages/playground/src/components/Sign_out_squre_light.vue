<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="m2 12-.39-.312-.25.312.25.312L2 12Zm9 .5a.5.5 0 0 0 0-1v1ZM5.61 6.688l-4 5 .78.624 4-5-.78-.624Zm-4 5.624 4 5 .78-.624-4-5-.78.624ZM2 12.5h9v-1H2v1Z"
        />
        <path
            stroke="currentColor"
            d="M10 8.132v-.744c0-1.618 0-2.427.474-2.987.474-.559 1.272-.692 2.868-.958l1.672-.279c3.243-.54 4.864-.81 5.925.088C22 4.151 22 5.795 22 9.082v5.835c0 3.288 0 4.932-1.06 5.83-1.062.9-2.683.629-5.926.089l-1.672-.279c-1.596-.266-2.394-.4-2.868-.959C10 19.04 10 18.23 10 16.612v-.546"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutSqureLight",
} as DefineComponent;
</script>
