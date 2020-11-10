import React, { Component } from 'react';
import NavbarTab from '../NavbarTab';

export default class Halaman_Konfirmasi extends Component {
    render() {
        return (
            <div>
                <NavbarTab />
                <p>{this.props.state}</p>
            </div>
        );
    }
}
