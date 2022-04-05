import Comentarios from "./components/comentarios";
import "./index.css"
import "./components/comentarios/comentarios.css"
import ComentariosContext from "./contexts";

function App() {
  return (
    <ComentariosContext>
      <div className="App">
        <Comentarios />
      </div>
    </ComentariosContext>
  );
}

export default App;
