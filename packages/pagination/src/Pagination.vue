<template>
  pagination
</template>

<script lang="ts" setup>
import type { PaginationProps } from "./typing"

defineOptions({
  name: "SPagination"
});

withDefaults(defineProps<PaginationProps>(), {})
</script> 
