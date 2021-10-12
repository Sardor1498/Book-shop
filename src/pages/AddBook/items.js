export const getLayoutFields = () => {
    return [
        {
            type: "text",
            name: "author",
            label: "Avtor"
        },
        {
            type: "text",
            name: "title",
            label: "Sarlavha"
        },
        {
            type: "file",
            accept: ".doc,.docx, .xlsx",
            name: "file",
            label: "Faylni yuklash"
        },
        {
            type: "number",
            name: "published",
            label: "Nashr qilingan yil"
        },
        {
            type: "select",
            name: "category_id",
            label: "Kategoriya",
            options: [
                { value: 1, label: "adabiyot" },
                { value: 2, label: "tarix" },
                { value: 3, label: "informatika" },
            ]
        },
        {
            type: "text",
            name: "description",
            label: "Qisqacha ma'lumot"
        },
        {
            type: "number",
            name: "price",
            label: "Narxi"
        },
        {
            type: "select",
            name: "availability",
            label: "Mavjudligi",
            options: [
                { value: 1, label: "xa" },
                { value: 0, label: "yo'q" }
            ]
        },
        {
            type: "file",
            accept: "image",
            name: "photo",
            label: "Rasm yuklash"
        }
    ]
}