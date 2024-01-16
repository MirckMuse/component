<template>
  tree-select
</template>

<script lang="ts" setup>
import type { TreeSelectProps } from "./typing"

defineOptions({
  name: "STreeSelect"
});

withDefaults(defineProps<TreeSelectProps>(), {})
</script> 
