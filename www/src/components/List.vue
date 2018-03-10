<template>
    <div class="list">
        {{listProp.title}}
        <form class="form-inline mtop" @submit.prevent="addTask">
            <input type="text" class="form-control" v-model="task.title" name="title" placeholder="Add a New Task">
            <!-- ADD LIST BUTTON -->
            <button class="btn btn-primary mleft">
                Add New Task
            </button>
            <!-- RESET BUTTON -->
            <button class="btn btn-warning mleft" type="reset">Reset</button>
        </form>
        <!-- TASKS DRAW HERE -->
        <div>
            <div class="col" v-for="task in tasks">
                <task :taskProp="task"> </task>
            </div>
        </div>
    </div>
</template>

<script>
    import Task from './Task.vue'
    export default {
        name: 'List',
        props: ['listProp'],
        data() {
            return {
                task: {
                    title: ""
                },
            }
        },
        mounted() {
            // this.$store.dispatch('setActiveBoard', {
            //     _id: this.$route.params.boardId
            // }),
            //     this.$store.dispatch('getLists', {
            //         _id: this.$route.params.boardId
            //     })
            //     ,
            this.$store.dispatch('getTasks', {
                _id: this.$route.params.boardId,
                listId: this.listProp._id
            })
        },
        computed: {
            lists() {
                return this.$store.state.lists[this.list._id] || []
            },
            tasks() {
                return this.$store.state.tasks[this.task._id]
            }
        },
        methods: {
            addTask() {
                this.task.listId = this.listProp._id
                this.task.boardId = this.listProp.boardId
                console.log(this.task)
                this.$store.dispatch('addTask', this.task);
            },

            removeList(list) {
                this.$store.dispatch('removeList', list)
            },

            getTasks() {
                this.$store.dispatch('getTasks')
            }
        },
        components: {
           Task
        }
    }
</script>

<style>
</style>