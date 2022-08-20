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
            fill-opacity=".24"
            d="M19 18V8.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552 1.69 1.69 0 0 0-.616-.243c-.745-.153-1.117-.229-1.66-.023-.542.205-.873.647-1.535 1.529L14 7h-4l-.3-.4c-.662-.882-.993-1.323-1.535-1.53-.543-.205-.915-.129-1.66.024a1.69 1.69 0 0 0-.616.243 2 2 0 0 0-.552.552C5 6.393 5 7.096 5 8.5V18c0 1.886 0 2.828.586 3.414C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586C19 20.828 19 19.886 19 18Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M15.5 5c1.405 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586C5 20.828 5 19.886 5 18V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M9 12h6m-6 4h4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskAltDuotoneLine",
} as DefineComponent;
</script>
