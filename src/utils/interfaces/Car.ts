import type { CarModel } from "./CarModel";

export interface Car {
	id?: number;
	brand: string;
	models: CarModel;
}
