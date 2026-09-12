import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// sample datas 
// data type template for Task
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

// array containing sample datas
let tasks: Task[] = [
  { id: 1, title: 'Học cú pháp JavaScript cơ bản', isCompleted: true },
  { id: 2, title: 'Tự viết API Express đầu tiên', isCompleted: false },
  { id: 3, title: 'Tập dùng Thunder Client', isCompleted: false }
];

// get all tasks 
app.get('/api/tasks', (req: Request, res: Response) => {
  res.status(200).json({
    operation: 'tasks',
    result: tasks
  });
});

// get a specific task by ID
app.get('/api/tasks/:id', (req: Request, res: Response) => {
for (let i = 0; i < tasks.length; i++) {
  const taskId = Number(req.params.id);
  if (tasks[i].id === taskId) {
    res.status(200).json({
      operation: 'task',
      result: tasks[i]
    });
    return;
  }
}
res.status(404).json({
  error: 'Task not found'
});
});
/* // GET /api/tasks/:id - Lấy chi tiết 1 task theo ID
app.get('/api/tasks/:id', (req: Request, res: Response) => {
  // 1. Ép kiểu id từ string sang number
  const taskId = Number(req.params.id as string);

  // 2. Dùng hàm .find() để tìm task có id trùng khớp
  const task = tasks.find((item) => item.id === taskId);

  // 3. Nếu không tìm thấy (task là undefined) -> trả về lỗi 404
  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  // 4. Nếu tìm thấy -> trả về dữ liệu task với mã 200
  res.status(200).json({
    operation: 'task',
    result: task
  });
}); */

app.get('/api/tasks/add', (req: Request, res: Response) => {
  
  res.status(201).json({
    operation: 'tasks',
    result: tasks
  });
});

// sum and divide functions
app.get('/api/add/:num1/:num2', (req: Request, res: Response) => {
const a = Number(req.params.num1 as string);
const b = Number(req.params.num2 as string);
const sum = a+b;
res.status(200).json({
  operation: 'add',
  num1: a,
  num2: b,
  result: sum
});
} );
app.get('/api/divide/:num1/:num2', (req: Request, res: Response) => {
const a = Number(req.params.num1 as string);
const b = Number(req.params.num2 as string);
const div = a/b;
if (b === 0) {
  res.status(400).json({
    error: 'Không thể chia cho 0' })
    return;
  };
res.status(200).json({
  operation: 'divide',
  num1: a,
  num2: b,
  result: div
});
} );
app.listen(PORT, () => {
  console.log(`Server đang lắng nghe tại: http://localhost:${PORT}`);
});