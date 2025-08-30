<script setup>
import ComputedPropertiesComponent from './components/ComputedPropertiesComponent.vue';
import DataBindingComponent from './components/DataBindingComponent.vue';
import HelloComponent from './components/HelloComponent.vue';
import ListRenderComponent from './components/ListRenderComponent.vue';
import PropsFParentComponent from './components/PropsFParentComponent.vue';
import ReactiveComponent from './components/ReactiveComponent.vue';
import SlotParentComponent from './components/SlotParentComponent.vue'
import TwoWayBindingComponent from './components/TwoWayBindingComponent.vue';

</script>

<template>
  <HelloComponent/>
  <ReactiveComponent/>
  <DataBindingComponent/>
  <ListRenderComponent/>

  <PropsFParentComponent/>

  <SlotParentComponent/>

  <TwoWayBindingComponent/>

  <ComputedPropertiesComponent/>
</template>

<style scoped>

</style>
