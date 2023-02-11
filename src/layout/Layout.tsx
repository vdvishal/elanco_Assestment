import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Applications from "../components/applications";
import Resources from "../components/resources";
import ApplicationTable from "../components/resources/applicationTable";
import InstanceTable from "../components/resources/instanceTable";
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
							<Route
								path="/resources/:resource"
								element={<ApplicationTable />}
							/>
							<Route
								path="/resources/:resource/:app"
								element={<InstanceTable />}
							/>
							<Route path="/resources" element={<Resources />} />
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default AppLayout;
