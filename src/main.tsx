import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './globalStyled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyled/> 
    {/* Folha de estilo global */}

    <App />
    {/* Estrutura do site */}
  </StrictMode>
)
