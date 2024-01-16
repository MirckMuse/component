<template>
  form
</template>

<script lang="ts" setup>
import type { FormProps } from "./typing"

defineOptions({
  name: "SForm"
});

withDefaults(defineProps<FormProps>(), {})
</script> 
