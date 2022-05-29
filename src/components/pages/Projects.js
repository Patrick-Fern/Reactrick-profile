import React from "react";
import robotGladiators from '../../assets/images/robot-gladiators.jpg';
import wineNDine from '../../assets/images/dine-n-wine.png';
import weather from '../../assets/images/whats-the-weather-like.png';

export default function Projects() {
    return (
        <div>
            <div class="first-app">
                <a target="_blank" href="https://cesarsiguencia.github.io/dine-n-wine/">
                    <img src={wineNDine} alt="dine n wine landing page" />
                    <div class="first-app-name">Dine-n-Wine</div> 
                </a>
            </div>
            <div class="other-app">
                    <a target="_blank" href="https://patrick-fern.github.io/robot-gladiators/">
                        <img src={robotGladiators} alt="two robots in a boxing ring, ready to fight" />
                        <div class="app-name">Robot Gladiators</div>
                    </a>
            </div>
            <div class="other-app">
                    <a target="_blank" href="https://patrick-fern.github.io/whats-the-weather-like/">
                        <img src={weather} alt="a weather forecast website" />
                        <div class="h-app-name">What's the Weather like</div>
                    </a>
            </div>
        </div>
    )
}