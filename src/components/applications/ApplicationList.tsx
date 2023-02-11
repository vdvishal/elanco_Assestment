import { Card, Row } from "antd";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../utils/CONSTANTS";
import "./applicationList.css";

const ApplicationList = () => {
	let navigate = useNavigate();

	let [resources, setResources] = useState<string[]>([]);

	const handleMenuClick = (key: string) => {
		navigate(key);
	};

	useEffect(() => {
		axios
			.get(CONSTANTS.URL.baseUrl + CONSTANTS.URL.applications)
			.then((resources: AxiosResponse) => {
				resources.data.sort();
				setResources(resources.data);
			});
	}, []);

	return (
		<>
			<div className="resourcelistsection">
				<Card
					title="Applications"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					{resources.map((name: any) => {
						return (
							<Card.Grid
								hoverable
								className="card-grid-custom"
								onClick={(e) => handleMenuClick(name)}
							>
								{name}
							</Card.Grid>
						);
					})}
				</Card>
			</div>
		</>
	);
};

export default ApplicationList;
