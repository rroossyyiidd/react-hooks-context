import React, {useState, useEffect} from 'react';
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

    const [age, setAge] = useState(20);

    /**
     * add a song
     * @param {string} title
     */
    const addSong = (title) => {
        setSong([...songs, {title, id: uuid()}])
    };

    //run every time state change or component render and run on initial render
    useEffect(e => {
        console.log('state change')
    });

    // run only songs change (watch)
    useEffect(e => {
        console.log('song change')
    }, [songs]);

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
            {/*child component add song*/}
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>add age {age}</button>
        </div>
    )
};

export default SongList;
