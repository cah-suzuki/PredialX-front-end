import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
   *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     outline:0;
    }
    html{
        height:100%
    }

    :root{
        --nome: #2222;
        --primary-color: #FF577F;
        --focus-color:#FF427F;
        --primary-negative-color:#59323F;
        --success-color:#3FE864;
        --negative-color:#E83F5B;
        --grey-4:#121214;
        --grey-3:#212529;
        --grey-2:#343B41;
        --grey-1:#868E96;
        --grey-0:#F8F9FA;
    }

    body{
       background:var(--grey-4);
       height:100%
    }

    #root{
        height:100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    body,input,button{
        font-family: 'Inter', sans-serif;
        font-size:12px;
    }

    h1,h2,h3{
        font-weight: bold;
        font-size: 14px;
    }

    button{
        cursor:pointer;
    }
`;
