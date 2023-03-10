import { Tag, Space } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import axios, { AxiosResponse } from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IApplication } from "../../interfaces/IApplicationData";
import { IApplicationSummary } from "../../interfaces/IApplicationSummaryHelper";
import CONSTANTS from "../../utils/CONSTANTS";
import { getResourceSummary } from "../../utils/data.extractor";

function parseDate(dateString: string) {
	let parts = dateString.split("/");
	let day = parseInt(parts[0]);
	let month = parseInt(parts[1]) - 1;
	let year = parseInt(parts[2]);
	return new Date(year, month, day).getTime();
}

const ApplicationTable = (props: any) => {
	let { resource } = useParams();

	let navigate = useNavigate();
	let [application, setApplication] = useState<IApplication[]>([]);

	useEffect(() => {
		axios
			.get(CONSTANTS.URL.baseUrl + CONSTANTS.URL.resources + `/${resource}`)
			.then((resources: AxiosResponse) => {
				resources.data.sort((a: any, b: any) => {
					let dateA = parseDate(a.Date);
					let dateB = parseDate(b.Date);
					return dateA - dateB;
				});
				setApplication(resources.data);
			});
	}, []);

	const handleMenuClick = (key: string) => {
		navigate(key, {
			state: {
				application,
			},
		});
	};

	const columns2: ColumnsType<IApplicationSummary> = [
		{
			title: "App Name",
			dataIndex: "appName",
			key: "appName",
			render: (text) => <a onClick={(e) => handleMenuClick(text)}>{text}</a>,
		},
		{
			title: "Category",
			dataIndex: "ServiceName",
			key: "ServiceName",
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "Location",
		},
		{
			title: "Total Instances",
			dataIndex: "instanceCount",
			key: "instanceCount",
			sorter: (a, b) => {
				return a.instanceCount - b.instanceCount;
			},
		},
		{
			title: "Total Cost",
			dataIndex: "Cost",
			key: "Cost",
			sorter: (a, b) => {
				return a.Cost - b.Cost;
			},
		},
	];

	return (
		<>
			<Table columns={columns2} dataSource={getResourceSummary(application)} />;
		</>
	);
};

export default ApplicationTable;
