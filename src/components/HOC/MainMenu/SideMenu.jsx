import React, {Fragment, useEffect, useState} from 'react';
import {Menu, Layout} from "antd";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const {Sider} = Layout;

function SideMenu(props) {
    const location=useLocation();
    const [key,setKey]=useState(getSelectedKey(location))

    useEffect(()=>{
        setKey(getSelectedKey(location))
    },[location])

    return (
        <Fragment>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log('broken', broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log('onCollapse', collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={key}
                >
                    <Menu.Item key={1}><Link to='/'/>Dashboard</Menu.Item>
                    <Menu.Item key={2}><Link to="/orders">Orders</Link></Menu.Item>
                    <Menu.Item key={3}><Link to="/requests"/>Wish List</Menu.Item>
                    <Menu.Item key={4}><Link to="/books">Books List</Link></Menu.Item>
                </Menu>
            </Sider>
        </Fragment>
    );
}

export default SideMenu;

export const getSelectedKey =  ({pathname}) => {
    if(pathname !=='/books/new' &&  pathname.includes('books')){
        return ['4']
    }
    if(pathname.includes('orders')){
        return ['2']
    }
    switch(pathname){
        case '/' :
            return ['1'];
        case "" :
            return ['1'];
        case "/orders":
            return ['2'];
        case "/requests":
            return ['3'];
        case "/books":
            return ['4'];
        default:
            return ['1'];

    }
}
