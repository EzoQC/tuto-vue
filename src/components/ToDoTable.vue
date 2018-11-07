<template>
    <div>
        <div class="subtitle">Vos todo</div>
        <table v-if="todos && todos.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Quoi faire?</th>
                    <th>Fait</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" v-bind:key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.what }}</td>
                    <td>{{ todo.done ? 'Oui' : 'Non' }}</td>
                </tr>
            </tbody>
        </table>
        <div class="message info-message" v-if="!todos || todos.length === 0">Aucun todo à afficher</div>
    </div>
</template>

<script>
    import ToDoService from '../models/todo/service';

    export default {
        'name': 'todo-table',
        data: function () {
            return {
                todos: ToDoService.findAll()
            };
        },
        components: {}
    }
</script>
