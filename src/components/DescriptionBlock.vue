<script setup>
    const props = defineProps({
        displayText: String,
    });
</script>
<template>
    <div
        class="rounded-2xl bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 p-5 flex items-center justify-center md:p-6 mb-3"
      >
        {{ $t(props.displayText) }}
    </div>
</template>