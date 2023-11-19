<script setup>
import { ref } from 'vue'

const login = ref('');
const password = ref('');
const isLoggedIn = ref(false);

const handleLogging = () => {
  if (login.value === 'admin' && password.value === '123') {
    isLoggedIn.value = !isLoggedIn.value;
  }
}
</script>

<template>
  <h2>Who's there?</h2>
  {{isLoggedIn}}
  <form>
    <label for="login">Login:</label>
    <input type="login" name="label" id="login" required v-model="login" placeholder="what's ur name" />
    <label id="pass" for="password">Password:</label>
    <input type="password" name="password" id="password" required v-model="password" placeholder="speak, friend, and enter"/>
    <input type="submit" @submit="handleLogging" value="Enter" />

  </form>

</template>

<style>
h2 {text-align: center; }
form { display: flex; flex-direction: column; gap: 20px; justify-content: center; text-align: center;
}
</style>