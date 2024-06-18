<script setup>
    const props = defineProps({
        displayText: String,
    });
</script>
<template>
    <div
        class="rounded-2xl font-semibold bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 text-lg md:text-2xl p-5 flex items-center justify-center md:p-6 mb-3"
      >
        {{ props.displayText }}
    </div>
</template>