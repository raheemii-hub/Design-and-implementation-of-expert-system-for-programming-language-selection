<script setup>
    import Heading from '@/components/Heading.vue';
    import ButtonAnswer from '@/components/ButtonAnswer.vue';
</script>
<template>
    <div class="min-h-full flex flex-col justify-center text-center">
        <Heading displayText="Nie znaleziono strony :("/>
        <router-link to="/" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Strona główna"/>
        </router-link>
    </div>
</template>
