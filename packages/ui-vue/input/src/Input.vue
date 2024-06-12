<template>
  input
</template>

<script lang="ts" setup>
import type { InputProps } from "./typing"

defineOptions({
  name: "SInput"
});

withDefaults(defineProps<InputProps>(), {})
</script> 
