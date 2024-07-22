import React from 'react'
import SanjiPicture from '../../assets/images/character-image/sanji-picture.png'
import Card from '../../components/Cards/CardTripulation'

export default function Sanji() {
  return (
    <Card 
    name="Sanji" 
    image = {SanjiPicture}
    personDescription = "Juga dikenal sebagai Sanji si Kaki Hitam, bajak laut ini adalah yang kelima bergabung dengan kru Luffy. Tindakannya sebagai bajak laut membuatnya mendapatkan hadiah tertinggi ketiga di antara anggota Topi Jerami, selain berperan sebagai koki resmi kelompok tersebut."/>
  )
}
