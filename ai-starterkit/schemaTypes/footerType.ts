import { defineType, defineField } from "sanity";

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'weblogo',
      title: 'Website Logo',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'sociallink',
      title: 'Social Link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'logo', title: 'Social Logo', type: 'image'},
            {name: 'logourl', title: 'url', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'service', title: 'label', type: 'string'},
            {name: 'url', title: 'Url', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'feature', title: 'label', type: 'string'},
            {name: 'url', title: 'Url', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'account',
      title: 'Account',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'label', type: 'string'},
            {name: 'url', title: 'Url', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'url',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})