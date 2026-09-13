// src/pages/Dashboard.tsx
import { Table, Tag, Button } from 'antd';
import { EyeOutlined, FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { mockReports, type Report } from '../mock/data';
import type { ColumnsType } from 'antd/es/table';

export default function Dashboard() {
  const columns: ColumnsType<Report> = [
    { 
      title: '📋 Название', 
      dataIndex: 'title', 
      key: 'title',
      render: (text) => <strong>{text}</strong>
    },
    { 
      title: '📅 Даты', 
      key: 'dates', 
      render: (_, record) => (
        <span style={{ color: '#666' }}>
          {record.startDate} — {record.endDate}
        </span>
      )
    },
    { 
      title: '💰 Сумма', 
      dataIndex: 'totalAmount', 
      key: 'totalAmount', 
      render: (val: number) => (
        <strong style={{ color: '#52c41a', fontSize: '16px' }}>
          {val.toLocaleString()} ₽
        </strong>
      )
    },
    { 
      title: '🏷️ Статус', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: 'Draft' | 'Submitted' | 'Approved') => {
        const config = {
          Approved: { color: 'success', icon: <CheckCircleOutlined />, text: 'Утвержден' },
          Submitted: { color: 'processing', icon: <ClockCircleOutlined />, text: 'На проверке' },
          Draft: { color: 'warning', icon: <EditOutlined />, text: 'Черновик' },
        };
        const { color, icon, text } = config[status];
        return (
          <Tag color={color} className="status-tag">
            {icon} {text}
          </Tag>
        );
      }
    },
    {
      title: '⚙️ Действия',
      key: 'actions',
      render: (_, record) => (
        <Link to={`/report/${record.id}`}>
          <Button 
            icon={<EyeOutlined />} 
            type="primary"
            className="action-button"
            size="small"
          >
            Просмотр
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <h2 className="page-title">
        <FileTextOutlined />
        Мои отчеты о командировках
      </h2>
      <Table 
        columns={columns} 
        dataSource={mockReports} 
        rowKey="id" 
        pagination={false}
        size="middle"
      />
    </div>
  );
}