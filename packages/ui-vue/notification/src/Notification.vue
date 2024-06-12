<template>
  notification
</template>

<script lang="ts" setup>
import type { NotificationProps } from "./typing"

defineOptions({
  name: "SNotification"
});

withDefaults(defineProps<NotificationProps>(), {})
</script> 
