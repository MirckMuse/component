<template>
    <button :class="buttonClass" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { ButtonProps } from "./typing";

defineOptions({
    name: "SButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
    size: "middle",
    type: "default",
    shape: "default",
    prefixClass: 's-button'
});

defineExpose({
    blur: handleBlur,
    focus: handleFocus,
});

const emit = defineEmits(["click"]);

// 处理点击事件，有 onclick 使用 onClick
function handleClick($event: MouseEvent) {
    if (props.onClick) {
        return props.onClick($event)
    } else {
        emit('click', $event)
    }
}

function handleBlur() {
    // TODO:
}

function handleFocus() {
    // TODO:
}

const buttonClass = computed(() => {
    const { prefixClass, type, size, shape, dashed, ghost, block, disabled } = props;
    return {
        [prefixClass]: true,
        [prefixClass + '-type__' + type]: true,
        [prefixClass + '-size__' + size]: true,
        [prefixClass + '-shape__' + shape]: true,
        [prefixClass + '-dashed']: dashed,
        [prefixClass + '-ghost']: ghost,
        [prefixClass + '-block']: block,
        [prefixClass + '-disabled']: disabled,
    }
});
</script>
