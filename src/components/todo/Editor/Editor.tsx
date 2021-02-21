import React from 'react';
import { NewTaskModal } from '../NewTaskModal/NewTaskModal';
import { TaskList } from '../TaskList/TaskList';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { SortPanel } from '../SortPanel/SortPanel';

export const Editor = () => {
  const [showNewTask, setShowNewTask] = React.useState(false);

  return (
    <Box align="center" justify="center" overflow="scroll">
      <Heading size="small" level={2} textAlign="start">
        Today&apos;s Task
      </Heading>
      <FilterPanel />
      <SortPanel />
      <Button
        icon={<Add />}
        label="Add New Task"
        size="medium"
        type="button"
        onClick={() => setShowNewTask(true)}
        margin="small"
        primary
      />
      <TaskList />

      {showNewTask && <NewTaskModal onClose={() => setShowNewTask(false)} />}
    </Box>
  );
};
