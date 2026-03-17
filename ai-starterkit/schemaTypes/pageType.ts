import { defineField, defineType } from "sanity"

export const pageType = defineType({
  name: 'homepage',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'herosection'},
        {type: 'featuresection'},
        {type: 'toolstabsection'},
        {type: 'benefitgridsection'},
        {type: 'testimonialsection'},
        {type: 'pricingsection'},
      ],
    }),
  ],
})