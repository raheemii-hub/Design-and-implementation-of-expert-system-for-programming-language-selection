<script setup>
    import Button from './Button.vue';
    const emit = defineEmits(["click"]);
    const props = defineProps({
        displayText: String,
    });
</script>
<template>
    <Button
        @click="$emit('click')"
        :displayText="props.displayText"
        class="md:col-span-2 md:last:[&:nth-child(odd)]:col-start-2 md:last:[&:nth-child(odd)]:col-end-4"
    />
</template>