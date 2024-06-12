<template>
  popconfirm
</template>

<script lang="ts" setup>
import type { PopconfirmProps } from "./typing"

defineOptions({
  name: "SPopconfirm"
});

withDefaults(defineProps<PopconfirmProps>(), {})
</script> 
