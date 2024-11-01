<template>
  <div class="flex items-center">
    <svg
      v-if="props.isTriangle"
      width="10" height="18px"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      viewBox="0.39 0.5 9.61 18"
      class="translate-x-[1px]"
    >
      <path
        d="M7.70139 1.47955L1.33012 8.11477C0.700954 8.77001 0.38637 9.09762 0.38637 9.5C0.38637 9.90238 0.700954 10.23 1.33012 10.8852L7.70139 17.5204L7.70142 17.5205C7.75551 17.5768 7.78256 17.605 7.80928 17.6314C8.35255 18.1695 9.0808 18.4799 9.84521 18.4991C9.88282 18.5 9.92188 18.5 10 18.5L10 0.5C9.92188 0.5 9.88281 0.5 9.84521 0.500942C9.0808 0.520113 8.35255 0.830456 7.80928 1.36856C7.78258 1.395 7.75555 1.42315 7.70155 1.47938L7.70139 1.47955Z"
        class="fill-gray-primary-100"
      />
    </svg>
    <div
      class="text-caption bg-gray-primary-100 p-1 rounded-[4px]"
      :class="{
        'pl-0 rounded-l-none': props.isTriangle,
      }"
    >
      {{ props.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  isTriangle: {
    type: Boolean,
    default: false
  }
})
</script>
