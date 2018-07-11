/**
 * Created by mapbar_front on 2018/7/10.
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Styles from './Login.less'
const FormItem = Form.Item;

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: props.user.username || '',
      password: props.user.password || '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch(routerRedux.push('/index'));
      }
    });
  }
  render(){
    console.log('user Props', this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center wrap">
        <div className={Styles.loginForm}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: this.state.username,
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                initialValue: this.state.password,
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password" placeholder="Password" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className={Styles.forgot} href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className={Styles.button}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>

      </div>
    )
  }
}
const MyLogin = Form.create()(Login)
export default connect(function (state) {
  return {
    user: state.user
  }
})(MyLogin);
