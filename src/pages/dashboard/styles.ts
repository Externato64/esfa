import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(29, 1fr);
    grid-template-rows: repeat(29, 1fr);
    grid-auto-rows: 3.33vh;
    grid-auto-columns: 3.33vw;
`;

export const NavBar = styled.div`
display: flex;
  grid-column-start: 3;
  grid-column-end: 30;
  grid-row: 2;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 1100px){
    display: none;
  }
`;

export const MenuBar = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 30;
  padding: 0.7rem;

  @media screen and (max-width: 1100px){
    grid-column-start: 1;
    grid-column-end: 30;
    grid-row: 2;

    display: flex;
  }
`;

export const MenuArea = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: ${({theme}) => theme.colors.primary};

  border-radius: 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 2.5rem;

  color: ${({theme}) => theme.colors.shape};
  font-weight: 600;

  @media screen and (max-width: 1100px){
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;

type MenuItemProps = {
  activePage: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
    width: 100%;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s;
    
    &:hover {
      border-left: 0.4rem solid ${({theme}) => theme.colors.shape};
      background-color: ${({theme}) => theme.colors.secondary_light};
      cursor: pointer;
    }

    svg {
      font-size: 1.5rem;
    }
    ${({ activePage }) => activePage &&
      css`
        border-left: 0.4rem solid ${({theme}) => theme.colors.shape};
        background-color: ${({theme}) => theme.colors.secondary_light};
      `
    }

  @media screen and (max-width: 1100px){
    max-width: 30%;

    ${({ activePage }) => activePage &&
      css`
        border-left: 0.4rem solid ${({theme}) => theme.colors.shape};
        background-color: ${({theme}) => theme.colors.secondary_light};
      `
    }
  }
`;

export const MenuTitle = styled.p`
  cursor: default;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 1100px){
    margin: 0;
    text-align: left;
  }
`;

export const ChildrenArea = styled.div`
  display: flex;
  grid-column-start: 4;
  grid-column-end: 30;
  grid-row-start: 3;
  grid-row-end: 30;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 1rem;
  overflow-y: scroll;

  @media screen and (max-width: 1100px){
    grid-column-start: 1;
  }
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
        top: calc(5vh + 3rem);
      }
      100% {
        opacity: 1;
        top: calc(5vh + 3.6rem);
      }
    }

    @keyframes animationOut {
      0% {
        opacity: 1;
        top: calc(5vh + 3.6rem);
      }
      99% {
        opacity: 0;
        top: calc(5vh + 3rem);
      }
      100% {
        opacity: 0;
        top: calc(5vh + 3.6rem);
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

    top: calc(5vh + 3.6rem);
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

export const ResponsiveNavProfile = styled(NavProfile)`
  display: none;
  border: 2px solid ${({theme}) => theme.colors.shape};
  height: 2.4rem;
  width: 2.4rem;
  
  @media screen and (max-width: 1100px){
    display: flex;
  }
`;

export const ResponsiveNavProfileArea = styled(NavProfileArea)`
  display: none;
  @media screen and (max-width: 1100px){
    display: flex;
  }
  right: calc(0% + 1.6rem);
`;