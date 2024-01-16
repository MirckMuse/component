<template>
  modal
</template>

<script lang="ts" setup>
import type { ModalProps } from "./typing"

defineOptions({
  name: "SModal"
});

withDefaults(defineProps<ModalProps>(), {})
</script> 
