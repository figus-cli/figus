<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            d="M8.209 16.622c.421-.365.999-.646 1.652-.834.658-.19 1.395-.288 2.139-.288s1.48.098 2.139.288c.654.188 1.23.469 1.652.834"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            d="M9.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.585.227 1 1 0 0 1-.17-.228c-.086-.156-.129-.234-.056-.357C8.14 9 8.26 9 8.5 9h1Zm6 0c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.756 0c-.085-.157-.128-.235-.055-.358C14.14 9 14.26 9 14.5 9h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sadAltLight",
} as DefineComponent;
</script>
