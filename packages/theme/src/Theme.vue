<template>
  theme
</template>

<script lang="ts" setup>
import type { ThemeProps } from "./typing"

defineOptions({
  name: "STheme"
});

withDefaults(defineProps<ThemeProps>(), {})
</script> 
