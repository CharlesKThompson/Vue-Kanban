<template>
    <div class="comment">
            comment:
            <br>
        {{commentProp.comment}}
        <br>




    </div>
</template>


<script>
    export default {
        name: 'Comment',
        props: ['commentProp'],
        data: function () {
            return {
                // comment: {}
            }
        },
        methods: {
            removeComment(comment) {
                this.$store.dispatch('removeComment', comment)
            }
        }

    }

</script>


<style scoped>
    .comment {
        margin-top: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-style: italic;
        font-size: .9rem;
    }

    .trash-comment {
        color: black;
        background: none;
        border: none;
        font-size: .6rem;
        text-align: center;
    }
</style>