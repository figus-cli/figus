<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M20 11.5c0 5.068-5.972 8.47-7.596 9.302a.875.875 0 0 1-.808 0C9.972 19.97 4 16.568 4 11.5 4 7 7.876 4 12 4c4.267 0 8 3 8 7.5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m8.97 11.81 2.799 2.947c.092.097.139.146.195.157a.18.18 0 0 0 .072 0c.056-.011.103-.06.195-.157l2.799-2.946a1.807 1.807 0 0 0 .216-2.211c-.738-1.165-2.456-1.108-3.114.104l-.07.128a.071.071 0 0 1-.124 0l-.07-.128c-.658-1.212-2.377-1.27-3.114-.105a1.807 1.807 0 0 0 .216 2.212Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "favorites",
} as DefineComponent;
</script>
