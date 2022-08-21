<script setup lang='ts'>
import { computed, Ref, toRef } from 'vue';
import Fuse from 'fuse.js';
import { useEventListener, useUrlSearchParams } from '@vueuse/core';
import { categoryNames, functions } from '@/.vitepress/metadata';
import { Chip } from '@/components/chip';
import ComponentBadge from '@/.vitepress/theme/components/ComponentBadge.vue';
import { Search } from '@/components/search';

const coreCategories = categoryNames.filter(i => !i.startsWith('@'));
const sortMethods = ['category', 'name', 'updated'];

useEventListener('click', (e) => {
  if (e.target.tagName === 'A')
    window.dispatchEvent(new Event('hashchange'));
});

const query = useUrlSearchParams('hash-params', { removeFalsyValues: true });
const search = toRef(query, 'search');
const category = toRef(query, 'category');
const hasComponent = toRef(query, 'component');
const hasDirective = toRef(query, 'directive');
const sortMethod = toRef(query, 'sort') as Ref<'category' | 'name' | 'updated'>;

const showCategory = computed(() => !search.value && (!sortMethod.value || sortMethod.value === 'category'));

const items = computed(() => {
  let fn = functions.filter(i => !i.internal);
  if (hasComponent.value)
    fn = fn.filter(i => i.component);
  if (hasDirective.value)
    fn = fn.filter(i => i.directive);
  if (!category.value)
    return fn;
  return fn.filter(item => item.category === category.value);
});
const fuse = computed(() => new Fuse(items.value, {
  keys: ['name', 'description']
}));
const result = computed(() => {
  if (search.value) {
    return fuse.value.search(search.value).map(i => i.item);
  } else {
    const fns = [...items.value];
    if (sortMethod.value === 'updated')
      fns.sort((a, b) => (b.lastUpdated) || 0 - (a.lastUpdated || 0));
    else if (sortMethod.value === 'name')
      fns.sort((a, b) => a.name.localeCompare(b.name));
    else
      fns.sort((a, b) => categoryNames.indexOf(a.category) - categoryNames.indexOf(b.category));
    return fns;
  }
});

const hasFilters = computed(() => Boolean(search.value || category.value || hasComponent.value || sortMethod.value));

function resetFilters() {
  sortMethod.value = null;
  category.value = null;
  hasComponent.value = null;
  search.value = null;
}

function toggleCategory(cate: string) {
  category.value = category.value === cate ? null : cate;
}

function toggleSort(method: string) {
  sortMethod.value = method;
}

</script>

<template>
  <div class='mt-2'>
    <div class='flex py-2'>
      <Chip
        class='max-h-6 mx-1'
        @cleared='() => category = null'
        clearable
        v-for='cate of coreCategories'
        :key='cate'
        :selected='cate === category'
        :class='{ active: category === cate }'
        @click='toggleCategory(cate)'
      >
        {{ cate }}
      </Chip>
    </div>
    <div class='py-1 border-b border-t my-2'>
      <Search variant='transparent' placeholder='Search' v-model='search'></Search>
    </div>
    <div v-for='item in result' class='py-1'>
      <ComponentBadge :component='item'></ComponentBadge>
    </div>
  </div>
</template>

<style scoped lang='postcss'>

</style>
