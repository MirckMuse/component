<template>
  breadcrumb
</template>

<script lang="ts" setup>
import type { BreadcrumbProps } from "./typing"

defineOptions({
  name: "SBreadcrumb"
});

withDefaults(defineProps<BreadcrumbProps>(), {})
</script> 
