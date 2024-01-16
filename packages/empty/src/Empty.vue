<template>
  empty
</template>

<script lang="ts" setup>
import type { EmptyProps } from "./typing"

defineOptions({
  name: "SEmpty"
});

withDefaults(defineProps<EmptyProps>(), {})
</script> 
