<template>
	<div class="w-full bg-grey">
		<div class="py-0 md:py-6 mx-auto px-6 container">
			<div
				class="hidden xl:flex xl:justify-between md:flex md:justify-end mx-auto space-x-10"
			>
				<RouterLink to="/home" class="hidden xl:flex xl:w-8/12 hover:cursor-pointer">
					<img src="@/assets/images/logo.png" width="250" />
				</RouterLink>

				<div id="locationEl">
					<div class="text-2xl flex items-center" id="locationIcon">
						<font-awesome-icon
							:icon="['fas', 'location-dot']"
							class="mr-1 text-secondary-500"
						/>
						<h6 class="font-bold">Locatie</h6>
					</div>

					<div id="locationInfo">
						<p class="text-gray-400">
							Bulevardul I.C. Bratianu nr. 45, strada Justitiei
						</p>
					</div>
				</div>

				<div id="contactEl">
					<div class="text-2xl flex items-center" id="phoneIcon">
						<font-awesome-icon
							:icon="['fas', 'square-phone']"
							class="mr-1 text-secondary-500"
						/>
						<h6 class="font-bold">Telefon</h6>
					</div>

					<div id="phoneInfo">
						<p class="text-gray-400">0771 345 939</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
