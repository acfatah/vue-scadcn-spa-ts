<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const schema = z.object({
  firstName: z
    .string(),

  lastName: z
    .string(),

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

function onSubmit(values: FormValues) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Card class="w-full max-w-sm">
    <Form
      class="w-full"
      :validation-schema="formSchema"
      @submit="onSubmit"
    >
      <CardHeader>
        <CardTitle class="text-xl">
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <FormField v-slot="{ componentField }" name="firstName">
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" placeholder="Max" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="lastName">
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" placeholder="Robinson" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" v-bind="componentField" placeholder="m@example.com" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel class="flex items-center">
              Password
            </FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" placeholder="******" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>

      <CardFooter class="grid gap-4">
        <Button type="submit" class="w-full">
          Create an account
        </Button>

        <Button variant="outline" class="w-full">
          Sign up with GitHub
        </Button>

        <div class="text-center text-sm">
          Already have an account?
          <RouterLink to="/login" class="underline">
            Sign in
          </RouterLink>
        </div>
      </CardFooter>
    </Form>
  </Card>
</template>
