import React, { Component } from 'react'


export default class indice extends Component{
    render() {
        return (
            <header>
            <nav class="navbar navbar-expand-lg nav">
              <div class="container-fluid">
                <a class="navbar-brand text-white-50" href="index.html">Medarda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <div class="navbar-nav me-auto mb-2 mb-lg-0">
                  </div>
                  <ul class="navbar-nav  mb-2 mb-lg-0">
                     <li class="nav-item">
                      <a class="nav-link active text-white-50 " aria-current="page" href="Promoções.html">Promoções</a>
                      
                    </li>
                    <li>
                      <a class="nav-link active text-white-50" aria-current="page" href="Login.html">Login</a>
                    </li>
                    <li>
                      <a class="nav-link active text-white-50" aria-current="page" href="ajuda.html">Ajuda</a>
                    </li>
                    <li>
                      <a class="nav-link active text-white-50" aria-current="page" href="Contato.html">Contato</a>
                    </li>
                  </ul> 
                </div>
              </div>
            </nav>
          </header>
        )
    }
}