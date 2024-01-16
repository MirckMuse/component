<template>
  spin
</template>

<script lang="ts" setup>
import type { SpinProps } from "./typing"

defineOptions({
  name: "SSpin"
});

withDefaults(defineProps<SpinProps>(), {})
</script> 
