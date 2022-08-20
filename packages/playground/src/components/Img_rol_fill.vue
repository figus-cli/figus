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
            d="M21 18V7l-3 2-6 1-7-1-2-2v11l6-6.5 4 3.5 3.5-2 3 4.5 1.5.5Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="m3 17 3.04-3.546c1.201-1.402 1.802-2.103 2.547-2.21a2.002 2.002 0 0 1 .726.029c.733.166 1.277.913 2.363 2.406l.31.428c.252.345.377.518.517.614a1 1 0 0 0 1.062.048c.148-.084.288-.244.57-.565.582-.667.874-1 1.178-1.169a2 2 0 0 1 2.164.142c.28.207.525.576 1.016 1.312L20.5 17.5"
        />
        <path stroke="currentColor" stroke-width="2" d="M7 9.5v-5m10 5v-5" />
        <path
            fill="currentColor"
            d="M2 17a1 1 0 1 0 2 0H2ZM4 7a1 1 0 1 0-2 0h2Zm18 0a1 1 0 1 0-2 0h2Zm-2 10a1 1 0 1 0 2 0h-2ZM4 17V7H2v10h2ZM20 7v10h2V7h-2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17.02 4.51c1.602.359 2.815.88 3.461 1.486.646.606.69 1.266.126 1.881-.565.615-1.707 1.154-3.26 1.536-1.553.382-3.433.588-5.363.587-1.93-.001-3.808-.209-5.356-.593-1.549-.384-2.686-.924-3.244-1.54-.558-.616-.507-1.275.146-1.88.652-.606 1.87-1.126 3.477-1.483"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M21 17c0 .796-.948 1.559-2.636 2.121-1.688.563-3.977.879-6.364.879s-4.676-.316-6.364-.879C3.948 18.56 3 17.796 3 17"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgRolFill",
} as DefineComponent;
</script>
