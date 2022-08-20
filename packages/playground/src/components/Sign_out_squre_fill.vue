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
            fill-rule="evenodd"
            d="m8.379 2.669 3.69-.58c3.22-.506 4.83-.76 5.88.139C19 3.126 19 4.756 19 8.016v2.983h-5.92l2.7-3.375-1.56-1.25-4 5-.5.625.5.625 4 5 1.56-1.25L13.08 13H19v2.983c0 3.26 0 4.89-1.05 5.788-1.05.898-2.66.645-5.881.14l-3.69-.58c-1.613-.254-2.419-.38-2.899-.942C5 19.828 5 19.012 5 17.379V6.62c0-1.632 0-2.449.48-3.01.48-.561 1.286-.688 2.899-.941Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutSqureFill",
} as DefineComponent;
</script>
