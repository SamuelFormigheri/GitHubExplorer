import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content: space-between;

  a{
      display:flex;
      align-items: center;
      text-decoration: none;
      color: #A8A8B3;
      transition: 280ms;

      &:hover{
        color: #666; 
      }

      svg{
          margin-right: 4px;
      }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    div{
        margin-left: 24px;
        
        strong{
            font-size: 36px;
            color: #3D3D4D;
        }

        p{
            font-size: 18px;
            color: #737380;
            margin-top: 4px;
        }

    }

  }

  ul{
    display:flex;
    list-style: none;
    margin-top: 40px;

    li{

        & + li {
            margin-left: 80px;
        }

       strong{
           display: block;
           font-size: 28px;
           color: #3D3D4D;
       } 

       span{
           display: block;
           margin-top: 4px;
           color: #6C6C80;
       }
    }
  }
`;

export const IssuesList = styled.div`
margin-top: 80px;

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