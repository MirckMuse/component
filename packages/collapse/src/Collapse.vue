<template>
  collapse
</template>

<script lang="ts" setup>
import type { CollapseProps } from "./typing"

defineOptions({
  name: "SCollapse"
});

withDefaults(defineProps<CollapseProps>(), {})
</script> 
