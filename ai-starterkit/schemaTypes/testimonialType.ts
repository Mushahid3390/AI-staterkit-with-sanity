import {defineType, defineField} from "sanity";

export const testimonialType = defineType({
    name: "testimonialsection",
    title: "Testimonial Section",
    type: "object",
    fields: [
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
            name: "cards",
            title: "Testimonial Cards",
            type: "array",
            of: [{
                title: "Card",
                type: "object",
                fields: [
                    {name: "name", title: "Name", type: "string"},
                    {name: "workat", title: "Work At", type: "string"},
                    {name: "profileimg", title: "Profile Image", type: "image"},
                    {name: "description", title: "Description", type: "string"},
                ]
            }],
        }),
    ]
})