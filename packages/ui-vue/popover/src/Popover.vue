<template>
  popover
</template>

<script lang="ts" setup>
import type { PopoverProps } from "./typing"

defineOptions({
  name: "SPopover"
});

withDefaults(defineProps<PopoverProps>(), {})
</script> 
