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
            d="M12 2v5.054c0 .424 0 .837.045 1.176.052.384.178.821.54 1.184.364.363.801.489 1.184.54.34.046.753.046 1.177.046H20v6c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h2Zm2 .005V7c0 .5.002.774.028.964v.007l.008.001c.19.026.464.028.964.028h4.995c-.01-.412-.043-.684-.147-.937-.152-.367-.441-.656-1.02-1.235l-2.656-2.656c-.579-.578-.868-.867-1.235-1.02-.253-.105-.525-.137-.937-.147ZM8 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockFill",
} as DefineComponent;
</script>
