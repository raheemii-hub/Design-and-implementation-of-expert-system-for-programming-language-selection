<script setup>
    const emit = defineEmits(["click"]);
    const props = defineProps({
        displayText: String,
    });
</script>
<template>
    <button
        @click="$emit('click')"
        class="inline-block rounded-2xl p-4 md:text-2xl md:p-6 bg-gray-100 text-gray-700 hover:scale-110 hover:z-50 backdrop-filter backdrop-blur-lg bg-opacity-50 leading-tight shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
    >
        {{ props.displayText }}
    </button>
</template>
