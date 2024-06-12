<template>
  tree
</template>

<script lang="ts" setup>
import type { TreeProps } from "./typing"

defineOptions({
  name: "STree"
});

withDefaults(defineProps<TreeProps>(), {})
</script> 
