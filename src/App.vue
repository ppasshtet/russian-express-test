<template>
    <div>
        <Header></Header>
        <Home></Home>
    </div>
    <ModalsContainer></ModalsContainer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Home from './views/Home.vue';
import { ModalsContainer } from 'vue-final-modal'
</script>