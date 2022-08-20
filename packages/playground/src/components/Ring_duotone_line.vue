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
            d="M7.084 9.894a5.05 5.05 0 0 1 9.832 0l.644 2.736a5.748 5.748 0 0 0 1.915 3.1c.517.43.212 1.27-.46 1.27H4.985c-.672 0-.977-.84-.46-1.27a5.748 5.748 0 0 0 1.915-3.1l.644-2.736Z"
        />
        <path
            fill="currentColor"
            d="M12.5 2a.5.5 0 0 0-1 0h1Zm0 3V2h-1v3h1Zm1.85 13a.14.14 0 0 1 .143.15c-.045.475-.3.925-.725 1.264-.47.375-1.105.586-1.768.586s-1.299-.21-1.768-.586c-.424-.34-.68-.789-.725-1.264A.14.14 0 0 1 9.65 18h4.7Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ringDuotoneLine",
} as DefineComponent;
</script>
