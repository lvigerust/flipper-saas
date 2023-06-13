<script lang="ts">
	import { ProfileForm, EmailForm } from './index'

	export let data

	$: ({ session } = data)
</script>

<div class="mb-6 flex items-center justify-center gap-4">
	<div class="placeholder avatar">
		<div class="w-16 rounded-full bg-neutral-focus text-neutral-content">
			<img src={session?.user.user_metadata.avatar} alt="avatar" />
		</div>
	</div>

	<div>
		<h3 class="font-semibold">Avatar</h3>
		<p>Min 200*200px .PNG or .JPEG</p>
	</div>
</div>

<ProfileForm data={data.profileForm} />

<div class="divider" />

<EmailForm data={data.emailForm} />
