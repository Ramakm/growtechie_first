const textData = [
    {
        label: "Name",
        name: "name"
    },
    {
        label: "Mobile No",
        name: "phone"
    },
    {
        label: "Your current position",
        name: "position"
    },
    {
        label: "Bio",
        name: "bio"
    },
    {
        label: "Course Fee for Group Session",
        name: "groupFee"
    },
    {
        label: "Course Fee for 1-1 Session",
        name: "individualFee"
    },
    {
        label: "LinkedIn handle",
        name: "linkedin",
        optional: true,
    },
    {
        label: "Twitter handle",
        name: "twitter",
        optional: true,
    },
    {
        label: "Instagram handle",
        name: "instagram",
        optional: true,
    },
    {
        label: "Number of demo classes you will provide to each student",
        name: "demoCount",
        type: "number",
    },
    {
        label: "Number of sessions (per week)",
        name: "sessionCount",
        type: "number",
    },
    {
        label: "Pre-requisties for students",
        name: "preRequisities"
    },
    {
        label: "Teaching Experience (in years)",
        name: "experience",
        type: "number"
    },
    {
        label: "YouTube video link",
        name: "ytLink",
        optional: true,
    },
    {
        label: "Mention languages in which you are fluent",
        name: "languages"
    },    
]


const radioData = [
    {
        name: "courseName",
        label: "Course you want to teach",
        values: ["Python Programming", "Python Projects", "SQL", "Power BI", "Data Science", "Data analytics", "Software Testing", "Computer Science Subjects", "How to start a Career in Tech"]
    },
]

const fileData = [
    {name: "imageLink"}
]


export {
    textData,
    radioData,
    fileData,
}