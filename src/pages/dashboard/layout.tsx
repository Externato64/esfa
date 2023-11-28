import { useSession } from "@/hooks";
import { AuthStorage } from "@/storages";
import { PageProps, Pages, Storage } from "@/types";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ChildrenArea, Container, MenuArea, MenuBar, MenuItem, MenuTitle, NavBar, NavIcon, NavInfo, NavProfile, NavProfileArea } from "./styles";

type RootLayoutProps = {
    authStorage?: AuthStorage;
    children: ReactNode
}

function DashboardLayout({children, authStorage}: RootLayoutProps): JSX.Element {
    const router = useRouter();

    const [openMenu, setOpenMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState(router.pathname as Pages);
    

    const {signOut, isAuthenticated, userData} = useSession();

    useEffect(() => {
    if(!isAuthenticated) {
        signOut()
        .then(() => router.push('/'))
        .catch(() => router.push('/'));
    }
    //eslint-disable-next-line
    }, [isAuthenticated]);

    const handlePush = (page: Pages) => {
        setCurrentPage(page);
        router.push(page);
    };
    
    return (
        <Container>
            <NavBar>
                <NavInfo>Olá, <b>{userData?.name ?? 'no-user'}</b></NavInfo>
                <NavProfile
                    profileImage={userData?.photo ?? '/images/logo_externato.png'}
                    onClick={() => setOpenMenu(!openMenu)}
                />
                <NavProfileArea
                    opened={openMenu}
                >
                    <NavIcon>SAIR</NavIcon>
                </NavProfileArea>
                
            </NavBar>
            <MenuBar>
                <MenuArea>
                    <MenuTitle>ExsfaCX</MenuTitle>
                    <MenuItem
                        activePage={currentPage === Pages.HOME}
                        onClick={() => handlePush(Pages.HOME)}
                    >
                        <FaRegUser />
                    </MenuItem>
                    <MenuItem
                        activePage={currentPage === Pages.PRODUCTS}
                        onClick={() => handlePush(Pages.PRODUCTS)}
                    >
                        <AiOutlineShoppingCart />
                    </MenuItem>
                </MenuArea>
            </MenuBar>
            <ChildrenArea>
                {children}
            </ChildrenArea>
        </Container>
    );
}

const Layout = inject(Storage.AUTH)(observer(DashboardLayout));
export { Layout };