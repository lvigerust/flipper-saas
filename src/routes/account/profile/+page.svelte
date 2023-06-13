<script lang="ts">
	import { ProfileForm, EmailForm } from './index'

	export let data

	$: ({ session } = data)
</script>

<div class="avatar">
	<div class="w-24 rounded-full">
		<img src={session?.user.user_metadata.avatar} alt="avatar" />
	</div>
</div>

<ProfileForm data={data.profileForm} />

<div class="divider" />

<EmailForm data={data.emailForm} />
