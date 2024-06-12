<template>
  anchor
</template>

<script lang="ts" setup>
import type {AnchorProps, AnchorSlot} from "./typing"

defineOptions({
  name: "SAnchor"
});

withDefaults(defineProps<AnchorProps>(), {
  bounds: 5,
  getContainer: () => window,
  direction: "vertical"
});

defineSlots<AnchorSlot>()
</script> 
