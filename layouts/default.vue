<template>
  <div>
    <vHeader />
    <div class="container pb-16 sm:px-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import vHeader from '@/components/navigation/header.vue'
</script>
