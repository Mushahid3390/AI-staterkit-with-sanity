import { defineField, defineType } from "sanity";

export const toolsTab = defineType({
  name: 'toolstabsection',
  title: 'ToolsTab Section',
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
      name: 'tabs',
      title: 'ToolsTab',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Tab',
          fields: [
            {
              name: 'label',
              title: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'id',
              title: 'Tab ID',
              type: 'slug',
              options: {
                source: (doc, options) => (options.parent as {label?: string})?.label,
                slugify: (input) => input.toLowerCase().split(' ')[0],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              type: 'image',
            },
            {
              name: 'lightimage',
              title: 'Light Image',
              type: 'image',
            },
            {
              name: 'darkimage',
              title: 'Dark Image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'button',
      type: 'object',
      fields: [
        {name: 'title', title: 'label', type: 'string'},
        {name: 'url', title: 'url', type: 'string'},
      ],
    }),
  ],
})