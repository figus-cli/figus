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
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4.768-11.36a1 1 0 1 0-1.536-1.28l-3.598 4.317c-.347.416-.542.647-.697.788l-.006.006-.007-.005c-.168-.127-.382-.339-.765-.722l-1.452-1.451a1 1 0 0 0-1.414 1.414l1.451 1.451.041.041c.327.327.64.641.933.862.327.248.756.48 1.305.455.55-.024.956-.295 1.26-.571.27-.247.555-.588.85-.943l.037-.044 3.598-4.318Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "checkRoundFill",
} as DefineComponent;
</script>
