export const HACKER_NEWS_BASE_ADDRESS = 'https://hacker-news.firebaseio.com/v0';
export const MAX_ID_URL = `${HACKER_NEWS_BASE_ADDRESS}/maxitem.json`;
export const TOP_STORIES_URL = `${HACKER_NEWS_BASE_ADDRESS}/topstories.json`

export function getItemUrlDetails(itemId) {
    return `${HACKER_NEWS_BASE_ADDRESS}/item/${itemId}.json`
}

export function getUserUrl(userId){
    return `${HACKER_NEWS_BASE_ADDRESS}/user/${userId}.json`
}
export const ItemTypes = {
    job     : 'job',
    story   : 'story',
    comment : 'comment',
    poll    : 'poll',
    pollopt : 'pollopt'
}