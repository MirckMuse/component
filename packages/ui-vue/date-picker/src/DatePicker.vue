<template>
  date-picker
</template>

<script lang="ts" setup>
import type { DatePickerProps } from "./typing"

defineOptions({
  name: "SDatePicker"
});

withDefaults(defineProps<DatePickerProps>(), {})
</script> 
