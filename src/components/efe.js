import React from 'react';
import pala_logo from './img/paladins.png'
import logoi from './icons/instagram.png'
import logot from './icons/twitter.png'
import logof from './icons/facebook.png'
import feisbu from './icons/feisbu.png'
import tuirer from './icons/tuitter.png'
import insta from './icons/istagram.png'
import './styles/style.css'

//Creamos una clase para mostrar
class efe extends React.Component{
    render(){
        return <div className="container">
            <div className="logo-text">
                <div className="logo"> 
                    <img className="pala" src={pala_logo}></img>
                </div>
                <div className="texto"> 
                    <h1>Hey champ</h1>
                    <p>¿Sabes que en Paladins hay campeones de distintas clases y roles? ven visitamos en nuestras
                        redes,
                        conoce a nuestros campeones y modos de juego, ¡descubre un mundo lleno de magia!</p>
                </div>
            </div>
            <div className="container-tabla">
                <div className="tabla"> 
                    <div className="row">
                        <div className="cuadro" >
                            <div className="logo-dentro">
                                <div id="inspa">
                                    <img id="insta-logo" src={logoi}></img>
                                </div>
                                <div id="arroi">
                                    <h1>@paladinsgame</h1>
                                </div>
                                <div id="foll">
                                    <a href="https://www.instagram.com/paladinsgame/" target="blank">Siguenos en Instagram ></a>
                                </div>
                            </div>
                        </div>
                        <div className="cuadro">
                            <div id="chams">
                                <p>¡Nuevos campeones cada mes!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cuadro">
                            <div id="siege">
                                <p>¡Empuja la carga!</p>
                            </div>
                        </div>
                        <div className="cuadro" >
                            <div className="twi-dentro">
                                <div id="twit">
                                    <img id="twi-logo" src={logot}></img>
                                </div>
                                <div id="arrot">
                                    <h1>@PaladinsGame</h1>
                                </div>
                                <div id="segi">
                                    <a href="https://twitter.com/paladinsgame" target="blank">Siguenos en Twitter ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cuadro" >
                            <div id="fac">
                                <img id="face-logo" src={logof} alt=""></img>
                            </div>
                            <div id="facename">
                                <h1>Paladins</h1>
                            </div>
                            <div id="busq">
                                <a href="https://www.facebook.com/PaladinsGameLA/" target="blank">Encuentranos en Facebook ></a>
                            </div>
                        </div>
                        <div className="cuadro">
                            <div className="team">
                                <p>¡Juega en equipo!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="vermas">
            <div class="msg">
                <h1>CONVIERTETE EN UN CAMPEÓN DEL REINO</h1>
                <p>Usa nuestros distintos campeones, conforma tu equipo y pelea en el campo de batalla para ser el campeón del reino</p>
                <a id="botma" href="https://www.paladins.com/champions" target="blank">Conoce a nuestros campeones</a>
            </div>
            
        </div>
        <footer>
            <div className="logos" >
                <div >
                        <a href="https://www.facebook.com/PaladinsGameLA/" target="blank"><img id="feis" src={feisbu} alt=""></img></a>
                        
                </div>
                <div >
                        <a href="https://twitter.com/paladinsgame" target="blank"><img id="tuit" src={tuirer} alt=""></img></a>
                        
                </div>
                <div >
                        <a href="https://www.instagram.com/paladinsgame/" target="blank"><img id="ista" src={insta} alt=""></img></a>
                        
                </div>
                </div>
                <div class="textof">
                    <p>2019 Copyright Hi-Rez Studios, INC. All rights reserved.</p>
                </div>
        </footer>
        </div>
    }
}
export default efe;