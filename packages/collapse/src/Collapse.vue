<template>
  collapse
</template>

<script lang="ts" setup>
import type { CollapseProps, CollapseSlots } from "./typing"

defineOptions({
  name: "SCollapse"
});

withDefaults(defineProps<CollapseProps>(), {
  accordion: false,
  bordered: true,
  destoryInactivePanel: false,
  size: "middle",
});

defineSlots<CollapseSlots>();
</script> 
