export default function setStoriesAction(stories) {
    return {
        type: "REORDER_STORIES",
        payload: stories
    }
}