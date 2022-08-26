import React from 'react';
import NavigationBar from './NavigationBar'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

export default class Header extends React.Component {
    state = {
        toggle:false,
    }
    changeToggleBoolean = ()=> {
        this.setState({
            toggle:!this.state.toggle,
        });
    }
    render() {
        return(
            <header>
                <div className = 'nav-area'>
                    <a href='/' className = 'logo'>
                        Ashish Kumar Bishnoi
                    </a>
                    <MenuIcon fontSize='large' className = 'navigation-button' onClick={this.changeToggleBoolean}/>
                </div>
                {this.state.toggle?<NavigationBar/>:false}
            </header>
        )
    }
}