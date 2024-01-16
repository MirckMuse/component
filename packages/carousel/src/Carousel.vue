<template>
  carousel
</template>

<script lang="ts" setup>
import type { CarouselProps } from "./typing"

defineOptions({
  name: "SCarousel"
});

withDefaults(defineProps<CarouselProps>(), {})
</script> 
