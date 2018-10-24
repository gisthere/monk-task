<template>
    <table class="table table-sm table-bordered">
        <thead>
            <tr>
                <th>id</th>
                <th>type</th>
                <th>category/genre</th>
                <th>name</th>
                <th>page url</th>
            </tr>
        </thead>
        <tr v-show="entry.name.includes(filter)" v-for="entry in content" :key="entry.id">
            <td>{{ entry.id }}</td>
            <td>{{ entry.type }}</td>
            <td>{{ entry.category || entry.genre }}</td>
            <td>{{ entry.name }}</td>
            <td>{{ entry.pageUrl }}</td>
        </tr>
        <tr v-if="!content.length">
            <td colspan="5">No data available</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "result-table",
        props: {
            content: Array,
            filter: String
        }
    }
</script>
