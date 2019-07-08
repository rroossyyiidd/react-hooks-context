import React, {useState} from 'react';
// to generated unique id
import uuid from 'uuid/v1';
// components
import NewSongForm from '../components/newSongForm';

const SongList = () => {
    //return value state and function to change value state
    const [songs, setSong] = useState([
        {title: 'song 1', id: 1},
        {title: 'song 2', id: 2},
        {title: 'song 3', id: 3}
    ]);

    /**
     * add a song
     * @param {string} title
     */
    const addSong = (title) => {
        setSong([...songs, {title, id: uuid()}])
    };

    return (
        <div className={`song-list`}>
            <ul>
                {
                    songs.map((song, index) => {
                        return (
                            <li key={index}>{song.title}</li>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
};

export default SongList;
