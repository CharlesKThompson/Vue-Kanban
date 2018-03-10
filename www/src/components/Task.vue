<template>
    <div class="task">
        {{taskProp.title}}
         <form class="form-inline mtop" @submit.prevent="addComment">
            <input type="text" class="form-control" v-model="comment.comment" name="comment" placeholder="Add a New Comment">
            <!-- ADD COMMENT BUTTON -->
            <button class="btn btn-primary mleft">
                    Add New Comment
            </button>
            <!-- RESET BUTTON -->
            <!-- <button class="btn btn-warning mleft" type="reset">Reset</button> -->
     </form> 
        <div class="col" v-for="comment in comments">
                <Comment :commentProp="comment"></Comment>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: ['taskProp'],
        mounted() {
             this.$store.dispatch('getComments')
            

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
                this.$store.dispatch('getComments')
            },
        },

        computed: {

            comments() {
                return this.$store.state.comments[this.commentProp._id]
            },

            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>

</style>