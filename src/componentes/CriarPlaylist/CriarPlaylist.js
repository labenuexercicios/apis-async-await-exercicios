import axios from "axios";
import React, { useState } from "react";
import { Input } from "./styled";
import { Botao, ContainerInputs } from "./styled";
import Musicas from "../Musicas/Musicas"

//  =========================
//           EXTRA
//             -
//       CRIAR PLAYLIST
//  =========================

export default function CriarPlaylist(props) {
  const [titulo, setTitulo] = useState("");

  //   exercício 4
 const addPlaylist = async () =>{
  const body = {
    name: titulo
  };
   try{
     await axios 
    .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
        body,{

          headers: {
            Authorization: "aureana-santos-ammalA"
        }
     })
    
     props.pegaPlaylists();
     setTitulo("");
    
  } catch (error) {
    console.log(error.response);
  }
 }
 const deleteTitulo = async (id) =>{
  try {
    await axios
    .delete (`
    https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
      headers: {
        Authorization: "aureana-santos-ammalA"
      }
    })
    addPlaylist()
  }catch (error) {
    console.log(error)
  }

 }

  // const addPlaylistAntigo = () => {
  //   const body = {
  //     name: titulo
  //   };
  //   axios 
  //   .post(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
  //       body,
  //       headers
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       props.pegaPlaylists();
  //       setTitulo("");
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };

  return (
       <ContainerInputs>
        <Input
        placeholder="Nova Playlist"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <Botao onClick={addPlaylist}>Add Playlist</Botao>
    </ContainerInputs>
  )}


