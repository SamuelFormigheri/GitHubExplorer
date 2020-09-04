import styled, {css} from 'styled-components';

interface IFormProps {
    hasError: boolean;
}

export const Container = styled.div`
  
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<IFormProps>`
    margin-top: 40px;
    max-width: 715px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        border: 2px solid #FFF;

        ${(props) => props.hasError && css`
            border-color: #C53030;
        `}

        &::placeholder{
            color: #A8A8B3;
        }
    }

    button {
        width: 200px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: 280ms;
        &:hover{
           background: #05b052;
        }
    }
`;

export const ListRepositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: 280ms;

        & + a{
            margin-top: 16px;
        }

        &:hover{
            transform: translateX(10px);
        }

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            margin-left: 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #3D3D4D;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg{
            margin-left: auto;
            color: #CBCBD6;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;