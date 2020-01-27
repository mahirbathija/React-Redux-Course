import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Superhuman', duration: '4:04'},
        {title: 'Fall Apart', duration: '3:54'},
        {title: 'Move', duration: '2:12'},
        {title: 'Drift', duration: '3:10'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } 
    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});