<template>
    <div class="login">
        <navbar></navbar>
        <div class="row login-credentials">
            <div class="col-sm-12 login-form">
                <form @submit.prevent="login">
                    <input v-model="loginForm.email" type=“text” name=“email” placeholder=email id=“”>
                    <input v-model="loginForm.password" type=“text” name=“password” placeholder=password id=“”>
                    <div class="col-sm-12 login-button">
                        <button type="submit" class="btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success " data-toggle="modal" data-target="#registerModal">
            Register
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
                            <input v-model="registerForm.profilePic" type=“text” name=“profilePic” placeholder=ImageURL id=“”>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" @submit="createUser" class="btn btn-success">Register</button>
                            </div>
                        </form>
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
            return {
                loginForm: {
                    email: '',
                    password: ''
                },

                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    profilePic: ''
                }
            }
        },
        components: {
            Navbar,
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.loginForm)
            },
            createUser() {
                this.$store.dispatch('createUser', this.registerForm)
            },
            logout() {
                this.$store.dispatch('logout', this.user)
            }
        }
    }
</script>

<style>

</style>