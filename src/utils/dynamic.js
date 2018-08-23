/**
 * Created by mapbar_front on 2018/8/23.
 */
import React, { Component } from 'react';
/**
 * @function dynamic: 主要用于代码分割功能的等等。
 * @param loadComponent
 * @param placeholder
 * @return {AsyncComponent}
 */
export default function (loadComponent, placeholder = "loadding") {

  class AsyncComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        component: null
      };
      this.unmount = false;// 这个主要要防止那种组件还没有加载过来，但是已经卸载了。
    }
    async componentDidMount(){
      const {default: component} = await loadComponent();

      if (this.unmount) {
        return 0;
      }

      this.setState({
        component:component
      })
    }
    componentWillUnmount() {
      this.unmount = true
    }
    render() {
      const Com = this.state.component;
      return (
        Com ? <Com {...this.props}></Com> : placeholder
      );
    }
  }

  return AsyncComponent;
}
