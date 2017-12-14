import React, {Component} from 'react';


import Sidenav from './Sidenav';
import Page from './Page';



export default class PageCombo extends Component {
    render() {
        return (
            <div className="App">
                <Sidenav />
                <Page />
            </div>
        );
    }
}