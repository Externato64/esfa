import { useSession } from "@/hooks";
import { AuthStorage } from "@/storages";
import { PageProps, Storage } from "@/types";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChildrenArea, Container, MenuArea, MenuBar, NavBar, NavIcon, NavInfo, NavProfile, NavProfileArea } from "./styles";

type RootLayoutProps = {
    authStorage?: AuthStorage;
    children: ReactNode
}

function DashboardLayout({children, authStorage}: RootLayoutProps): JSX.Element {
    const [openMenu, setOpenMenu] = useState(false);

    const router = useRouter();
    const {signOut, isAuthenticated, userData} = useSession();

    // useEffect(() => {
    // if(!isAuthenticated) {
    //     signOut()
    //     .then(() => router.push('/'))
    //     .catch(() => router.push('/'));
    // }
    // //eslint-disable-next-line
    // }, [isAuthenticated]);
    
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
                <MenuArea></MenuArea>
            </MenuBar>
            <ChildrenArea>
                <h1>LAYOUT</h1>
                {children}
            </ChildrenArea>
        </Container>
    );
}

const Layout = inject(Storage.AUTH)(observer(DashboardLayout));
export { Layout };