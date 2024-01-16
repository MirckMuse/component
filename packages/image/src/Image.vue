<template>
  image
</template>

<script lang="ts" setup>
import type { ImageProps } from "./typing"

defineOptions({
  name: "SImage"
});

withDefaults(defineProps<ImageProps>(), {})
</script> 
