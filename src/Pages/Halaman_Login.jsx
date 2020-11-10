import React, { Component } from 'react';
import './Halaman_Login.css';
import Orang from '../gambar/character 12.svg';
import Orang_1 from '../gambar/character 13.svg';
import Button from 'react-bootstrap/Button';

export default class Halaman_Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            action: '/Pemesanan',
        };
    }

    handleChange(event) {
        const inputValueEmail = event.target.value;
        const inputValuePass = event.target.value;

        this.setState({
            email: inputValueEmail,
            password: inputValuePass,
        });
    }

    handleSubmit() {
        if (this.state.password !== 'jerukmangga') {
            alert('password anda salah');
            this.setState({ action: '/' });
        }
    }

    render() {
        return (
            <div id="page_login" className="container-fluid">
                <div className="Row_form row justify-content-center align-items-center">
                    <div className="col-lg-5 d-flex justify-content-center">
                        <img
                            src={Orang}
                            alt="login"
                            width="150rem"
                            style={{ marginRight: '20px' }}
                        />
                        <img
                            src={Orang_1}
                            alt="login"
                            width="150rem"
                            style={{ marginleft: '20px' }}
                        />
                    </div>

                    <div className="col-lg-5">
                        <form
                            className="form_user"
                            action={this.state.action}
                            method="get"
                            onSubmit={() => {
                                this.handleSubmit();
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="Input_Email" style={{}}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Input_Email"
                                    name="email"
                                    onChange={(event) => {
                                        this.handleChange(event);
                                    }}
                                    value={this.state.value}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Input_Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Input_Password"
                                    name="password"
                                    onChange={(event) => {
                                        this.handleChange(event);
                                    }}
                                    value={this.state.value}
                                />
                            </div>

                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
