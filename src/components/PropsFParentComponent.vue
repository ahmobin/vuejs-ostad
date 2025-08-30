<script setup>
import { ref } from 'vue';
import { products } from '../data/products';
import PropsFChildComponent from './PropsFChildComponent.vue';

const productData = ref(products)
</script>

<template>
    <h4>Product List</h4>

    <!-- passing data using props -->
    <PropsFChildComponent :products="productData" />
</template>

<style scoped></style>