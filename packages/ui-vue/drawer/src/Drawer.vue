<template>
  drawer
</template>

<script lang="ts" setup>
import type { DrawerProps } from "./typing"

defineOptions({
  name: "SDrawer"
});

withDefaults(defineProps<DrawerProps>(), {})
</script> 
