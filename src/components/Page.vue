<template>
    <div class="container">
        <input class="form-control" type="text" placeholder="Filter results..." v-model="filter">
        <result-table v-bind:content="content" v-bind:filter="filter"/>
        <button type="button" class="btn btn-primary float-right" v-on:click="loadMore" v-if="visible">Load more</button>
    </div>
</template>

<script>
    import ResultTable from './ResultTable.vue'

    export default {
        name: "page",
        components: {
            ResultTable
        },
        data: function() {
            return {
                content: [],
                currentPage: 0,
                lastPage: 0,
                visible: false,
                filter: ''
            }
        },
        methods: {
            loadMore: function () {
                window.$.getJSON(`/sample-feed/?page=${this.currentPage}`, {
                    format: "json"
                }).done(data => {
                    this.lastPage = data.lastPage
                    this.content.push(...data.content)
                    this.visible = this.currentPage < this.lastPage
                    this.currentPage++
                }).fail(function() {
                    alert('Try again')
                })

            }
        },
        mounted: function () {
            this.loadMore()
        }
    }
</script>

<style scoped>
    input {
        margin-bottom: 10px;
    }
</style>