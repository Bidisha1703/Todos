import type { Todo } from "../types/todo";

interface TodoSummeryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummery({
todos,
deleteAllCompleted
}: TodoSummeryProps) {
    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div className="text-center space-y-2">
            <p className="font-medium text-sm">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-red-500 hover:underline font-medium text-sm">Delete All Completed</button>
            )}

        </div>
    )

}