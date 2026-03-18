import {defineType, defineField } from 'sanity'

export const heroType = defineType({
    name: "herosection",
    title: "Hero Section",
    type: "object",
    fields: [
        defineField({
             name: "subheading",
             title: "Sub Heading",
             type: "string",
        }),

        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
        name: "buttons",
        title: "Buttons",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
                {name: "btnlabel", title: "Label", type: "string"},
                {name: "btnurl", title: "URL", type: "string"},
                {name: "icon", title: "Icon", type: "image"}
            ],
          }
        ]
       }) ,
       defineField({
        name: "image",
        title: "Image",
        type: "image",
       }),

       defineField({
        name: "sponsored",
        title: "Sponsor Description",
        type: "string"
       }),

       defineField({
        name: "sponsorlogo",
        title: "Sponsored Logo",
        type: "array",
        of: [{
            type: "object",
            fields: [
                {name: "url", title: "url", type: "string"},
                {name: "logo", title: "Logo", type: "image"}
            ]
        }]
       })
    ]
})