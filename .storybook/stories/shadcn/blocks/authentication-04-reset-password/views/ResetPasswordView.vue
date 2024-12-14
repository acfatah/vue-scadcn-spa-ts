<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const schema = z.object({
  email: z
    .string()
    .email('Invalid email.'),
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
  <Card class="w-full max-w-sm">
    <Form
      v-slot="{ meta }"
      class="w-full"
      :validation-schema="formSchema"
      @submit="onSubmit"
    >
      <CardHeader>
        <CardTitle class="text-2xl">
          Forgot Password
        </CardTitle>
        <CardDescription>
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-4">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormControl>
              <Input type="email" v-bind="componentField" placeholder="Enter your email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>

      <CardFooter class="grid gap-4">
        <Button
          type="submit"
          class="w-full"
          :disabled="loading || (meta.touched && !meta.valid)"
        >
          Reset Password
        </Button>

        <div class="text-center text-sm">
          Remember your password?
          <RouterLink to="/login" class="underline">
            Login
          </RouterLink>
        </div>
      </CardFooter>
    </Form>
  </Card>
</template>
