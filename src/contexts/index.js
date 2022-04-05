import React, {useState} from 'react';
import Data from "../data/data.json"


export const ComentariosProvider = React.createContext()

export default function ComentariosContext({children}) {

  //**states 
  const [comentarioDigitado, setComentarioDigitado] = useState("")
  const [bool, setBool] = useState(false)
  const [id, setId] = useState(0)
  const [removido, setRemovido] = useState(false)
  const [indice, setIndice] = useState(0)
  const [listaDeComentarios, setListaDeComentarios] = useState([])
  const [json, setJason] = useState([Data])

  
  // ** functions


  function adicionarCurtida(idAtual) {
    json[0].comments.forEach((comentario) => {
      if (comentario.id === idAtual) {
        if (comentario.score >= 11 && comentario.score < 13) {
          comentario.score += 1
          setJason([...json])
        }
        if (comentario.score < 6) {
          comentario.score += 1
          setJason([...json])
        }
      }
      comentario.replies.forEach((c) => {
        if (c.id === idAtual) {
          if (c.score >= 3 && c.score < 5 && c.user.username === "ramsesmiron") {
            c.score += 1
            setJason([...json])
          }
          if (c.score < 3) {
            c.score += 1
            setJason([...json])
          }
        }
      })
    })

  }

  function removerCurtida(idAtual) {
    json[0].comments.forEach((comentario) => {
      if (comentario.id === idAtual) {
        if (comentario.score > 11) {
          comentario.score -= 1
          setJason([...json])
        }
        if (comentario.score === 5 || comentario.score === 6) {
          comentario.score -= 1
          setJason([...json])
        }
      }
      comentario.replies.forEach((c) => {
        if (c.id === idAtual) {
          if (c.score > 3) {
            c.score -= 1
            setJason([...json])
          }
          if (c.score > 1 && c.user.username === "juliusomo") {
            c.score -= 1
            setJason([...json])
          }
        }
      })
    })
  }



  function verificaEstado(comentario) {
    bool === false ? setBool(true) : setBool(false)
    id !== comentario.id && setBool(true)
  }

  function removerComentario(indice, listaDeComentarios) {
    console.log(indice, listaDeComentarios)
    listaDeComentarios.splice(indice, 1)
    setRemovido(!removido)
  }


  return (
    <ComentariosProvider.Provider value={{
      removerCurtida,
      adicionarCurtida, json,
      indice, listaDeComentarios,
      setListaDeComentarios,
      setIndice,
      removerComentario,
      removido,
      setRemovido,
      comentarioDigitado,
      setComentarioDigitado,
      id, 
      bool, 
      setBool,
      Data,
      setId, 
      verificaEstado
      }}>
      {children}
    </ComentariosProvider.Provider>
  )
}