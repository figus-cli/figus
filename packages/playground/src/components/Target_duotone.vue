<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 1c1.717 0 3.29-.618 4.508-1.644a.73.73 0 0 0 .018.018l1.414 1.414a.6.6 0 0 0 .848-.849l-1.414-1.414a.747.747 0 0 0-.018-.017A6.972 6.972 0 0 0 19 12c0-1.717-.618-3.29-1.645-4.508a.753.753 0 0 0 .02-.018l1.413-1.414a.6.6 0 0 0-.848-.849l-1.415 1.415a.638.638 0 0 0-.018.018C15.29 5.618 13.717 5 12 5s-3.29.618-4.507 1.644a.613.613 0 0 0-.018-.018L6.06 5.21a.6.6 0 0 0-.848.849l1.414 1.414a.61.61 0 0 0 .019.018A6.972 6.972 0 0 0 5 12c0 1.717.618 3.29 1.644 4.508a.612.612 0 0 0-.018.017L5.212 17.94a.6.6 0 1 0 .848.849l1.415-1.414a.589.589 0 0 0 .017-.018A6.972 6.972 0 0 0 12 19Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "targetDuotone",
} as DefineComponent;
</script>
