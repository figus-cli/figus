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
            d="M8.324 16.273c.418-.09.976-.158 1.604-.203.635-.046 1.35-.07 2.072-.07.723 0 1.437.024 2.072.07.627.045 1.186.112 1.604.203"
        />
        <mask
            id="a"
            width="4"
            height="3"
            x="7"
            y="9"
            fill="currentColor"
            maskUnits="userSpaceOnUse"
        >
            <path fill="currentColor" d="M7 9h4v3H7z" />
            <path
                d="M9.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10h1Z"
            />
        </mask>
        <path
            fill="currentColor"
            d="M9.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10h1Z"
        />
        <path
            stroke="currentColor"
            d="M9.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10h1Z"
            mask="url(#a)"
        />
        <mask
            id="b"
            width="4"
            height="3"
            x="13"
            y="9"
            fill="currentColor"
            maskUnits="userSpaceOnUse"
        >
            <path fill="currentColor" d="M13 9h4v3h-4z" />
            <path
                d="M15.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357A1 1 0 0 1 15 11a1 1 0 0 1-.878-.52c-.085-.157-.128-.235-.055-.358C14.14 10 14.26 10 14.5 10h1Z"
            />
        </mask>
        <path
            fill="currentColor"
            d="M15.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357A1 1 0 0 1 15 11a1 1 0 0 1-.878-.52c-.085-.157-.128-.235-.055-.358C14.14 10 14.26 10 14.5 10h1Z"
        />
        <path
            stroke="currentColor"
            d="M15.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357A1 1 0 0 1 15 11a1 1 0 0 1-.878-.52c-.085-.157-.128-.235-.055-.358C14.14 10 14.26 10 14.5 10h1Z"
            mask="url(#b)"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sadAlt_2",
} as DefineComponent;
</script>
