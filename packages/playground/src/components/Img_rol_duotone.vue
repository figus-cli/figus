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
            fill-rule="evenodd"
            d="M7 5.505C4.588 6.043 3 6.96 3 8s1.588 1.957 4 2.495v-4.99Zm10 4.99C19.412 9.957 21 9.04 21 8s-1.588-1.957-4-2.495v4.99Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m19.736 18.331-1.284-1.799c-.653-.913-.979-1.37-1.44-1.408a1.002 1.002 0 0 0-.08-.004c-.462-.002-.827.424-1.557 1.276-.628.733-.943 1.1-1.357 1.13a1.025 1.025 0 0 1-.072.003c-.416.001-.757-.34-1.44-1.023l-1.092-1.092c-.666-.667-1-1-1.414-1-.414 0-.748.333-1.414 1l-3.444 3.444c.235.107.505.213.81.315 1.502.5 3.64.827 6.048.827s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79a2.023 2.023 0 0 0 .062-.052ZM3 18V8c0 .496.361.964 1 1.376C5.496 10.34 8.517 11 12 11c3.483 0 6.504-.66 8-1.624.64-.412 1-.88 1-1.376v10c0 1.657-4.03 3-9 3s-9-1.343-9-3Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgRolDuotone",
} as DefineComponent;
</script>
