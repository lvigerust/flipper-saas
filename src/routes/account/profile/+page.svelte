<div class="mx-auto max-w-md space-y-4">
	<!-- Avatar -->
	<div class="flex items-center gap-4">
		<div class="placeholder avatar">
			<div class="w-16 rounded-full bg-neutral-focus text-neutral-content">
				<span class="text-lg">LV</span>
			</div>
		</div>

		<div>
			<h3 class="font-semibold">Avatar</h3>
			<p>Min 200*200px .PNG or .JPEG</p>
		</div>
	</div>

	<!-- Inputs -->
	<div class="flex flex-col gap-4">
		<!-- First name -->
		<div class="form-control w-full">
			<label class="label" for="firstName">
				<span class="label-text font-medium">First name</span>
			</label>
			<input
				type="text"
				name="firstName"
				placeholder="Ludvig"
				class="input-bordered input text-sm"
			/>
		</div>

		<!-- Last name -->
		<div class="form-control w-full">
			<label class="label" for="Last name">
				<span class="label-text font-medium">Last name</span>
			</label>
			<input
				type="text"
				name="lastName"
				placeholder="Vigerust"
				class="input-bordered input text-sm"
			/>
		</div>

		<!-- Email -->
		<div class="form-control w-full">
			<label class="label" for="email">
				<span class="label-text font-medium">Email</span>
			</label>
			<input
				type="text"
				name="email"
				placeholder="l.vigerust@gmail.com"
				class="input-bordered input text-sm"
			/>
		</div>

		<!-- Submit button -->
		<button class="btn mt-4 w-full normal-case">Save Changes</button>
	</div>
</div>
