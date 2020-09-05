import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    max-width: 700px;
    align-items: center;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 25px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            width: 100%;
            padding: 15px;
            color: #f4edeb;

            &::placeholder{
               color: #f4edeb;
            }

            & + input {
                margin-top: 10px;
            }


        }

        button {
            background: #ff9000;
            height: 60px;
            border-radius: 10px;
            border: 0;
            width: 100%;
            padding: 0 15px;
            color: #312e38;
            font-weight: 500;
            margin-top: 15px;
            transition: background-color 0.3s;

            &:hover {
                background: ${shade(0.2, '#FF9000')};
            }
        }

        a {
            color: #f4edeb;
            display: block;
            margin-top: 15px;
            text-decoration: none;
            transition: color 0.4s;

            &:hover {
                color: ${shade(0.2, '#F4EDEB')};
            }
        }
    }

    > a{
        color: #FF9000;
        display: block;
         margin-top: 15px;
        text-decoration: none;
        transition: color 0.4s;
        display:flex;
        align-items:center;

        svg{
            margin-right:15px;
        }

        &:hover{
            color:${shade(0.2, '#FF9000')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat;
    background-size: cover;
`;
