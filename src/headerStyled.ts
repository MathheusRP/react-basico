import styled from "styled-components";

export const HeaderStyled = styled.header`
    /* Elemento 'header' personalizado com css incluído no próprio escopo */
    width: 100vw; /* Pega 100% da tela */
    height: 120px; /* Unidade de metida mais comum */
    background-color: cornflowerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* Toda personalização abaixo só sera usada apenas se houver os elementos dentro do escopo no elemento pai.
    
        ex:
            <HeaderStyled>
                <div> - Aqui se aplica a customização
                    <p>Texto</p>
                </div>
            </HeaderStyled>

             <OutroElementoPersonalizado>
                <div> - Aqui não se aplica a customização do 'HeaderStyled'
                    <p>Texto</p>
                </div> 
            </OutroElementoPersonalizado>
    */

    .divTitle {
        /* Elemento pai do '<h1> Titutlo </h1>' */
        /* background-color: black; */
        display: flex;
        align-items: center;
        /* justify-content: end; */

        h1 {
            /* Elemento filho do '.divTitle' */
            font-size: 48px;
            color: white;
            /* background-color: red; */
  
        }
    }

    nav {
        /* background-color: coral; */
        gap: 30px;
        display: flex; 
        /* width: 400px; */
        align-self: center;

    }

    .descrição {

        gap: 10px;
        /* Matem uma distancia entre os elementos filhos, apenas entre os elementos, nem antes e nem depois 
        diferente do margin que aplica distancia em todas as direções*/

        align-items: center;
        /* align-items: end; */
        /* align-items: start; */
        /* Alinha todos os itens filhos de forma vertical, mas se coporta de maneira 
        horizontal se o 'flex-direction: column;' esteja ativado */

        align-self: center;
        /* Alinha o proprio elemento com base no espaçamento do elemento pai */
        
         display: flex; 
         /* Altera as regras de posicionamento dos elementos filhos, 
         e possibilita usar outras regras de posicionamento como: 
         (gap, align-items, justify-content, etc...) */

         display: block;
         /*  Exibe de forma padrão todos os elementos */

         display: none;
         /* Esconde o elementos e todos os elementos filho
         
         Para mais informações sobre todos os tipos de 'display' acesse esse vídeo:
         https://www.youtube.com/watch?v=2mrqfW0hM8k
         */
    }

`