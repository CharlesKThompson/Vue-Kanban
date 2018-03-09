<template>
    <div class="task">

    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('getComments')
            this.$store.dispatch('getLists')
            this.$store.dispatch('getTasks')
        },
        data() {
            return {
                comment: {
                    comment: ""
                }
            }
        },

        components: {
            Comment
        },

        methods: {
            addComment(comment) {
                this.comment.boardId = this.board._id
                this.$store.dispatch('addComment', this.list)
            },
            getComments() {
                this.$store.dispatch('getComments')
            },
        },

        computed: {

            tasks() {
                return this.$store.state.tasks
            },
            lists() {
                return this.$store.state.lists
            },
            board() {
                return this.$store.state.activeBoard
            },
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>

</style>