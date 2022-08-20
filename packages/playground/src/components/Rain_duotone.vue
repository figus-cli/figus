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
            fill-rule="evenodd"
            d="M6 13h12a3 3 0 1 0 0-6c-.64 0-1.174-.461-1.436-1.045a5.001 5.001 0 0 0-9.128 0C7.174 6.539 6.64 7 6 7a3 3 0 1 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="m7.436 5.955-.547-.246.547.246Zm9.128 0-.547.245.547-.245ZM12 12.4H6v1.2h6v-1.2Zm6 0h-6v1.2h6v-1.2Zm2.4-2.4a2.4 2.4 0 0 1-2.4 2.4v1.2a3.6 3.6 0 0 0 3.6-3.6h-1.2ZM18 7.6a2.4 2.4 0 0 1 2.4 2.4h1.2A3.6 3.6 0 0 0 18 6.4v1.2Zm-.889-1.89A5.601 5.601 0 0 0 12 2.4v1.2a4.4 4.4 0 0 1 4.016 2.6l1.095-.49ZM12 2.4a5.601 5.601 0 0 0-5.111 3.31l1.094.49A4.4 4.4 0 0 1 12 3.6V2.4Zm-6 4A3.6 3.6 0 0 0 2.4 10h1.2A2.4 2.4 0 0 1 6 7.6V6.4ZM2.4 10A3.6 3.6 0 0 0 6 13.6v-1.2A2.4 2.4 0 0 1 3.6 10H2.4Zm4.489-4.29c-.198.44-.555.69-.889.69v1.2c.946 0 1.657-.672 1.984-1.4L6.889 5.71ZM18 6.4c-.334 0-.691-.25-.889-.69l-1.095.49c.327.728 1.038 1.4 1.984 1.4V6.4Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 18v-2m5 3v-3M7 20v-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rainDuotone",
} as DefineComponent;
</script>
