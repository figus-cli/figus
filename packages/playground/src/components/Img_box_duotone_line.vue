<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <mask
            id="a"
            width="18"
            height="18"
            x="3"
            y="3"
            maskUnits="userSpaceOnUse"
            style="mask-type: alpha"
        >
            <path
                fill="currentColor"
                d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
            />
        </mask>
        <g mask="url(#a)">
            <path
                fill="currentColor"
                fill-opacity=".24"
                stroke="currentColor"
                d="m5.41 12.59-.153.153c-.98.98-1.47 1.47-1.764 2.073a4.001 4.001 0 0 0-.25.65c-.185.644-.148 1.337-.075 2.722L3.5 24.5H21v-4.743c0-1.451 0-2.177-.239-2.836a3.994 3.994 0 0 0-.233-.525c-.33-.619-.87-1.104-1.95-2.075l-.214-.193c-.896-.807-1.344-1.21-1.856-1.324a1.999 1.999 0 0 0-.973.026c-.506.14-.932.567-1.784 1.42-.633.632-.949.948-1.288.99a1 1 0 0 1-.61-.117c-.3-.166-.479-.583-.836-1.418-.761-1.775-1.141-2.662-1.795-2.99a2 2 0 0 0-1.065-.205c-.729.062-1.402.735-2.747 2.08Z"
            />
        </g>
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgBoxDuotoneLine",
} as DefineComponent;
</script>
