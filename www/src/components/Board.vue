<template>
    <div class="list">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <!-- CREATE A LIST FORM -->
                <div class="col-sm-6">
                    <form class="form-inline mtop" @submit.prevent="addList">
                        <input type="text" class="form-control" v-model="list.title" name="title" placeholder="Add a New List">
                        <!-- ADD LIST BUTTON -->
                        <button class="btn btn-primary mleft">
                            Add New List
                        </button>
                        <!-- RESET BUTTON -->
                        <button class="btn btn-warning mleft" type="reset">Reset</button>
                    </form>
                </div>
                <div class="col-sm-6 mtop">{{board.title}}</div>
            </div>
            <!-- LISTS DRAW HERE -->
            <div class="row">
                <div class="col-sm-3 list-box-list" v-for="list in lists">
                    <list :listProp='list'> </list>
                    <!-- DELETE LIST ICON-BUTTON -->
                    <button class="list-btn trash-list" @click.prevent='removeList(list)'>
                        <img class="trash-list" src="../assets/trash-small.png">
                    </button>
                </div>
            </div>
            <!-- LOGOUT BUTTON -->
            <div class="row justify-content-end">
                <div class="col-sm-9"></div>
                <div class="col-sm-2">
                    <button type="button" class="btn btn-danger mleft logout mbottom" @click='logout'>Logout</button>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import List from './List.vue'
    export default {
        name: 'Board',
        mounted() {
            this.$store.dispatch('getLists', {
                _id: this.$route.params.boardId
            }),
                this.$store.dispatch('setActiveBoard', {
                    _id: this.$route.params.boardId
                })
        },
        data() {
            return {
                list: {
                    title: ""
                },
            }
        },
        // props: ['list'],
        components: {
            Navbar,
            List
        },
        methods: {
            addList(list) {
                this.list.boardId = this.board._id
                this.$store.dispatch('addList', this.list)
            },
            removeList(list) {
                this.$store.dispatch('removeList', list)
            },
            getLists() {
                this.$store.dispatch('getLists')
            },
            setActiveList(list) {
                this.$store.dispatch('setActiveList', list)
            },
            updateList(list) {
                this.$store.dipatch('updateList', list)
            },
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            lists() {
                return this.$store.state.lists
            },
            board() {
                return this.$store.state.activeBoard
            },
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped>
    .list {
        background-color: #bed5e6;
    }

    .list-box-list {
        background-color: #ffffff;
        color: black;
        padding: 1rem;
        margin: 2rem;
        outline: black;
        outline-style: solid;
        outline-width: 1px;
    }

    .trash-list {
        color: black;
        background: none;
        border: none;
    }

    .mleft {
        margin-left: .2rem;
    }

    .logout {
        margin-right: 2rem;
    }

    .mtop {
        margin-top: 1rem;
    }

    .mbottom {
        margin-bottom: 1rem;
    }
</style>