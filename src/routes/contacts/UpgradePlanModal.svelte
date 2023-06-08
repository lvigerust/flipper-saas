<script lang="ts">
	import { ExclamationCircle } from '$icons'
	import { getUpgradeUrl } from '$lib/helpers'
	import type { SubscriptionTier } from '$lib/schemas'

	export let upgradePlanModal: HTMLDialogElement
	export let tier: SubscriptionTier
	export let message = 'You must upgrade your plan to access this feature.'
</script>

<dialog bind:this={upgradePlanModal} class="modal">
	<form method="dialog" class="modal-box">
		<div class="flex flex-col justify-center text-center">
			<ExclamationCircle size={8} />
			<h3 class="my-5">{message}</h3>
			<div class="flex w-full justify-center">
				<a href={getUpgradeUrl(tier)} class="mr-2">
					<button class="btn bg-blue-600 text-white">Upgrade</button>
				</a>
				<button class="btn">No, cancel</button>
			</div>
		</div>
	</form>
</dialog>
