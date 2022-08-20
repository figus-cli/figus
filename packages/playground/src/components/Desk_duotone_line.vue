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
            d="M4 7.81c0-.754 0-1.13.1-1.435A2 2 0 0 1 5.375 5.1C5.679 5 6.056 5 6.81 5c.324 0 .486 0 .624.04a1 1 0 0 1 .62.525c.062.13.088.29.142.609l.054.326c.105.632.158.947.348 1.162a1 1 0 0 0 .219.186C9.06 8 9.38 8 10.021 8h3.958c.64 0 .96 0 1.204-.152a1.001 1.001 0 0 0 .219-.186c.19-.215.243-.53.348-1.162l.054-.326c.053-.32.08-.48.142-.609a1 1 0 0 1 .62-.525c.138-.04.3-.04.624-.04.754 0 1.13 0 1.435.1A2 2 0 0 1 19.9 6.375c.1.304.1.681.1 1.435V17c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4 19.828 4 18.886 4 17V7.81Z"
        />
        <rect
            width="16"
            height="16"
            x="4"
            y="5"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M16 2v4c0 .943 0 1.414-.293 1.707C15.414 8 14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293C8 7.414 8 6.943 8 6V2m1 12h6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskDuotoneLine",
} as DefineComponent;
</script>
