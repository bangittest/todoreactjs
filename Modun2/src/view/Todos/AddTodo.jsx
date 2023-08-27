import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        title:''
    }
    handleOnchangleTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }

    // ham create
    handleAddTodo=()=>{
        // kiem tra validate
        if(!this.state.title){
            alert('khong duoc bo trong')
            return
        }
        alert('click me')
        let todo={
            id:Math.floor(Math.random()*10000),
            title:this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title:''
        })
    }
  render() {
    let{title}=this.state
    return (
      <>
        <div className="add-todo">
            <input type="text" value={title}
            onChange={(e)=>{this.handleOnchangleTitle(e)}}
            />
            <button type="button" className="add"
            onClick={()=>this.handleAddTodo()}
            >
              Add
            </button>
          </div>
      </>
    )
  }
}
