<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <ul>
        <RouterLink to="/"><li>Home</li></RouterLink>
        <RouterLink to="/about"><li>About</li></RouterLink>
        <RouterLink to="/blog"><li>Blog</li></RouterLink>
        <RouterLink to="/contact"><li>Contact</li></RouterLink>
    </ul>
</template>

<style scoped></style>