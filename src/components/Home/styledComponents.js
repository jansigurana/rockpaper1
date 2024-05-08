import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: 'Bree Serif';
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px){
    margin-bottom: 40px;
  }`
export const PopUpView = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40vh;
  padding: 10px;
  flex-direction: column;
  @media screen and (max-width: 576px){
    width:170px;
    height:250px;
}`
export const PopUpImage = styled.img`
    width:100%;
    height:90%;
    margin-top:auto;
`
