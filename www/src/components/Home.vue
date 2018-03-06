<template>
  <div class="home">
    
  </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Welcome To The Jungle!'
            }
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