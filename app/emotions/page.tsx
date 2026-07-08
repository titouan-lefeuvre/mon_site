"use client";

import MenuDeroulant from "../component/menu_deroulant";

import IA_image from "../component/IA_image.jpg";


export default function emo() {
  return (
<main className="min-h-screen bg-center bg-cover bg-fixed bg-black/70 bg-no-repeat bg-slate-950 flex flex-col font-sans" 
    style={{
  backgroundImage:

  `url(${IA_image.src})`,
  backgroundSize: "100%",

}}>   
    <MenuDeroulant />
        <div className="ml-64 p-8"></div>
    <h1 className="ml-64 p-8 text-6xl font-bold mb-1 text-white text-center justify-start p-15">
      Les émotions et l'IA
    </h1>
    <div className="text-white ml-64 p-8">
        <ul>
            <li className="mt-4 mb-4 text-white text-xl">Une IA peut-elle ressentir des émotions ?
                <div className="mt-4 mb-4 text-white text-base" >
                Non, les IA actuelles ne ressentent pas réellement d'émotions.
                Les émotions humaines (joie, peur, tristesse, colère, etc.) sont liées à la conscience, 
                aux expériences vécues, au cerveau et au corps. Une intelligence artificielle ne possède aucun de ces éléments. Elle traite simplement des informations grâce à des algorithmes.
                Par exemple, lorsqu'un chatbot écrit :« Je suis désolé que vous soyez triste. »il ne ressent pas de compassion. Il reconnaît que tu sembles triste et génère une réponse adaptée à la situation.
                </div>
            </li>
            <li className="mt-4 mb-4 text-white text-xl">Comment l'IA peut-elle reconnaître les émotions humaines ?
                <div className="mt-4 mb-4 text-white text-base">
                L'intelligence artificielle peut reconnaître les émotions humaines en analysant des données provenant de différentes sources, 
                telles que les expressions faciales, le ton de la voix, le langage corporel et le texte écrit. 
                Les algorithmes d'apprentissage automatique sont utilisés pour identifier des modèles et des signaux émotionnels dans ces données. 
                Par exemple, un système d'IA peut être entraîné à détecter la tristesse ou la joie en analysant les micro-expressions faciales ou les variations de la voix. 
                Cependant, il est important de noter que l'IA ne "ressent" pas ces émotions ; elle se contente de les identifier et de réagir en conséquence.
                </div>
            </li>
            <li className="mt-4 mb-4 text-white text-xl">Pourquoi l'IA simule les émotions humaines ?
                <div className="mt-4 mb-4 text-white text-base">
                L'IA simule les émotions humaines pour améliorer l'interaction humaine-IA, créer une expérience plus naturelle et empathique, et faciliter la communication dans des contextes tels que le service client, la santé mentale ou l'éducation.
                </div>
            </li>
            <li className="mt-4 mb-4 text-white text-xl">Exemple représentation d'une émotion par l'IA
                <div className="mt-4 mb-4 text-white text-base">
                Un exemple de représentation d'une émotion par l'IA est l'utilisation d'avatars virtuels ou de robots sociaux qui affichent des expressions faciales et des gestes correspondant à des émotions spécifiques.
                Par exemple, un robot social peut sourire et lever les bras pour exprimer la joie lorsqu'il interagit avec un utilisateur. 
                De même, un avatar virtuel dans une application de réalité virtuelle peut montrer des signes de tristesse, comme des larmes ou une posture affaissée, pour refléter l'état émotionnel d'un personnage ou d'une situation.
                Ces représentations visuelles permettent aux utilisateurs de mieux comprendre et interpréter les émotions simulées par l'IA, facilitant ainsi une interaction plus engageante et intuitive.
                Si on analyse la manière de percevoir les émotions par l'IA, on se rend compte que certaines IA resent impartiales comme claude qui se voit toujours objective et neutre, alors que d'autres IA comme chatGPT peuvent être influencées par les données sur lesquelles elles ont été entraînées, ce qui peut introduire des biais dans la manière dont elles interprètent et simulent les émotions.
                </div>
            </li>
        </ul>
    </div>

</main>

  );
}