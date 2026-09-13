// src/pages/CreateReport.tsx
import { Form, Input, DatePicker, Button, Card, message } from 'antd';
import { PlusCircleOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';

export default function CreateReport() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Данные формы:', values);
    message.success('✅ Отчет успешно сохранен (демо)');
    form.resetFields();
  };

  return (
    <div>
      <h2 className="page-title">
        <PlusCircleOutlined />
        Создание нового отчета
      </h2>
      <Card className="form-card" style={{ maxWidth: 700 }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item 
            name="title" 
            label={
              <span>
                <FileTextOutlined style={{ marginRight: 8 }} />
                Название командировки
              </span>
            }
            rules={[{ required: true, message: 'Пожалуйста, введите название' }]}
          >
            <Input placeholder="Например: Поездка в Казань" size="large" />
          </Form.Item>
          
          <Form.Item 
            name="dates" 
            label={
              <span>
                <CalendarOutlined style={{ marginRight: 8 }} />
                Даты поездки
              </span>
            }
            rules={[{ required: true, message: 'Пожалуйста, выберите даты' }]}
          >
            <DatePicker.RangePicker style={{ width: '100%' }} size="large" />
          </Form.Item>

          <Form.Item 
            name="description" 
            label={
              <span>
                <FileTextOutlined style={{ marginRight: 8 }} />
                Описание / Цель
              </span>
            }
          >
            <Input.TextArea 
              rows={4} 
              placeholder="Опишите цель командировки, основные задачи..." 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large"
              icon={<PlusCircleOutlined />}
              className="action-button"
              style={{ width: '100%' }}
            >
              Создать отчет
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}