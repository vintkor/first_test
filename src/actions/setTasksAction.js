export default function setTasksAction(tasks) {
    return {
        type: "REORDER_TASKS",
        payload: tasks
    }
}