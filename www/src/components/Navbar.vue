<template>
<div class="navbar">    
    <div class="container-fluid listify-nav">
        <a href="./boards/"><img src="../assets/listify-logo-sm.png" alt="Listify"></a>
    </div>
</div>
</template>

<script>

    export default {
        name: '',
        mounted() {

        },
        data() {
            return {
                user: {},
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
</style>