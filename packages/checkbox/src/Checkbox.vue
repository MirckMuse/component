<template>
  checkbox
</template>

<script lang="ts" setup>
import type { CheckboxProps } from "./typing"

defineOptions({
  name: "SCheckbox"
});

withDefaults(defineProps<CheckboxProps>(), {})
</script> 
