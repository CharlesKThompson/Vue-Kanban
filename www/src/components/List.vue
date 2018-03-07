<template>
    <div class="list">

    </div>
</template>

<script>
    // import List from './List.vue'
    export default {
        name: 'List',
        data() {
            return {

            }
        },
        // props: ['list'],
        mounted() {
            // this.$store.dispatch('getLists')
            // this.$store.dispatch('getTasks') 
        },
        computed: {
            lists() {
                return this.$store.state.lists[this.list._id] || []
            }
        },
        methods: {
            addTask() {
                let task = {
                    body: this.task,
                    listId: this.list._id,
                    boardId: this.list.boardId
                }
                console.log(task)
                this.$store.dispatch('addTask', task);
            },

            removeList(list) {
                this.$store.dispatch('removeList', list)
            }
        },
        components: {
            // List
        }
    }
</script>

<style>
</style>