<template>
  <Button variant='link'>
  <a :href='link' class='link py-1 px-1 my-1 capitalize bg-primary-500'>
    {{ component.name }}
  </a>
  </Button>
  {{ component.description }}
</template>

<script lang='ts' setup>
import { SharedUiFunction } from '@/.vitepress/metadata/types';
import { computed } from 'vue';
import Button from '@/components/button/Button.vue';

const props = defineProps<{ component: SharedUiFunction }>();

const link = computed(() => {
  return `/${props.component.package}/${props.component.name}/`;
});
</script>

<style scoped>
.link {
  background-color: rgba(156,163,175,0.05);
}
</style>
