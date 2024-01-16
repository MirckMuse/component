<template>
  alert
</template>

<script lang="ts" setup>
import type { AlertProps } from "./typing"

defineOptions({
  name: "SAlert"
});

withDefaults(defineProps<AlertProps>(), {})
</script> 
