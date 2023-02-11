import { Card, Row } from "antd";
import "./applicationList.css";

let list = [
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

const ApplicationList = () => {
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

export default ApplicationList;
