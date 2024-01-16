<template>
  switch
</template>

<script lang="ts" setup>
import type { SwitchProps } from "./typing"

defineOptions({
  name: "SSwitch"
});

withDefaults(defineProps<SwitchProps>(), {})
</script> 
