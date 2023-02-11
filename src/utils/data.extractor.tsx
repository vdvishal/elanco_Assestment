import { IApplication } from "../interfaces/IApplicationData";
import {
	IApplicationSummaryHelper,
	IApplicationSummary,
} from "../interfaces/IApplicationSummaryHelper";

const dataExtractor = () => {};

const getResourceSummary = (list: IApplication[]) => {
	const instance = new Set();
	let newList: IApplicationSummaryHelper = {};

	for (let i = 0; i < list.length; i++) {
		let data: IApplication = list[i];
		let appName: string = data.Tags["app-name"];
		if (newList[appName] && newList[appName]["location"] == data["Location"]) {
			instance.add(data.InstanceId);
			newList[appName]["Cost"] += parseFloat(data.Cost);
			newList[appName]["instanceCount"] = instance.size;
		} else {
			newList[appName] = {
				Cost: 0,
				instanceCount: 0,
				appName: appName,
				location: data.Location,
				ServiceName: data.ServiceName,
			};
			instance.add(data.InstanceId);
			newList[appName]["Cost"] += parseFloat(data.Cost);
			newList[appName]["instanceCount"] = instance.size;
		}
	}

	let resourceSummary: IApplicationSummary[] = [];

	for (let object in newList) {
		resourceSummary.push(newList[object]);
	}

	resourceSummary.sort((a, b) => a.appName.localeCompare(b.appName));

	return resourceSummary;
};

const getUniqueSelection = (list: IApplication[]) => {
	const environment = new Set();
	const apps = new Set();
	const location = new Set();
	for (let i = 0; i < list.length; i++) {
		let data: IApplication = list[i];
		let appName: string = data.Tags["app-name"];

		apps.add(appName);
		location.add(data.Location);
		environment.add(data.Tags.environment);
	}

	return {
		apps: {
			label: "Apps",
			values: Array.from(apps),
		},
		location: {
			label: "Location",
			values: Array.from(location),
		},
		environment: {
			label: "Environment",
			values: Array.from(environment),
		},
	};
};

const getApplicationSummary = (list: IApplication[]) => {
	const instance = new Set();
	let newList: IApplicationSummaryHelper = {};

	for (let i = 0; i < list.length; i++) {
		let data: IApplication = list[i];
		let appName: string = data.ServiceName;
		if (newList[appName] && newList[appName]["location"] == data["Location"]) {
			instance.add(data.InstanceId);
			newList[appName]["Cost"] += parseFloat(data.Cost);
			newList[appName]["instanceCount"] = instance.size;
		} else {
			newList[appName] = {
				Cost: 0,
				instanceCount: 0,
				appName: data.Tags["app-name"],
				location: data.Location,
				ServiceName: data.ServiceName,
			};
			instance.add(data.InstanceId);
			newList[appName]["Cost"] += parseFloat(data.Cost);
			newList[appName]["instanceCount"] = instance.size;
		}
	}

	let resourceSummary: IApplicationSummary[] = [];

	for (let object in newList) {
		resourceSummary.push(newList[object]);
	}

	resourceSummary.sort((a, b) => a.ServiceName.localeCompare(b.ServiceName));

	return resourceSummary;
};

export {
	dataExtractor,
	getResourceSummary,
	getUniqueSelection,
	getApplicationSummary,
};
