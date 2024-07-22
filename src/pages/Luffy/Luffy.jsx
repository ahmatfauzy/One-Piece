import React from "react";
import Card from "../../components/Cards/CardTripulation";
import LuffyPicture from "../../assets/images/character-image/luffy-picture.png";

export default function Luffy() {
  return (
    <>
      <Card
        name="Monkey D. Luffy"
        image={LuffyPicture}
        personDescription="Luffy si Topi Jerami, sebagaimana dia dikenal, adalah protagonis dalam anime ini, dan pendiri serta kapten dari kru Bajak Laut Topi Jerami. Sejak masih sangat muda, impian terbesarnya adalah suatu hari menemukan harta karun legendaris Gol D. Roger, untuk menjadi Raja Bajak Laut yang baru."
      />
    </>
  );
}
