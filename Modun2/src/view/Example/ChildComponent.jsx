import React, { Component } from "react";
import './Demo.scss'

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
 

  
  hanleOnclickDelete=(job)=>{
   if(confirm('ban co chac chan muon xoa')){
    // alert('click me')
    console.log(job);
    this.props.deleterAJob(job)
   }
}

  render() {
    console.log(this.props);
    // let name=this.props.name
    //let age=this.props.name
    //key=value
    let { name, age, adrress, arrJobs } = this.props;
    //hide true /false
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs=true" : "showJobs=false";
    //viet gon
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show"            
            onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              chil:{name}-{age}-{adrress}
              <div className="job-lists">
                {arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title}-{item.salady}$ <></><span onClick={()=>this.hanleOnclickDelete(item)}>x</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent=(props)=>{
//     let {arrJobs } = props;
//         //viet gon
//         return (
//           <>
//             <div>
//               {/* chil:{name}-{age}-{adrress}
//               <div className="job-lists"> */}
//                 {arrJobs.map((item, index) => {
//                     if(item.salady>=300){

//                   return (
//                     <div key={item.id}>
//                       {item.title}-{item.salady}$
//                     </div>
//                   );}
//                 })}
//               </div>
//             {/* </div> */}
//           </>
//         );
// }
// export default ChildComponent
