<template>
  card
</template>

<script lang="ts" setup>
import type {CardProps, CardSlots} from "./typing"

defineOptions({
  name: "SCard"
});

withDefaults(defineProps<CardProps>(), {
  type: 'default'
})

defineSlots<CardSlots>()

defineEmits(["tabChange"])
</script> 
