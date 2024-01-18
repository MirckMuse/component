<template>
  item
</template>

<script lang="ts" setup>
import {BreadcrumbItemProps} from "./typing.ts"

defineOptions({
  name: "SBreadcrumbItem"
});

withDefaults(defineProps<BreadcrumbItemProps>(), {});

defineEmits(["click"])
</script>
