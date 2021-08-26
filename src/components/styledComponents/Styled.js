
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

    .logo {
        display: flex;
        font-family: 'Ballet', cursive;
        text-decoration: none;
        color: #000;

        span {
            height: 90%;

            font-size: 30px;
        }

        img {
            height: 100%;
        }
    }

    nav {
        margin-left: 20%;
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
                background-color: #333;
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
                    font-size: 40px;
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
    }
`;

