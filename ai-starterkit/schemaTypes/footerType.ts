import { defineType, defineField } from "sanity";

export const footerType = defineType({
  name: 'footer',
  type: 'document',
  preview: {
    prepare(){
        return {title: "Footer"}
    }
  },
  fields: [
    defineField({
      name: 'webwhitelogo',
      title: 'Website White Logo',
      type: 'image',
    }),
    defineField({
      name: 'webblacklogo',
      title: 'Website Black Logo',
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
            {name: 'logourl', title: 'url', type: 'string'},
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
            {name: 'url', title: 'Url', type: 'string'},
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
            {name: 'url', title: 'Url', type: 'string'},
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
            {name: 'url', title: 'Url', type: 'string'},
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