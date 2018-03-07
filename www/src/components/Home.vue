<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">

                <!-- CREATE A BOARD FORM -->
                <div class="col-sm-12">
                    <form>
                        <input type="text" name="caption" v-model="board.title" placeholder="Board Title">
                        <button @click.prevent="addBoard" class="btn btn-lg btn-primary">
                            <b>Add New Board</b>
                        </button>
                    </form>
                </div>

                <!-- LOGOUT BUTTON -->
                <div>
                    <button type="button" class="btn btn-danger" @click='logout'>Logout</button>
                </div>

                <!-- BOARDS WILL DRAW HERE EVENTUALLY -->
                <div class="col-sm-3" v-for="board in boards">
                    {{board.title}}
                </div> 
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
            return {
                board: {},
            }
        },
        components: {
            Navbar,
            Board
        },
        methods: {
            getBoards() {
                this.$store.dispatch('getBoards')
            },
            addBoard(board) {
                debugger
                this.$store.dispatch('addBoard', this.board);
            },
            deleteBoard(board) {
                this.$store.dispatch('deleteBoard', board)
            },
            // updateBoard(board) {
            //     this.$store.dipatch('updateBoard', board)
            // },
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            boards() {
                return this.$store.state.boards
            },
            user() {
                return this.$store.state.user
            }
            // ,
            // activeBoard() {
            //     return this.$store.state.activeBoard
            // }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        background-color: aliceblue;
    }
</style>