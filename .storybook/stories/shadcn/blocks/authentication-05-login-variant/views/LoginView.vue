<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const schema = z.object({
  email: z
    .string()
    .email('Invalid email.'),

  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    }),
})

type FormValues = z.infer<typeof schema>
const formSchema = toTypedSchema(schema)
const loading = ref(false)

function onSubmit(values: FormValues) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <div class="h-screen w-full overflow-hidden md:grid md:min-h-[600px] md:grid-cols-2 xl:min-h-[800px] xl:grid-cols-3">
    <div class="hidden bg-muted md:block xl:col-span-2">
      <img
        src="/shadcn/placeholder.svg"
        alt="Image"
        width="1920"
        height="1080"
        class="size-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
    <div class="flex h-full items-center justify-center">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Login
          </h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div class="grid gap-4">
          <Form
            v-slot="{ meta }"
            class="w-full"
            :validation-schema="formSchema"
            @submit="onSubmit"
          >
            <div class="grid gap-2">
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" v-bind="componentField" placeholder="m@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <FormField v-slot="{ componentField }" name="password">
                  <FormItem class="w-full">
                    <FormLabel class="flex w-full items-center">
                      Password
                      <RouterLink to="/reset-password" class="ml-auto text-sm !text-foreground underline">
                        Forgot your password?
                      </RouterLink>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" v-bind="componentField" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>
              <Button
                type="submit"
                class="w-full"
                :disabled="loading || (meta.touched && !meta.valid)"
              >
                Login
              </Button>
              <Button variant="outline" class="w-full">
                Login with Google
              </Button>
            </div>
          </Form>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="#" class="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
