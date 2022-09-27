import React, { Component} from 'react'
import './promotion.css';
import Fofuteia from '../assets/fofuteia.webp'
import Portos from '../assets/PortosSafiraRed.png'
import Noxcraya from '../assets/NoxkrayaArenared.png'
import Hirana from '../assets/Hirana.webp'
import Universidade from '../assets/Universidade-de-Piltover.png'
import Deserto from '../assets/Areias instáveis.jpg'


export default class promotion extends Component{
    render(){
        return(
        <div className='container'>
            
            <div className='row justify-content-center '>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Portos}alt='sla'/>
                    <div class="card-body ">
                        <h5 className={"card-title"}>Porto Esmeralda</h5>
                        <p class={"card-text col" }>
                        Visitado durante todo o ano,suas águas parecem belas jóias a 
                        distancia e de perto a água está sempre na temperatura perfeita.
                        </p>
                        <p className='col'>326 Brackern</p>
                        <a href="#" class="btn btn-primary">Viaje agora - </a>
                    </div>
                </div>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Noxcraya} className={'img'} alt='sla'/>
                     <div class="card-body">
                    <h5 class="card-title">Arenas Noxcraya</h5>
                    <p class="card-text" className='col'>
                    Lar de uma das mais famosas arenas de Noxus.Cavaleiros viajam por todo império
                     para terem a chance de lutas nas arenas e provar o seu valor.
                    </p>
                    <p>121 Brackern</p>
                    <a href="#" class="btn btn-primary">Viaje agora - </a>
                     </div>
                </div>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Hirana} className={'img'} alt='sla'/>
                     <div class="card-body">
                    <h5 class="card-title">Hirana</h5>
                    <p class="card-text">
                    Conhecido por sua cultura e lar do monastério de Hirana,
                     a cidade tem profundas raízes budistas e xintoístas
                    </p>
                    <p>175 Brackern</p>
                    <a href="#" class="btn btn-primary">Viaje agora - </a>
                     </div>
                </div>
            </div>
            <div className='row justify-content-center '>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Fofuteia}alt='sla'/>
                    <div class="card-body ">
                        <h5 className={"card-title"}>Prados da Fofuteia</h5>
                        <p class={"card-text col" }>
                        Os outrora prados verdes, teve seu nome mudado após a fofíssima infestação de poros.
                        As criaturas fofas são incrivelmente amigáveis e até intrometidas mas muito amadas por todos.
                        </p>
                        <p className='col'>192 Brackern</p>
                        <a href="#" class="btn btn-primary">Viaje agora - </a>
                    </div>
                </div>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Universidade} className={'img'} alt='sla'/>
                     <div class="card-body">
                    <h5 class="card-title">Universidade de Piltover</h5>
                    <p class="card-text" className='col'>
                    Centro de reunião dos maiores gênios e loucos de toda runeterra.
                    Invetores se reúnem de todos os cantos para obter inspiração,
                    conselhos ou vender suas inovações aos ricos investiores de Piltover
                     e até particiar do <strong>DIA DO PROGRESSO</strong>.
                    </p>
                    <p>96 Brackern</p>
                    <a href="#" class="btn btn-primary">Viaje agora - </a>
                     </div>
                </div>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={Deserto} className={'img'} alt='sla'/>
                     <div class="card-body">
                    <h5 class="card-title">Hirana</h5>
                    <p class="card-text">
                    Em shurima tudo muda,até mesmo o terreno, incontáveis jovens e amantes da ação se reúnem 
                    nas areias do Deserto para surfar por cima das rochas e de vez enquando fugir de um 
                    pedregoso furioso.
                    </p>
                    <p>158 Brackern</p>
                    <a href="#" class="btn btn-primary">Viaje agora - </a>
                     </div>
                </div>
            </div>
            
        </div>
        
        )
    }
}