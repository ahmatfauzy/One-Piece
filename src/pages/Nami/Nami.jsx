import React from 'react'
import Card from '../../components/Cards/CardTripulation'
import NamiPicture from '../../assets/images/character-image/nami-picture.png'

export default function Nami() {
  return (
    <Card
    name="Nami" 
    image = {NamiPicture}
    personDescription = "Yatim piatu karena perang, Nami diadopsi oleh Bell-mere, seorang wanita dari Angkatan Laut, saat masih kecil. Ketika tumbuh bersama saudara angkatnya, Nojiko, Nami sudah menunjukkan kecintaannya dalam menggambar peta, bermimpi suatu hari bisa membuat peta seluruh dunia."/>
  )
}
