/**
 * Created by mapbar_front on 2018/7/30.
 */
import React, { Component } from 'react';
import { Form, Input, message, Icon, Cascader, Select, Row, Col, Button, InputNumber, AutoComplete, Radio } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './user.less';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
@connect(({ user }) => {
  return {
    user: user,
  }
})
class AddUser extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        message.success('Add a user success!');
        this.props.dispatch(routerRedux.push({
          pathname: '/index/userlist'
        }))
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className={`center flexCol ${styles.container}`}>
        <div className={`${styles.title}`}>
          Add User
        </div>
        <Form
          className={`${styles.form}`}
          onSubmit={this.handleSubmit}
        >
          <FormItem
            {...formItemLayout}
            label="Name"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: 'Please input your Name!',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="NickName"
          >
            {getFieldDecorator('nickname', {
              rules: [{
                required: true, message: 'Please input your NickName!',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Gender"
          >
            {getFieldDecorator('gender', {
              rules: [{
                required: true, message: 'Please choice your Gender!',
              }],
            })(
              <RadioGroup>
                <Radio value="1">Male</Radio>
                <Radio value="0">Female</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Age"
          >
            {getFieldDecorator('age', {
              initialValue: 3,
              rules: [{
                required: true, message: 'Please input your Age!',
              }],
            })(
              <InputNumber min={18} max={100} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Phone"
          >
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: 'Please input your Phone!',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                required: true, message: 'Please input your email!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Habitual Residence"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
            })(
              <Cascader options={residences} />
            )}
          </FormItem>

          <FormItem
            {...tailFormItemLayout}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const WrappedAddUser = Form.create()(AddUser);

export default WrappedAddUser;
