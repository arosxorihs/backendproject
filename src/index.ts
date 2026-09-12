import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware giúp Express đọc được body gửi lên dạng JSON
app.use(express.json());

// 1. Định nghĩa kiểu dữ liệu cho một Task (TypeScript Interface)
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

// 2. Tạo mảng tạm thời trong bộ nhớ để lưu danh sách Todo
const tasks: Task[] = [
  { id: 1, title: 'Học Express cơ bản', isCompleted: true },
  { id: 2, title: 'Tạo ứng dụng TodoList', isCompleted: false },
];

// 3. API lấy toàn bộ danh sách Todo (GET /api/tasks)
app.get('/api/tasks', (req: Request, res: Response) => {
  res.status(200).json({
    data: tasks,
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});