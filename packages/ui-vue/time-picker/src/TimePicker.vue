<template>
  time-picker
</template>

<script lang="ts" setup>
import type { TimePickerProps } from "./typing"

defineOptions({
  name: "STimePicker"
});

withDefaults(defineProps<TimePickerProps>(), {})
</script> 
