import React, { Component, Fragment } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import NavbarTab from '../NavbarTab';
import './Halaman_Pemesanan.css';

export default class Halaman_Pemesanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaPemesan: '',
        };
    }

    handleNamaPemesan(event) {
        const inputUser = event.target.value;
        this.setState({ namaPemesan: inputUser });
    }

    render() {
        return (
            <Fragment>
                <NavbarTab />
                <Form id="reserved_form">
                    <div className="nama">
                        <Form.Group
                            as={Col}
                            lg={6}
                            controlId="name.ControlInput1"
                        >
                            <Form.Label className="name_reserved">
                                Nama pemesan
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.namaPemesan}
                                onChange={(event) => {
                                    this.handleNamaPemesan(event);
                                }}
                            />
                        </Form.Group>
                    </div>

                    <div className="nomor">
                        <Form.Group
                            as={Col}
                            lg={6}
                            controlId="id.ControlInput2"
                        >
                            <Form.Label className="id_reserved">
                                ID Karyawan
                            </Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </div>

                    <div className="tanggal">
                        <Form.Group
                            as={Col}
                            lg={6}
                            controlId="date.ControlInput3"
                        >
                            <Form.Label className="date_reserved">
                                Tanggal Pemesanan
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </div>

                    <div className="ruangan">
                        <Form.Group as={Col} lg={6} controlId="room">
                            <Form.Label>Custom select</Form.Label>
                            <Form.Control as="select" custom>
                                <option>---Pilih Ruangan---</option>
                                <option>A</option>
                                <option>B</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="tombol">
                        <Button variant="secondary" type="button">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Fragment>
        );
    }
}
