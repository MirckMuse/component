<template>
  list
</template>

<script lang="ts" setup>
import type { ListProps } from "./typing"

defineOptions({
  name: "SList"
});

withDefaults(defineProps<ListProps>(), {})
</script> 
