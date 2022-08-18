import { Layout } from 'antd'
import Sider from "./Sider";
import Header from "./Header"
import RightPanel from "./RightPanel";
import TagsView from "./TagsView"
import { useSelector } from "react-redux";
import RouterBeforeEach from "@/router/RouterBeforeEach"
const { Content } = Layout
const Container = () => {
    const tagsView = useSelector(state => state.app.tagsView);
    return (
        <Layout className='app-container'>
            <Sider />
            <Layout className="app-layout">
                <Header className="app-header" />
                {tagsView ? <TagsView /> : null}
                <Content className="app-content">
                    {/* <Outlet /> */}
                    <RouterBeforeEach />
                </Content>
                <RightPanel />
                {/* <Footer className="app-footer">Footer</Footer> */}
            </Layout>
        </Layout>
    )
}

export default Container