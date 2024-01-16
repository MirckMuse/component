<template>
  rate
</template>

<script lang="ts" setup>
import type { RateProps } from "./typing"

defineOptions({
  name: "SRate"
});

withDefaults(defineProps<RateProps>(), {})
</script> 
