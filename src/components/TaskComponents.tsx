// src/components/TaskComponents.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Task} from '../store/taskSlice';
import colors from '../theme/color';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onPress: (task: Task) => void;
  onDelete?: (id: string) => void;
}

export const TaskItem = ({
  task,
  onToggleComplete,
  onPress,
  onDelete,
}: TaskItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(task)}
      activeOpacity={0.7}>
      <TouchableOpacity
        style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
        onPress={() => onToggleComplete(task.id)}>
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completedText]}>
          {task.title}
        </Text>
        {task.description ? (
          <Text
            style={[styles.description, task.completed && styles.completedText]}
            numberOfLines={2}>
            {task.description}
          </Text>
        ) : null}
      </View>

      {onDelete && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(task.id)}>
          <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: colors.completed,
  },
  deleteButton: {
    padding: 8,
  },
  deleteText: {
    color: colors.error,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
