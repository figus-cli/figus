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
            d="M12 6.72c0-.248 0-.373.057-.474a.483.483 0 0 1 .223-.199c.108-.044.218-.03.438-.004A6 6 0 0 1 18 12a6 6 0 0 1-10.8 3.6c-.133-.177-.2-.266-.215-.381a.483.483 0 0 1 .06-.293c.06-.1.167-.162.382-.286l4.213-2.432c.131-.076.197-.114.244-.167a.451.451 0 0 0 .094-.162c.022-.068.022-.143.022-.295V6.72Z"
        />
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeAtackLight",
} as DefineComponent;
</script>
