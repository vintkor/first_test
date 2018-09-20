export default function setProjectsAction(projects) {
    return {
        type: "REORDER_PROJECTS",
        payload: projects
    }
}