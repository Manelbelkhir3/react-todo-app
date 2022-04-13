export default ({ todo, onDelete }) => {
    return (
        <>
            <div className="todo_item">
                <span> <span style={{ marginRight: '10px' }} >#{todo.id}</span>  {todo.description} </span>
                <i onClick={() => onDelete()} class="las la-times-circle"></i>
            </div>
        </>
    )
}