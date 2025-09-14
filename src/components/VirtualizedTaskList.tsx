import React, { memo } from 'react';
import TaskCard, { Task } from './TaskCard';

interface VirtualizedTaskListProps {
  tasks: Task[];
  height: number;
  itemHeight: number;
  onTaskDragStart: (e: React.DragEvent, task: Task) => void;
  onTaskDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const VirtualizedTaskList: React.FC<VirtualizedTaskListProps> = memo(({
  tasks,
  height,
  itemHeight,
  onTaskDragStart,
  onTaskDragEnd,
  onStatusChange
}) => {
  // For now, just render normally without virtualization until react-window is properly configured
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDragStart={onTaskDragStart}
          onDragEnd={onTaskDragEnd}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
});

VirtualizedTaskList.displayName = 'VirtualizedTaskList';

export default VirtualizedTaskList;