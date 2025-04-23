// src/screens/TaskScreen.tsx
import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useTasks} from '../hooks/useTask';
import {TaskItem} from '../components/TaskComponents';
import {Button} from '../components/ButtonComponents';
import colors from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskScreen() {
  const {tasks, toggleComplete, removeTask} = useTasks();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onToggleComplete={toggleComplete}
            onPress={task =>
              navigation.navigate('TaskDetail', {taskId: task.id})
            }
            onDelete={removeTask}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="assignment" size={64} color={colors.textLight} />
            <Text style={styles.emptyText}>No tasks yet</Text>
            <Text style={styles.emptySubtext}>
              Add your first task by tapping the button below
            </Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <Button
          title="Add New Task"
          onPress={() => navigation.navigate('CreateTask')}
          style={styles.addButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 300,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  addButton: {
    width: '100%',
  },
});
