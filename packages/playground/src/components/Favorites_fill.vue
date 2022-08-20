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
            d="M12.404 20.802C14.028 19.97 20 16.568 20 11.5 20 7 16.267 4 12 4c-4.124 0-8 3-8 7.5 0 5.068 5.972 8.47 7.596 9.302a.875.875 0 0 0 .808 0Zm-.635-6.045L8.97 11.81a1.807 1.807 0 0 1-.216-2.212c.738-1.165 2.456-1.107 3.114.105l.07.128a.071.071 0 0 0 .124 0l.07-.128c.658-1.212 2.377-1.27 3.114-.105a1.807 1.807 0 0 1-.216 2.212l-2.799 2.945c-.092.098-.139.147-.195.158a.18.18 0 0 1-.072 0c-.056-.011-.103-.06-.195-.158Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "favoritesFill",
} as DefineComponent;
</script>
