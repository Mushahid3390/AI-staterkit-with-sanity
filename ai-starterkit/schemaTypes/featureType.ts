import { defineField, defineType } from "sanity";

export const featureType = defineType({
  name: 'featuresection',
  title: 'Feature Section',
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
      name: 'featurecards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Crad',
          fields: [
            {
                name: "icon",
                title: "Icon",
                type: 'image',
            },
            {
                name: 'heading',
                title: 'Title',
                type: "string",
            },
            {
                name: "description",
                title: "Description",
                type: "string",
            }
          ]
        },
      ],
    }),
  ],
})