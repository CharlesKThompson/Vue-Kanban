<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <!-- CREATE A BOARD FORM -->
                <div class="col-sm-6">
                    <form class="form-inline">
                        <input type="text" class="form-control" v-model.lazy="board.title" name="title" placeholder="Add a New Board">
                        <button @click.prevent="addBoard" class="btn btn-primary">
                            <b>Add New Board</b>
                        </button>
                        <!-- LOGOUT BUTTON -->
                        <button type="button" class="btn btn-danger" @click='logout'>Logout</button>
                    </form>
                </div>
            </div>
            <!-- BOARDS DRAW HERE -->
            <div class="row board-home">
                <div class="col-sm-3 board-box-home" v-for="board in boards">
                    {{board.title}}
                    <!-- DELETE BOARD BUTTON -->
                    <button class="list-btn trash-board" @click.prevent='removeBoard(board)'>
                        <img class="trash-board" src="../assets/trash-small.png">
                    </button>
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
                this.$store.dispatch('addBoard', this.board);
            },
            removeBoard(board) {
                this.$store.dispatch('removeBoard', board)
            },
            updateBoard(board) {
                this.$store.dipatch('updateBoard', board)
            },
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

    .board-box-home {
        background-color: white;
        color: black;
        padding: 1rem;
        margin: 1rem;
        outline: black;
        outline-style: solid;
        outline-width: 1px;

    }

    .board-home {
        display: flex;
        flex-flow: column;
        height: 100%;
        min-height: 500px;
    }

    .trash-board {
        color: black;
        background: none;
        border: none;
    }
</style>