import React, { useContext } from "react"
import { ComentariosProvider } from "../../contexts"
import "./style.css"

function ModalDelete() {
  const {
    setRemovido, removido, 
    removerComentario,
    indice, listaDeComentarios
  } = useContext(ComentariosProvider)

  

  return (
    <div className="modal">
      <div className="content">
        <h2 className="title-modal">Delete comment</h2>
        <p>
          Are you sure you want to delete this <br />
          comment? this will remove the comment <br />
          and can´t be undone.
        </p>
        <button
          className="button-cancel button"
          onClick={() => {
            setRemovido(!removido)
          }}
        >
          NO, CANCEL
        </button>

        <button
          onClick={() => {removerComentario(indice, listaDeComentarios)}}
          className="button-delete button"
        >
          YES, DELETE
        </button>
      </div>
    </div>
  )
}


export default ModalDelete