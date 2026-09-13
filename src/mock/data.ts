// src/mock/data.ts

export interface Expense {
  id: number;
  date: string;
  category: string;
  amount: number;
  description: string;
}

export interface Report {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  status: 'Draft' | 'Submitted' | 'Approved';
  totalAmount: number;
  expenses: Expense[];
}

export const mockReports: Report[] = [
  {
    id: 1,
    title: 'Командировка в Москву',
    startDate: '2023-10-01',
    endDate: '2023-10-05',
    status: 'Approved',
    totalAmount: 25000,
    expenses: [
      { id: 1, date: '2023-10-01', category: 'Транспорт', amount: 5000, description: 'Билеты на поезд' },
      { id: 2, date: '2023-10-02', category: 'Проживание', amount: 15000, description: 'Гостиница' },
      { id: 3, date: '2023-10-03', category: 'Питание', amount: 5000, description: 'Обеды' },
    ],
  },
  {
    id: 2,
    title: 'Конференция в СПб',
    startDate: '2023-11-10',
    endDate: '2023-11-12',
    status: 'Draft',
    totalAmount: 12000,
    expenses: [
      { id: 4, date: '2023-11-10', category: 'Транспорт', amount: 7000, description: 'Самолет' },
      { id: 5, date: '2023-11-11', category: 'Мероприятие', amount: 5000, description: 'Регистрационный взнос' },
    ],
  },
];