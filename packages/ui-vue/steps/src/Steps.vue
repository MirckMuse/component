<template>
  steps
</template>

<script lang="ts" setup>
import type { StepsProps } from "./typing"

defineOptions({
  name: "SSteps"
});

withDefaults(defineProps<StepsProps>(), {})
</script> 
