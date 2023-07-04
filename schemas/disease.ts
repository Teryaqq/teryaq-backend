export default {
    name: "disease",
    type: "document",
    title: "Disease",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "overview",
            title: "Overview",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "symptoms",
            title: "Symptoms",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "causes",
            title: "Causes",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "riskFactors",
            title: "Risk factors",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "complications",
            title: "Complications",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "prevention",
            title: "Prevention",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "extraInfo",
            title: "Extra information",
            type: "text"
        },
    ]
}
