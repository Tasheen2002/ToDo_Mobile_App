// src/hooks/useTasks.ts
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {
  addTask,
  toggleTaskStatus,
  updateTask,
  deleteTask,
  setTasks,
  Task,
} from '../store/taskSlice';
import {saveTasks, loadTasks} from '../utils/storage';
import {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export const useTasks = () => {
  const dispatch = useDispatch();
  const {tasks, loading, error} = useSelector(
    (state: RootState) => state.tasks,
  );

  // Load tasks from storage on initial render
  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      dispatch(setTasks(storedTasks));
    };
    fetchTasks();
  }, [dispatch]);

  // Save tasks to storage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const createTask = (title: string, description?: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: Date.now(),
    };
    dispatch(addTask(newTask));
    return newTask;
  };

  const toggleComplete = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };

  const editTask = (task: Task) => {
    dispatch(updateTask(task));
  };

  const removeTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const getTaskById = (id: string) => {
    return tasks.find(task => task.id === id);
  };

  return {
    tasks,
    loading,
    error,
    createTask,
    toggleComplete,
    editTask,
    removeTask,
    getTaskById,
  };
};

export default useTasks;
