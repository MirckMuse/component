<template>
  skeleton
</template>

<script lang="ts" setup>
import type { SkeletonProps } from "./typing"

defineOptions({
  name: "SSkeleton"
});

withDefaults(defineProps<SkeletonProps>(), {})
</script> 
