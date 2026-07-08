"use client";

import Button from "./component/button";

import IA_image from "./component/IA_image_sombre.jpg";

import MenuDeroulant from "./component/menu_deroulant";

export default function Home() {
  return (
    <main className="min-h-screen bg-center bg-cover bg-fixed bg-no-repeat bg-slate-950 flex flex-col font-sans" 
    style={{
  backgroundImage: `url(${IA_image.src})`,
  backgroundSize: "100%",
}}>   
       <div className="bg-blue/50 flex"></div>
          
      <h1 className="text-6xl font-bold mb-1 text-white text-center justify-start p-15">
        l'IA et les émotions
      </h1>
      
      <MenuDeroulant />
      <div className="ml-64 p-8">

      <div className="text-lg text-white max-w-4xl">
        Découvrez comment l'intelligence artificielle peut comprendre et interpréter les émotions humaines à travers des analyses de données, des modèles de reconnaissance faciale et des algorithmes d'apprentissage automatique. Explorez les applications de l'IA dans la détection des émotions, la personnalisation des expériences utilisateur et l'amélioration de la communication entre les humains et les machines.
      </div>
      <div className="mt-15 flex gap-20 text-white text-2xl">
      Quelques sites qui pourrait vous intéresser sur le sujet de l'IA et des émotions :
      </div>
      <div className="mt-10 mb-2  flex gap-20 text-white ">
        Comment l'IA en est venue à comprendre les émotions humaines ?
      </div>
      <div className="mt-4"><Button text="histoire de l'IA" href="https://fr.wikipedia.org/wiki/Histoire_de_l%27intelligence_artificielle"/></div>

      <div className="mt-10 mb-2 flex gap-20 text-white ">
        Quelles sont les différentes approches des émotions par l'IA ?
      </div>
      <div className="mt-4"><Button text="émotions par l'IA" href="https://recherche.fr/intelligence-artificielle-emotionnelle/"/></div>
      </div>
    </main>
  );
}