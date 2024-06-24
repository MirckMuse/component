<template>button</template>

<script lang="ts" setup>
import type { ButtonProps } from "./typing";

defineOptions({
    name: "SButton",
});

withDefaults(defineProps<ButtonProps>(), {
    size: "middle",
    type: "default",
    shape: "default",
});

defineExpose({
    blur: handleBlur,
    focus: handleFocus,
});

defineEmits(["click"]);

function handleBlur() {
    // TODO:
}

function handleFocus() {
    // TODO:
}
</script>
