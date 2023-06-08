<script lang="ts">
	import { EllipsisVertical } from '$icons'
	import { hasReachedMaxContacts } from '$lib/helpers'
	import CreateContactModal from './CreateContactModal.svelte'
	import DeleteContactModal from './DeleteContactModal.svelte'
	import UpgradePlanModal from './UpgradePlanModal.svelte'

	let createContactModal: HTMLDialogElement
	let deleteContactModal: HTMLDialogElement
	let contactToDelete: string
	let upgradePlanModal: HTMLDialogElement

	function handleContactDelte(contact_id: string) {
		contactToDelete = contact_id

		deleteContactModal.showModal()
	}

	export let data
	$: ({ createContactForm, contacts, deleteContactForm, tier, contactsCount } = data)
	$: reachedMaxContacts = hasReachedMaxContacts(tier, contactsCount)

	function handleContactCreate() {
		if (reachedMaxContacts) {
			upgradePlanModal.showModal()
			return
		}

		createContactModal.showModal()
	}
</script>

<div class="rounded-lg border border-slate-700 bg-neutral py-10">
	<div class="mx-auto max-w-7xl">
		<section class="px-4">
			<div class="mx-4 sm:flex sm:items-center">
				<div class="flex-auto">
					<h1 class="text-base font-semibold leading-6 text-slate-300">Users</h1>
					<p class="mt-2 text-sm">
						A list of all the users in your account including their name, email, phone and company.
					</p>
				</div>
				<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						tabindex="0"
						on:click={handleContactCreate}
						class="block cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
						>Add user</button
					>
				</div>
			</div>
			<div class="mt-8 flow-root">
				<div class="overflow-x-auto">
					<div class="inline-block min-w-full py-2 align-middle">
						<table class="min-w-full text-left text-sm">
							<!-- head -->
							<thead>
								<tr class="font-semibold text-slate-300 [&>th]:px-3 [&>th]:py-[.875rem]">
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Company</th>
									<th class="relative"
										><span
											class="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0"
											>Edit</span
										></th
									>
								</tr>
							</thead>
							<tbody>
								{#each contacts as contact, _i (contact.id)}
									<tr class="group [&>td]:whitespace-nowrap [&>td]:px-3 [&>td]:py-4">
										<td
											class="rounded-l-md font-medium text-slate-300 transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-200"
											>{contact.name ?? '--'}</td
										>
										<td
											class="select-all transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
										>
											{contact.email ?? '--'}
										</td>
										<td
											class="select-all transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
											>{contact.phone ?? '--'}</td
										>
										<td
											class="transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
											>{contact.company ?? '--'}</td
										>
										<td
											class="relative flex rounded-r-md text-right font-medium transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300 sm:pr-0"
										>
											<details class="dropdown-end dropdown">
												<summary class="m-1 w-full cursor-pointer text-blue-300"
													><EllipsisVertical /></summary
												>
												<ul
													class="dropdown-content menu rounded-box z-10 w-52 bg-base-100 p-2 shadow"
												>
													<li><a href="/contacts/{contact.id}">Edit</a></li>
													<li>
														<button on:click={() => handleContactDelte(contact.id)}>Delete</button>
													</li>
												</ul>
											</details>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<CreateContactModal bind:createContactModal {createContactForm} />
<DeleteContactModal bind:deleteContactModal contactId={contactToDelete} {deleteContactForm} />
<UpgradePlanModal
	bind:upgradePlanModal
	{tier}
	message="You have reached the max contacts for your plan. Upgrade to add more contacts."
/>

<style>
	details > summary {
		list-style: none;
	}
	details > summary::-webkit-details-marker {
		display: none;
	}
</style>
