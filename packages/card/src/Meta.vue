<template>
  Card Meta
</template>

<script lang="ts" setup>
import type {CardMetaProps, CardMetaSlots} from "./typing.ts";

defineOptions({
  name: "SCardMeta"
})

defineProps<CardMetaProps>();

defineSlots<CardMetaSlots>();
</script>
