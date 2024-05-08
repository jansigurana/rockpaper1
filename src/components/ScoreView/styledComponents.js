import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:80%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border-color:white;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin-top: 3px;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  font-family:'Bree Serif';
  font-size: 20px;
  color:white;
  margin-bottom: 0px;
  magin-top: 0px;
  @media screen and (max-width: 576px){
    font-size: 16px;
}`
export const ScoreBoard = styled(ScoreNameContainer)`
  align-items: center;
  justify-content:center;
  border-radius: 10px;
  background-color:white;
  height: 100%;
  width:20%;
  @media screen and (max-width: 576px){
    width: 30%;
}`
export const ScoreHeading = styled.p`
  color:#223a5f;
  margin-bottom: 0px;
  font-size: 20px;
  @media screen and (max-width: 576px){
    font-size: 16px;
}`
export const ScoreResult = styled.p`
   font-size: 40px;
   color:#223a5f;
   margin-top: 0px;
   font-family:'Roboto';
   @media screen and (max-width: 576px){
    font-size: 25px;
    margin-top: 10px;
}`
