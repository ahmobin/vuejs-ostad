<script setup>
import SlotChildComponent from './SlotChildComponent.vue';

</script>

<template>
    <SlotChildComponent>
        <h1>Hello World</h1>
    </SlotChildComponent>

<!-- named slot -->
    <!-- <SlotChildComponent>
        <template v-slot:header>Header Content</template>
        <template v-slot:footer>Footer Content</template>
    </SlotChildComponent> -->
</template>

<style scoped></style>