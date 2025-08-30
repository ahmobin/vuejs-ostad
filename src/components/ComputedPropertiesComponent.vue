<script setup>
import { computed } from 'vue'


    const noramlFuncCalled = () => {
        console.log('normal func called')
        return 'Hello Normal Func'
    }

    // computed properties will called if the value is changed, otherwise it will never be called
    const computedPropertyCalled = computed( () => {
        console.log('computed func called')
        return 'Hello Computed Func'
    })
</script>

<template>
    <!-- Normal function called -->
     <h4>Normal Function Called</h4>
     <h5>{{ noramlFuncCalled() }}</h5>
     <h5>{{ noramlFuncCalled() }}</h5>
     <h5>{{ noramlFuncCalled() }}</h5>
     <h5>{{ noramlFuncCalled() }}</h5>
     <h5>{{ noramlFuncCalled() }}</h5>

     <hr>
    <h4>Computed Property Function Called</h4>
    <!-- No need to use () after func name in computed property -->
     <h5>{{ computedPropertyCalled }}</h5>
     <h5>{{ computedPropertyCalled }}</h5>
     <h5>{{ computedPropertyCalled }}</h5>
     <h5>{{ computedPropertyCalled }}</h5>
     <h5>{{ computedPropertyCalled }}</h5>

</template>

<style scoped></style>