<template>
  anchor
</template>

<script lang="ts" setup>
import type { AnchorProps } from "./typing"

defineOptions({
  name: "SAnchor"
});

withDefaults(defineProps<AnchorProps>(), {})
</script> 
