import { Layout } from 'antd';
import React, {Fragment} from 'react';
import { Outlet } from 'react-router';
import SideMenu from "./SideMenu";
const { Content, Footer } = Layout;

const MainMenu = () => {
    return (
        <Fragment>
            <Layout className="w-full h-screen">
                <SideMenu/>
                <Layout>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <Outlet/>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Testing project
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
}

export default MainMenu;