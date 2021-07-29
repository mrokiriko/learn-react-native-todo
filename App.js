/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodoForm from './components/add-todo-form';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'make todo app', key: '1'},
    {text: 'watch some tv', key: '2'},
    {text: 'play on warzone', key: '3'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key));
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => [
        {text: text, key: Math.random().toString()},
        ...prevTodos,
      ]);
    } else {
      Alert.alert("That's", 'Task have to be more than 3 characters', [
        {text: "I'll try again", onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoForm submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
