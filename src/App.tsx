import { HeaderStyled } from "./headerStyled"
import { Quadrado } from "./sectionStyled"

function App() {

  return (
    <>
      <HeaderStyled> 
      {/* Elemento header criado de forma personalizada com css já incluido */}
    
      {/* Abaixo temos elementos html padrão que fica dentro do escopo do elemento HeaderStyled */}
        <div className="divTitle">
          <h1>Minha loja</h1> 
        </div>
        <nav className="divButton">
          <a href="">Home</a>
          <a href="">Loja</a>
          <a href="">Sobre</a>
        </nav>
      </HeaderStyled>

      <Quadrado>
      {/* Elemento personalizado que não esta vinculado ao elemento personalizado 'HeaderStyled' */}

        <div className="quadrados quadrado1">
        </div>
        <div className="quadrados quadrado2">

        </div>
        <div className="quadrados quadrado3">

        </div>  
      </Quadrado>
    </>
    
  )
}

export default App
