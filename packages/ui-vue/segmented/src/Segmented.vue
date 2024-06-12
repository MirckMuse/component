<template>
  segmented
</template>

<script lang="ts" setup>
import type { SegmentedProps } from "./typing"

defineOptions({
  name: "SSegmented"
});

withDefaults(defineProps<SegmentedProps>(), {})
</script> 
