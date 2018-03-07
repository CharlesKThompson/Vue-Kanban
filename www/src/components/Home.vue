<template>
  <div class="home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3" v-for = "board in boards">

            </div>
            <button type="button" class="btn btn-danger" @click='logout'>Logout</button>
        </div>
    </div>
  </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            Navbar,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        background-color: aliceblue;
    }
</style>