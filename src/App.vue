<script setup>
import DataBindingComponent from './components/DataBindingComponent.vue';
import HelloComponent from './components/HelloComponent.vue';
import ListRenderComponent from './components/ListRenderComponent.vue';
import PropsFParentComponent from './components/PropsFParentComponent.vue';
import ReactiveComponent from './components/ReactiveComponent.vue';
import SlotParentComponent from './components/SlotParentComponent.vue'

</script>

<template>
  <HelloComponent/>
  <ReactiveComponent/>
  <DataBindingComponent/>
  <ListRenderComponent/>

  <PropsFParentComponent/>

  <SlotParentComponent/>
</template>

<style scoped>

</style>
