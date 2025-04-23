// // src/screens/TaskDetailScreen.tsx
// import React, {useLayoutEffect} from 'react';
// import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
// import {useTasks} from '../hooks/useTask';
// import {Button} from '../components/ButtonComponents';
// import colors from '../theme/color';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function TaskDetailScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const {getTaskById, toggleComplete, removeTask} = useTasks();

//   const taskId = route.params?.taskId;
//   const task = getTaskById(taskId);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: task?.title || 'Task Details',
//     });
//   }, [navigation, task]);

//   if (!task) {
//     return (
//       <View style={styles.notFound}>
//         <Text style={styles.notFoundText}>Task not found</Text>
//         <Button
//           title="Go Back"
//           onPress={() => navigation.goBack()}
//           style={styles.button}
//         />
//       </View>
//     );
//   }

//   const handleDelete = () => {
//     Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Delete',
//         style: 'destructive',
//         onPress: () => {
//           removeTask(task.id);
//           navigation.goBack();
//         },
//       },
//     ]);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <Text style={styles.title}>{task.title}</Text>
//           <View style={styles.statusContainer}>
//             <Text
//               style={[
//                 styles.statusText,
//                 task.completed ? styles.completedText : styles.pendingText,
//               ]}>
//               {task.completed ? 'Completed' : 'Pending'}
//             </Text>
//           </View>
//         </View>

//         {task.description ? (
//           <Text style={styles.description}>{task.description}</Text>
//         ) : (
//           <Text style={styles.noDescription}>No description provided</Text>
//         )}

//         <View style={styles.metaContainer}>
//           <View style={styles.metaItem}>
//             <Icon name="access-time" size={16} color={colors.textLight} />
//             <Text style={styles.metaText}>
//               Created: {new Date(task.createdAt).toLocaleDateString()}
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button
//           title={task.completed ? 'Mark as Pending' : 'Mark as Completed'}
//           onPress={() => toggleComplete(task.id)}
//           variant={task.completed ? 'outline' : 'primary'}
//           style={styles.button}
//         />

//         <Button
//           title="Edit Task"
//           onPress={() => navigation.navigate('EditTask', {taskId: task.id})}
//           variant="secondary"
//           style={styles.button}
//         />

//         <Button
//           title="Delete Task"
//           onPress={handleDelete}
//           variant="danger"
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
//   card: {
//     margin: 16,
//     padding: 16,
//     backgroundColor: colors.cardBackground,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: colors.text,
//     flex: 1,
//   },
//   statusContainer: {
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 16,
//     backgroundColor: colors.background,
//   },
//   statusText: {
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   completedText: {
//     color: colors.success,
//   },
//   pendingText: {
//     color: colors.warning,
//   },
//   description: {
//     fontSize: 16,
//     color: colors.text,
//     marginBottom: 16,
//     lineHeight: 24,
//   },
//   noDescription: {
//     fontSize: 16,
//     color: colors.textLight,
//     marginBottom: 16,
//     fontStyle: 'italic',
//   },
//   metaContainer: {
//     borderTopWidth: 1,
//     borderTopColor: colors.border,
//     paddingTop: 16,
//   },
//   metaItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   metaText: {
//     fontSize: 14,
//     color: colors.textLight,
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     padding: 16,
//     gap: 12,
//   },
//   button: {
//     width: '100%',
//   },
//   notFound: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   notFoundText: {
//     fontSize: 18,
//     color: colors.textLight,
//     marginBottom: 20,
//   },
// });
