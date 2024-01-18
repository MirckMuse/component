<template>
  calendar
</template>

<script lang="ts" setup>
import type {CalendarProps, CalendarSlots} from "./typing"

defineOptions({
  name: "SCalendar"
});

withDefaults(defineProps<CalendarProps>(), {
  mode: "month",
})

defineSlots<CalendarSlots>()

defineEmits(["change", "panelChange", "select"])
</script> 
