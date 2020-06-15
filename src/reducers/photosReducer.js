import photosService from '../services/photos';

const initialState = {
    hits: [],
    query: null,
    page: 0
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return {
                hits: action.data.photos.hits,
                total: action.data.photos.total,
                query: action.data.query,
                page: 1
            }
        case 'GET_MORE_PHOTOS':
            const { page, hits } = state;
            const newPageNumber = page + 1
            const allPhotos = hits.concat(action.data.photos.hits)
            return {
                ...state,
                hits: allPhotos,
                page: newPageNumber
            }
        default:
            return state
    }
}

export const getPhotos = query => {
    return async dispatch => {
        const photos = await photosService.getAll(query)
        dispatch({
            type: 'GET_PHOTOS',
            data: { query, photos }
        })
    }
}

export const getMorePhotos = (query, page) => {
    const nextPage = page + 1
    return async dispatch => {
        const photos = await photosService.getNextPage(query, nextPage)
        dispatch({
            type: 'GET_MORE_PHOTOS',
            data: { photos }
        })
    }
}

export default photosReducer;