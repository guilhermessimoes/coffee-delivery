import styled from "styled-components";

export const BannerContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`

export const TitleResum = styled.h1`
  color: ${props => props.theme["yellow-dark"]};
  font-family: 'Baloo 2', cursive;
  font-weight: 900;
  font-size: 32px;
`

export const SubTitleResum = styled.h5`
  color: ${props => props.theme["base-subtitle"]};
  font-size: 20px;
  margin-bottom: 1rem;
  font-weight: 200;
`

export const CardConfirm = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  border: 1px solid purple;
  border-radius: 6px 36px 6px 36px;

  /* background-image: linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1) );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
`

export const TextContainer = styled.div`
  display: grid;
  padding: 2rem;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  #sectionResum{
    display: grid;
    justify-content: center;
    align-items: center;
  }
`

export const IconButtonMap = styled.div`
  border-radius: 9999px;
  padding: 4px;
  background-color: ${props => props.theme["purple-dark"]};
`

export const IconButtonTimer = styled.div`
  border-radius: 9999px;
  padding: 4px;
  background-color: ${props => props.theme["yellow"]};
`

export const IconButtonDollar = styled.div`
  border-radius: 9999px;
  padding: 4px;
  background-color: ${props => props.theme["yellow-dark"]};
`