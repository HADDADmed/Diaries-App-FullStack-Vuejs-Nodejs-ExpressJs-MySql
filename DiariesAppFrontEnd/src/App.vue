<template>
   
    <div v-if="isAuthenticated">
     <NavBarAuth></NavBarAuth> 
      <HomePage></HomePage> 
    </div>
    <div v-else>
    <NavBar></NavBar> 
      <LoginPage></LoginPage>
    </div>
  </template>
  
  <script setup>
  import NavBar from './components/NavBar/NavBar.component.vue';
  import NavBarAuth from './components/NavBar/NavBarAuth.component.vue';
  import LoginPage from './components/LoginPage/LoginPage.component.vue';
  import HomePage from './components/HomePage/HomePage.component.vue';
  import { ref, watchEffect } from 'vue';
  
  // Create a reactive ref for isAuthenticated
  const isAuthenticated = ref(false);
   const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
  // Watch for changes in localStorage and update isAuthenticated accordingly
  watchEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if(storedToken){ 
        if(storedUser.roleuser == 'U'){rolUser = 'Normal User'}
        else if(storedUser.roleuser == 'R'){rolUser = 'Responsible'}
        else if(storedUser.roleuser == 'A'){rolUser = 'Admin'}
    }
    isAuthenticated.value = !!storedToken;
  });
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  