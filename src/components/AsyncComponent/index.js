import React, { Component } from "react";

/**
 * 异步组件
 * 使用：const AsyncHome = asyncComponent(() => import("./containers/Home"));
 * @param {*} importComponent
 */
 export default function asyncComponent(importComponent) {
   class AsyncComponent extends Component {
     constructor(props) {
       super(props);
       this.state = {
         component: null
       };
     }

     componentWillMount() {
       // console.log(this.props);

       const { componentWillMount } = this.props;
       componentWillMount && componentWillMount();
     }

     async componentDidMount() {
       this.test();
       const { default: component } = await importComponent();
       // console.log(component);

       this.setState({
         component: component
       });
     }
     test(){
       let a = {a:1,b:2};
       // console.log({...a});
     }
     render() {
       const C = this.state.component;
        const a = this.props;
       // console.log(<C />,{...this.props});
       // return C ? <C a/> : null;
       return C ? <C {...this.props}/> : null;
     }
   }
   // console.log(AsyncComponent);
   return AsyncComponent;
 }
