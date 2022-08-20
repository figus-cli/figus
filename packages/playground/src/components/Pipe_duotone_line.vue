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
            fill-rule="evenodd"
            d="M5.965 15.17c-.552.148-.828.222-.917.464-.09.243.059.46.356.893a8 8 0 0 0 5.142 3.34 8 8 0 0 0 8.048-3.336 8 8 0 0 0-3.147-11.75 8 8 0 0 0-2.824-.756c-.524-.041-.786-.062-.951.137-.166.2-.092.475.056 1.027l1.643 6.133.003.01c.012.044.054.196.073.347.027.207.044.615-.202 1.04a1.644 1.644 0 0 1-.8.695c-.14.058-.292.098-.337.11l-.01.002-6.133 1.644Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M9.67 3.307c-.123-.464-.186-.695-.383-.796-.197-.102-.407-.022-.827.136a10 10 0 0 0-6.33 10.964c.073.443.109.664.295.784.187.12.418.059.882-.066l7.727-2.07c.455-.122.683-.183.787-.363.103-.179.042-.407-.08-.862l-2.07-7.727Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pipeDuotoneLine",
} as DefineComponent;
</script>
