<template>
  transfer
</template>

<script lang="ts" setup>
import type { TransferProps } from "./typing"

defineOptions({
  name: "STransfer"
});

withDefaults(defineProps<TransferProps>(), {})
</script> 
