<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.307 8.307 0 0 1 12 15c.786 0 1.57.103 2.277.307.7.202 1.35.51 1.842.937"
        />
        <mask
            id="a"
            width="4"
            height="3"
            x="7"
            y="8"
            fill="currentColor"
            maskUnits="userSpaceOnUse"
        >
            <path fill="currentColor" d="M7 8h4v3H7z" />
            <path
                d="M9.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.585.227 1 1 0 0 1-.17-.228c-.086-.156-.129-.234-.056-.357C8.14 9 8.26 9 8.5 9h1Z"
            />
        </mask>
        <path
            fill="currentColor"
            d="M9.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.585.227 1 1 0 0 1-.17-.228c-.086-.156-.129-.234-.056-.357C8.14 9 8.26 9 8.5 9h1Z"
        />
        <path
            stroke="currentColor"
            d="M9.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.585.227 1 1 0 0 1-.17-.228c-.086-.156-.129-.234-.056-.357C8.14 9 8.26 9 8.5 9h1Z"
            mask="url(#a)"
        />
        <mask
            id="b"
            width="4"
            height="3"
            x="13"
            y="8"
            fill="currentColor"
            maskUnits="userSpaceOnUse"
        >
            <path fill="currentColor" d="M13 8h4v3h-4z" />
            <path
                d="M15.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.756 0c-.085-.157-.128-.235-.055-.358C14.14 9 14.26 9 14.5 9h1Z"
            />
        </mask>
        <path
            fill="currentColor"
            d="M15.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.756 0c-.085-.157-.128-.235-.055-.358C14.14 9 14.26 9 14.5 9h1Z"
        />
        <path
            stroke="currentColor"
            d="M15.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.358a1 1 0 0 1-1.756 0c-.085-.157-.128-.235-.055-.358C14.14 9 14.26 9 14.5 9h1Z"
            mask="url(#b)"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sadAlt",
} as DefineComponent;
</script>
