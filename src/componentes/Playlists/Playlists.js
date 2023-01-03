import axios from "axios";
import React, { useEffect, useState } from "react";
import { headers } from "../../headers";
import CriarPlaylist from "../CriarPlaylist/CriarPlaylist";
import Musicas from "../Musicas/Musicas";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  //   Exercício 2 (o 1 é leitura da documentação)
  const pegaPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((res) => {
        setPlaylists(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    pegaPlaylists();
  }, []);


  const deletePlaylist = async (id) =>{
    try {
      await axios
      .delete (`
      https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
        headers: {
          Authorization: "aureana-santos-ammalA"
        }
      })
      pegaPlaylists();
    }catch (error) {
      console.log(error)
    }
  
   }
  
  return (
    
    <div>
      <CriarPlaylist pegaPlaylists={pegaPlaylists} />
      {playlists.map((playlist) => {
        return <><Musicas key={playlist.id} id={playlist.id} playlist={playlist} />
        <button onClick={()=>{deletePlaylist(playlist.id)}}>delete </button></>
      })}
    </div>
  );
}

export default Playlists;
