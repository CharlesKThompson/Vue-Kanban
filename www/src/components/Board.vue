<template>
    <div class="board">

    </div>
</template>

<script>
    // import List from './List.vue'
    export default {
        name: 'Board',
        data() {
            return {
                boardId: this.$route.params.boardId,
            }
        },
        // props: ['board'],
        mounted() {
            this.$store.dispatch('getBoards')
        },
        computed: {
            lists() {
                return this.$store.state.lists[this.board._id] || []
            }
            // ,
            // activeBoard() {
            //     return this.$store.state.activeBoard
            // }
        },
        methods: {
            addList(list) {
                this.$store.dispatch('addList', list)
            },
            deleteBoard(board) {
                this.$store.dispatch('deleteBoard', board)
            }
        },
        components: {
            // List
        }
    }
</script>

<style>
</style>