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
            d="M15 20H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 18.48 3 17.92 3 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h1.474c.49 0 .734 0 .964.055.205.05.4.13.579.24.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642a2.003 2.003 0 0 0 .579.24c.23.055.474.055.964.055H13.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 7.52 17 8.08 17 9.2v.3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M5.316 12.28c.245-.818.368-1.227.611-1.53a2 2 0 0 1 .812-.604C7.1 10 7.527 10 8.381 10h8.318c1.458 0 2.187 0 2.673.304a2 2 0 0 1 .869 1.168c.151.553-.058 1.251-.477 2.648l-1.08 3.6c-.245.817-.368 1.227-.611 1.53a1.999 1.999 0 0 1-.812.604c-.36.146-.788.146-1.642.146H5.151c-.73 0-1.094 0-1.337-.152a1 1 0 0 1-.434-.584c-.076-.277.029-.626.238-1.324l1.698-5.66Z"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M9 15h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderOpen",
} as DefineComponent;
</script>
