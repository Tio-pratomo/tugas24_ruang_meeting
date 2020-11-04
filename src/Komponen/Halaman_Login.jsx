import React, { Component } from 'react';
import './Halaman_Login.css';
import Orang from '../gambar/character 12.svg';
import Orang_1 from '../gambar/character 13.svg';

export default class Halaman_Login extends Component {
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
                        <form className="form_user">
                            <div className="form-group">
                                <label htmlFor="Input_Email" style={{}}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Input_Email"
                                    name="email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Input_Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Input_Password"
                                    name="password"
                                />
                            </div>

                            <button type="submit" className="btn btn-secondary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
