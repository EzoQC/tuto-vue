<template>
<div>
    <div class="subtitle">Formulaire todo</div>
    <div class="message error-message" v-if="showErrorMessage">Vous devez remplir tous les champs.</div>
    <div class="message success-message" v-if="showSuccessMessage">Votre todo a été créé avec succès.</div>
    <form class="form-container" v-on:submit.prevent="handleClickCreateButton">
        <div class="input-container">
            <label for="todo-title">Quoi faire?</label>
            <input id="todo-title" v-model="todo.what">
        </div>
        <button>Créer</button>
    </form>
</div>
</template>

<script>
import ToDo from '../models/todo/todo';
import ToDoService from '../models/todo/service';

export default {
    name: 'todo-form',
    data: () => {
        return {
            todo: new ToDo('', false),
            showSuccessMessage: false,
            showErrorMessage: false
        }
    },
    methods: {
        handleClickCreateButton: function () {
            if (this.todo.what == null || this.todo.what.trim() === '') {
                this.showSuccessMessage = false;
                this.showErrorMessage = true;
            } else {
                ToDoService.create(this.todo);
                this.todo = new ToDo(null, false);
                this.showSuccessMessage = true;
                this.showErrorMessage = false;
            }
        }
    },
    components: {

    }
}
</script>