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
            d="m14 15 .354-.354.353.354-.353.354L14 15Zm-3.646-4.354 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708Z"
        />
        <path
            stroke="currentColor"
            d="M9.67 6.153c-2.234.3-4.152 1.018-5.356 2.005-1.203.988-1.6 2.17-1.108 3.3s1.836 2.122 3.752 2.77c1.917.648 4.258.902 6.54.71m6.296-2.188c.69-.598 1.096-1.267 1.187-1.956.09-.689-.138-1.378-.666-2.016-.528-.638-1.343-1.206-2.38-1.661-1.039-.455-2.272-.785-3.606-.964"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "circleRightAltLight",
} as DefineComponent;
</script>
