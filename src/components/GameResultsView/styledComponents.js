import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  width:350px;
  margin-top:50px;
  flex-wrap:wrap;
  @media screen and (max-width: 576px){
    width:250px;
    height:250px;
    margin-left: 15px;
  }`
export const GameButton = styled.button`
  background-color:transparent;
  border-style:none;
  outline:none;
  width:150px;
  height:150px;
  @media screen and (max-width: 576px){
    width:100px;
    height:100px;
    margin-top: 0px;
    margin-right:20px;
}`
export const GameImage = styled.img`
   width:150px;
   height:150px;
  @media screen and (max-width: 576px){
    width:100px;
    height:100px;
}`
export const ResultImageContainer = styled.div`
   display:flex;
   align-items:center;
   flex-direction:column;
   margin-right:40px;
  @media screen and (max-width: 576px){
    width:40%;
}`
export const ResultName = styled.p`
  color:white;
  font-size:20px;
  @media screen and (max-width: 576px){
    font-size:16px;
}`
export const ResultText = styled.p`
   color:white;
   font-size:25px;
   @media screen and (max-width: 576px){
    font-size:16px;
}`
export const ResultButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  padding: 10px;
  font-size: 10px;
  color: #223a5f;
  outline: none;
  border-radius: 5px;
  border-style: none;
}`
