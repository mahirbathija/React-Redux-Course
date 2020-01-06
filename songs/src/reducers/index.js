import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Leaving', duration: '3:49'},
        {title: 'Coming', duration: '4:19'},
        {title: 'Going', duration: '4:13'},
        {title: 'Arriving', duration: '2:59'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});