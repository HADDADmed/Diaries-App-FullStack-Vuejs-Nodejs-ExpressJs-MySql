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
                    <li v-for="navBarLink in navBarLinks" class="nav-item">
                        <a class="nav-link" v-bind:href="navBarLink.url" >{{navBarLink.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
       export default{
                    data() {
                    return {
                        navBarLinks: [
                        { title: 'Home', url:'varingdowider.com' },
                        { title: 'logIn', url: '/home ' },
                        ]
                    }
                    },
                    watch: {
                    },
                    methods:{
                        changeNavBarColorOnHover (){
                                ///////
                        }
                    }
                }   
</script>
<style scoped></style>