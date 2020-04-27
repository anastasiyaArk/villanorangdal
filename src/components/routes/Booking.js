// Dependencies
import React, {Component} from 'react';

class Booking extends Component {
    render(){
        return(
             <div class="card-deck">
    <div class="card col-md-8">
      <div class="card-body">
        <p class="card-text">Her kan du gjøre en forespørsel om booking av hele hotellet for en periode. Vi vil svare på din
          forespørsel så raskt som mulig.
          <p>Vi tilbyr for tiden kun utleie av hele hotellet til en døgnpris på XXXX kr. </p>
        </p>
        <form>
          {/* <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked id="hotel" disabled>
            <label class="form-check-label" for="hotel">
              Hele hotellet 12000,-
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="singleroom" disabled>
            <label class="form-check-label" for="singleroom">
              Enkeltrom 1575,-
            </label>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="doubleroom" disabled>
            <label class="form-check-label" for="doubleroom">
              Dobbeltrom 2150,-
            </label>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault02">Fra dato</label>
              <input type="date" class="form-control" id="validationDefault02" placeholder="Fra dato" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault02">Til dato</label>
              <input type="date" class="form-control" id="validationDefault02" placeholder="Til dato" required>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault01">Fornavn</label>
              <input type="text" class="form-control" id="validationDefault01" placeholder="Fornavn" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault06">Etternavn</label>
              <input type="text" class="form-control" id="validationDefault06" placeholder="Etternavn" required>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault03">E-post</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="E-post" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Telefonnummer</label>
              <input type="text" class="form-control" id="validationDefault04" placeholder="Telefonnummer">
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-8 mb-3">
              <label for="validationDefault05">Kommentar</label>
              <input type="textarea" class="form-control" id="validationDefault05" placeholder="Eventuelle kommentarer/spørsmål">
              <textarea class="form-control" id="validationDefault05" placeholder="Eventuelle kommentarer/spørsmål" rows="3"></textarea>
            </div>
          </div>
          <button class="btn btn-primary float-right" type="submit">Send forespørsel</button> */}
        </form>
      </div>
    </div>
    <div class="card col-md-4 payment-info">
      <div class="card-body">
        <p class="card-text">
          <span>OBS: Dette er kun eksempeltekst/forslag </span><br/><br/>
          Når du har fått svar på din forespørsel ber vi om at du bekrefter bestillingen.<br/>

          <h6>Betaling</h6>
          <span>Ved bestilling mer enn 30 dager før ankomst fakturerer vi 25% av beløpet som depositum. Dette skal betales innen en uke. Det resterende beløpet betales 30 dager før ankomst.
            <br/><br/>
            Ved bestilling nærmere enn 30 dager til ankomst forfaller hele leiebeløpet til betaling ved bestilling.</span>

          <h6>Avbestilling</h6>
          <span>Ved avbestilling mer enn 30 dager før ankomst vil innbetalt depositum, minus ett avbestillingsgebyr på kr 300, bli tilbakebetalt.
            Ved avbestilling senere refunderes ikke det innbetalte beløpet.<br/><br/>
            Vil tilbyr ingen avbestillingsforsikring og ber om at gjestene ordner dette med sitt eget forsikringsselskap.</span>
        </p>
      </div>
    </div>
  </div>
        )
    }
}

export default Booking