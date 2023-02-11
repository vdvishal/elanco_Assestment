export interface IApplicationSummaryHelper {
	[key: string]: IApplicationSummary;
}

export interface IApplicationSummary {
	instanceCount: number;
	Cost: number;
	ServiceName: string;
	appName: string;
	location: string;
}
