import { defineType, defineField } from "sanity";

export const faqType = defineType({
  name: 'faqsection',
  title: 'FAQ Section',
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
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'Ques',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'ans',
              title: 'Answere',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})