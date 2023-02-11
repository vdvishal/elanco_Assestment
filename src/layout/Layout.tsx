import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Applications from "../components/applications";
import Resources from "../components/resources";
import "./index.css";
import SideBarMenu from "./SidebarMenu";

const AppLayout = (props: any) => {
	return (
		<>
			<Layout className="layout-container">
				<Header className="header">Header</Header>

				<Layout>
					<Sider className="sidebar">
						<SideBarMenu />
					</Sider>
					<Content className="main-content">
						{/* <Home /> */}
						<Routes>
							<Route path="/applications" element={<Applications />} />
							<Route path="/" element={<Resources />} />
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default AppLayout;
