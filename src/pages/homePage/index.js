import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
                <Link to={{pathname: `/context`}}>
                    <button>go to context</button>
                </Link>
                <Link to={{pathname: `/hooks`}}>
                    <button>go to hooks</button>
                </Link>
                <Link to={{pathname: `/learncss`}}>
                    <button>go to learn css</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;
