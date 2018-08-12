/**
 * Created by mapbar_front on 2018/7/10.
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Styles from './Login.less'
const FormItem = Form.Item;

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      errMessage: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.username !== this.props.user.username || values.username !== this.props.user.username) {
          this.state.errMessage = "用户名或密码错误";
        } else {
          this.props.dispatch(routerRedux.push('/dashboard/index'));
        }
      }
    });
  }
  render(){
    console.log('user Props', this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center wrapper">
        <div className={Styles.loginForm}>
          {
            this.state.errMessage ? (
              <Alert banner type="error" message={this.state.errMessage} closable />
            ) : null
          }
          <Form style={{width: '300px', marginTop: '20px'}} onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password" placeholder="Password" />
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" className={Styles.button}>
                Log in
              </Button>
            </FormItem>
            <div className={Styles.userNotice}>
              <p className="center flex1">
                username: guest
              </p>
              <p className="center flex1">
                password: guest
              </p>
            </div>
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
