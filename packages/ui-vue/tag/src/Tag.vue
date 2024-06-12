<template>
  tag
</template>

<script lang="ts" setup>
import type { TagProps } from "./typing"

defineOptions({
  name: "STag"
});

withDefaults(defineProps<TagProps>(), {})
</script> 
