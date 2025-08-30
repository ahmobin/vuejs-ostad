<script setup>
    let startDate = '2025-08-28';
    const date = new Date();
    let currentDate = date.toDateString()

    const learner = {
        name: 'Abu Horaira Mobin',
        age: 16
    };
</script>

<template>
    <h1>Learning Vue</h1>
    <!-- printing output -->
    <p>Learner: {{ learner.name }} ({{ learner.age }})</p>
    <p>Date: {{ startDate }}</p>
    <p>Today: {{ currentDate }}</p>
</template>

<style scoped></style>