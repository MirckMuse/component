<template>
  checkbox
</template>

<script lang="ts" setup>
import type { CheckboxProps } from "./typing"

defineOptions({
  name: "SCheckbox"
});

withDefaults(defineProps<CheckboxProps>(), {});

defineExpose({
  blur: handleBlur,
  focus: handleFocus,
});

function handleBlur() {
  // TODO:
}

function handleFocus() {
  // TODO:
}
</script> 
