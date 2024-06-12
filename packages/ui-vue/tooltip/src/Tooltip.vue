<template>
  tooltip
</template>

<script lang="ts" setup>
import type { TooltipProps } from "./typing"

defineOptions({
  name: "STooltip"
});

withDefaults(defineProps<TooltipProps>(), {})
</script> 
