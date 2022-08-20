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
            d="M4 9.3c0-.141 0-.212.044-.256C4.088 9 4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044.044.044.044.114.044.256V16c0 1.886 0 2.828-.586 3.414C18.828 20 17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586C4 18.828 4 17.886 4 16V9.3ZM4.724 8c-.308 0-.462 0-.5-.093-.039-.092.07-.201.288-.42l1.316-1.315c.578-.578.867-.867 1.235-1.02C7.431 5 7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02l1.316 1.316c.218.218.327.327.289.42-.039.092-.193.092-.501.092H4.724Z"
        />
        <path
            fill="currentColor"
            d="M9 9.15A.15.15 0 0 1 9.15 9h5.7a.15.15 0 0 1 .15.15v4.916a.5.5 0 0 1-.777.416l-1.668-1.112a1 1 0 0 0-1.11 0l-1.668 1.112A.5.5 0 0 1 9 14.066V9.15Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxFillDuotone",
} as DefineComponent;
</script>
