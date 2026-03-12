import {defineField, defineType} from 'sanity'

export const navbarType = defineType({
  name: 'navbar',
  title: 'navbar',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Navbar',
      }
    },
  },
  fields: [
    defineField({
      name: 'logowhite',
      title: 'logo for white mode',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logobalck',
      title: 'logo for balck mode',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'label', type: 'string'},
            {name: 'href', title: 'url', type: 'string'},
            {
              name: 'hasDropdown',
              title: 'Enable Dropdown',
              type: 'boolean',
              initialValue: false,
            },
            defineField({
              name: 'dropdown',
              title: 'dropdownlink',
              type: 'array',
              hidden: ({parent}) => !parent?.hasDropdown,
              of: [
                {
                  type: 'reference',
                  to: [{type: "page"}]
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
            },
            {
              name: 'href',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})