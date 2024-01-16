<template>
  mentions
</template>

<script lang="ts" setup>
import type { MentionsProps } from "./typing"

defineOptions({
  name: "SMentions"
});

withDefaults(defineProps<MentionsProps>(), {})
</script> 
