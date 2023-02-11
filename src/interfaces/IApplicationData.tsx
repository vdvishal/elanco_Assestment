export interface IApplication {
	ConsumedQuantity: string;
	Cost: string;
	Date: string;
	InstanceId: string;
	MeterCategory: string;
	ResourceGroup: string;
	ResourceLocation: string;
	Tags: ITags;
	UnitOfMeasure: string;
	Location: string;
	ServiceName: string;
}

interface ITags {
	"app-name": string;
	environment: string;
	"business-unit": string;
}
