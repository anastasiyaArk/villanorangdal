// Dependencies
import React, { Component } from 'react';

class Room extends Component {
    render() {
        return (
            <div>
            <div class="card mb-3">
                <img class="card-img-top" src="/images/hotel.jpg" alt="Card image cap" />
                <div class="card-header">Rom</div>
                <div class="card-body">
                    <p class="card-text">Vi har 6 doble rom: 1900, 1920, 1930, 1950, 1960 og 1970. Alle er individuelt innredet med lokale og internasjonale designikon 
                    fra tiåret de representerer.
        Vi lager dobbel eller enkeltsenger etter gjestens ønske. Ekstraseng til kr 350,-. Peisestue, salonger, utendørs boblebad og wifi er noen av fascilitetene som tilbys.</p>
                    <p class="card-text">Vi gjør oppmerksom på at Villa Norangdal passer best for et voksent publikum.<br />
        Barnefamilier anbefales å ta inn på større hotell som er tilrettelagt for barn.</p>
                </div>
            </div>
            <div class="card-deck mb-3">
                <div class="card">
                    <img class="card-img-top" src="..assets/images/room1900.jpg" height="237px" alt="Room 1900" />

                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center" >1900</p>
                        <p class="card-text">Beskrivelse av rom 1900</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/1961.jpg" alt="Room 1920" />
                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center" >1920</p>
                        <p class="card-text">Beskrivelse av rom 1920</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/room41.jpg" height="237px" alt="Room 1930" />
                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center">1930</p>
                        <p class="card-text">Beskrivelse av rom 1930</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
            </div>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="/images/1961.jpg" alt="Room 1950" />
                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center" >1950</p>
                        <p class="card-text">Beskrivelse av rom 1950</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/room1960.jpg" alt="Room 1960" />
                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center" >1960</p>
                        <p class="card-text">Beskrivelse av rom 1960</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/1961.jpg" alt="Room 1970" />
                    <div class="card-body">
                        <p class="card-text font-weight-bold text-center" >1970</p>
                        <p class="card-text">Beskrivelse av rom 1970</p>
                    </div>
                    <div class="card-footer text-center"><a>Les mer</a></div>
                </div>
            </div>
            </div> 
        )
    }
}

export default Room