<template>
  slider
</template>

<script lang="ts" setup>
import type { SliderProps } from "./typing"

defineOptions({
  name: "SSlider"
});

withDefaults(defineProps<SliderProps>(), {})
</script> 
