<template>
  result
</template>

<script lang="ts" setup>
import type { ResultProps } from "./typing"

defineOptions({
  name: "SResult"
});

withDefaults(defineProps<ResultProps>(), {})
</script> 
