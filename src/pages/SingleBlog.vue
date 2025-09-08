<script setup>
import { useRoute } from 'vue-router';
import { blogs } from '../db/blogs';

// used to fetch url data's like params, url info and others
const route = useRoute();
const blogId = parseInt(route.params.id)

const blog = blogs.find((post) => post.id == blogId)
</script>

<template>
    <h1>Single Blog Page</h1>

    <article>
        <!-- fetch data from url query params -->
        <!-- <h4>Blog {{ $route.params.id }}</h4> -->
         
        <!-- js way -->
        <h4>{{ blog.title }}</h4>
        <p>{{ blog.body }}</p>
    </article>
</template>

<style scoped></style>