import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "react-document-title";
import { login, getUserInfo } from "@/store/modules/user";
import "./index.scss";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return state.user.token
  });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = (payload) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    dispatch(
      login(payload)
    ).then((data) => {
      message.success("登录成功");
      setLoading(false);
      handleUserInfo(data.token);
    })
    .catch((error) => {
      setLoading(false);
      message.error(error);
    })
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    dispatch(getUserInfo({token}))
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = () => {
    // 对所有表单字段进行检验
    form.validateFields().then(({ username, password }) => {
      // 检验成功
      handleLogin({ username, password });
    });
  };

  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form
          form={form}
          onFinish={handleSubmit}
          className="content"
          initialValues={{
            username: "admin",
            password: "123456",
          }}
        >
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

export default Login;
