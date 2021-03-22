<template>
  <v-app>
    <v-app-bar
     app
     color="dark"
     dark
     
    
    >
      <v-btn flat to="/">Messages</v-btn>
    
      <v-btn flat to="/NewMessage">New Message</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Login</v-btn>

    </v-app-bar>

    <v-content>

      <br>
      
      <router-view />
      
    </v-content>  
      
  </v-app>
</template>

<script>

import Messages from './components/Messages.vue'
import NewMessage from './components/NewMessage.vue'
export default {
  name: 'App',
  components: {
    //Messages,
    //NewMessage
    
  },

};
</script>
