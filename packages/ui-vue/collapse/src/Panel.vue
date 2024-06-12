<template>
  collapse panel
</template>

<script lang="ts" setup>
import type { CollapsePanelProps, CollapsePanelSlots } from "./typing"

defineOptions({
  name: "SCollapse"
});

withDefaults(defineProps<CollapsePanelProps>(), {
  showArrow: true
});

defineSlots<CollapsePanelSlots>();
</script> 
