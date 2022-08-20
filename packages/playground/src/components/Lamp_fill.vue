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
            d="M14.856 15.686a11.66 11.66 0 0 0-.1.25 8.696 8.696 0 0 1-5.512 0 11.298 11.298 0 0 0-.1-.25c-.095-.23-.143-.346-.226-.452-.082-.107-.226-.215-.514-.43a6 6 0 1 1 7.192 0c-.288.215-.432.323-.514.43-.083.106-.13.221-.226.452Zm-5.006 2.48c.087.527.136 1.061.147 1.598a.39.39 0 0 0 .214.342 4 4 0 0 0 3.578 0 .39.39 0 0 0 .213-.342 11.285 11.285 0 0 1 .148-1.597 10.702 10.702 0 0 1-4.3 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lampFill",
} as DefineComponent;
</script>
