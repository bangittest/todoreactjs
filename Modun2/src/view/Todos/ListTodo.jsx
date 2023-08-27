import React, { Component } from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

export default class ListTodo extends Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Doing homwork" },
      { id: "todo2", title: "Making" },
      { id: "todo3", title: "Debug" },
    ],
    editTodo: {},
  };

  //theem spear
  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
  };

  //   ham xoa
  handleDeleteTodo = (todo) => {
    if (confirm("ban co muon xoa")) {
      let currentTodo = this.state.listTodo;
      currentTodo = currentTodo.filter((item) => item.id !== todo.id);
      this.setState({
        listTodo: currentTodo,
      });
    }
    console.log(todo);
  };

  // ham edit
  handleEditTodo = (todo) => {
    let{editTodo,listTodo}=this.state
    let isEmtyObj = Object.keys(editTodo).length === 0;

    //save
    if(isEmtyObj===false && editTodo.id===todo.id){
        let listTodoCopy=[...listTodo];
        let objIndex=listTodoCopy.findIndex((item=>item.id===todo.id))  
        listTodoCopy[objIndex].title=editTodo.title  
        this.setState({
            listTodo:listTodoCopy,
            editTodo:""
        })    


        return
    }
    //sua
    this.setState({
      editTodo: todo,
    })
  };

  handleOnChangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodo, editTodo } = this.state;
    // ham check obj cos rong hay k
    // length=0 thi tra isEmtyObj=true
    let isEmtyObj = Object.keys(editTodo).length === 0;
    console.log(isEmtyObj);
    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {/* read cua CrUd */}
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmtyObj === true ? (
                      <span>
                        {index + 1}-{item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1}-
                            <input
                              value={editTodo.title}
                              onChange={(e) => this.handleOnChangeEditTodo(e)}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1}-{item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button onClick={() => this.handleEditTodo(item)}>
                      {isEmtyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button onClick={() => this.handleDeleteTodo(item)}>
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
