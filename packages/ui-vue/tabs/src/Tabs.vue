<template>
  tabs
</template>

<script lang="ts" setup>
import type { TabsProps } from "./typing"

defineOptions({
  name: "STabs"
});

withDefaults(defineProps<TabsProps>(), {})
</script> 
