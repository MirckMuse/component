<template>
  radio
</template>

<script lang="ts" setup>
import type { RadioProps } from "./typing"

defineOptions({
  name: "SRadio"
});

withDefaults(defineProps<RadioProps>(), {})
</script> 
