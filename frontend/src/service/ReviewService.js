import HttpService from './HttpService'

export default {
    query,
    add,
    remove
}

function query(filterBy) {
    return HttpService.get('review', filterBy)
}

async function add(review) {
    const addedReview = await HttpService.post(`review`, review);
    console.log(addedReview);
    return addedReview;
}

function remove(reviewId) {
    return HttpService.delete(`review/${reviewId}`);
}