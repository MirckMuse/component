<template>
  cascader
</template>

<script lang="ts" setup>
import type { CascaderProps } from "./typing"

defineOptions({
  name: "SCascader"
});

withDefaults(defineProps<CascaderProps>(), {})
</script> 
