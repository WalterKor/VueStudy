<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo/>
    <AddTodo/>
    <hr>
    <TodoList/>
    <UserList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';
import UserList from './components/UserList.vue';

export default {
  components: {
    TodoList,
    AddTo
    CompletedTodo,
    UserList
  },
  data() {
    return {
      todoText: '',      
    }
  },

  
}
</script>