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
            // this.$store.dispatch('getLists')
        },
        computed: {
            // lists() {
            //     return this.$store.state.lists[this.board._id] || {}
            // }
            // ,
            activeBoard() {
                return this.$store.state.activeBoard
            }
        },
        methods: {
            addList(list) {
                this.$store.dispatch('addList', list)
            },
            removeBoard(board) {
                this.$store.dispatch('removeBoard', board)
            }
        },
        components: {
            // List
        }
    }
</script>

<style>
</style>