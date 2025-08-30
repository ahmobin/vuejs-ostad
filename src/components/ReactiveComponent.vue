<script setup>
    import { reactive, ref } from 'vue'

    //changing values on event (reactivity), need to use ref.
    let text = ref('Hello HTML') //initial value for single value

    function changeText(){
        // to update the value of ref variable for single value
        text.value = 'Hello VUE'
    }


    // reactive on object
    const user = reactive({
        name: 'Mobin',
        stage: 'Learner',
        lang: 'JS'
    })

    function changeUserInfo(){
        user.stage = 'Developer'
        user.lang = 'Vue'
    }

</script>

<template>
    <h1>{{ text }}</h1>
    <!-- onclick event by -> v-on:click, shortcut @click -->
    <button v-on:click="changeText">Change Text</button>


    <p>{{ user.name }} - {{ user.stage }} - {{ user.lang }}</p>
    <button @click="changeUserInfo">Change Info</button>
</template>

<style scoped></style>