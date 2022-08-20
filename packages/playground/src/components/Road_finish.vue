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
            stroke-width="2"
            d="M17 11h.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 12.52 21 13.08 21 14.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 21 18.92 21 17.8 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 11 5.08 11 6.2 11H7"
        />
        <path
            fill="currentColor"
            d="M4.511 20.852a1 1 0 0 0 1.978.296l-1.978-.296Zm3.478-9.704a1 1 0 0 0-1.978-.296l1.978.296Zm9.522 10a1 1 0 1 0 1.978-.296l-1.978.296Zm.478-10.296a1 1 0 1 0-1.978.296l1.978-.296Zm-11.5 10.296 1.5-10-1.978-.296-1.5 10 1.978.296Zm13-.296-1.5-10-1.978.296 1.5 10 1.978-.296Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M12 17v-3" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 7V3.5c0-.236 0-.353.073-.427C12.146 3 12.264 3 12.5 3H17l-1.5 2L17 7h-5Zm0 0v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "roadFinish",
} as DefineComponent;
</script>
