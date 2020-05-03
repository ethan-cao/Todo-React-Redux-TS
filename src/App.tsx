import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from './components/NewTodo';
import { Todo } from './model/todo';

const App: React.FunctionComponent = () => {
	// useState(initialState): [newState, fxToUpdateState]
	const [todos, setTodos] = useState<Todo[]>([]);
	
	const todoAddHandler = (text: string) => {
		setTodos( (previousTodos) => [
			...previousTodos,
			{id: Math.random().toString(), text: text}
		]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos((previousTodos)=> previousTodos.filter(todo => todo.id !== todoId));
	};

	return (
		<div className="App" >
			<NewTodo onAddTodo={todoAddHandler}></NewTodo>
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	);
}

export default App;
