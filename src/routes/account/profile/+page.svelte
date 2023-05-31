<script lang="ts">
	import { ProfileForm, EmailForm } from './index'

	export let data
</script>

<ProfileForm data={data.profileForm} />

<div class="divider" />

<EmailForm data={data.emailForm} />
