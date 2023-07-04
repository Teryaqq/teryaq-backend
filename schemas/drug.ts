export default {
    name: "drug",
    type: "document",
    title: "Drug",
    fields: [
        {
            name: "genericName",
            title: "Generic name",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "brandNames",
            title: "Brand names",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "dosageForm",
            title: "Dosage form",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "drugClass",
            title: "Drug class",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "usedFor",
            title: "What is it used for",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "sideEffects",
            title: "Side Effects",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required().unique()
        },
        {
            name: "importnantInfo",
            title: "Important information",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "whyNotTake",
            title: "Why should you not take this drug",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "infoBeforeTaking",
            title: "What should i tell my doctor before taking this drug",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "howToTake",
            title: "How should i take this drug",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "interactions",
            title: "Interactions",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "storage",
            title: "Storage",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "ingredients",
            title: "Ingredient",
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
    ]
}
