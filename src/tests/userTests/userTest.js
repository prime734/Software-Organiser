function checkStory(arr, story) {
    if (!arr.includes(story)) {
        return false
    }
    else {
        return true
    }
}

function deleteStory(arr, story) {
    if (checkStory(arr, story)) {
        const filtered = arr.filter(function (tea) {
            return tea != story;
        });
        return filtered
    }
    else {
        return "Cannot delete story as it does not exist in the database"
    }

}

function addStory(arr, story) {
    if (checkStory(arr, story)) {
        return "story already exists in the database"
    }
    else {
        arr.push(story);
        return arr
    }
}

function editStory(arr, story, newstory) {
    if (checkStory(arr, story)) {
        arr.map((tea) => {
            if (tea == story) {
                tea = newteam;
            }
        })
        return arr
    }
    else {
        return "team does not exist in the database"
    }

}

module.exports = [deleteStory, addStory, editStory];