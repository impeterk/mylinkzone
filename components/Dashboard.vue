<script lang="ts" setup>
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { z } from 'zod'

import type { FormSubmitEvent } from '#ui/types'
const user = await useCurrentUser()
const docRef = doc(useFirestore(), 'pages', user.value.uid)

const state = reactive({
    service: undefined,
    link: undefined,
    pageData: undefined,
    action: undefined
})

async function loadPageData() {
    const { data, pending } = await useDocument(docRef)
    state.pageData = data
}

await loadPageData()

const schema = z.object({
    service: z.string(),
    link: z.string().url('Please provide valid URL')
})

type Schema = z.output<typeof schema>


async function handleSubmit(event: FormSubmitEvent<Schema>) {

    const { service, link } = event.data
    await updateDoc(docRef, {
        links: arrayUnion({ service, link })
    })
    state.service = undefined
    state.link = undefined
}
const userData = useUserdata()
async function handleButtonClick(index: number, handler: string) {
    const linkToRemove = state.pageData.links[index]
    switch (handler) {
        case 'remove':
            return await updateDoc(docRef, {
                links: arrayRemove(linkToRemove)
            })
        case 'edit':
            state.action = 'Edit Link'
            useUserdata().value = {
                name: state.pageData?.name,
                description: state.pageData?.description ?? '',
            }
            break
    }
}

async function handleChangeUserdata() {
    const { name, description } = userData.value
    await updateDoc(docRef, {
        name,
        description
    })
}

</script>

<template>
    <UContainer>
        <UserpageHero :name="state.pageData?.name" :userImg="state.pageData?.userImg ?? null" :description="state.pageData?.description">
            <UButton icon="i-heroicons-pencil-square" size="sm" color="primary"
                class="absolute top-0 -translate-y-full translate-x-full -right-full" square variant="outline"
                @click.prevent="handleButtonClick(0, 'edit')" />
        </UserpageHero>
        <ul class=" space-y-4 mt-32" ref="linkList">
            <UserpageLink v-for="({ service, link }, index) in state.pageData?.links" :key="link" :service :link>
                <template #default>
                    <div class="space-x-4">
                        <UButton icon="i-heroicons-x-mark" size="sm" color="red" square variant="outline"
                            @click.prevent="handleButtonClick(index, 'remove')" />
                        <!-- <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" square variant="outline" -->
                        <!--     @click.prevent="handleButtonClick(index, 'edit')" /> -->
                    </div>
                </template>
            </UserpageLink>
        </ul>
        <UCard class="mx-auto max-w-2xl mt-12 ">
            <UForm :state :schema class="grid grid-cols-3 gap-4" @submit="handleSubmit">
                <UFormGroup label="service" name="service">
                    <UInput placeholder="store" icon="i-heroicons-shopping-bag" v-model="state.service" />
                </UFormGroup>
                <UFormGroup class="col-span-2" name="link" label="link">
                    <UInput placeholder="https://mycoolstore.com" icon="i-heroicons-link" name="link"
                        v-model="state.link" />
                </UFormGroup>
                <UButton type="submit" label="save" block class=" col-span-full w-1/2 h-fit mx-auto my-auto" />
            </UForm>
        </Ucard>

    </UContainer>
    <DashboardModal :showModal="Boolean(state.action)" :action="state.action" @close="state.action = undefined"
        @submit="handleChangeUserdata" />
</template>
<style scoped></style>
