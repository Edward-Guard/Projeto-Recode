import React, { Component} from 'react'
import Demacia from '../assets/TemploAurora.jpg'
import Noxus from '../assets/NoxusRed.jpg'
import Shurima from '../assets/ShurimaRed.jpg'


export default class carousel extends Component{
    render(){
        return(
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Demacia} className={"d-block w-100"}  style={{ width: '18rem' }} alt='sla'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Demacia</h5>
                        <p>sla</p>
                    </div>
                </div>
                <div class="carousel-item" >
                    <img src={Noxus} className={"d-block w-100"} style={{ width: '18rem' }} alt='sla'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Noxus</h5>
                        <p>sla</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Shurima} className={"d-block w-100"} style={{ width: '18rem' }} alt='sla'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shurima</h5>
                        <p>sla</p>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            


        )
    }
}