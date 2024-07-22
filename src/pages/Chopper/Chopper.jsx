import React from 'react'
import Card from '../../components/Cards/CardTripulation'
import ChopperPicture from '../../assets/images/character-image/chopper-picture.png'

export default function Chopper() {
  return (
    <Card
    name = "Chopper"
    image = {ChopperPicture}
    personDescription = "Rusa kecil ini mendapatkan kemampuan untuk mengubah bentuknya dan berpikir seperti manusia setelah memakan buah Hito Hito no Mi. Chopper adalah anggota yang sangat berharga dari kru Bajak Laut Topi Jerami, bertugas sebagai dokter kru."/>
  )
}
