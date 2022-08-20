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
                d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
            />
        </mask>
        <g mask="url(#a)">
            <path
                fill="currentColor"
                fill-opacity=".24"
                d="m13.017 14.927-2.164-2.36c-.943-1.03-1.415-1.544-2-1.689a2.001 2.001 0 0 0-.784-.035c-.596.091-1.113.56-2.145 1.499-1.061.965-1.592 1.447-2.05 1.39a1 1 0 0 1-.524-.233C3 13.2 3 12.483 3 11.05V7.568c0-3.584 0-5.376 1.094-6.533S6.978-.221 10.556-.42l2-.11c3.961-.22 5.942-.33 7.193.853C21 1.506 21 3.49 21 7.457v6.45c0 .564 0 .846-.054 1.004a1 1 0 0 1-1.384.574c-.15-.074-.35-.273-.75-.673-.37-.37-.555-.555-.742-.673a2 2 0 0 0-2.14 0c-.187.118-.372.303-.742.673l-.159.159c-.27.27-.404.404-.547.476a1 1 0 0 1-.94-.02c-.14-.079-.268-.22-.526-.5Z"
            />
        </g>
        <path
            fill="currentColor"
            d="M8 16v-.6h.6v.6H8Zm-5.576 6.424a.6.6 0 1 1-.848-.848l.848.848ZM7.4 21v-5h1.2v5H7.4Zm.6-4.4H3v-1.2h5v1.2Zm.424-.176-6 6-.848-.848 6-6 .848.848Z"
        />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgLoadBoxDuotone",
} as DefineComponent;
</script>
