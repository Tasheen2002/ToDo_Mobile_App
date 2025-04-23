import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TaskScreen from '../screens/TaskScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
// import EditTaskScreen from '../screens/EditTaskScreen';
// import TaskDetailScreen from '../screens/TaskDetailScreen';
import colors from '../theme/color';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={{title: 'My Tasks'}}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{title: 'Add New Task'}}
        />
        {/* <Stack.Screen
          name="EditTask"
          component={EditTaskScreen}
          options={{title: 'Edit Task'}}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{title: 'Task Details'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
