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
            d="M4 12c0-1.886 0-2.828.586-3.414C5.172 8 6.114 8 8 8h.784c.104 0 .156 0 .196-.028s.055-.078.088-.177l.476-1.427c.22-.66.33-.99.592-1.18C10.398 5 10.746 5 11.442 5h3.116c.696 0 1.044 0 1.306.189.262.188.372.518.592 1.178l.495 1.487c.014.042.021.062.032.079a.15.15 0 0 0 .086.062c.02.005.041.005.085.005.788 0 1.181 0 1.498.11a2 2 0 0 1 1.239 1.238c.109.317.109.71.109 1.498V14c0 1.886 0 2.828-.586 3.414C18.828 18 17.886 18 16 18H8c-1.886 0-2.828 0-3.414-.586C4 16.828 4 15.886 4 14v-2Z"
        />
        <path stroke="currentColor" stroke-linejoin="round" d="M14.5 6.5h-3" />
        <circle cx="13" cy="13" r="3" fill="currentColor" />
        <rect
            width="3"
            height="1"
            x="4"
            y="6"
            fill="currentColor"
            fill-opacity=".24"
            rx=".5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cameraDuotone",
} as DefineComponent;
</script>
