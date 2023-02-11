import { Input, Select, Table, Form } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IApplication } from "../../interfaces/IApplicationData";
import {
	getResourceSummary,
	getUniqueSelection,
} from "../../utils/data.extractor";

import "./index";

function parseDate(dateString: string) {
	let parts = dateString.split("/");
	let day = parseInt(parts[0]);
	let month = parseInt(parts[1]) - 1;
	let year = parseInt(parts[2]);
	return new Date(year, month, day).getTime();
}

const InstanceTable = (props: any) => {
	let { resource, app } = useParams();
	const { state } = useLocation();

	let navigate = useNavigate();
	let [appData, setAppData] = useState<IApplication[]>([]);
	let [selection, setSelectionData] = useState<any[]>([]);
	let [selectionEnvirontment, setEnvirontmentSelectionData] = useState<any[]>(
		[]
	);
	let [appFilter, setAppFilter] = useState<string>("");
	let [appEnvironentFilter, setEnvironentFilter] = useState<string>("");
	let NewData: IApplication[] = [];

	useEffect(() => {
		let options = [];

		const selections: any = getUniqueSelection(state.application);

		let option = {
			label: selections["apps"].label,
			options: selections["apps"].values.map((value: string) => {
				return {
					label: value,
					value: value,
				};
			}),
		};
		options.push(option);
		setSelectionData(options);
		options = [];

		option = {
			label: selections["environment"].label,
			options: selections["environment"].values.map((value: string) => {
				return {
					label: value,
					value: value,
				};
			}),
		};
		options.push(option);

		setEnvirontmentSelectionData(options);

		setAppData(state.application);
		filter(app || "");
	}, []);

	const handleMenuClick = (key: string) => {
		navigate(key);
	};

	const columns: ColumnsType<IApplication> = [
		{
			title: "Date",
			dataIndex: "Date",
			key: "Date",
			render: (text) => <a>{text}</a>,
			sorter: (a, b) => {
				let dateA = parseDate(a.Date);
				let dateB = parseDate(b.Date);

				return dateA - dateB;
			},
		},
		{
			title: "Instance Id",
			dataIndex: "InstanceId",
			key: "InstanceId",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "App Name",
			dataIndex: "Tags",
			key: "Tags",
			render: (Tags) => <a>{Tags["app-name"]}</a>,
		},
		{
			title: "Environment",
			dataIndex: "Tags",
			key: "environment",
			render: (Tags) => <a>{Tags["environment"]}</a>,
		},
		{
			title: "Resource",
			dataIndex: "MeterCategory",
			key: "MeterCategory",
		},
		{
			title: "Location",
			dataIndex: "Location",
			key: "Location",
		},
		{
			title: "Unit Of Measure",
			dataIndex: "UnitOfMeasure",
			key: "UnitOfMeasure",
		},
		{
			title: "Consumed Quantity",
			dataIndex: "ConsumedQuantity",
			key: "ConsumedQuantity",
			sorter: (a, b) => {
				return parseFloat(a.ConsumedQuantity) - parseFloat(b.ConsumedQuantity);
			},
		},
		{
			title: "Cost",
			dataIndex: "Cost",
			key: "Cost",
			render: (text) => <span>{text}</span>,
			sorter: (a, b) => {
				return parseFloat(a.Cost) - parseFloat(b.Cost);
			},
		},
		// {
		//   title: 'Tags',
		//   key: 'tags',
		//   dataIndex: 'tags',
		//   render: (_, { tags }) => (
		//     <>
		//       {tags.map((tag) => {
		//         let color = tag.length > 5 ? 'geekblue' : 'green';
		//         if (tag === 'loser') {
		//           color = 'volcano';
		//         }
		//         return (
		//           <Tag color={color} key={tag}>
		//             {tag.toUpperCase()}
		//           </Tag>
		//         );
		//       })}
		//     </>
		//   ),
		// },
		// {
		//   title: 'Action',
		//   key: 'action',
		//   render: (_, record) => (
		//     <Space size="middle">
		//       <a>Invite {record.name}</a>
		//       <a>Delete</a>
		//     </Space>
		//   ),
		// },
	];

	const filter = (filter: string) => {
		setAppFilter(filter);
		NewData = [];

		NewData = state.application.filter(
			(dataObj: any) =>
				dataObj.Tags["app-name"]
					.toLocaleLowerCase()
					.includes(filter.toLocaleLowerCase()) &&
				dataObj.Tags["environment"]
					.toLocaleLowerCase()
					.includes(appEnvironentFilter.toLocaleLowerCase())
		);

		setAppData(NewData);
		NewData = [];
	};

	const filterEnvironment = (filter: string) => {
		setEnvironentFilter(filter);
		NewData = state.application.filter(
			(dataObj: any) =>
				dataObj.Tags["environment"]
					.toLocaleLowerCase()
					.includes(filter.toLocaleLowerCase()) &&
				dataObj.Tags["app-name"]
					.toLocaleLowerCase()
					.includes(appFilter.toLocaleLowerCase())
		);

		setAppData(NewData);
		NewData = [];
	};

	return (
		<>
			{" "}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",

					margin: 10,
				}}
			>
				<div style={{ fontSize: "large", fontWeight: "bolder" }}>
					{resource} Applications Detail
				</div>
				<div
					style={{
						width: "25rem",
					}}
				>
					<Form.Item label="Select App">
						<Select
							allowClear
							style={{ width: "100%" }}
							placeholder="Please select"
							onChange={filter}
							options={selection}
							defaultValue={app}
						/>
					</Form.Item>
					<Form.Item label="Environment">
						<Select
							allowClear
							style={{ width: "100%" }}
							placeholder="Please select"
							onChange={filterEnvironment}
							options={selectionEnvirontment}
						/>
					</Form.Item>
				</div>
			</div>
			<Table showHeader={true} columns={columns} dataSource={appData} />;
		</>
	);
};

export default InstanceTable;
