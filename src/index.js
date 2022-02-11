import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';  
import 'antd/dist/antd.css';
import './index.css';
import Routes from './Routes';
 

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
 
ReactDOM.render( 
 
 
  <Layout>
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"></Menu.Item> 
    </Menu>
  </Header>
  <Layout>
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >       
        <SubMenu key="upload" icon={<UserOutlined />} title="ARQUIVOS">
          <Menu.Item key="1"><a href="/upload">UPLOAD</a></Menu.Item> 
          
         
        </SubMenu>
        <SubMenu key="GERENCIAR" icon={<LaptopOutlined />} title="GERENCIAR">
          <Menu.Item key="5" href="/detalhe"> <a href="/detalhe">Listar</a></Menu.Item>
            </SubMenu>        
      </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>      
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 10,
          margin: 0,
          minHeight: 400,
        }}
      >
       <Routes />
      </Content>
    </Layout>
  </Layout>
</Layout>,


  document.getElementById('root')
); 

 
