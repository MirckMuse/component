<template>
  Ribbon
</template>

<script lang="ts" setup>
import {RibbonProps, RibbonSlot} from "./typing.ts"

defineOptions({
  name: "SBadgeRibbon"
});

withDefaults(defineProps<RibbonProps>(), {
  placement: "end"
});

defineSlots<RibbonSlot>()
</script>
