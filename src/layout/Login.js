import React, {Component} from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';
import Responsive from '../components/Responsive/Responsive';

import './Login.scss';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Responsive>
                    <div className="infobox">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ut nibh ut vulputate. Aenean finibus risus efficitur fermentum mattis. Quisque odio nisl, consequat eget est id, molestie finibus tellus. Aenean tortor nulla, iaculis vitae urna fringilla, aliquet vehicula purus. Suspendisse varius lacus eget interdum gravida. Sed at elit felis. Nullam tempor lacinia nunc id eleifend. Phasellus et euismod eros. Cras molestie interdum velit, eu aliquet est porttitor sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ut nibh ut vulputate. Aenean finibus risus efficitur fermentum mattis. Quisque odio nisl, consequat eget est id, molestie finibus tellus. Aenean tortor nulla, iaculis vitae urna fringilla, aliquet vehicula purus. Suspendisse varius lacus eget interdum gravida. Sed at elit felis. Nullam tempor lacinia nunc id eleifend. Phasellus et euismod eros. Cras molestie interdum velit, eu aliquet est porttitor sed.
                    </div>
                    <LoginForm></LoginForm>
                </Responsive>
                <Footer/>
            </div>
        );
    }
}