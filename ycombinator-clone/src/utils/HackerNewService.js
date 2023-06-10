import {MAX_ID_URL,  getItemUrlDetails, TOP_STORIES_URL, getUserUrl} from './Constants';

export async function getMaxId() {
    const maxId = await fetch(MAX_ID_URL, {
        method : "GET",
    }).then(response => response.json());
    return maxId;
}

export async function getItemDetails(itemId) {
    const itemUrl = getItemUrlDetails(itemId);

    const response = await fetch(itemUrl, {
        method : 'GET'
    }).then(response => response.json());

    return response;
}

export async function getLatestStory() {
    let itemIds = await getTopStoriesIds();
    
    const latestStory = await getItemDetails(itemIds[0]);

    return latestStory;
}

export async function getTopNStories(count) {
    let storyIds = await getTopStoriesIds();

    const totalNumberOfStories = storyIds.length;
    const maxStoryToFetch = Math.min(count, totalNumberOfStories);

    const stories = []
    let storyCount = 0;
    while(storyCount < maxStoryToFetch) {
        ++storyCount;
        const story = await getItemDetails(storyIds[storyCount]);
        stories.push(story);
    }

    return stories; 
}

export async function getTopStoriesIds() {
    const topStoriesIds = await fetch(TOP_STORIES_URL, {
        method: 'GET'
    }).then(response => response.json());

    return topStoriesIds;
}

export async function fetchUser(userId) {
    const userUrl = getUserUrl(userId);
    const user = await fetch(userUrl, { method: 'GET' }).then(response => response.json());
    return user;
}