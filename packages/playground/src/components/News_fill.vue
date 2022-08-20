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
            d="M4.002 9h15.996c-.012-2.175-.108-3.353-.877-4.121C18.243 4 16.828 4 14 4h-4c-2.828 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121ZM20 11H4v3c0 2.828 0 4.243.879 5.121C5.757 20 7.172 20 10 20h4c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14v-3Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "newsFill",
} as DefineComponent;
</script>
