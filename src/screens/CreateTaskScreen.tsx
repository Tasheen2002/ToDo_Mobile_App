// src/screens/CreateTaskScreen.tsx
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input} from '../components/InputComponents';
import {Button} from '../components/ButtonComponents';
import colors from '../theme/color';
import {useTasks} from '../hooks/useTask';
import {useNavigation} from '@react-navigation/native';

export default function CreateTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');

  const {createTask} = useTasks();
  const navigation = useNavigation();

  const handleCreateTask = () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    createTask(title.trim(), description.trim());
    navigation.goBack();
  };

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
        autoFocus
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
          title="Create Task"
          onPress={handleCreateTask}
          style={styles.button}
        />

        <Button
          title="Cancel"
          variant="outline"
          onPress={() => navigation.goBack()}
          style={styles.button}
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
    gap: 12,
  },
  button: {
    width: '100%',
  },
});
