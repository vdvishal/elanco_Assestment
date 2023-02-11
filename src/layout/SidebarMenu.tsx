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

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const menuItems: MenuProps["items"] = [
	getItem("Dashboard", "Dashboard", <MailOutlined />, []),
	getItem("Cities", "grp", <ControlOutlined />, [
		getItem("All Cities", "all_cities", <DoubleRightOutlined />),
		getItem("All Stops", "all_stops", <DoubleRightOutlined />),
	]),
	getItem("Drivers", "grp2", <ControlOutlined />, [
		getItem("Active Drivers", "activedrivers", <DoubleRightOutlined />),
		getItem("Unverified/New Drivers", "newdrivers", <DoubleRightOutlined />),
		getItem("Blocked Drivers", "blockeddrivers", <DoubleRightOutlined />),
	]),
];

let menuI = [
	"Macao",
	"Delaware-deposit-Plastic",
	"index-Consultant-blue",
	"Integrated-SDD",
	"Accountability-Clothing",
	"Philippines-THX",
	"info-mediaries",
	"AI-Administrator-capability",
	"firewall-Towels-compressing",
	"Officer",
	"Triple-buffered-Brand",
	"program-compelling",
	"Corporate-Electronics",
	"Multi-tiered",
	"global-Rustic",
	"Cambridgeshire-next-Springs",
	"Bike-Hawaii-Naira",
	"Health",
	"seamless-Arkansas-payment",
	"Markets-payment-Shoes",
	"Solutions",
	"Industrial",
	"Locks-integrated",
	"EXE",
	"redundant-copy-action-items",
	"Regional-Table",
	"Licensed-Account-paradigms",
	"auxiliary-Granite",
	"calculating",
	"zero",
	"markets-reboot-Avon",
	"Account-Pizza-cross-media",
	"Computers",
	"Granite",
	"Computers-Fresh",
	"User-centric",
	"Palau-redundant-solution-oriented",
	"Dakota-Future-proofed-SCSI",
	"Maine-Avon",
	"Loti",
	"Wooden-Health",
	"Table-Flats-Electronics",
	"Territory-e-markets",
	"forecast-Games",
	"Gloves",
	"red-Facilitator",
	"1080p-Lock",
	"mobile-transmit",
	"interface-deliver",
];

const SideBarMenu = () => {
	// let navigate = useNavigate();

	const handleMenuClick = (key: string) => {
		// navigate(key);
	};

	return (
		<Menu
			onClick={(e) => {
				console.log(e);
				handleMenuClick(
					(e.keyPath[1] && e.key != "drivers" ? e.keyPath[1] : "") + "/" + e.key
				);
			}}
			mode="inline"
			defaultSelectedKeys={["dashboard"]}
			defaultOpenKeys={["cities", "drivers"]}
			style={{ height: "100%" }}
		>
			{/* <Menu.Item key="dashboard">
				<DashboardOutlined />
				<span>Dashboard</span>
			</Menu.Item> */}
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
