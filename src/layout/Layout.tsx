import { Breadcrumb, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ReactNode } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Applications from "../components/applications";
import ApplicationList from "../components/applications/ApplicationList";
import ResourcesTable from "../components/applications/resourcesTable";
import Resources from "../components/resources";
import ApplicationTable from "../components/resources/applicationTable";
import InstanceTable from "../components/resources/instanceTable";
import "./index.css";
import SideBarMenu from "./SidebarMenu";

const breadcrumbNameMap: Record<string, string> = {
	"/resources": "Resources",
	"/applications": "Applications",
};

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
						<Breadcrumbs />
						<br />
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
							<Route path="/applications" element={<ApplicationList />} />
							<Route
								path="/applications/:applicationId"
								element={<ResourcesTable />}
							/>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default AppLayout;

const Breadcrumbs = () => {
	const location = useLocation();
	const pathSnippets = location.pathname.split("/").filter((i) => i);

	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
		console.log(url, breadcrumbNameMap);

		if (!breadcrumbNameMap[url]) {
			let urls = url.split("/");
			breadcrumbNameMap[url] = decodeURIComponent(urls[urls.length - 1]);
		}
		console.log(url.split("/"));
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Breadcrumb.Item>
		);
	});

	const breadcrumbItems = [
		<Breadcrumb.Item key="home">
			<Link to="/">Home</Link>
		</Breadcrumb.Item>,
	].concat(extraBreadcrumbItems);

	return (
		<div className="demo">
			<Breadcrumb>{breadcrumbItems}</Breadcrumb>
		</div>
	);
};
