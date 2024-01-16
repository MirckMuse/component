<template>
  upload
</template>

<script lang="ts" setup>
import type { UploadProps } from "./typing"

defineOptions({
  name: "SUpload"
});

withDefaults(defineProps<UploadProps>(), {})
</script> 
