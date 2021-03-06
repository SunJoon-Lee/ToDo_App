import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {

  state = {
    todos: []
  }

  removeTodo = (id) => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      return ({
        todos: [
            ...prevState.todos
        ]
      })
    });
  }

  checkTodo = (id) => {
    this.setState(prevState => {
      const [ todo ] = prevState.todos.filter(e => e.id === id);
      todo.completed = !todo.completed;
      return ({
        todos: [
            ...prevState.todos
        ]
      })
    });
  }

  

  addTodo = (todo) => {
     
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
        id: Date.now(), // 등록시간
        text: todo,      // 할일 내용
        completed: false, // 완료 여부
    }   

    // state 업데이트
    this.setState(prevState => ({
        todos: [
            newTodo,       // 새로 추가된 할일(todo)
            ...prevState.todos // 기존의 할일 목록
        ]
    }));
   
    // 콘솔창에 출력해보자~
    console.log(this.state.todos);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>[BUBO's ToDo] App</Text>
        <Header addTodo={this.addTodo}/>
        <Body 
          todos={this.state.todos} 
          checkTodo={this.checkTodo}
          removeTodo={this.removeTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#dbf1ff",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    color: "#323232",
    marginLeft: 20,
    marginBottom: 20,
  }
});