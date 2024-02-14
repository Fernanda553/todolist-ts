import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const allMocks = [
  {
    id: '1',
    title: 'Todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(allMocks)
  const [filterSelected, setFilterSelect] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handlerFilterChange = (filter: FilterValue): void => {
    setFilterSelect(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos
      onToggleCompletedTodo={handleCompleted}
      onRemoveTodo= {handleRemove}
      todos={filteredTodos}/>
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      onClearCompleted={() => {}}
      filterSelected={filterSelected}
      handleFilterChange={handlerFilterChange}
      />
    </div>
  )
}

export default App
