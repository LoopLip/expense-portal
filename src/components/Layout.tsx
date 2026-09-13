// src/components/Layout.tsx
import { Layout, Menu, Typography } from 'antd';
import { PlusCircleOutlined, DashboardOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function AppLayout() {
  const location = useLocation();

  const menuItems = [
    { 
      key: '/', 
      icon: <DashboardOutlined />, 
      label: <Link to="/">Главная</Link> 
    },
    { 
      key: '/create', 
      icon: <PlusCircleOutlined />, 
      label: <Link to="/create">Новый отчет</Link> 
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={260} className="app-sider">
        <div className="app-logo">
          <Title level={4} style={{ margin: 0, color: '#2c3e50' }}>
            💼 Expense Portal
          </Title>
        </div>
        <Menu 
          mode="inline" 
          selectedKeys={[location.pathname]} 
          items={menuItems} 
          style={{ borderRight: 0, marginTop: 8 }}
        />
      </Sider>
      
      <Layout>
        <Header className="app-header" style={{ padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>
            📊 Портал командировочных расходов
          </Title>
        </Header>
        
        <Content className="app-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}