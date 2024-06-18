<script setup>
const props = defineProps({
  logoName: String,
});
</script>
<template>
  <div class="p-5 flex items-center justify-center md:p-6 mb-3">
    <img
      :src="'logos/' + props.logoName + '.svg'"
      class="drop-shadow-lg h-16 w-16 md:h-48 transition-all md:w-48"
    />
  </div>
</template>
