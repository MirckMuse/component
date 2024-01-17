<template>
  alert
</template>

<script lang="ts" setup>
import type {AlertProps, AlertSlot} from "./typing"

defineOptions({
  name: "SAlert"
});

withDefaults(defineProps<AlertProps>(), {
  type: "primary",
})

defineSlots<AlertSlot>()
</script> 
