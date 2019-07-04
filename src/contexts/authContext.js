import React, {Component, createContext} from 'react';

// create context auth
export const AuthContext = createContext();

class AuthContextProvider extends Component {

    state = {
        isAuthenticated: false
    };

    /**
     * set authentication status
     */
    toggleAuth = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        })
    };

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;
