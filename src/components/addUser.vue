<template>
    <div class="submit-form">
      <div v-if="!submitted">

        <div class="form-group">
          <div v-if="responseMessage">
           {{ responseMessage }}
         </div>
          <label for="firstName">firstName</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            required
            v-model="user.firstName"
            name="firstName"
          />
        </div>
  
        <div class="form-group">
          <label for="lastName">lastName</label>
          <input
            class="form-control"
            id="lastName"
            required
            v-model="user.lastName"
            name="lastName"
          />
        </div>

        <div class="form-group">
          <label for="email">email</label>
          <input
            class="form-control"
            id="email"
            required
            v-model="user.email"
            name="email"
          />
        </div>

        <div class="form-group">
          <label for="password">password</label>
          <input
            class="form-control"
            id="password"
            required
            v-model="user.password"
            name="password"
          />
        </div>
  
        <button @click="saveUser" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newTutorial">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import UserService from "../service/UserService";
  
  export default {
    data() {
      return {
        user: {
          id: null,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
        submitted: false,
        responseMessage: ""
      };
    },
    methods: {
      async saveUser() {
        var data = {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password
        };
  
       
      try {
        const response = await  UserService.create(data);
        console.log(response)
        if (response.data.success == true) {
          this.responseMessage = 'Form submitted successfully!';
        } else {
          this.responseMessage = 'Something went wrong. Please try again.';
        }
      } catch (error) {
        this.responseMessage = 'An error occurred. Please try again later.';
      }
      },
      
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>

  