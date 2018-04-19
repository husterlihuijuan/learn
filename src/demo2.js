import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//父组件
class App extends Component{  
    state={checked:false}
    onChildChanged=(newState)=>{  
        this.setState({  
          checked: newState  
        });  
      } 
    render() {  
      return (  
        <ToggleButton text="Toggle me" checked={this.state.checked} callbackParent={this.onChildChanged} />  
      );  
    }  
  };  
    
  // 子组件  
  class ToggleButton extends Component{ 
      
      state={
          checked:this.props.checked
      } 
      onTextChange= ()=> {  
        var newState = !this.state.checked;  
        this.setState({  
          checked: newState  
        }); 
        //这里将子组件的信息传递给了父组件  
      this.props.callbackParent(newState);  
    }
      
    
    render() {  
      
      var checked = this.state.checked,//组件自身的值  
          text = this.props.text; // 从（父组件）获取的值   
    //onchange 事件用于单选框与复选框改变后触发的事件。  
      return (  
          <label>{text}: <input type="checkbox" checked={checked} onChange={this.onTextChange}/></label>  
      );  
    }  
  };
  ReactDOM.render(
      <App/>,
      document.getElementById("root")
  );
  /*
  以上例子中，在父组件绑定callbackParent={this.onChildChanged}
  ，在子组件利用this.props.callbackParent(newState),
  触发了父级的的this.onChildChanged方法，进而将子组件的数据（newState）
  传递到了父组件。
这样做其实是依赖 props 来传递事件的引用，并通过回调的方式来实现的。
  */