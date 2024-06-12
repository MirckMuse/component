<template>
  menu
</template>

<script lang="ts" setup>
import type { MenuProps } from "./typing"

defineOptions({
  name: "SMenu"
});

withDefaults(defineProps<MenuProps>(), {})
</script> 
