<template>
    <div class="task">
        {{taskProp.title}}
        <!-- <form class="form-inline mtop" @submit.prevent="addTask">
            <input type="text" class="form-control" v-model="task.title" name="title" placeholder="Add a New Task"> -->
            <!-- ADD LIST BUTTON -->
            <!-- <button class="btn btn-primary mleft">
                Add New Comment
            </button> -->
            <!-- RESET BUTTON -->
            <!-- <button class="btn btn-warning mleft" type="reset">Reset</button>
        </form> -->
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: ['taskProp'],
        mounted() {
            // this.$store.dispatch('getComments')
            

        },
        data() {
            return {
                comment: {
                    comment: ""
                }
            }
        },

        components: {
            // Comment
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

            // tasks() {
            //     return this.$store.state.tasks
            // },
            
            // lists() {
            //     return this.$store.state.lists
            // },
            // board() {
            //     return this.$store.state.activeBoard
            // },
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>

</style>