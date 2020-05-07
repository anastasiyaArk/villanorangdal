// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormLabel, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Styles
import style from 'components/partials/BookingForm.module.scss'

class BookingForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.selectedLanguageKey === 'en' ? 'Send a booking request for Villa Norangdal' : 'Send forespørsel om booking av Villa Norangdal'}</h3>
                    <p>{this.props.selectedLanguageKey === 'en' ? 'Here you can send a booking request for the whole hotel. We will answer your request as soon as possible' : 'Her kan du gjøre en forespørsel om booking av hele hotellet for en periode. Vi vil svare på din ' +
                        'forespørsel så raskt som mulig.'}</p>
                    <p>{this.props.selectedLanguageKey === 'en' ? 'At this moment we propose rental only for the whole hotel for kr XXXX' : 'Vi tilbyr for tiden kun utleie av hele hotellet til en døgnpris på XXXX kr. '}</p>
                </div>
                <Form className={style.formContainer}>

                    <FormGroup className={style.formGroup}>
                        <Row>
                            <Col>
                                <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'From' : 'Fra dato'}</FormLabel>
                                <Form.Control type="date" />
                            </Col>
                            <Col>
                                <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'To' : 'Til dato'}</FormLabel>
                                <Form.Control type="date" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'First name' : 'Fornavn'}</FormLabel>
                        <Form.Control type="text" placeholder={this.props.selectedLanguageKey === 'en' ? 'First name' : 'Fornavn'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Second name' : 'Etternavn'}</FormLabel>
                        <Form.Control type="text" placeholder={this.props.selectedLanguageKey === 'en' ? 'Second name' : 'Etternavn'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Email' : 'E-post'}</FormLabel>
                        <Form.Control type="email" placeholder={this.props.selectedLanguageKey === 'en' ? 'Email' : 'E-post'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'}</FormLabel>
                        <Form.Control type="text" placeholder={this.props.selectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Comment' : 'Kommentar'}</FormLabel>
                        <Form.Control type="textarea" placeholder={this.props.selectedLanguageKey === 'en' ? 'Comment' : 'Kommentar'} />
                    </FormGroup>

                    <Button className={style.button} variant="primary" type="submit">
                        <FontAwesomeIcon icon={['fas', 'envelope']} alt='Send' />
                        {this.selectedLanguageKey === 'en' ? '  Send request' : '  Send forespørsel'}
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey });

const mapDispatchToProps = {
    getLanguageSlug,
    updateMultilingualRoutes,
    updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);



