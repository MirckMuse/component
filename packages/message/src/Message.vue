<template>
  message
</template>

<script lang="ts" setup>
import type { MessageProps } from "./typing"

defineOptions({
  name: "SMessage"
});

withDefaults(defineProps<MessageProps>(), {})
</script> 
