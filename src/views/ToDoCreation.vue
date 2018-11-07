<template>
    <div>
        <h1>Nouveau todo</h1>
        <to-do-form></to-do-form>
    </div>
</template>

<script>
import ToDoForm from '../components/ToDoForm.vue'
export default {
    name: 'todo-creation',
    components: {
        ToDoForm
    }
}
</script>
