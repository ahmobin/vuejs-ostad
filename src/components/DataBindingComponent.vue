<script setup>
    import { userInfo } from '../data/data';
import ConditionalComponent from './ConditionalComponent.vue';
</script>

<template>
    <h3>User Information</h3>
    <div>
        <!-- user data -->
        <p>Name: {{ userInfo.name }}</p>
        <p>Age: {{ userInfo.age }}</p>
        <p>Country: {{ userInfo.country }}</p>

        <!-- html binding : data with html tag -->
        <p>Profession: <span v-html="userInfo.profession"></span></p>
        <!-- to set a value inside html attribute like src, need attribute binding -->
        <!-- syntax = :attrName="variableName" -->
        <img :src="userInfo.imageUrl" alt="">
        <p><a :href="userInfo.profileUrl">Visit Profile</a></p>

        <ConditionalComponent/>
    </div>
</template>

<style scoped></style>