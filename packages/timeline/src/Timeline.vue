<template>
  timeline
</template>

<script lang="ts" setup>
import type { TimelineProps } from "./typing"

defineOptions({
  name: "STimeline"
});

withDefaults(defineProps<TimelineProps>(), {})
</script> 
