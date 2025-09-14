<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

const { loggedIn, fetch: refreshSession, clear } = useUserSession()
const toast = useToast()
const loginModal = ref(false)
const logging = ref(false)
const state = reactive({
  password: ''
})

useSeoMeta({
  ogSiteName: 'Atinotes',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: 'atinux'
})

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  if (!event.data.password) return

  await $fetch('/api/login', {
    method: 'POST',
    body: { password: event.data.password }
  })
    .then(async () => {
      await refreshSession()
      loginModal.value = false
      state.password = ''
    })
    .catch(err => toast.add({
      title: 'Wrong password',
      description: err.data?.message,
      color: 'error'
    }))
  logging.value = false
}
</script>

<template>
  <UApp>
    <Head>
      <Html lang="en" />
    </Head>
    <NuxtLoadingIndicator />
    <UHeader
      title="Atinotes"
      :toggle="false"
    >
      <template #right>
        <UColorModeButton />
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/atinux/atinotes"
          target="_blank"
          color="neutral"
          variant="ghost"
        />
        <UButton
          v-if="loggedIn"
          color="neutral"
          @click="clear"
        >
          Logout
        </UButton>
        <UButton
          v-else
          color="neutral"
          @click="loginModal = true"
        >
          Login
        </UButton>
      </template>
    </UHeader>
    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <UModal v-model:open="loginModal">
      <template #content>
        <UCard>
          <UForm
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField
              label="Password"
              name="password"
            >
              <UInput
                v-model="state.password"
                type="password"
                icon="i-heroicons-lock-closed"
                class="w-full"
              />
            </UFormField>
            <UButton
              type="submit"
              :disabled="state.password.length < 1"
              :loading="logging"
              block
            >
              Login
            </UButton>
          </UForm>
        </UCard>
      </template>
    </UModal>
  </UApp>
</template>
