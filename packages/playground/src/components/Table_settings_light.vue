<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M11.5 18.5h-6a2 2 0 0 1-2-2v-8m0 0v-2a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.85a.15.15 0 0 1-.15.15H3.5Zm0 5h6"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M13.649 16.167c-.237-.426-.355-.639-.402-.865a1.5 1.5 0 0 1 0-.605c.047-.225.165-.438.402-.864l.323-.581.342-.57c.25-.419.376-.628.548-.78a1.5 1.5 0 0 1 .524-.303c.218-.073.462-.077.949-.084l.665-.011.665.01c.487.008.73.012.95.085a1.5 1.5 0 0 1 .523.302c.172.153.298.362.548.78l.342.571.323.581c.237.426.355.639.402.864a1.5 1.5 0 0 1 0 .606c-.047.225-.165.438-.402.864l-.323.581-.342.57c-.25.419-.376.628-.548.78a1.5 1.5 0 0 1-.524.303c-.218.073-.462.077-.949.084l-.665.011-.665-.01c-.487-.008-.73-.012-.95-.085a1.5 1.5 0 0 1-.523-.302c-.172-.153-.298-.362-.548-.78l-.342-.571-.323-.581Z"
        />
        <circle cx="17" cy="15" r="1" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tableSettingsLight",
} as DefineComponent;
</script>
