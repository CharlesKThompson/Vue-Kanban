<template>
    <div class="list">
        <div class="container-fluid">
            <div class="row">

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
            </div>
            <!-- TASKS DRAW HERE -->
            <div class="row">
                <div class="col" v-for="task in tasks">
                    <task :taskProp='task'></task>
                </div>
                <button class="btn btn-success" @click="getTasks(task)">Get Tasks</button>
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
                this.$store.dispatch('getLists', {
                    _id: this.$route.params.boardId
                })
                ,
            this.$store.dispatch('getTasks', {
                boardId: this.$route.params.boardId,
                listId: this.listProp._id
            })
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.listProp._id]
            }
        },
        components: {
            Task
        },
        methods: {
            addTask(task) {
                this.task.boardId = this.$route.params.boardId
                this.task.listId = this.listProp._id
                console.log(this.task)
                this.$store.dispatch('addTask', this.task);
            },

            removeList(list) {
                this.$store.dispatch('removeList', list)
            },

            getTasks() {

                this.$store.dispatch('getTasks', {
                    boardId: this.$route.params.boardId,
                    listId: this.listProp._id
                })
            }
        }
    }
</script>

<style>
</style>