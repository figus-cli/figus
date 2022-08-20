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
            d="M3 12V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h1.474c.49 0 .734 0 .964.055.205.05.4.13.579.24.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642a2.003 2.003 0 0 0 .579.24c.23.055.474.055.964.055h.474c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C16 7.52 16 8.08 16 9.2v.3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4.7 20h10.92c.854 0 1.28 0 1.64-.146a2 2 0 0 0 .813-.604c.243-.303.366-.713.611-1.53l1.08-3.6c.419-1.397.628-2.095.477-2.648a2 2 0 0 0-.869-1.168C18.886 10 18.157 10 16.699 10h-5.318c-.854 0-1.281 0-1.642.145a2 2 0 0 0-.812.605c-.243.303-.366.712-.611 1.53l-1.948 6.494A1.72 1.72 0 0 1 4.72 20C3.77 20 3 19.23 3 18.28V11m8 4h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderOpenAlt",
} as DefineComponent;
</script>
