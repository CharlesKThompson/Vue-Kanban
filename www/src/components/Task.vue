<template>
    <div class="task">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 task-title">
                    <div class="row">
                        <div class="col-sm-12">
                            Task: {{taskProp.title}}
                        </div>
                    </div>
                </div>
                <form class="form-control mtop" @submit.prevent="addComment">
                    <div class="row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" v-model="comment.comment" name="comment" placeholder="Add a New Comment">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <!-- ADD COMMENT BUTTON -->
                            <button class="btn btn-primary btn-sm">
                                Add New Comment
                            </button>
                            <!-- RESET BUTTON -->
                            <button class="btn btn-warning btn-sm" type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- COMMENTS DRAW HERE -->
            <div class="row" v-for="comment in comments">
                <div class="col-sm-12">
                    <comment :commentProp='comment'></comment>
                  
                    <!-- DELETE COMMENT ICON-BUTTON -->
                    <button class="comment-btn trash-comment" @click.prevent='removeComment(comment)'>
                        <img class="trash-comment" src="../assets/trash-small.png">
                        <p>Delete this comment</p>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from './Comment.vue'
    export default {
        name: 'Task',
        props: ['taskProp'],
        mounted() {
            this.$store.dispatch('getComments', {
                boardId: this.$route.params.boardId,
                listId: this.$route.params.listId,
                taskId: this.taskProp._id
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
            removeTask(task) {
                this.$store.dispatch('removeTask', task)
            },
            addComment(comment) {
                this.comment.boardId = this.taskProp.boardId
                this.comment.listId = this.taskProp.listId
                this.comment.taskId = this.taskProp._id
                console.log(this.comment)
                this.$store.dispatch('addComment', this.comment)
            },
            removeComment(comment) {
                this.$store.dispatch('removeComment', comment)
            },
            getComments() {
                this.$store.dispatch('getComments', {
                    boardId: this.$route.params.boardId,
                    listId: this.$route.params.listId,
                    taskId: this.taskProp._id
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

<style scoped>
    .task-title {
        font-weight: 400;
        padding: .5rem;
        text-align: start
    }

    .task {
        background-color: #48df96;
    }

    .comment {
        background-color: #b8ebd2;
    }

    .trash-task {
        color: black;
        background: none;
        border: none;
        font-size: .6rem;
    }

    .trash-comment {
        color: black;
        background: none;
        border: none;
        font-size: .6rem;
        text-align: center;
    }
</style>