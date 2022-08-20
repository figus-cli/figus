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
            d="m9.675 19.34-3-2.143c-.821-.587-1.232-.88-1.453-1.311C5 15.456 5 14.95 5 13.942v-3.884c0-.32 0-.591.007-.824L11 13.514v6.717c-.357-.2-.773-.497-1.325-.892ZM13 20.23c.357-.2.773-.497 1.325-.892l3-2.142c.821-.587 1.232-.88 1.453-1.311.222-.43.222-.935.222-1.944v-3.884c0-.32 0-.591-.007-.824L13 13.514v6.717Zm5.128-12.837L12 11.771 5.872 7.394c.212-.168.474-.356.803-.59l3-2.143c1.123-.802 1.684-1.203 2.325-1.203.64 0 1.202.4 2.325 1.203l3 2.143c.329.234.591.422.803.59Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "3dBoxFill",
} as DefineComponent;
</script>
