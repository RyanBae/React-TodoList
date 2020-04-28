import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";
import Palette from "./component/Palette";

class App extends Component {
  id = 3;
  state = {
    input: "",
    selectColor: "#343a40",
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: true },
      { id: 2, text: "리액트 소개", checked: false },
    ],
    colors: [
      { id: 0, color: "#343a40", checked: true },
      { id: 1, color: "#f03e3e", checked: false },
      { id: 2, color: "#12b886", checked: false },
      { id: 3, color: "#228ae6", checked: false },
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };
    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleColor = (id) => {
    console.log(id);
    const { selectColor } = this.state;

    // this.setState({
    //   selectColor: color,
    // });
    const { colors } = this.state;
    const trueInex = colors.findIndex((color) => color.checked === true);
    const tureSelected = colors[trueInex];
    const cIndex = colors.findIndex((color) => color.id === id);
    const cSelected = colors[cIndex];
    const nextColors = [...colors];
    console.log(cSelected);
    console.log(nextColors);
    console.log(tureSelected);

    nextColors[trueInex] = {
      ...tureSelected,
      checked: !tureSelected,
    };

    nextColors[cIndex] = {
      ...cSelected,
      checked: !cSelected.checked,
    };
    this.setState({
      colors: nextColors,
      selectColor: cSelected.color,
    });
  };

  handleColorToggle = (id) => {
    console.log("======>");
    console.log(id);
  };

  render() {
    const { input, todos, colors, selectColor } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor,
      handleColorToggle,
    } = this;
    return (
      <TodoListTemplate
        palette={<Palette colors={colors} onClick={handleColor} />}
        form={
          <Form
            color={selectColor}
            value={input}
            onKeyPress={handleKeyPress}
            onCreate={handleCreate}
            onChange={handleChange}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
