<template>
<div class="navbar nopad">    
    <div class="container-fluid listify-nav">

            <div class="col-sm-6">
                <a href="./boards/"><img src="../assets/listify-logo-sm.png" alt="Listify"></a>
            </div>
            <div class="col-md-6">
                User info here after login
            </div>

    </div>
</div>
</template>

<script>

    export default {
        name: 'Navbar',
        mounted() {

        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>
    .listify-nav {
        background-color: #48a0df;
        color: black;
        padding: 1rem;
    }
    .nopad  {
        padding: 0;
    }

</style>