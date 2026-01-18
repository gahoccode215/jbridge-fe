import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function MainLayout() {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>

                    <Menu.Item key="jobs">
                        <Link to="/jobs">Việc làm</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: "20px 50px", minHeight: "80vh" }}>
                <Outlet />
            </Content>

            <Footer style={{ textAlign: "center" }}>
                JobBridge ©2026
            </Footer>
        </Layout>
    );
}

export default MainLayout;
