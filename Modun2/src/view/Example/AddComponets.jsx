import React, { Component } from 'react'

export default class AddComponets extends Component {
    state={title:'',
    salady:''            
}
     handleOnchangeTitleJob = (e) => {
        this.setState({
          title: e.target.value,
        });
      };
       handleOnchangeSalary = (e) => {
        this.setState({
            salady: e.target.value,
        });
      };
      
      handleSumit=(e)=>{
        e.preventDefault()
        if(!this.state.title||!this.state.salady){
            alert("k duoc bo trong")
            return
        }
        alert('ban da them thanh cong')
        console.log('check input:' ,this.state);
        this.props.addNewJob({
            id:Math.floor(Math.random()*1001),
            title:this.state.title,
            salady:this.state.salady
        })
        this.setState({
            title:"",
            salady:""
        })
      }
  render() {
    return (
        <form>
        <label htmlFor="fname">title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this. handleOnchangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salady}
          onChange={(event) => this. handleOnchangeSalary(event)}
        />
        <br />
        <br />
        <input type="submit"
        onClick={(e)=>this.handleSumit(e)}
        
        />
      </form>
    )
  }
}
