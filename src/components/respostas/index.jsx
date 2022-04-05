import { useContext} from "react";
import  { ComentariosProvider } from "../../contexts";
import currentUser from "./image-juliusomo.png"

function Responder() {
  
  const {
    id,Data,
    comentarioDigitado, 
    setComentarioDigitado,
    setBool
  } = useContext(ComentariosProvider)


  function escreveComentario(e) {
    setComentarioDigitado(e.target.value)
  }

  function salvaComentario() {
    Data.comments.forEach((comentario) => {
      if (comentario.id === id){
        comentario.replies.push({
          id: new Date().getTime(),
          content:comentarioDigitado,
          createdAt: "Today",
          score: 0,
          user:{
            image:{
              png:currentUser
            },
            username: "juliusomo"
          }
        })
      }
    })
    setBool(false)
    setComentarioDigitado("")
  }
  

  return (
    <div>
        <>
          <textarea
            name="resposta"
            id="resposta"
            cols="30"
            rows="10"
            value={comentarioDigitado}
            onChange={escreveComentario}
          >
          </textarea>

          <button onClick={salvaComentario}> enviar comentario </button>
        </>
      )
    </div>

  );
}

export default Responder;