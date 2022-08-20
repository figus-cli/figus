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
            d="M3 10c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 13 5.068 13 6 13h.675c.581 0 .872 0 1.104.134a.995.995 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178.262.189.61.189 1.305.189h3.117c.696 0 1.044 0 1.306-.189s.372-.519.592-1.179l.125-.375c.184-.552.276-.827.476-1.005a.99.99 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 11.398 21 10.932 21 10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arhiveLight",
} as DefineComponent;
</script>
