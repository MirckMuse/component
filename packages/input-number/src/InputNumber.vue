<template>
  input-number
</template>

<script lang="ts" setup>
import type { InputNumberProps } from "./typing"

defineOptions({
  name: "SInputNumber"
});

withDefaults(defineProps<InputNumberProps>(), {})
</script> 
