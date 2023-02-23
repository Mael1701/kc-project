import React from 'react';


function MainContainer() {
  const image1 = new Image();
  image1.src = process.env.PUBLIC_URL + './images/onekc.jpg';

  return (
    <div className='main-container'>
      <h1>Le Blue Wall</h1>
        <div className="container">
          <p>
          Team Vitality est née en 2013 de la passion d’amis aux rêves les plus fous. Basés en plein coeur de Paris, nous sommes aujourd’hui l’un des clubs d’esport les plus influents et performants d’Europe, avec l’ambition d’étendre notre impact dans le monde entier.

Nous évoluons sur les plus grandes licences d’esport : Counter-Strike, League of Legends, Rocket League, Valorant, FIFA, et nos équipes comptent plus de 100 titres nationaux et internationaux. Au-delà de la performance, nous travaillons pour préparer les générations futures et révéler tout leur talent.
          </p>
              <img
                className="d-block onekc"
                src={image1.src}
                alt="KC LoL;"
              />
        </div>
    </div>
  );
}

export default MainContainer;
