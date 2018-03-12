<template>
    <div class="comment">
        comment:<br>
        {{commentProp.comment}}<br>
        ---



    </div>
</template>


<script>
    export default {
        name: 'Comment',
        props: ['commentProp'],
        data: function () {
            return {
                
            }
        },


    }

</script>


<style scoped>
    .comment {
        font-style: italic;
        font-size: .9rem;
    }
</style>