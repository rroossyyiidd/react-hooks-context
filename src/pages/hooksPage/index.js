import React, {Component} from 'react';
//components
import SongList from '../../components/songList';

class HooksPage extends Component {
    render() {
        return (
            <div className={`App`}>
                <SongList/>
            </div>
        );
    }
}

export default HooksPage;
