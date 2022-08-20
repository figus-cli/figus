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
            d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M3 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 15 5.068 15 6 15h.675c.581 0 .872 0 1.104.134a.995.995 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.375c.22.66.33.99.592 1.18.262.188.61.188 1.305.188h3.117c.696 0 1.044 0 1.306-.189s.372-.519.592-1.179l.125-.375c.184-.552.276-.827.476-1.005a.99.99 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 13.398 21 12.932 21 12M9.5 10.5 12 13m0 0 2.5-2.5M12 13V6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arhiveImportLight",
} as DefineComponent;
</script>
