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
            d="M4.5 6.9c0-.84 0-1.26.164-1.581a1.5 1.5 0 0 1 .655-.656C5.639 4.5 6.06 4.5 6.9 4.5h2.572c.376 0 .564 0 .735.051a1.201 1.201 0 0 1 .413.222c.137.113.242.27.45.582l.86 1.29c.208.313.313.469.45.582.122.1.263.175.413.221.171.052.359.052.735.052H17.1c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .655.656c.164.32.164.741.164 1.581v6.2c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.655c-.32.164-.74.164-1.581.164H6.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.655-.655c-.164-.32-.164-.74-.164-1.581V6.9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderLight",
} as DefineComponent;
</script>
