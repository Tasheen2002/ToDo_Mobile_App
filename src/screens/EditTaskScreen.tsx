import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Input} from '../components/InputComponents';
import {Button} from '../components/ButtonComponents';
import colors from '../theme/color';
import {useTasks} from '../hooks/useTask';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type RouteParams = {
  EditTask: {taskId: string};
};

export default function EditTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [isInitialized, setIsInitialized] = useState(false); // Track if initial values are set

  const {getTaskById, editTask} = useTasks();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'EditTask'>>();

  const taskId = route.params?.taskId;
  if (!taskId) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Task ID not provided
        </Text>
      </View>
    );
  }

  const task = getTaskById(taskId);

  useEffect(() => {
    if (task && !isInitialized) {
      // Only set initial values once
      setTitle(task.title);
      setDescription(task.description || '');
      setIsInitialized(true); // Mark as initialized
    }
  }, [task, isInitialized]);

  const handleUpdateTask = async () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    if (task) {
      try {
        await editTask({
          ...task,
          title: title.trim(),
          description: description.trim(),
        });
        navigation.goBack();
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    }
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', marginTop: 20}}>Task not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Input
        label="Task Title"
        placeholder="Enter task title"
        value={title}
        onChangeText={text => {
          setTitle(text);
          if (text.trim()) setTitleError('');
        }}
        error={titleError}
      />

      <Input
        label="Description (Optional)"
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Update Task"
          onPress={handleUpdateTask}
          style={styles.button}
        />

        <Button
          title="Cancel"
          variant="outline"
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.cancelButton]} // Add extra margin for the Cancel button
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 12,
  },
  button: {
    width: '100%',
  },
  cancelButton: {
    marginTop: 12, // Add spacing between the buttons
  },
});
