// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormLabel, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Styles
import style from 'components/partials/BookingForm.module.scss';

// Components
import Button from 'components/partials/Button';


class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            fromDate: Date,
            toDate: Date
        }
    }


    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onSurnameChange(event) {
        this.setState({ surname: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    onFromDateChange(event) {
        this.setState({ fromDate: event.target.value })
    }

    onToDateChange(event) {
        this.setState({ toDate: event.target.value })
    }

    resetForm() {
        this.setState({ name: '', surname: '', phone: '', fromDate: null, toDate: null, email: '', message: '' })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.selectedLanguageKey === 'en' ? 'Send a booking request for Villa Norangdal' : 'Send forespørsel om booking av Villa Norangdal'}</h3>
                    <p>{this.props.selectedLanguageKey === 'en' ? 'Here you can send a booking request for the whole hotel. We will answer your request as soon as possible' : 'Her kan du gjøre en forespørsel om booking av hele hotellet for en periode. Vi vil svare på din ' +
                        'forespørsel så raskt som mulig.'}</p>
                    <p>{this.props.selectedLanguageKey === 'en' ? 'At this moment we propose rental only for the whole hotel for kr XXXX' : 'Vi tilbyr for tiden kun utleie av hele hotellet til en døgnpris på XXXX kr. '}</p>
                </div>
                <Form className={style.formContainer} onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <FormGroup className={style.formGroupInline}>
                        <Row>
                            <Col>
                                <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'From' : 'Fra dato'}</FormLabel>
                                <Form.Control type="date" value={this.state.value} onChange={this.onFromDateChange.bind(this)} />
                            </Col>
                            <Col>
                                <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'To' : 'Til dato'}</FormLabel>
                                <Form.Control type="date" value={this.state.value} onChange={this.onToDateChange.bind(this)} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'First name' : 'Fornavn'}</FormLabel>
                        <Form.Control type="text" value={this.state.value} onChange={this.onNameChange.bind(this)}
                            placeholder={this.props.selectedLanguageKey === 'en' ? 'First name' : 'Fornavn'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Second name' : 'Etternavn'}</FormLabel>
                        <Form.Control type="text" value={this.state.value} onChange={this.onSurnameChange.bind(this)}
                            placeholder={this.props.selectedLanguageKey === 'en' ? 'Second name' : 'Etternavn'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Email' : 'E-post'}</FormLabel>
                        <Form.Control type="email" value={this.state.value} onChange={this.onEmailChange.bind(this)}
                            placeholder={this.props.selectedLanguageKey === 'en' ? 'Email' : 'E-post'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'}</FormLabel>
                        <Form.Control type="text" value={this.state.value} onChange={this.onPhoneChange.bind(this)}
                            placeholder={this.props.selectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'} />
                    </FormGroup>

                    <FormGroup className={style.formGroup}>
                        <FormLabel className={style.label}>{this.props.selectedLanguageKey === 'en' ? 'Comment' : 'Kommentar'}</FormLabel>
                        <Form.Control type="textarea" value={this.state.value} onChange={this.onMessageChange.bind(this)}
                            placeholder={this.props.selectedLanguageKey === 'en' ? 'Comment' : 'Kommentar'} />
                    </FormGroup>
                    <Button variant="primary" type="submit">
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



