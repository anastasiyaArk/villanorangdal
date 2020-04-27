// Dependencies
import React, { Component } from 'react';

class Hotel extends Component {
    render() {
        return (
            <div>
                <div class="card">
                    <div id="sideby" class="row mb-1">
                        <img class="card-img-top col-sm-6" src="/images/hotel.jpg" alt="Villa Norangdal" />
                        <img class="card-img-top col-sm-6" src="/images/hotel3.jpg" alt="Villa Norangdal" />
                    </div>
                    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="/images/hotel.jpg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="src/assets/images/hotel3.jpg" alt="Second slide" />
                            </div>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        </ol>
                        <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="card-header">Hotellet</div>
                    <div class="card-body">
                        <p class="card-text">Villa Norangdal er et Boutique Hotell med unik innredning og spennende historie. Tar man turen gjennom huset vil man få med seg designhistorien fra Jugendstilen i 1900 via
        Art Deco i 1920/1930 til Scandinavian Design i 1950 og Space Age i 1960.</p>
                        <p class="card-text">Her er internasjonale designikon blandet med klassikere fra det sunnmørske møbeleventyret. Slik tar vi opp både den internasjonale og den lokale tråden fra historien til
                        Villa Norangdal som spinner via kongelige gjester, britiske fjellpionerer, Ålesundsdamer på husmorferie, rallere og levemenn. Bygget med 40 kroner i støtte fra DNT i 1885, stengt i 1965 og
                        gjenåpnet i 2007 som
        distriktets eldste trehotell.</p>
                        <p class="card-text">Fra toppen av Slogen, surfing ved Stadt, kunstutstilling på Flø eller skiheisen på Strandafjellet samles man til deilig mat, peiskos og gode senger med alpin utsikt i
        Norangdalen.</p>
                        <p class="card-text">
                            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                ROUGH LUXE
        </a>– rett og slett!
      </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <p class="card-text">ROUGH LUXE – det er Sunnmørsalpene det!
                                Rough Luxe er den siste trenden innen hotell, design og livsstil:
                                Litt røft og litt luksus. Filosofien er å se på hvordan man bruker tiden sin, luksus handler ikke
                                bare om forbruksvarer. Luksus skal være en berikende personlig opplevelse; ikke det å eie
            eller å bruke et dyrt objekt.</p>
                                <p class="card-text">
                                    En tur i Sunnmørsalpene er nettopp det - Rough Luxe, og det er ingen ny trend. De britiske
                                    fjellpionerene med Slingsby og Patchell i spissen oppdaget den alt for 150 år siden. Keiser
                                    Wilhelm II, Dronning Wilhelmina av Nederland, Coco Chanel, kort sagt Europas jet set fulgte
                                    etter til tindelandet i Nordvest. De kunne ha reist til luksusdestinasjoner ved Gardasjøen eller
                                    den fasjonable franske rivieraen. De valgte Slingsbys ”Northern Playground”.
          </p>
                                <p class="card-text">
                                    Å dra på tur i Sunnmørsalpene; de ville kystalpine fjellene som omkranser Hjørundfjorden og
                                    Norangdalen, er i dag ikke dyrt, men eksklusivt. For de er ikke spesielt lett tilgjengelige.
                                    Infrastrukturen og det uforutsigbare været på Nordvestlandet, gjør sitt til at SUV trafikken fra
                                    Oslo i all hovedsak stopper ved Rondane, Jotunheimen og Trollheimen. For hvem tar vel
                                    sjansen på å kjøpe hytte så langt fra Oslo med fare for 11 grader og regn gjennom store deler
                                    av ferien? Selv Quintessentially’s 24 timers concierge service, som hjelper deg world wide
                                    med “impossible-to-book” eventer kan ikke selge deg en garantert finværsdag i
                                    Sunnmørsalpene, og ”spur-of-the-moment chartered yachts” egner seg bedre for St Tropez,
                                    enn Hjørundfjorden.
          </p>
                                <p class="card-text">
                                    Været og de nådeløse naturkreftene er ”the rough part” når du reiser til Sunnmørsalpene, og
                                    du må ha tid. Tid til å vente på neste ferje, tid til å rygge for møtende trafikk eller vente på
                                    veiarbeid. Tid og respekt for fjellet til å utsette toppturen til neste dag eller neste år. Men
                                    plutselig skinner solen på store mengder nysnø og den investerte tiden forrentes dobbelt med
                                    en uforglemmelig turopplevelse med spektakulær utsikt. Flere steder kan du kjøre på ski fra
                                    1500m og helt ned til fjorden, og da står tiden stille. Det er luksus.
                                    ”Sunnmøre er et Nordland som er flyttet mot syd, og en Jotunheimen som svømmer på
                                    bølgene” slik uttrykte poeten Kristofer Randers sin begeistring.
          </p>
                                <p class="card-text">
                                    Stillheten og friheten er kanskje noe av det beste med turen. Inne mellom tindene, hvor du kan
                                    velge mellom skarpklatring eller en bratt motbakke til topps, går flere fotturruter. Du kan
                                    velge en rute utenom allfarvei, finne et hjortetråkk uberørt av geocaching, et dalføre så trangt
                                    at mobilen reduseres til et fotografiapparat. Fantastiske kampesteiner danner skulpturer med
                                    lav i alle nyanser og issoleier nikker deg velkommen i brekanten ved glitrende fjellvann. Bare
            myrsniper, bekkesus og sauebjeller bryter stillheten. Luksus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel