import {defineType, defineField} from 'sanity'

export const pricingType = defineType({
  name: 'pricingsection',
  title: 'Pricing Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'billingPlan',
      title: 'Billing Plan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'palnName',
              title: 'Plan Name',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'period', title: 'Period', type: 'string'},
                    {name: 'saving', title: 'Saving in %', type: 'string'},
                    {name: 'price', title: 'Price', type: 'string'},
                  ],
                },
              ],
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{type: 'block'}],
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'string',
            }),
            defineField({
              name: 'isPopular',
              title: 'Is Popular',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
})