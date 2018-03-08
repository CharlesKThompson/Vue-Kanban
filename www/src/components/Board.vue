<template>
    <div class="list">
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
            </div>
            <!-- LISTS DRAW HERE -->
            <div class="row">
                <div class="col-sm-3 list-box-list" v-for="list in lists"> 
                    {{list.title}}
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
    import List from './List.vue'
    export default {
        name: 'Board',
        data() {
            return {
                list: {},
            }
        },
        // props: ['list'],
        mounted() {
            this.$store.dispatch('getLists', list)
        },
        components: {
            List
        },
        methods: {
            addList(list) {
                this.$store.dispatch('addList', list)
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
            addList(list) {
                this.$store.dispatch('addList', this.list)
            },
            removeList(list) {
                this.$store.dispatch('removeList', list)
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
            activeList() {
                return this.$store.state.activeList
            },
            user() {
                return this.$store.state.user
            }
        }    
    }
</script>

<style scoped>
    .list {
        background-color: rgb(112, 178, 235);
    }

    .list-box-list {
        background-color: white;
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