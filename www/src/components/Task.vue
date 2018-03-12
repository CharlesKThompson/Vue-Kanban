<template>
    <div class="task">
        <div class="containter-fluid">
            <div class="row">

                {{taskProp.title}}
                <form class="form-inline mtop" @submit.prevent="addComment">
                    <input type="text" class="form-control" v-model="comment.comment" name="comment" placeholder="Add a New Comment">
                    <!-- ADD COMMENT BUTTON -->
                    <button class="btn btn-primary mleft">
                        Add New Comment
                    </button>
                    <!-- RESET BUTTON -->
                    <button class="btn btn-warning mleft" type="reset">Reset</button>
                </form>
                <div class="col" v-for="comment in comments">
                    <Comment :commentProp="comment"></Comment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: ['taskProp'],
        mounted() {
            this.$store.dispatch('getComments', {
                _id: this.$route.params.boardId
            })
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
                this.comment.taskid = this.taskProp._id
                this.comment.listid = this.taskProp._id.listProp._id
                this.comment.boardId = this.taskProp._id.listProp.boardId
                this.$store.dispatch('addComment', this.comment)
            },
            removeComment() {
                this.$store.dispatch('removeComment', comment)
            },
            getComments() {
                this.$store.dispatch('getComments', {
                    boardId: this.$route.params.boardId,
                    taskid: this.listProp._id
                })
            },
        },

        computed: {

            comments() {
                return this.$store.state.comments[this.taskProp._id]
            },

            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>
</style>