<template>
  checkbox group
</template>

<script lang="ts" setup>
import type { CheckboxGroupProps } from "./typing"

defineOptions({
  name: "SCheckboxGroup"
});

withDefaults(defineProps<CheckboxGroupProps>(), {});
</script> 
