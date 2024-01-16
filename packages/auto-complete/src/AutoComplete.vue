<template>
  auto-complete
</template>

<script lang="ts" setup>
import type { AutoCompleteProps } from "./typing"

defineOptions({
  name: "SAutoComplete"
});

withDefaults(defineProps<AutoCompleteProps>(), {})
</script> 
