<template>
  cascader
</template>

<script lang="ts" setup>
import type { CascaderProps, CascaderSlots } from "./typing"

defineOptions({
  name: "SCascader"
});

withDefaults(defineProps<CascaderProps>(), {
  allowClear: true,
  autofocus: false,
  bordered: true,
  changeOnSelect: false,
  expandTrigger: "click",
  getContainer: () => document.body,
  notFoundContent: "Not Found",
  placeholder: "请选择"
});

defineSlots<CascaderSlots>();

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
