import React, {useState} from 'react';

// name class must first with capital char
const NewSongForm = ({addSong}) =>{
    const [title, setTitle] = useState('');

    /**
     * handle event
     * @param {object} e
     */
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSong(title);
        setTitle('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Song name: </label>
            <input type="text" value={title} required={true} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value={`add song`}/>
        </form>
    )
};

export default NewSongForm;
