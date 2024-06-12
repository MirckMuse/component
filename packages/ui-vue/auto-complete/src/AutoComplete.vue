<template>
  auto-complete
</template>

<script lang="ts" setup>
import type {AutoComplateSlot, AutoCompleteProps} from "./typing"

defineOptions({
  name: "SAutoComplete"
});

withDefaults(defineProps<AutoCompleteProps>(), {
  defaultActiveFirstOption: true
})

defineSlots<AutoComplateSlot>();

defineEmits([
  'update:value',
  "focus",
  "clear",
  "change",
  "dropdownVisibleChange",
  "search",
  "select"
]);

defineExpose({
  blur: handleBlur,
  focus: handleFocus
});

function handleBlur() {
  // TODO:
}

function handleFocus() {
  // TODO:
}
</script> 
