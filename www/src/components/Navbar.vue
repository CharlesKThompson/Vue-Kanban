<template>
<div class="navbar">    
    <div class="container-fluid">
        <img src="../assets/listify-logo-sm.png" alt="Listify"> {{user.name}}
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

</style>