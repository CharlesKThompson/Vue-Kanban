<template>
    <div class="list">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 list-title">
                    List Title: {{listProp.title}}
                </div>
                <form class="form-control mtop" @submit.prevent="addTask">
                    <div class="row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="add-new-task" v-model="task.title" name="title" placeholder="Add a New Task">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 task-buttons">
                            <!-- ADD TASK BUTTON -->
                            <button class="btn btn-primary btn-sm mleft">
                                Add New Task
                            </button>
                            <!-- RESET BUTTON -->
                            <button class="btn btn-warning btn-sm" type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- TASKS DRAW HERE -->
            <div class="row" v-for="task in tasks">
                <div class="col-sm-12">
                    <task :taskProp='task'></task>
                </div>
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

<style scoped>
    .list-title {
        font-weight: 600;
        padding: .5rem;
        text-align: start
    }

    .mleft {
        margin-left: .5 rem;
    }

    .label-task-input {
        font-size: .8rem;
        text-align: left;

    }
</style>