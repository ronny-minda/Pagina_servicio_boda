
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

    }
`;

export const Header = styled.header`
    background-color: #D3E5FF;
    display: flex;
    box-shadow: 0px 10px 5px 1px #D3E5FF;
    justify-content: space-around;
    height: 45px;

    span {
        display: flex;
        font-family: 'Ballet', cursive;

        span {
            height: 90%;

            font-size: 30px;
        }

        img {
            height: 100%;
        }
    }

    nav {
        display: flex;
        align-items: center;
        li {
            padding: 0 15px;
            display: inline-block;
            list-style: none;
            a {
                text-decoration: none;
                color: #000;
                font-size: 15px;
                /* font-family: 'Ballet', cursive; */
                font-family: 'Bellota Text', cursive;
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
`;

