import { ref } from 'vue'

type Todo = {
  id: number,
  title: string
}

const defaultTodos = [{ id: 0, title: 'first' }, { id: 1, title: 'second' }]
// 外から使いたいので、exportする
// export const todos = ref<Todo[]>(defaultTodos)

// export const addTodo = (title: string) => {
//   const newTodo: Todo = {
//     id: Math.random(),
//     title,
//   }
//   todos.value.push(newTodo)
// }

export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos)

  const addTodo = (title: string) => {
  const newTodo: Todo = {
    id: Math.random(),
    title,
  }
  todos.value.push(newTodo)
}

return { todos, addTodo }
})()