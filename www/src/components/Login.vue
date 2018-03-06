<template>
<div class="login">
<navbar></navbar>

<div class="login-form"> 
    <form @submit="login">
        <input v-model="loginForm.email" type=“text” name=“email” placeholder=bob@bob.com id=“”>
        <input v-model="loginForm.password" type=“text” name=“password” placeholder=password id=“”>
        <span>
            <button type="submit" @submit="login" class="btn btn-success">Login</button>
        </span>
    </form>
 </div>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
        Launch demo modal
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="registerModalLabel">Register</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                    <form @submit="createUser">
                            <input v-model="registerForm.name" type=“text” name=“name” placeholder=name id=“”>
                            <input v-model="registerForm.email" type=“text” name=“email” placeholder=bob@bob.com id=“”>
                            <input v-model="registerForm.password" type=“text” name=“password” placeholder=password id=“”>
                            <input v-model="registerForm.photoUrl" type=“text” name=“photoUrl” placeholder=ImageURL id=“”>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" @submit="createUser" class="btn btn-success">Register</button>
                            </div>
                        </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


</div>
</template>

<script>
    import Navbar from './Navbar.vue'
    export default {
        name: 'Login',
        data() {
            return {}
        },
        components: {
            Navbar,
        },
    }
</script>

<style>

</style>