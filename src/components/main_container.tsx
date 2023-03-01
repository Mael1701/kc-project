import React from 'react';


function MainContainer() {
  const image1 = new Image();
  image1.src = process.env.PUBLIC_URL + './images/onekc.jpg';

  return (
    <div className='main-container'>
      <h1>Le Blue Wall</h1>
        <div className="container">
          <p>
           La Karmine Corp (surnommée KCorp) est une structure française centrée autour d'une équipe e-sport immatriculée
           à Tours et basée à Paris. Elle est formée le 30 mars 2020 sous le nom de Kameto Corp par le duo de streamers
           francophones Kameto et Kotei. Le 16 novembre 2020, l'entrepreneur et rappeur français Prime rejoint la direction
           de la structure, et l'équipe prend sa dénomination actuelle. Une société par actions simplifiée, présidée par
           Kameto et dirigée par Prime, est créée quelques mois plus tard.<br/><br/>
           L'équipe League of Legends nous a value le surnom de "Blue Wall" avec notre domination sur l'Europe au niveau
           des ERLS pendant quasiment 2 ans de suite. Maintenant on nous connaît dans le monde entier, et nous representons nos couleurs sur 6 jeux différents
           ( League of legends, Valorant, Rocket League, Teamfight Tactic, TrackMania et Super Smash Bros Ultimate). Nous avons
           pour ambition de de devenir Champion du Monde sur chacun de ces jeux.
          </p>
              <img
                className="d-block onekc"
                src={image1.src}
                alt="KC"
              />
        </div>
    </div>
  );
}

export default MainContainer;
