// import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from "./Sider";
import Header from "./Header"
import RouterBeforeEach from "@/router/RouterBeforeEach"
import RightPanel from "./RightPanel";
const {  Footer, Content } = Layout
const Container = () => {
    return (
        <Layout className='app-container'>
            <Sider />
            <Layout className="app-layout">
                <Header className="app-header" />
                <Content className="app-content">
                    {/* <Outlet /> */}
                    <RouterBeforeEach />
                </Content>
                <RightPanel />
                <Footer className="app-footer">Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default Container