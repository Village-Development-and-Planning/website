import React, {Component} from 'react';


export default class Responsive extends Component {
    render() {
        return (
            <section className={this.props.classes} >
                {this.props.children}
            </section>
        );
    }
}