<template>
  calendar
</template>

<script lang="ts" setup>
import type { CalendarProps } from "./typing"

defineOptions({
  name: "SCalendar"
});

withDefaults(defineProps<CalendarProps>(), {})
</script> 
