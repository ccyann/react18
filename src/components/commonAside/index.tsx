import React from "react";
import MenuConfig from "../../config";
import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd'; // 导入Menu的类型

const { Sider } = Layout;

// 动态获取icon的类型注解
const iconToElement = (name: keyof typeof Icon): React.ReactElement | null => {
    const IconComponent = Icon[name] as React.ComponentType<any>;
    return IconComponent ? React.createElement(IconComponent) : null;
};

// 定义MenuConfig的每个项目的类型
interface MenuItem {
    path: string;
    icon?: string; // 确保icon是一个可选的字符串
    label: string;
    children?: MenuItem[];
}

// 将MenuConfig转换为符合Ant Design的Menu`items`属性的格式
const items: MenuProps['items'] = MenuConfig.map((item: MenuItem) => {
    const child = {
        key: item.path,
        icon: item.icon ? iconToElement(item.icon as keyof typeof Icon) : undefined, // 确保传递正确的键类型
        label: item.label,
        children: item.children
            ? item.children.map((ele: MenuItem) => ({
                key: ele.path,
                label: ele.label,
            }))
            : undefined, // 确保有子菜单时才设置 children
    };
    return child
});

const CommonAside: React.FC = () => {
    return (
        <Sider trigger={null} collapsible>
            <h3 className="app-name">后台管理模版</h3>
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