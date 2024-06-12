<template>
  carousel
</template>

<script lang="ts" setup>
import type { CarouselProps } from "./typing"

defineOptions({
  name: "SCarousel"
});

withDefaults(defineProps<CarouselProps>(), {
  dots: true,
  effect: "scrollx",
  easing: "linear"
});

defineExpose({
  goTo: handleGoTo,
  next: handleNext,
  prev: handlePrev
});

function handleGoTo(slideNumber: number, useAnimate = false) {
  // TODO:
}

function handleNext() {
  // TODO:
}

function handlePrev() {
  // TODO:
}
</script> 
