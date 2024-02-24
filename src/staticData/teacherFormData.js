const textData = [
    {
        label: "Name of the Teacher",
        name: "name"
    },
    {
        label: "Link to your Image",
        name: "imageLink"
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
        label: "Course Fee for Group Session",
        name: "groupFee"
    },
    {
        label: "Course Fee for 1-1 Session",
        name: "individualFee"
    },
    {
        label: "Drop your LinkedIn handle",
        name: "linkedin",
        optional: true,
    },
    {
        label: "Drop your Twitter handle",
        name: "twitter",
        optional: true,
    },
    {
        label: "Drop your Instagram handle",
        name: "instagram",
        optional: true,
    },
    {
        label: "Number of demo classes you will provide to each student",
        name: "demoCount",
        type: "number",
    },
    {
        label: "Number of sessions you will take per week",
        name: "sessionCount",
        type: "number",
    },
    {
        label: "Pre-requisties for students",
        name: "preRequisities"
    },
    {
        label: "Teaching Experience you have(in years)",
        name: "experience",
        type: "number"
    },
    {
        label: "YouTube video link that describe about your work",
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
        name: "course-name",
        label: "Course you want to teach",
        values: ["Python Programming", "Python Projects", "SQL", "Power BI", "Data Science", "Data analytics", "Software Testing", "Computer Science Subjects", "How to start a Career in Tech"]
    },
]


export {
    textData,
    radioData
}