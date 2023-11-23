import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-auto-rows: 5vh;
    grid-auto-columns: calc(100vh / 20);
`;

export const NavBar = styled.div`
display: flex;
  grid-column-start: 2;
  grid-column-end: 15;
  grid-row: 1;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: end;
`;

export const MenuBar = styled.div`
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 15;
  padding: 0.7rem;
`;

export const MenuArea = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: ${({theme}) => theme.colors.primary};

  border-radius: 0.4rem;
`;

export const ChildrenArea = styled.div`
  grid-column-start: 2;
  grid-column-end: 15;
  grid-row-start: 2;
  grid-row-end: 15;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 1rem;
`;

export const NavInfo = styled.p`
  margin-right: 2rem;
  font-size: 1.3rem;
  b {
    font-size: 1.3rem;
  }
`;

type NavProfileProps = {
    profileImage: string;
}

export const NavProfile = styled.div<NavProfileProps>`
    border: 3px solid ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    background: url(${({ profileImage }) => `'${profileImage}'`});
    background-size: cover;
    height: 3.5rem;
    width: 3.5rem;
    transition: 0.1s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
      
    &:active {
      transform: scale(0.95);
    }
`;

type NavProfileAreaProps = {
  opened: boolean;
};

export const NavProfileArea = styled.div<NavProfileAreaProps>`
    
    @keyframes animationIn {
      0% {
        opacity: 0;
        top: calc(5vh + 1.3rem);
      }
      100% {
        opacity: 1;
        top: calc(5vh + 1.6rem);
      }
    }

    @keyframes animationOut {
      0% {
        opacity: 1;
        top: calc(5vh + 1.6rem);
      }
      99% {
        opacity: 0;
        top: calc(5vh + 1.3rem);
      }
      100% {
        opacity: 0;
        top: calc(5vh + 1.3rem);
        display: none;
      }
    }

    position: absolute;
    ${({opened}) =>
      opened ?
      css`
        animation: animationIn 200ms;
        `
      :
      css`
        animation: animationOut 200ms forwards;
      `
    }

    

    width: 12em;
    
    padding: 1rem;
    
    background-color: ${({theme}) => theme.colors.primary};
    
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);

    top: calc(5vh + 1.6rem);
    right: calc(0% + 2.6rem);

    border-radius: 0.35rem;

    &:after {
      content: '';
      display: block;  
      position: absolute;
      right: calc(0% + 0.4rem);
      bottom: 100%;
      width: 0;
      height: 0;
      border-bottom: 10px solid ${({theme}) => theme.colors.primary};
      border-top: 10px solid transparent;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
`;

export const NavIcon = styled.button`
  width: 100%;
  min-height: 2rem;

  border: none;
  border-radius: 0.35rem;

  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.shape};
  
  font-weight: 600;
  
  overflow: hidden;

  transition: 0.1s;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary_hover};
  }
`;