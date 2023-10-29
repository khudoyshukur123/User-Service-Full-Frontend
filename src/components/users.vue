<template>
  <div class="list row">
    <div class="col-md-6">
      <h1>User List</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="user in users" :key="user.id"   :class="{ active: user == currentUser }" @click="setActiveUser(user)">
          {{ user.id }} {{ user.firstName }}
         
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <div v-if="currentUser">
        <h4>User</h4>
        <div>
          <label><strong>firstName:</strong></label> {{ currentUser.firstName }}
        </div>
        <div>
          <label><strong>lastName:</strong></label> {{ currentUser.lastName }}
        </div>
        <div>
          <label><strong>email:</strong></label> {{ currentUser.email }}
        </div>
        <button @click.stop="deleteUser(currentUser.id)" class="btn btn-danger btn-sm ml-2">Delete</button>

        <router-link :to="'/users/' + currentUser.id" class="btn btn-warning btn-sm ml-2">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';

export default {
  data() {
    return {
      users: [], 
      currentUser: null
    };
  },
  methods: {
    setActiveUser(user) {
      this.currentUser = user;
    },
    retrieveUsers() {
      UserService.getAll()
        .then(response => {
          this.users = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser(id){
      UserService.delete(id)
        .then(response => {
          console.log(response.data);
          this.retrieveUsers();
          this.currentUser=null
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>
