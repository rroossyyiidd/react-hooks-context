import React, {useState} from 'react';
// to generated unique id
import uuid from 'uuid/v1';

const SongList = () => {
    //return value state and function to change value state
    const [songs, setSong] = useState([
        {title: 'song 1', id: 1},
        {title: 'song 2', id: 2},
        {title: 'song 3', id: 3}
    ]);

    /**
     * add new song
     */
    const addSong = () => {
        setSong([...songs, {title: 'song 4', id: uuid()}])
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
            <button onClick={addSong}>add a song</button>
        </div>
    )
};

export default SongList;
