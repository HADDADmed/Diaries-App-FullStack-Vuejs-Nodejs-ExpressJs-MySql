<template >

     <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto to">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row">
                        <img src="./pngwing.com.png" class="logo">
                    </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                        <img src="https://i.imgur.com/uNGdWHi.png" class="image">
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                                <form @submit.prevent="login">
                                            <div class="row px-3">
                                            <label class="mb-1"><h6 class="mb-0 text-sm">Email Address</h6></label>
                                            <input class="mb-4"  v-model="mail" type="text" name="mail" placeholder="Enter a valid email address">
                                        </div>
                                        <div class="row px-3">
                                            <label class="mb-1"><h6 class="mb-0 text-sm">Password</h6></label>
                                            <input type="password" v-model="password" name="password" placeholder="Enter password">
                                        </div>
                                    <p v-if="errorMessage">{{ errorMessage }}</p>

                                <div class="row px-3 mb-4">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> 
                                        <label for="chk1" class="custom-control-label text-sm">Remember me</label>
                                    </div>
                                    <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div class="row mb-3 px-3">
                                    <button  type="submit" class="btn btn-blue text-center">Login</button>

                                </div>
                                        </form>
                                    <button @click="licalStoragetest">click to console.log local storage </button>
                                    <button @click="licalStoragedeletetest">click to delete local storage </button>
                                        
                    <div c8ass="row mb-4 px-3">
                        <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script >
    import router from "router"    
    // import localStorage from 'localStorage'; // You may need to install 'localStorage' package
    import { RouterLink, RouterView } from 'vue-router'

 import axios from 'axios'
      export default{
                    data() {
                    return {
                        mail: '',
                        password: '',
                        errorMessage: ''
                    }   
                    },
                    watch: {
                    },
                    methods:{
                        licalStoragedeletetest(){
                            // Logging out
                                    localStorage.removeItem('user');
                                    localStorage.removeItem('token');
                                    console.log('loged out successfuly !')
                        },
                        licalStoragetest(){
                              // Retrieve user information and token from localStorage
                    const storedUser = JSON.parse(localStorage.getItem('user'));
                    const storedToken = localStorage.getItem('token');  
                    console.log('user')
                    console.log(storedUser)
                    console.log('token')
                    console.log(storedToken)
},
                    async login() {

                        console.log('test1')
                        console.log(this.mail)
                        console.log(this.password)
                    try {
                        console.log('test2')
                        const response = await axios.post('http://localhost:8000/login', {
                        mail: this.mail,
                        password: this.password
                        })
                        console.log('logged in !')
                        console.log(this.mail)
                        console.log(this.password)
                        console.log(response)
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        localStorage.setItem('token', response.data.token);
                        window.location.href = '/home'; // Change '/home' to the actual URL of your home page
                        if (response.status === 200) {
                        this.errorMessage = '';
                        // Redirect to a new page or perform some action upon successful login
                        }
                    } catch (error) {
                        if (error.response) {
                        this.errorMessage = error.response.data.error;
                        } else {
                        this.errorMessage = 'An error occurred';
                        }
                     }
             }
  }
            
                    }
                 
</script>


<style  scoped>
.to{
    position: relative;
    top: 90px;
}
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #B0BEC5;
    background-repeat: no-repeat;
}

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px;
}

.card2 {
    margin: 0px 40px;
}

.logo {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    margin-left: 35px;
}

.image {
    width: 360px;
    height: 280px;
}

.border-line {
    border-right: 1px solid #EEEEEE;
}

.facebook {
    background-color: #3b5998;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.twitter {
    background-color: #1DA1F2;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.linkedin {
    background-color: #2867B2;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.line {
    height: 1px;
    width: 45%;
    background-color: #E0E0E0;
    margin-top: 10px;
}

.or {
    width: 10%;
    font-weight: bold;
}

.text-sm {
    font-size: 14px !important;
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input, textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px;
}

input:focus, textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0;
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0;
}

a {
    color: inherit;
    cursor: pointer;
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px;
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer;
}

.bg-dark {
    color: #fff;
    background-color: #1A237E;
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px;
    }

    .image {
        width: 300px;
        height: 220px;
    }

    .border-line {
        border-right: none;
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px;
    }
}
</style>