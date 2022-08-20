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
            d="m2 12-.78-.625-.5.625.5.625L2 12Zm9 1a1 1 0 1 0 0-2v2ZM5.22 6.375l-4 5 1.56 1.25 4-5-1.561-1.25Zm-4 6.25 4 5 1.56-1.25-4-5-1.56 1.25ZM2 13h9v-2H2v2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M10 8.132v-.744c0-1.618 0-2.427.474-2.987.474-.559 1.272-.692 2.868-.958l1.672-.279c3.243-.54 4.864-.81 5.925.088C22 4.151 22 5.795 22 9.082v5.835c0 3.288 0 4.932-1.06 5.83-1.062.9-2.683.629-5.926.089l-1.672-.279c-1.596-.266-2.394-.4-2.868-.959C10 19.04 10 18.23 10 16.612v-.546"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutSqure",
} as DefineComponent;
</script>
