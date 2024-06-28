<template>
	<section class="p-2">
		<div class="py-5 flex justify-center">
			<div class="flex items-center justify-between">
				<h1 class="font-semibold md:mr-2 text-white xs:text-[20px] text-4xl md:text-6xl">
					Alege masina ta
				</h1>

				<div class="mt-10 xs:mt-5">
					<img
						src="@/assets/images/arrow.svg"
						alt="Pointing to select elements"
						class="ml-2 w-auto h-auto"
					/>
				</div>
			</div>
		</div>

		<div class="py-10 px-5 rounded-xl mx-auto md:w-2/3 bg-transparent/10">
			<div class="md:flex md:justify-center xs:block xs:text-center">
				<select
					class="form-select xs:w-2/3 md:w-1/3 mr-2 mx-auto xs:mb-2 md:mb-0 rounded-sm"
					id="manufacturer"
					v-model="selectedManufacturer"
					@change="setManufacturer"
				>
					<option value="none">Selecteaza producator auto</option>
					<option
						v-for="car in availableCars.available_cars"
						:key="car.brand"
						:value="car.brand"
					>
						{{ car.brand }}
					</option>
				</select>

				<select
					class="form-select xs:w-2/3 md:w-1/3 mr-2 mx-auto xs:mb-2 md:mb-0 rounded-sm"
					id="model"
					v-model="selectedModel"
					@change="setModel"
				>
					<option value="none">Selecteaza model</option>
					<option
						v-for="model in manufacturerModels"
						:key="model.name"
						:value="model.name"
					>
						{{ model.name }}
					</option>
				</select>

				<button
					class="xs:p-2 uppercase mx-auto w-1/3 hover:bg-primary-600 hover:border-primary-600 bg-primary-700 border-2 border-primary-700 transition-all py-2 px-8 lg:py-2 lg:px-8 rounded-sm text-white text-sm md:text-lg"
					@click="showInfo(selectedManufacturer, selectedModel)"
					:disabled="
						selectedManufacturer === 'none' || selectedModel === 'none' || isModalOpened
					"
				>
					Cauta
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
/* import Vue modules */
import { ref, type Ref } from "vue";

/* import `Car` interface & cars database */
import Car from "@/utils/interfaces/Car";
import CarModel from "@/utils/interfaces/CarModel";
import carData from "@/data/carsDb.json";

const availableCars: Ref<Car[]> = ref<Car[]>(carData as Car[]);
const selectedManufacturer: Ref<string> = ref<string>("none");

const manufacturerModels: Ref<CarModel[]> = ref<CarModel[]>(null);
const selectedModel: Ref<CarModel> = ref<CarModel>("none");

const isModalOpened: Ref<boolean> = ref<boolean>(false);

/* component methods */
const setManufacturer = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	selectedManufacturer.value = target.value;

	const selectedCar = availableCars.value.available_cars.find(
		(car: Car) => car.brand === selectedManufacturer.value,
	);

	if (selectedCar) {
		manufacturerModels.value = selectedCar.models;
	}
};

const setModel = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	const modelName = target.value;

	selectedModel.value = manufacturerModels.value.find(
		(model: CarModel) => model.name === modelName.value,
	);
};

const showInfo = (selectedManufacturer: string, selectedModel: CarModel) => {
	// if (
	// 	isModalOpened.value ||
	// 	selectedManufacturer.value === "none" ||
	// 	selectedModel.value === "none"
	// ) {
	// 	return alert("selecteaza un producator auto si modelul dorit.");
	// }

	console.log("producator", selectedManufacturer);
	console.log("model", selectedModel);
};
</script>
