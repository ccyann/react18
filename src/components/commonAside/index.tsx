import React from "react";
import MenuConfig from "../../config";
import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd'; // 导入Menu的类型

const { Sider } = Layout;
// 定义组件的 Props 接口
interface CommonAsideProps {
    collapsed: boolean;
}

// 动态获取icon的类型注解
const iconToElement = (name: keyof typeof Icon): React.ReactElement | null => {
    const IconComponent = Icon[name] as React.ComponentType<any>;
    return IconComponent ? React.createElement(IconComponent) : null;
};

// 定义MenuConfig的每个项目的类型
interface MenuItem {
    path: string;
    icon?: string;
    label: string;
    children?: MenuItem[];
}

// 将MenuConfig转换为符合Ant Design的Menu`items`属性的格式
const items: MenuProps['items'] = MenuConfig.map((item: MenuItem) => {
    const child = {
        key: item.path,
        icon: item.icon ? iconToElement(item.icon as keyof typeof Icon) : undefined,
        label: item.label,
        children: item.children
            ? item.children.map((ele: MenuItem) => ({
                key: ele.path,
                label: ele.label,
            }))
            : undefined,
    };
    return child
});

const CommonAside: React.FC<CommonAsideProps> = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsed={collapsed}>
            <h3 className="app-name">{collapsed ? '后台' : '通用后台管理'}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{ height: '100%' }}
            />
        </Sider>
    );
};

export default CommonAside;