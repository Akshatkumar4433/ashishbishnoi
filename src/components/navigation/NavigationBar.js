import React from "react";
import { navigationItems } from "./NavigationItems";
import './NavigationBar.css'

export default class NavigationBar extends React.Component {
    render() {
        return(
            <nav>
                    {navigationItems.map((navigationItem, index) => (
                   <div key = {index} className = 'box'>
                       <a href = {navigationItem.url}><span className = 'navigation-item-text'>{navigationItem.title}</span></a>
                   </div>
               ))}    
           </nav>
        )
    }
}
