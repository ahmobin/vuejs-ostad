<script setup>
    // catching/receiving props which is passed from parent component
    
    // simple way to receive props
    // defineProps(["products"])

    // validated way to receive props
    // defineProps({
    //     products: Array,
    // })
    // or with default value
    defineProps({
        type: Array,
        default: []
    })
</script>

<template>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}</li>
    </ul>
</template>

<style scoped></style>