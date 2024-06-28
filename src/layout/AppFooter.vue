<template>
	<footer class="mt-10 bg-[#E4E7EB]">
		<div class="px-16 py-6 xs:p-6 md:px-48 md:pt-20 lg:px-72 lg:pt-24 flex justify-between">
			<div id="generalInfoEl">
				<div class="flex xs:text-[10px] md:text-lg items-center" id="phoneNumber">
					<font-awesome-icon
						:icon="['fas', 'square-phone']"
						class="mr-1 text-secondary-500"
					/>
					<h6>+40 771 345 939</h6>
				</div>
				<div class="flex xs:text-[10px] md:text-lg items-center" id="locationAddr">
					<font-awesome-icon
						:icon="['fas', 'location-dot']"
						class="mr-1 text-secondary-500"
					/>
					<h6>Bulevardul I.C. Bratianu nr. 45, strada Justitiei</h6>
				</div>
				<div class="flex xs:text-[10px] md:text-lg items-center" id="emailAddress">
					<font-awesome-icon
						:icon="['fas', 'envelope']"
						class="mr-1 text-secondary-500"
					/>
					<h6>vladutdone@gmail.com</h6>
				</div>
				<div class="flex" id="companyName">
					<h1 class="font-black uppercase text-xl">SOUNDFORFUN</h1>
				</div>
			</div>

			<div id="workingHoursEl">
				<div class="text-center xs:text-[10px] text-xs md:text-lg">
					<h1 class="font-black uppercase">Program de lucru</h1>
				</div>
				<div class="text-center xs:text-[10px] text-xs md:text-lg">
					<span class="font-black">L-V: </span>
					<span>18:00 - 00:00</span>
				</div>
				<div class="text-center xs:text-[10px] text-xs md:text-lg">
					<span class="font-black">S: </span><span>15:00 - 00:00</span>
				</div>
				<div class="text-center xs:text-[10px] text-xs md:text-lg">
					<span class="font-black">D: </span>
					<span>09:00 - 00:00</span>
				</div>
			</div>
		</div>

		<div class="p-6" id="socialMediaLinks">
			<div class="flex justify-center items-center" id="socialIcons">
				<div class="mr-5 md:mr-10">
					<hr
						class="w-[75px] xs:w-[35px] md:w-[125px] lg:w-[225px] xl:w-[500px] border-black border-1"
					/>
				</div>
				<div class="mr-5 md:mr-10 flex items-center">
					<a
						href="https://www.facebook.com/profile.php?id=100078914195425"
						target="blank"
					>
						<img
							src="@/assets/images/facebook-icon.svg"
							alt="facebook-icon"
							class="w-[32px] h-[32px]"
						/>
					</a>
				</div>
				<div class="mr-5 md:mr-10 flex items-center">
					<a href="https://instagram.com/soundforfunconstanta" target="blank">
						<img
							src="@/assets/images/instagram-icon.svg"
							alt="instagram-icon"
							class="w-[32px] h-[32px]"
						/>
					</a>
				</div>
				<div class="mr-5 md:mr-10 flex items-center">
					<a href="whatsapp:+40771345939" target="blank">
						<img
							src="@/assets/images/whatsapp-icon.svg"
							alt="whatsapp-icon"
							class="w-[32px] h-[32px]"
						/>
					</a>
				</div>
				<div class="mr-5 md:mr-10 flex items-center">
					<a href="https://www.tiktok.com/@soundforfunconstanta" target="blank">
						<img
							src="@/assets/images/tiktok-icon.svg"
							alt="tiktok-icon"
							class="w-[32px] h-[32px]"
						/>
					</a>
				</div>
				<div>
					<hr
						class="w-[75px] xs:w-[35px] md:w-[125px] lg:w-[225px] xl:w-[500px] border-black border-1"
					/>
				</div>
			</div>
		</div>

		<div class="text-center text-gray-400 p-6">
			<h1>Copyright © 2022, SOUND4FUN. All rights reserved | Powered by Matei Daniel</h1>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>
