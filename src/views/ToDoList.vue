<template>
    <div>
        <h1>Liste des todos</h1>
        <to-do-table></to-do-table>
    </div>
</template>

<script>
    import ToDoTable from '../components/ToDoTable';

export default {
    name: 'todo-list',
    components: {
        ToDoTable
    }
}
</script>