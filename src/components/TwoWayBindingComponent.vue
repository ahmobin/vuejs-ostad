<script setup>
import { reactive, ref } from 'vue';

    const username = ref('');

    let userContact = reactive({
        email: '',
        phone: ''
    });

    function userContactInfo(){
        let email = userContact.email
        let phone = userContact.phone

        console.log(email)
        console.log(phone)
    }
</script>

<template>
    <!-- two way binding with v-model -->
    <input type="text" v-model="username">
    <h5>Your username: {{ username }}</h5>

    <!-- two way binding form data submit -->
     <form @submit.prevent="userContactInfo">
        <input type="email" v-model="userContact.email" placeholder="your email address"> <br>
        <input type="text" v-model="userContact.phone" placeholder="your phone number"> <br>
        <button type="submit">Submit</button>
     </form>
    
</template>

<style scoped></style>