<script setup>
    import { userInfo } from '../data/data';
</script>

<template>
    <p v-if="userInfo.role == 'admin'">Showing as an ADMIN</p>
    <p v-else-if="userInfo.role == 'customer'">Showing as a CUSTOMER</p>
    <p v-else>Showing as a GUEST</p>

<!-- v-show use display none or block of the element -->
    <p v-show="userInfo.isActiveNow">ACTIVE</p>
</template>

<style scoped></style>