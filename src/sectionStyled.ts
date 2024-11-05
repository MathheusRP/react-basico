import styled from "styled-components";

export const Quadrado = styled.section`
    height: 600px;
    width: 100%;
    max-width: 600px;
    background-color: violet;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;

    .quadrados {
        height: 100px;
        width: 100px;
        background-color: springgreen;

        /* Personalização para todas as div com className 'quadrados' */
    }

    .quadrado1 {
        background-color: red;

        /* Personalização para a div de className 'quadrado1' */
    }

    .quadrado2 {
        background-color: blue;

        /* Personalização para a div de className 'quadrado2' */
    }

    .quadrado3 {
      background-color: green;
      border-radius: 30px;

        /* Personalização para a div de className 'quadrado3' */
    }


    .sugestões {
        align-self: center;
        /* Alinha o item ao centro do espaço do pai */

        align-self: end;
        /* Alinha o item ao final do espaço do pai */

        align-items: center;
        /* Alinha todos os elementos filhos ao centro do proprio elemento */

        justify-content: center;
        /* Alinha todos os elementos filhos ao centro do proprio elemento */
    
        justify-content: space-between;
        /* Aplica espaçamento igual entre todos os elementos, e joga o primeiro e ultimo elemento para as extremidades. */

        justify-content: space-around;
        /* Aplica espaçamento igual entre todos os elementos, e aplica a metade do espaçamento entre os elementos na extremidades . */
        
        justify-content: space-around;
        /* Aplica espaçamento igual entre todos os elementos, também aplica espaçamento igual nas extremidades . */
    }

`