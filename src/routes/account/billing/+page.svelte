<script lang="ts">
	export let data
</script>

<div class="mx-auto max-w-md space-y-4 text-center">
	<h1>Billing settings</h1>

	<p>Current plan: {data.tier}</p>

	<a href="/account/billing/portal" class="btn">Manage billing</a>
</div>
