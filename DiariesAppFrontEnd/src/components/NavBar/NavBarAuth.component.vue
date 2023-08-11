<template>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="">Secret Diaries </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/home" >Home</a>
                    </li>
                    <li class="nav-item">
                        <a style="cursor: pointer;" class="nav-link" @click="logOut()">logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
<script setup >
       const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');  
    let rolUser = 'u';
    if(storedToken){ 
        if(storedUser.roleuser == 'U'){rolUser = 'Normal User'}
        else if(storedUser.roleuser == 'R'){rolUser = 'Responsible'}
        else if(storedUser.roleuser == 'A'){rolUser = 'Admin'}
    }
    
function logOut (){
    // Logging out
                                    localStorage.removeItem('user');
                                    localStorage.removeItem('token');
                                    console.log(storedUser)
                                    console.log(storedToken)
                                    window.location.href = '/'; // Change '/home' to the actual URL of your home page

}
</script>
<style scoped></style>