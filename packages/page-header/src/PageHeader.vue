<template>
  page-header
</template>

<script lang="ts" setup>
import type { PageHeaderProps } from "./typing"

defineOptions({
  name: "SPageHeader"
});

withDefaults(defineProps<PageHeaderProps>(), {})
</script> 
