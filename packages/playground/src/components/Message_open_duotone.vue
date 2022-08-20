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
            d="M4 11.472c0-1.203 0-1.804.299-2.287.298-.484.836-.753 1.912-1.29l4-2c.878-.44 1.317-.659 1.789-.659s.911.22 1.789.658l4 2c1.076.538 1.614.807 1.912 1.29.299.484.299 1.085.299 2.288V15c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19H8c-1.886 0-2.828 0-3.414-.586C4 17.828 4 16.886 4 15v-3.528Z"
        />
        <path
            fill="currentColor"
            d="M4 17v-6.757a.15.15 0 0 1 .217-.135l6.441 3.221a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageOpenDuotone",
} as DefineComponent;
</script>
