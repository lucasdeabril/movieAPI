import React, { useState } from 'react';
import './Pagina.css'
import MovieDetails from './Movied';
import slide from './Slide';

export default function Pagina1() {
    return(
        <div className='body'>
            <div className='slider1'>
                <div className='push1'></div>
                <MovieDetails nome="john+wick" />
                <MovieDetails nome="guardians+of+the+galaxy" />
                <MovieDetails nome="batman+begins" />
                <MovieDetails nome="hitman" />
                <MovieDetails nome="spider+man+3" />
                <MovieDetails nome="thor" />
                <MovieDetails nome="Teenage+Mutant+Ninja+Turtles" />
                <MovieDetails nome="hulk" />
                <MovieDetails nome="iron+man" />
                <MovieDetails nome="robots" />
                <div className='controle'>
                    <input className='btn left' type="button" value={'<'} onClick={() => slide('left1')} />
                    <input className='btn right' type="button" value={'>'} onClick={() => slide('right1')} />
                </div>
            </div>
            <div className='slider1'>
                <div className='push2'></div>
                <MovieDetails nome="The+Dark+Knight" />
                <MovieDetails nome="Mad+Max%3A+Fury+Road" />
                <MovieDetails nome="Die+Hard" />
                <MovieDetails nome="The+Matrix" />
                <MovieDetails nome="John+Wick" />
                <MovieDetails nome="The+Raid%3A+Redemption" />
                <MovieDetails nome="L%C3%A9on%3A+The+Professional" />
                <MovieDetails nome="Mission%3A+Impossible+-+Fallout" />
                <MovieDetails nome="Gladiator" />
                <MovieDetails nome="The+Bourne+Identity" />
                <div className='controle'>
                    <input className='btn left' type="button" value={'<'} onClick={() => slide('left2')} />
                    <input className='btn right' type="button" value={'>'} onClick={() => slide('right2')} />
                </div>
            </div>
            <div className='slider1'>
                <div className='push3'></div>
                <MovieDetails nome="The+Shining" />
                <MovieDetails nome="Psycho" />
                <MovieDetails nome="The+Exorcist" />
                <MovieDetails nome="Halloween" />
                <MovieDetails nome="The+Texas+Chainsaw+Massacre" />
                <MovieDetails nome="A+Nightmare+on+Elm+Street" />
                <MovieDetails nome="Get+Out" />
                <MovieDetails nome="The+Babadook" />
                <MovieDetails nome="Hereditary" />
                <MovieDetails nome="The+Conjuring" />
                <div className='controle'>
                    <input className='btn left' type="button" value={'<'} onClick={() => slide('left3')} />
                    <input className='btn right' type="button" value={'>'} onClick={() => slide('right3')} />
                </div>
            </div>
            <div className='slider1'>
                <div className='push4'></div>
                <MovieDetails nome="Casablanca" />
                <MovieDetails nome="Titanic" />
                <MovieDetails nome="The+Notebook" />
                <MovieDetails nome="Pride+and+Prejudice" />
                <MovieDetails nome="Before+Sunrise" />
                <MovieDetails nome="La+La+Land" />
                <MovieDetails nome="Eternal+Sunshine+of+the+Spotless+Mind" />
                <MovieDetails nome="Brokeback+Mountain" />
                <MovieDetails nome="Roman+Holiday" />
                <MovieDetails nome="Silver+Linings+Playbook" />
                <div className='controle'>
                    <input className='btn left' type="button" value={'<'} onClick={() => slide('left4')} />
                    <input className='btn right' type="button" value={'>'} onClick={() => slide('right4')} />
                </div>
            </div>
            <div className='slider1'>
                <div className='push5'></div>
                <MovieDetails nome="Airplane!" />
                <MovieDetails nome="Monty+Python+and+the+Holy+Grail" />
                <MovieDetails nome="Ghostbusters" />
                <MovieDetails nome="Bridesmaids" />
                <MovieDetails nome="Superbad" />
                <MovieDetails nome="The+Hangover" />
                <MovieDetails nome="Anchorman%3A+The+Legend+of+Ron+Burgundy" />
                <MovieDetails nome="Office+Space" />
                <MovieDetails nome="Shaun+of+the+Dead" />
                <MovieDetails nome="The+Big+Lebowski" />
                <div className='controle'>
                    <input className='btn left' type="button" value={'<'} onClick={() => slide('left5')} />
                    <input className='btn right' type="button" value={'>'} onClick={() => slide('right5')} />
                </div>
            </div>

        </div>
        
        
    )
    
}
