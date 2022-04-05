import "./comentarios.css"
import Responder from "../respostas"
import { useContext, useState} from "react"
import { ComentariosProvider } from "../../contexts"
import ModalDelete from "../modal"




function Comentarios() {
  const {
    removido, setRemovido, setId,
    verificaEstado, bool, id, json,
    adicionarCurtida, removerCurtida,
    setIndice, setListaDeComentarios,
  } = useContext(ComentariosProvider)

  const [idResposta, setIdResposta] = useState(0)
  const [respostaEditada, setRespostaEditada] = useState("")
  const [editar, setEditar] = useState(false)

  
  function EditarComentario(nome, conteudo, idAtual) {
    if (editar && idResposta === idAtual && nome === "juliusomo") {
      return <textarea
        onChange={(e) => {
          setRespostaEditada(e.target.value)
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    } else return <p className="container__comentario-texto">{conteudo}</p>
  }
  

  return (
    <>
      {json[0].comments.map((comentario, indice) => {
        return (
          <div className="container">
            <div key={indice} className="container_comentarios">
              <div className="container--score">
                <p onClick={() => {
                  adicionarCurtida(comentario.id)
                }}>+</p>
                <p className="comentario__score">{comentario.score}</p>
                <p onClick={() => {
                  removerCurtida(comentario.id)
                }} >-</p>
              </div>
              <div className="comentarios__infos">
                <img className="imagem--perfis" src={comentario.user.image.png} alt="imagem perfil do comentario" />
                <p>{comentario.createdAt}</p>
              </div>
              <p className="container__comentario-texto">{comentario.content}</p>
              <button onClick={() => {
                setId(comentario.id)
                verificaEstado(comentario)
              }} >reponder</button>
            </div>

            {bool === true && id === comentario.id ? <Responder /> : null}

            {comentario.replies.map((r, i) => (
              <div className="container__resposta">
                <div className="container--score">
                  <p
                    onClick={() => {
                      adicionarCurtida(r.id)
                    }}
                  >+</p>
                  <p className="comentario__score">{r.score}</p>
                  <p onClick={() => {
                    removerCurtida(r.id)
                  }}>-</p>
                </div>
                <div className="comentarios__infos">
                  <img className="imagem--perfis" src={r.user.image.png} alt="imagem de perfil do comentario" />
                  <p>{r.createdAt}</p>
                  <div className="delete__edit-container">
                    <p
                      onClick={() => {
                        setRemovido(!removido)
                        setIndice(i)
                        setListaDeComentarios(comentario.replies)
                      }}>{r.user.username === "juliusomo" && "Delete"}</p>
                    <p
                      onClick={() => {
                        setIdResposta(r.id)
                        setEditar(!editar)
                      }}
                    >{r.user.username === "juliusomo" && "Edit"}</p>
                  </div>
                </div>
                {EditarComentario(r.user.username, r.content, r.id)}
                {editar && idResposta === r.id ? <button onClick={() => {
                  r.content = respostaEditada
                  setEditar(false)
                }}>update</button> : null}
              </div>
            ))}

          </div>
        )
      })}
      {removido ? <ModalDelete /> : null}
    </>
  )
}

export default Comentarios