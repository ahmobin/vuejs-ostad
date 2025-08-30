<script setup>
    import { products } from '../data/products';
</script>

<template>
    <h4>Product List</h4>
    <ul>
        <!-- :key is used in v-for (looping) to identify each item is unique and this :key value should be unique value from the list of item -->
        <li v-for="product in products" :key="product.id">{{ product.name }} ({{ product.price }})</li>
    </ul>
</template>

<style scoped></style>