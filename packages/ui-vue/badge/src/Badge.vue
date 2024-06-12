<template>
  badge
</template>

<script lang="ts" setup>
import type {BadgeProps} from "./typing"

defineOptions({
  name: "SBadge"
});

withDefaults(defineProps<BadgeProps>(), {
  type: "primary",
  overflowCount: 99
})
</script> 
