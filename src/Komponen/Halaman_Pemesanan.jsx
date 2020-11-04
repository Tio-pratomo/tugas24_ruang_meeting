import React, { Component, Fragment } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import NavbarTab from '../NavbarTab';
import './Halaman_Pemesanan.css';

export default class Halaman_Pemesanan extends Component {
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
                            <Form.Control type="text" />
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

                    <Form.Group controlId="date.ControlInput3">
                        <Form.Label className="date_reserved">
                            Tanggal Pemesanan
                        </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group controlId="room">
                        <Form.Label>Custom select</Form.Label>
                        <Form.Control as="select" custom>
                            <option>---Pilih Ruangan---</option>
                            <option>A</option>
                            <option>B</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Fragment>
        );
    }
}
