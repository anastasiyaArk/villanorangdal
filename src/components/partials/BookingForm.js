// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

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
                <form>

                    <div class="form-group row">
                        <label for="example-datetime-local-input" class="col-2 col-form-label">{this.props.selectedLanguageKey === 'en' ? 'From' : 'Fra dato'}</label>
                        <div class="col-10">
                            <input class="form-control" type="datetime-local" value="" id="example-datetime-local-input" />
                        </div>
                        <label for="example-datetime-local-input" class="col-2 col-form-label">{this.props.selectedLanguageKey === 'en' ? 'To' : 'Til dato'}</label>
                        <div class="col-10">
                            <input class="form-control" type="datetime-local" value="" id="example-datetime-local-input" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="example-text-input" class="col-2 col-form-label">{this.props.updateSelectedLanguageKey === 'en' ? 'First name' : 'Fornavn'}</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value={this.props.selectedLanguageKey === 'en' ? 'First name' : 'Fornavn'} id="example-text-input" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="example-text-input" class="col-2 col-form-label">{this.props.updateSelectedLanguageKey === 'en' ? 'Second name name' : 'Etternavn'}</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value={this.props.updateSelectedLanguageKey === 'en' ? 'Second name name' : 'Etternavn'} id="example-text-input" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="example-email-input" class="col-2 col-form-label">{this.props.updateSelectedLanguageKey === 'en' ? 'Email' : 'E-post'}</label>
                        <div class="col-10">
                            <input class="form-control" type="email" value={this.props.updateSelectedLanguageKey === 'en' ? 'Email' : 'E-post'} id="example-email-input" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="example-tel-input" class="col-2 col-form-label">{this.props.updateSelectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'}</label>
                        <div class="col-10">
                            <input class="form-control" type="tel" value={this.props.updateSelectedLanguageKey === 'en' ? 'Telephone' : 'Telefonnummer'} id="example-tel-input" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="exampleTextarea">{this.props.selectedLanguageKey === 'en' ? 'Comment' : 'Kommentar'}</label>
                        <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">{this.selectedLanguageKey === 'en' ? 'Send request' : 'Send forespørsel'}</button>
                </form>
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
