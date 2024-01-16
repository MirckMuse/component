<template>
  shared
</template>

<script lang="ts" setup>
import type { SharedProps } from "./typing"

defineOptions({
  name: "SShared"
});

withDefaults(defineProps<SharedProps>(), {})
</script> 
