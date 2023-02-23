import styled from "styled-components";
import BackgroundBanner from '../../assets/BackgroundBanner.svg'

export const BannerContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-image: url(${BackgroundBanner});
  background-repeat: no-repeat;
  margin-bottom: 2rem;

  img {
    width: 476px;
  }
`

export const SpanBanner = styled.div`
 display: grid;
 gap: 1rem;
 
 margin-left: 1rem;
 
  h1 {
    background-color: ${props => props.theme["base-title"]};
    font-weight: 900;
    font-size: 48px;
    font-family: 'Baloo 2', cursive;
  }
  h1 span {
    font-size: 20px;
  }
`

export const GridSpan = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  span {
    display: flex;
    align-items: center;  
    font-size: 16px;
  }  
`

export const BackGroundIconCart = styled.div`
  background-color: ${props => props.theme["yellow-dark"]};
  border-radius: 999px;
  padding: 6px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: 4px;
`

export const BackGroundIconTimer = styled.div`
  background-color: ${props => props.theme["purple-dark"]};
  border-radius: 999px;
  padding: 6px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: 4px;
`

export const BackGroundIconPackage = styled.div`
  background-color: ${props => props.theme["base-text"]};
  border-radius: 999px;
  padding: 6px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: 4px;
`

export const BackGroundIconCoffee = styled.div`
  background-color: ${props => props.theme["yellow-light"]};
  border-radius: 999px;
  padding: 6px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: 4px;
`

