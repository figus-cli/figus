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
            stroke-miterlimit="1.414"
            d="M4.5 11.5h15"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M4.5 6.9c0-.84 0-1.26.164-1.581a1.5 1.5 0 0 1 .655-.655C5.64 4.5 6.06 4.5 6.9 4.5h2.572c.376 0 .564 0 .735.052a1.2 1.2 0 0 1 .413.221c.137.113.242.27.45.582l.86 1.29c.208.313.313.47.45.582.122.1.263.176.413.222.171.051.359.051.735.051H17.1c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .655.655c.164.321.164.741.164 1.581v6.2c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.656c-.32.163-.74.163-1.581.163H6.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.655-.656c-.164-.32-.164-.74-.164-1.58V6.9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderLineLight",
} as DefineComponent;
</script>
