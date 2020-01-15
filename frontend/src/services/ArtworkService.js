import HttpService from './HttpService';

export default {
  add,
  query,
  remove,
  edit,
  getById
};

function query() {
  return HttpService.get('artwork');
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

function edit(artwork) {
  const editedArtWork = await HttpService.put(`artwork/${artwork._id}`, artwork);
  return editedArtWork;
}
