<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3" v-for="board in boards">

                </div>
                <button type="button" class="btn btn-danger" @click='logout'>Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Board from './Board.vue'
    export default {
        name: 'Home',
        mounted() {
            this.$store.dispatch('getBoards')
        },
        data() {
            return {}
        },
        components: {
            Navbar,
            board
        },
        methods: {
            getBoards() {
                this.$store.dispatch('getBoards')
            },
            addBoard(board) {
                this.$store.dispatch('addBoard', board);
            },
            removeBoard(board) {
                this.$store.dispatch('removeBoard', board)
            },
            updateBoard(board) {
                this.$store.dipatch('updateBoard', board)
            }
        },
        computed: {
            boards() {
                return this.$store.state.boards
            },
            user() {
                return this.$store.state.user
            },
            activeBoard() {
                return this.$store.state.activeBoard
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        background-color: aliceblue;
    }
</style>