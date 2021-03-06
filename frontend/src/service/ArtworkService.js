import HttpService from './HttpService';
// import { artworkData } from './data/artworks';

function query(filterBy = null) {
    return HttpService.get('artwork', filterBy);
  }

function remove(artworkId) {
  return HttpService.delete(`artwork/${artworkId}`);
}

async function add(artwork) {
  const addedArtwork = await HttpService.post(`artwork`, artwork);
  return addedArtwork;
}

function getById(artworkId) {
  return HttpService.get(`artwork/${artworkId}`);
}

async function toggleLike(toggleArtworkLike) {
  const toggledLike = await HttpService.post(`artwork`, toggleArtworkLike);
  return toggledLike;
}

async function edit(artwork) {
  console.log('artwork edit service',artwork);
  
  const editedArtWork = await HttpService.put(`artwork/${artwork._id}`, artwork);
  return editedArtWork;
}

export default {
  add,
  query,
  remove,
  edit,
  getById,
  toggleLike
};