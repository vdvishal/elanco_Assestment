import { Card, Row } from "antd";
import "./resources.css";

let list = [
	"Logic Apps",
	"Azure App Service",
	"Storage",
	"Virtual Machines",
	"Virtual Machines Licenses",
	"Virtual Network",
	"Log Analytics",
	"Advanced Threat Protection",
	"Bandwidth",
	"Key Vault",
	"Azure Cosmos DB",
	"Redis Cache",
	"Container Registry",
	"Azure Database for PostgreSQL",
	"Azure Data Factory v2",
	"Security Center",
	"Insight and Analytics",
	"Advanced Data Security",
	"Azure DNS",
	"Azure Front Door Service",
	"Network Watcher",
	"Azure Cognitive Search",
	"API Management",
	"Power BI Embedded",
];

const ResourcesList = () => {
	return (
		<>
			<div className="resourcelistsection">
				<Card
					title="Resources"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					{list.map((name) => {
						return (
							<Card.Grid hoverable className="card-grid-custom">
								{name}
							</Card.Grid>
						);
					})}
				</Card>
			</div>
		</>
	);
};

export default ResourcesList;
