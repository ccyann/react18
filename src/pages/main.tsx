import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import CommonAside from '../components/commonAside';
import CommonHeader from '../components/commonHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const { Content } = Layout;

const Main = () => {
    const collapsed = useSelector((state: RootState) => state.tab.isCollapse)
    return (
        <Layout className='main-container'>
            <CommonAside collapsed={collapsed} />
            <Layout>
                <CommonHeader collapsed={collapsed} />
                <Content
                    style={{
                        margin: 0,
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main