import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import './Demo.css'
import AddComponets from "./AddComponets";

export default class MyComponent extends Component {
  state = {
    // name:'',
    // chanel:'hoidid'
    // firstName: "",
    // lastName: "",
    arrJobs:[
        {id:'job1',title:'developer',salady:'200'},
        {id:'job2',title:'developer2',salady:'300'},
        {id:'job3',title:'developer3',salady:'400'},
    ]
  };

  addNewJob=(job)=>{
    // let currentJob=this.state.arrJobs
    console.log(job)
    // currentJob.push(job)
    this.setState({
      arrJobs:[...this.state.arrJobs,job]
        // arrJobs:currentJob
    })
  }

  deleterAJob=(job)=>{
    let currenJobs=this.state.arrJobs
    currenJobs=currenJobs.filter(item=>item.id!==job.id)
    this.setState({
        arrJobs:currenJobs
    })
  }
  componentDidUpdate(prevProp,prevState){
    console.log();
  }
//   componentsDidMount(){
//     console.log();
//   }

  // handleOnChangeName=(event)=>{
  //     this.setState({
  //         name:event.target.value,
  //         chanel:'abc'
  //     })
  // }

  // handleClickButton=()=>{
  //     // console.log('hit button');
  //     alert('click me')
  // }
//   handleOnchangeFistName = (e) => {
//     this.setState({
//       firstName: e.target.value,
//     });
//   };
//   handleOnchangeLastName = (e) => {
//     this.setState({
//       lastName: e.target.value,
//     });
//   };
//   handleSumit=(e)=>{
//     e.preventDefault()
//     alert('click me')
//     console.log('check input:' ,this.state);
//   }
  render() {
    console.log(this.state);
    return (
      <>
   
        {/* <div>
        <input value={this.state.name} type='text'
        onChange={(event)=>this.handleOnChangeName(event)}/>
        MyComponent {this.state.name}</div>
      
      <div>my chanel {this.state.chanel}</div>
      <div className='third'><button onClick={()=>this.handleClickButton()}>click me</button></div> */}
    <AddComponets
    addNewJob={this.addNewJob}
    />
        {/* <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnchangeFistName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnchangeLastName(event)}
          />
          <br />
          <br />
          <input type="submit"
          onClick={(e)=>this.handleSumit(e)}
          
          />
        </form> */}
        {/* <ChildComponent name={'child one'} />
        <ChildComponent name={'child two'} /> */}
        <ChildComponent 
        // name={this.state.firstName}
        // age={'25'} 
        // adrress={'Ha Noi'}
        arrJobs={this.state.arrJobs}
        deleterAJob={this.deleterAJob}
        
        />
      </>
    );
  }
}
