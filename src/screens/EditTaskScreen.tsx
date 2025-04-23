// // src/screens/EditTaskScreen.tsx
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Input } from '../components/InputComponents';
// import { Button } from '../components/ButtonComponents';
// import colors from '../theme/color';
// import { useTasks } from '../hooks/useTask';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function EditTaskScreen() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [titleError, setTitleError] = useState('');
  
//   const { getTaskById, editTask } = useTasks();
//   const navigation = useNavigation();
//   const route = useRoute();
//     editTask } = useTasks();
//   const navigation = useNavigation();
//   const route = useRoute();
  
//   const taskId = route.params?.taskId;
//   const task = getTaskById(taskId);
  
//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description || '');
//     }
//   }, [task]);
  
//   const handleUpdateTask = () => {
//     if (!title.trim()) {
//       setTitleError('Title is required');
//       return;
//     }
    
//     if (task) {
//       editTask({
//         ...task,
//         title: title.trim(),
//         description: description.trim(),
//       });
//       navigation.goBack();
//     }
//   };

//   if (!task) {
//     return null;
//   }

//   return (
//     <ScrollView 
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <Input
//         label="Task Title"
//         placeholder="Enter task title"
//         value={title}
//         onChangeText={(text) => {
//           setTitle(text);
//           if (text.trim()) setTitleError('');
//         }}
//         error={titleError}
//       />
      
//       <Input
//         label="Description (Optional)"
//         placeholder="Enter task description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//         numberOfLines={4}
//       />
      
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Update Task"
//           onPress={handleUpdateTask}
//           style={styles.button}
//         />
        
//         <Button
//           title="Cancel"
//           variant="outline"
//           onPress={() => navigation.goBack()}
//           style={styles.button}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   contentContainer: {
//     padding: 16,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     gap: 12,
//   },
//   button: {
//     width: '100%',
//   },
// });