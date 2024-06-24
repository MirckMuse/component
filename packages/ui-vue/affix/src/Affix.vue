<template>affix</template>

<script lang="ts" setup>
import type { AffixProps } from "./typing";

defineOptions({
    name: "SAffix",
});

withDefaults(defineProps<AffixProps>(), {
    target: () => document.body,
});

defineEmits(["change"]);
</script>
