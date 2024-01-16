<template>
  card
</template>

<script lang="ts" setup>
import type { CardProps } from "./typing"

defineOptions({
  name: "SCard"
});

withDefaults(defineProps<CardProps>(), {})
</script> 
