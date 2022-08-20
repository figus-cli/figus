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
            d="m15.014 3.164 1.924-.32c1.435-.24 2.153-.36 2.73-.227A3 3 0 0 1 21.775 4.4C22 4.95 22 5.677 22 7.131v9.935c0 1.273 0 1.91-.173 2.397a3 3 0 0 1-2.301 1.95c-.51.09-1.137-.015-2.393-.224l-2.12-.353c-2.394-.4-3.591-.599-4.302-1.438-.711-.84-.711-2.053-.711-4.48V9.082c0-2.428 0-3.641.71-4.48.712-.84 1.91-1.04 4.304-1.439Z"
        />
        <path
            fill="currentColor"
            d="m3 12-.469-.375-.3.375.3.375L3 12Zm9 .6a.6.6 0 1 0 0-1.2v1.2ZM6.532 6.625l-4 5 .937.75 4-5-.937-.75Zm-4 5.75 4 5 .937-.75-4-5-.937.75ZM3 12.6h9v-1.2H3v1.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutSqureDuotoneLine",
} as DefineComponent;
</script>
