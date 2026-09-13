// src/pages/ReportDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { Descriptions, Table, Button, Card, Empty, Tag } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, CheckCircleOutlined, DollarOutlined, FileTextOutlined } from '@ant-design/icons';
import { mockReports } from '../mock/data';

export default function ReportDetails() {
  const { id } = useParams();
  const report = mockReports.find(r => r.id === Number(id));

  if (!report) {
    return <Empty description="Отчет не найден" />;
  }

  const expenseColumns = [
    { 
      title: '📅 Дата', 
      dataIndex: 'date', 
      key: 'date' 
    },
    { 
      title: '🏷️ Категория', 
      dataIndex: 'category', 
      key: 'category',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    { 
      title: '📝 Описание', 
      dataIndex: 'description', 
      key: 'description' 
    },
    { 
      title: '💰 Сумма', 
      dataIndex: 'amount', 
      key: 'amount', 
      render: (val: number) => (
        <strong style={{ color: '#52c41a', fontSize: '15px' }}>
          {val.toLocaleString()} ₽
        </strong>
      )
    },
  ];

  const statusConfig = {
    Approved: { color: 'success', text: '✅ Утвержден' },
    Submitted: { color: 'processing', text: '⏳ На проверке' },
    Draft: { color: 'warning', text: '📝 Черновик' },
  };

  return (
    <div>
      <Link to="/">
        <Button 
          icon={<ArrowLeftOutlined />} 
          style={{ marginBottom: 16 }}
          size="large"
        >
          Назад к списку
        </Button>
      </Link>
      
      <Card 
        title={
          <span style={{ fontSize: '20px', fontWeight: 600 }}>
            <FileTextOutlined style={{ marginRight: 12, color: '#667eea' }} />
            {report.title}
          </span>
        }
        style={{ marginBottom: 24 }}
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={
            <span><CalendarOutlined /> Период</span>
          }>
            <strong>{report.startDate}</strong> — <strong>{report.endDate}</strong>
          </Descriptions.Item>
          <Descriptions.Item label={
            <span><CheckCircleOutlined /> Статус</span>
          }>
            <Tag color={statusConfig[report.status].color} style={{ fontSize: '14px', padding: '4px 12px' }}>
              {statusConfig[report.status].text}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label={
            <span><DollarOutlined /> Итого</span>
          }>
            <strong style={{ color: '#52c41a', fontSize: '18px' }}>
              {report.totalAmount.toLocaleString()} ₽
            </strong>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card 
        title={
          <span style={{ fontSize: '18px', fontWeight: 600 }}>
            💳 Расходы ({report.expenses.length})
          </span>
        }
      >
        <Table 
          columns={expenseColumns} 
          dataSource={report.expenses} 
          rowKey="id" 
          pagination={false}
          size="middle"
        />
      </Card>
    </div>
  );
}