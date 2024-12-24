<script setup lang="ts">
import type { GenericObject, SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const schema = z.object({
  format: z.array(z.enum(['bold', 'italic', 'underline'])),
})

const formSchema = toTypedSchema(schema)

const initialValues = {
  format: ['italic'],
}

const onSubmit: SubmissionHandler<GenericObject> = function (values) {
  const formValues = values as z.infer<typeof schema>

  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(formValues, null, 2)),
    ),
  })
}
</script>

<template>
  <Form
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value, handleChange }" name="format">
      <FormItem>
        <FormControl>
          <ToggleGroup :model-value="value" @update:model-value="handleChange">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon class="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon class="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon class="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </FormControl>
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
