import React from "react";
import './index.css';
import { Button, Layout, Dropdown, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { collapseMenu } from '../../store/reducers/tab'

const { Header } = Layout;
// 定义组件的 Props 接口
interface CommonHeaderProps {
    collapsed: boolean;
}
const CommonHeader: React.FC<CommonHeaderProps> = ({ collapsed }) => {
    // 登出
    const logout = () => {

    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer" >
                    退出
                </a>
            ),
        }
    ]
    // 创建dispatch
    const dispatch = useDispatch()
    // 点击展开收起
    const setCollapsed = () => {
        dispatch(collapseMenu())
    }
    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                onClick={() => setCollapsed()}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={<img src={require("../../assets/images/user.png")} />} />
            </Dropdown>
        </Header>
    )
}

export default CommonHeader