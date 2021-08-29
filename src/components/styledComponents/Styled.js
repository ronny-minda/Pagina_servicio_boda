
import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
} from "styled-components";

export const GlabalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    body {
        background-color: #E0EDFF;


        .header.Home .home {
            color: #67A6FF;

            &:after {
                display: block;
                content: "";
                background-color: #67A6FF;
                height: 1.5px;
                width: 120%;
                transition: .4s;
            }

        }

        .header.About .about {
            color: #67A6FF;

            &:after {
                display: block;
                content: "";
                background-color: #67A6FF;
                height: 1.5px;
                width: 120%;
                transition: .4s;
            }

        }

        .header.Services .services {
            color: #67A6FF;

            &:after {
                display: block;
                content: "";
                background-color: #67A6FF;
                height: 1.5px;
                width: 120%;
                transition: .4s;
            }

        }

        .header.Galery .galery {
            color: #67A6FF;

            &:after {
                display: block;
                content: "";
                background-color: #67A6FF;
                height: 1.5px;
                width: 120%;
                transition: .4s;
            }

        }

        .header.Contact .contact {
            color: #67A6FF;

            &:after {
                display: block;
                content: "";
                background-color: #67A6FF;
                height: 1.5px;
                width: 120%;
                transition: .4s;
            }

        }
        main {

            
        }
        /* @media (max-width: 1200px) {
            main {
                width: 90%;
                margin: auto;
            }
        } */

        @media (min-width: 1200px) {
            main {
                width: 90%;
                margin: auto;

            }
        }
        
        
        @media (min-width: 600px) {
            .articulo {
                width: 100%;
                display: flex;
            }
        }
        @media (max-width: 600px) {
            .articulo {
                width: 100%;
                display: block;
            }
        }
    }

`;

export const Header = styled.header`
    background-color: #D3E5FF;
    display: flex;
    box-shadow: 0px 10px 5px 1px #D3E5FF;
    justify-content: space-around;
    height: 45px;

    .btn {
        display: none;
    }

    .logo {
        display: flex;
        font-family: 'Ballet', cursive;
        text-decoration: none;
        color: #111775;

        span {
            height: 90%;

            font-size: 30px;
        }

        img {
            height: 100%;
        }
    }

    nav {
        margin-left: 0%;
        display: flex;
        align-items: center;
        li {
            padding: 0 15px;
            display: inline-block;
            list-style: none;
            a {
                text-decoration: none;
                color: #000;
                font-size: 25px;
                font-weight: 400;
                font-family: 'Tangerine', cursive;
                transition: .4s;
                font-weight: 800;

                &:after {
                    display: block;
                    content: "";
                    background-color: #000;
                    height: 1.5px;
                    width: 0%;
                    transition: .4s;
                }

                &:hover::after {
                    background-color: #67A6FF;
                    width: 120%;
                }

                &:hover {
                    color: #67A6FF;
                }
            }

            


            
        }
    }
    
    @media (max-width: 700px) {
        nav {
            margin-left: 0%;
        }
    }

    @media (max-width: 560px) {
        .btn {
            position: relative;
            display: inline-block;
            cursor: pointer;
            .bar1, .bar2, .bar3 {
                width: 35px;
                height: 5px;
                background-color: #4D72FF;
                margin: 6px 0;
                transition: 0.4s;
            }
        }
        .change .bar1 {
            transform: rotate(-45deg) translate(-9px, 6px);
        }

        .change .bar2 {opacity: 0;}

            .change .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        }

        nav {
            transition: 1s;
            clip-path: circle( ${props => props.clipPath }% at 82% 2.5%);
            margin-left: 0%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FFADADcc;
            position: fixed;
            height: 100%;
            width: 100%;
            li {
                margin: 20px 0;
                padding: 0px;
                display: inline-block;
                list-style: none;
                a {
                    text-decoration: none;
                    color: #000;
                    font-size: 70px;
                    font-family: 'Tangerine', cursive;
                    transition: .4s;

                    &:after {
                        display: block;
                        content: "";
                        background-color: #000;
                        height: 1.5px;
                        width: 0%;
                        transition: .4s;
                    }

                    &:hover::after {
                        background-color: #67A6FF;
                        width: 120%;
                    }

                    &:hover {
                        color: #67A6FF;
                    }
                }

                


                
            }
        }
    }
`;

export const CartAticulo = styled.article`
    background-color: #B9D9EE88;
    box-shadow: 3px 5px 41px 24px #96B7BF;

    align-items: center;
    width: 80%;
    margin: 20px auto;

    @media (max-width: 600px) {
        img {
            height: 200px;
            width: 100%;
            object-fit: contain;
        }
        div {
            padding: 20px;
            width: 100%;
            h2 {
                font-size: 40px;
                font-family: 'Ballet', cursive;
            }
            p {
                font-family: 'Tangerine', cursive;
                font-size: 15px;
            }
            a {
                color: #000000;
                text-decoration: none;
                font-family: 'Tangerine', cursive;
                font-size: 25px;
                font-weight: 700;
            }
            a:hover {
                color: #67A6FF;
            }
        }
    }
    @media (min-width: 600px) {
        img {
            height: 200px;
            width: 40%;
            object-fit: contain;
        }
        div {
            padding: 20px;
            width: 60%;
            h2 {
                font-size: 40px;
                font-family: 'Ballet', cursive;
            }
            p {
                font-family: 'Tangerine', cursive;
                font-size: 15px;
            }
            a {
                color: #000000;
                text-decoration: none;
                font-family: 'Tangerine', cursive;
                font-size: 25px;
                font-weight: 700;
            }
            a:hover {
                color: #67A6FF;
            }
        }
    }
    
    
`;


export const MainHome = styled.main`

    /* font-family: 'Ballet', cursive;
    font-family: 'Bellota Text', cursive; 
    font-family: 'Tangerine', cursive;*/

    .presentacion {
        display: flex;
        flex-direction: row;

        img {
            height: 100%;
            border-radius: 0 0% 80% 0;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #8FC9F033;

            h1 {
                width: 90%;
                font-family: 'Ballet', cursive;
                font-size: 40px;
            }

            p {
              width: 90%;  
              font-size: 20px;
              font-family: 'Bellota Text', cursive;
              font-family: 'Ballet', cursive;
              font-family: 'Tangerine', cursive;
              font-weight: 700;
            }
        }

    }
    @media (max-width: 800px) {
        .presentacion {
            flex-direction: column;
            div {
                padding-top: 50px;
            }
        }
    }
`;

export const MainAbout = styled.main`
    text-align: center;
    margin: 20px 0;
    h2 {
        font-size: 40px;
        font-family: 'Ballet', cursive;
    }
    p {
        font-family: 'Tangerine', cursive;
        font-size: 20px;
    }
    @media (min-width: 560px) {
        section {
            margin-top: 20px;
            display: flex;
            width: 100%;
            div {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                h3 {
                    font-size: 30px;
                    font-family: 'Ballet', cursive;
                }
                p {

                }
            }
            img {
                width: 50%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 560px) {
        section {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 20px;
            div {
                width: 100%;
                h3 {
                    font-size: 30px;
                    font-family: 'Ballet', cursive;
                }
                p {
                    margin-bottom: 20px;
                }
            }
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
        }
    }
    
`;

export const Footer = styled.footer`
    background-color: #B9D9EE88;
    box-shadow: 0px -10px 5px 1px #D3E5FF;
    font-family: 'Tangerine', cursive;
    height: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    section {

        margin: 0 2%;
        h3{
            font-size: 30px;
        }
        p {
            font-size: 15px;
        }
    }
`;