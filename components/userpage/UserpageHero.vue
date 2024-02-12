<template>
    <UCard>
        <div class="min-h-72 flex flex-col items-center justify-center relative">
            <section class="prose dark:prose-invert text-pretty text-center relative">
                <h1>{{ name }}</h1>
                <h3>{{ description }}</h3>
                <slot />
            </section>
            <div class="rounded-full size-40 overflow-hidden absolute -bottom-1/3 outline outline-gray">
                <NuxtImg v-if="userImg" :src="userImg" placeholder class="size-40" alt="user profile picture" />
                <div v-else>
                    <p class="uppercase bg-primary size-40 text-center text-[6rem] flex items-center justify-center">{{
                        props.name?.charAt(0) }}</p>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String
    },
    userImg: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    }
})

</script>
