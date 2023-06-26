export default {
    name: "research",
    type: "document",
    title: "Research",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: Rule => Rule.required()
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            validation: Rule => Rule.required()
        },
        {
            name: "file",
            type: "file",
            title: "Research File",
            validation: Rule => Rule.required()
        }
    ]
}
