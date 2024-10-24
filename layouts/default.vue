<template>
  <div>
    <vHeader />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import vHeader from '@/components/navigation/header.vue'
</script>
