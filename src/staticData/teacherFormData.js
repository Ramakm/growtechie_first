const textData = [
    {
        label: "Name of the Teacher",
        name: "name"
    },
    {
        label: "Email",
        name: "email"
    },
    {
        label: "Mobile No",
        name: "phone"
    },
    {
        label: "Course Fee for Group Session",
        name: "group-fee"
    },
    {
        label: "Course Fee for 1-1 Session",
        name: "individual-fee"
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
        name: "demo-count"
    },
    {
        label: "Pre-requisties for students",
        name: "pre-requisities"
    },
    {
        label: "Teaching Experience you have(in years)",
        name: "experience"
    },
    {
        label: "YouTube video link that describe about your work",
        name: "yt-link",
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