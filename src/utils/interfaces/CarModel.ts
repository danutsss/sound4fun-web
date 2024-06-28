export interface CarModel {
	id?: number;
	name: string;
	prices: { [key: string]: number };
	images: string[];
}
