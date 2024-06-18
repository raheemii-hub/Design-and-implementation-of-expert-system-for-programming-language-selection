<script setup>
    import { computed } from 'vue'
    import ButtonAnswer from '@/components/ButtonAnswer.vue';
    import Heading from '@/components/Heading.vue';
    import Logo from '@/components/Logo.vue';
    import data from "@/assets/data.yml";
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const result = computed(() => {
        return route.params.key;
    })
</script>
<template>
    <Logo :logoName="result"/>
    <Heading :displayText="data.languages.find(language => language.key === result).name"/>
    <div class="min-h-full flex flex-col justify-center">
        <router-link to="/" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Home Page"/>
        </router-link>
    </div>
</template>
