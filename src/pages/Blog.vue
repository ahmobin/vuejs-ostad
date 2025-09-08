<script setup>
import { blogs } from '../db/blogs';
</script>

<template>
    <h1>Blog Page</h1>

    <article v-for="blog in blogs" :key="blog.id">
        <h4>{{ blog.title }}</h4>
        <p>{{ blog.body }}</p>
        <RouterLink :to="{ name:'single-blog', params:{ id:blog.id } }">Show More</RouterLink>
    </article>
</template>

<style scoped></style>