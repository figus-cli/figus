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
            d="M4.858 9.847c.067-.876.101-1.314.389-1.58C5.534 8 5.973 8 6.852 8h10.296c.879 0 1.318 0 1.605.266.288.267.322.705.389 1.58l.244 3.178c.263 3.42.395 5.13-.462 6.317a4 4 0 0 1-.66.713C17.143 21 15.43 21 12 21s-5.145 0-6.263-.946a4.002 4.002 0 0 1-.661-.713c-.857-1.188-.726-2.898-.462-6.317l.244-3.177Z"
        />
        <path stroke="currentColor" d="M8.5 8V6.5a3.5 3.5 0 1 1 7 0V8" />
        <path
            fill="currentColor"
            d="M8 11.5a.5.5 0 0 0 1 0H8Zm1 0V10H8v1.5h1Zm6 0a.5.5 0 0 0 1 0h-1Zm1 0V10h-1v1.5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bagDuotone",
} as DefineComponent;
</script>
