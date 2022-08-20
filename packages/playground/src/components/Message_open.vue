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
            stroke-width="2"
            d="M4 10.472c0-1.203 0-1.804.299-2.287.298-.484.836-.753 1.912-1.29l4-2c.878-.44 1.317-.659 1.789-.659s.911.22 1.789.658l4 2c1.076.538 1.614.807 1.912 1.29C20 8.669 20 9.27 20 10.473V16c0 1.886 0 2.828-.586 3.414C18.828 20 17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586C4 18.828 4 17.886 4 16v-5.528Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m4 10 2.414 2.414A2 2 0 0 0 7.828 13h8.344a2 2 0 0 0 1.414-.586L20 10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageOpen",
} as DefineComponent;
</script>
