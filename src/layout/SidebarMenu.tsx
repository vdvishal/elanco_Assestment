import {
	ControlOutlined,
	MailOutlined,
	DoubleRightOutlined,
} from "@ant-design/icons";
import {
	DashboardOutlined,
	EnvironmentOutlined,
	PushpinOutlined,
	UserOutlined,
	StockOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const SideBarMenu = () => {
	let navigate = useNavigate();

	const handleMenuClick = (key: string) => {
		navigate(key);
	};

	return (
		<Menu
			onClick={(e) => {
				console.log(e);
				handleMenuClick(e.key);
			}}
			mode="inline"
			defaultSelectedKeys={["resources"]}
			style={{ height: "100%" }}
		>
			<Menu.Item key="applications">
				<DashboardOutlined />
				<span>Applications</span>
			</Menu.Item>
			<Menu.Item key="resources">
				<DashboardOutlined />
				<span>Resources</span>
			</Menu.Item>
		</Menu>
	);
};

export default SideBarMenu;
