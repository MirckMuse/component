<template>
  select
</template>

<script lang="ts" setup>
import type { SelectProps } from "./typing"

defineOptions({
  name: "SSelect"
});

withDefaults(defineProps<SelectProps>(), {})
</script> 
