import {defineType, defineField} from "sanity";

export const benefitGrid = defineType({
  name: 'benefitgridsection',
  title: 'Benefit Grid Section',
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
      name: 'benefitcards',
      title: 'Befefit Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
                name: "image",
                title: "Image",
                type: "image"
            },
            {
                name: "hasButton",
                title: "Enable Button",
                type: "boolean",
                initialValue: false,
            },
            defineField({
                name: "button",
                title: "Button",
                type: "object",
                hidden: ({parent}) => !parent?.hasButton,
                fields: [
                    {name: "label", title: "label", type: "string"},
                    {name: "url", title: "URL", type: "string"},
                ]
            })
          ],
        },
      ],
    }),
  ],
})