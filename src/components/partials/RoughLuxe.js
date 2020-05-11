import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';


// Assets
import roughLuxe from '../../assets/images/rough_luxe.jpg';

// Styles
import style from 'components/partials/RoughLuxe.module.scss';


export default class RoughLuxe extends Component {
    render() {
        return (
            <div className={style.container}>
                <Row className={style.row}>
                    <Col xs={12} md={8} className={style.col}>
                        <Card>
                            <Card.Img src={roughLuxe} className={style.image} alt="Rough Luxe" />
                        </Card>
                    </Col>
                    <Col xs={6} md={4} className={style.col}>
                        <h6>Rough Luxe – det er Sunnmørsalpene det!</h6>
                        <p>
                            Rough Luxe er den siste trenden innen hotell, design og livsstil:
                            Litt røft og litt luksus. Filosofien er å se på hvordan man bruker tiden sin, luksus handler ikke
                            bare om forbruksvarer. Luksus skal være en berikende personlig opplevelse; ikke det å eie
                            eller å bruke et dyrt objekt.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
