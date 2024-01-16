<template>
  button
</template>

<script lang="ts" setup>
import type { ButtonProps } from "./typing"

defineOptions({
  name: "SButton"
});

withDefaults(defineProps<ButtonProps>(), {})
</script> 
