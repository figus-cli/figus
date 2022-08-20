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
            d="M12 21.5c4.101 0 7.5-3.063 7.5-6.929 0-2.415-1.233-4.859-2.627-6.862-1.403-2.017-3.022-3.66-3.895-4.491a1.413 1.413 0 0 0-1.956 0c-.874.83-2.492 2.474-3.895 4.491C5.733 9.713 4.5 12.156 4.5 14.571c0 3.866 3.399 6.929 7.5 6.929Z"
        />
        <path fill="none" stroke="currentColor" d="M12 18a4 4 0 0 1-4-4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "humidityLight",
} as DefineComponent;
</script>
