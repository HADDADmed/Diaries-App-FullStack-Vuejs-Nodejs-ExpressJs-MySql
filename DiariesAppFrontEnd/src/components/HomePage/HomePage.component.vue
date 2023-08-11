

<script setup>
 import axios from 'axios'
 import NavBarAuth from '../NavBar/NavBarAuth.component.vue';

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

import { ref, onMounted } from 'vue';

const userId = storedUser.id;
const diaries = ref([]); // Define the diaries property with an initial empty array

onMounted(async () => {
  try {
    console.log(userId);

    const response = await axios.get(`http://localhost:8000/${userId}`);
    diaries.value = response.data; // Assign the fetched data to the diaries property
    console.log(diaries.value);
  } catch (error) {
    console.error('Error fetching diaries:', error);
  }
});
  function  formatDate(dateTimeString) {
      const date = new Date(dateTimeString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
</script>


<template >
              
               <!-- Example Code -->
                              <div id="viewport">
  <!-- Sidebar -->
  <div id="sidebar">
    <header>
      <a href="#">All Diaries</a>
    </header>
   <div v-for="diary in diaries" >
         <div  id="diariesList">
             <div >{{diary.title}} </div>
             <div  >{{ formatDate(diary.date ) }}</div>
          
          </div>
      </div>
  </div>
  <!-- Content -->
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
             <ul class="nav navbar-nav navbar-right">
                   
              </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <h2>Your Diary Title</h2>
      <div class="input-group input-group-lg">
                       <input type="text" style="  border-color: black; background-color: #BDC3CB;" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
      </div>
      <h2>feel free in your diary</h2>
      <div class="form-group " >
      
          <textarea style="  border-color: black; background-color: #BDC3CB;" class="form-control shadow-lg p-3 mb-5 rounded" id="exampleFormControlTextarea1" rows="20"></textarea>
       </div>
       <div style="display: flex; justify-content: space-around; padding-top: 30px;">
        <div>
          <button type="button" class="btn btn-danger btn-lg btn-block">Cancel Diary</button>
        </div>
        <div>
          <button type="button" class="btn btn-success btn-lg btn-block">Save Diary</button>
        </div>
       </div>
    </div>
  </div>
</div>
    
    <!-- End Example Code -->
           

</template>
<style scoped >

@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500");
#diariesList{

  color: white;
   font: 15px bold; 
   display: flex; 
   justify-content:  space-between;  
   padding-top: 30px;
}
body {
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

/* Toggle Styles */

#viewport {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#content {
  width: 100%;
  position: relative;
  margin-right: 0;
}

/* Sidebar Styles */

#sidebar {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474f;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#sidebar header {
  background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
}

#sidebar header a:hover {
  color: #fff;
}


#sidebar .nav a {
  background: none;
  border-bottom: 1px solid #455a64;
  color: #cfd8dc;
  font-size: 14px;
  padding: 16px 24px;
}

#sidebar .nav a:hover {
  background: none;
  color: #eceff1;
}

#sidebar .nav a i {
  margin-right: 16px;
}

</style>