const courseCategories = [
  'Python',
  'Analytics & Data Science',
  'Testing',
  'Career Guidance',
  'Other Courses'
]

const demoCourses = [
  {
    title: 'Python Programming',
    description:
      'Learn Basic of python and all the essentials you need to get started with it ',
    tag: 'Programming',
    imageURL:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    alt: 'python Programming',
    courseLink: '/course/pythonprogramming',
    category: ['Python'],
  },
  {
    title: 'Python Projects',
    description:
      'Make begineer to advance level project and get real world prgoramming skills',
    tag: 'Programming',
    imageURL:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
    alt: 'python projects',
    courseLink: '/course/pythonproject',
    category: ['Python'],
  },
  {
    title: 'SQL',
            description: 'SQL is a programming language for storing and processing information in a relational database. ',
    tag: 'Technology',
    imageURL:
      'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-1125-SQL_Server_2022_web_blade_image_RWWaqg:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=600&qlt=100&fmt=png-alpha&fit=constrain',
    alt: 'sql',
    courseLink: '/course/sql',
    category: ['Other Courses'],
  },
  {
    title: 'Power BI',
    description:
      'Build powerful end-to-end business solutions by connecting Power Automate across Microsoft Power Platform',
    tag: 'Technology',
    imageURL:
      'https://pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg',
    alt: 'Power BI',
    courseLink: '/course/powerbi',
    category: ['Other Courses'],
  },
  {
    title: 'Data Science',
    description:
      'Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning ',
    tag: 'Technology',
    imageURL:
      'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    alt: 'Data Science',
    courseLink: '/course/datascience',
    category: ['Analytics & Data Science'],
  },
  {
    title: 'Data analytics',
    description:
      'A data analyst collects, cleans, and interprets data sets to answer a question or solve a problem',
    tag: 'Technology',
    imageURL:
      'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICS-1686234812978.png',
    alt: 'Data analytics',
    courseLink: '/course/dataanalytics',
    category: ['Analytics & Data Science'],
  },
  {
    title: 'Software Testing',
    description:
      'AIct of examining the artifacts and the behavior of the software under test by validation and verification.',
    tag: 'Technology',
    imageURL:
      'https://optimworks.com/wp-content/uploads/2022/06/Software-Testing-1280x720-1.jpg',
    alt: 'Software Testing ',
    courseLink: '/course/softwaretesting',
    category: ['Testing'],
  },
  {
    title: 'Computer Science Subjects',
            description: 'Principal areas of study within Computer Science includes computer science syllabus subjects for college and GATE exam',
    tag: 'College Subject',
    imageURL:
      'https://us.123rf.com/450wm/ra2studio/ra2studio2104/ra2studio210405103/168030448-hand-touching-digital-button-modern-technology-concept.jpg?ver=6',
    alt: 'Computer Science subjects',
    courseLink: '/course/cssubjects',
    category: ['Career Guidance'],
  },
  {
    title: 'How to start a Career in Tech',
    description:
      'How to Kickstart Your Tech Career – A Step-by-Step Guide to build A career in tech is a career without boundaries.',
    tag: 'Career',
    imageURL:
      'https://resumeperk.com/uploads/2092/images/343961d2512a15982661376304c9372b.jpg',
    alt: 'Computer Science subjects ',
    courseLink: '/course/careerintech',
    category: ['Career Guidance'],
  },
];

const pythonCourse = [
  {
    title: 'Introduction & Python Installation and Setups',
    topics: ['Install Python', 'Install VScode IDE ', 'Install Pycharm IDE '],
  },
  {
    title: 'Fundamentals Of Python',

    topics: [
      'Hello! World',
      'Variables',
      'Memory',
      'Python Comments',
      'Data Types in Python',
      'Input Function',
    ],
  },
  {
    title: 'Operators In Python',
    topics: ['Python Operators and Expressions'],
  },
  {
    title: 'Control Flows',
    topics: [
      'Syntax of if else',
      'Nested if else',
      'If elif & else',
      'Challenge: Print Largest',
      'Challenge: Grading System',
      'Challenge: Aging System',
      'Challenge: Cricket System',
    ],
  },
  {
    title: 'Loops In Python',
    topics: [
      'Intro to Python Loops',
      'While loop',
      'Print Numbers using Python loop',
      'Print Even Numbers in Given Range',
      'Print Sum of Numbers in given Range',
      'Range Function',
      'Iterator, Iterable & Iteration',
      'For loop in Python',
      'Print Multiplication table',
      'Print Pattern -1',
      'Print Pattern - 2',
      'Break Continue & Pass Statements',
    ],
  },
  {
    title: 'Strings In Python',
    topics: [
      'Strings in Python',
      'ord & chr in Python',
      'Indexing in Strings',
      'Accessing a character in string',
      'String Slicing',
      'String Methods part 1',
      'String Methods part 2',
      'String Formatting',
      'String Concatenation',
      'Challenge: Print Vowels',
      'Challenge: Check Palindrome',
    ],
  },
  {
    title: 'Lists',
    topics: [
      'Intro to DataStructures in Python',
      'Introduction to Lists in Python',
      'List Slicing',
      'List Operations',
      'Append vs Extend in lists',
      'Heterogeneous lists',
      '2-D Lists',
      'Iteration in 2D List',
      'List Comprehension',
      'Challenge: Find total population',
    ],
  },
  {
    title: 'Tuples',
    topics: [
      'Intro to Tuples in Python',
      'Creating a tuple',
      'Mutability in tuples',
      'Tuple unpacking',
      'Tuple Operations',
    ],
  },
  {
    title: 'Dictionary',
    topics: [
      'Introduction to Dictionary',
      'Creating Dictionary',
      'Accessing Data in Dictionary',
      'Updating dictionary',
      'Deletion Operations in Dictionary',
      'Iteration in Dictionary',
      'More Dictionary Methods',
      'Challenge: Find Frequency of Characters in a String',
    ],
  },
  {
    title: 'Sets',
    topics: [
      'Intro to Sets in Python',
      'Update & Delete Operations',
      'Intersection',
      'Union',
      'Difference',
      'Challenge: Find Unique words',
    ],
  },
  {
    title: 'Functions',
    topics: [
      'Functions Introduction',
      'Defining a Function',
      'Docstrings',
      'Parameter & Arguments',
      'Return',
      'Returning Multiple values',
      'Scope of a Variable',
      'Lambda Function',
      'Challenge: Print Even Numbers',
      'Challenge: Return List with Unique Numbers',
      'Arguments vs Parameters in Functions',
      'Positional Arguments',
      'Default Arguments',
      'Default follows non-default',
      'Arbitrary Arguments',
      'Keyword Arguments',
    ],
  },
  {
    title: 'OOP In Python',
    topics: [
      'Intro to OOPS in Python',
      'Class & Object in Python',
      'Class Constructor',
      'Class Methods',
      'Class Variables',
      'Adding more methods in Class',
      'Inheritance introduction',
      'Inheritance Code',
      'Adding Attributes in Derived Class',
      'Adding Methods in Derived Class',
      'Polymorphism in Python',
      'Operator Level Polymorphism',
      'Function level Polymorphism',
    ],
  },
  {
    title: 'File Handling In Python',
    topics: [
      'Intro to File-Handling in Python',
      'File Operations in Python',
      'with open',
      'Writing a file',
      'Reading a file',
      'Handling Binary File',
      'Appending in a File',
    ],
  },
  {
    title: 'Error & Exception Handling',
    topics: [
      'Intro to Errors & Exception in Python',
      'Try & except',
      'Except block',
      'Finally in Python',
    ],
  },
];

const pythonProjects = [
  'Rock, Paper, Scissors Game',
  'Password Generator',
  'QR Code Encoder/Decoder',
  'Tic-Tac-Toe Game',
  'Sudoku Solver',
  'Guess the Number Game (Computer)',
  'Guess the Number Game (User)',
  'Hangman',
  'Snake Game',
  'Minesweeper',
  'Binary Search Project',
  'Photo Manipulation in Python',
  'Connect Four Game',
  'Tetris',
  'Online Multiplayer Game',
  'Pong',
  'Markov Chain Text Composer',
  'Countdown Timer',
  'Web Scraping Program',
  'Bulk File Renamer',
  'Weather Program',
  'Code a Discord Bot with Python - Host for Free in the Cloud',
  'Space Invaders Game',
  'Draw Chessboard using Turtle',
  'Automate Google Search',
  'Automate Birthday Mail',
  'Color Game using Tkinter',
  'Create Digital Clock using Turtle',
  'Extract Frames using OpenCV',
  'Invisible Cloak',
];

const powerBICourse = [
  {
    title: 'Module 1 - Power BI Introduction',
    topics: [
      'Introduction to Power BI Desktop',
      'Getting data (Excel and RDBMS, Web, SharePoint)',
      'Naming for Q&A',
      'Direct Query vs Import data',
    ],
  },
  {
    title: 'Module 2 - Modeling with Power BI',
    topics: [
      'Introduction to Modelling',
      'Set up and Manager relationships',
      'Cardinality and cross filtering',
      'Creating hierarchy in the model',
      'Default summarization and sort by',
      'Creating calculated columns',
      'Creating measures and quick measures',
    ],
  },
  {
    title: 'Module 3 - Power BI Desktop Visualizations',
    topics: [
      'Creating visuals',
      'Colour and conditional formatting',
      'Setting sort order',
      'Scatter and bubble charts and play axis',
      'Tool tips',
      'Slicers, timeline Slicers and sync Slicers',
      'cross filtering and highlighting',
      'Visual, Page and Report level filters',
      'Drill down/up',
    ],
  },
  {
    title: 'Module 4 -DAX Expressions',
    topics: [
      'Introduction to Dax (how to write Dax and basic functions in Power BI)',
      'Important Dax used in Power BI along with its applications.',
      'how to create calculated columns and measures in Power BI and difference in its application',
      'Scenarios with Questions on Dax & explanation',
      'Creating date dimension in Power BI using calendar functions and its importance',
    ],
  },
  {
    title: 'Module 5 - Publishing and Sharing',
    topics: [
      'Sharing options',
      'Publish from Power BI Desktop',
      'Publish reports to Web',
      'Sharing reports and Dashboards',
      'Workspaces',
      'Apps',
      'Printing, PDF’s and exports',
      'Row level Security',
      'Exporting data from Visualizations Refreshing Datasets',
      'Understanding data refresh',
      'Gateways',
    ],
  },
  {
    title: 'Module 6: Projects',
    topics: [
      'Healthcare Analytics',
      'Finance Analytics',
      'HR Analytics',
      'E-commerce Analytics',
      'IPL Data Analytics',
      'Football Data Dashboard',
      'Salary Dashboard',
    ],
  },
];

const sqlCourse = [
  'Module 1: SQL Introduction',
  'Module 2: SQL Database Users',
  'Module 3: SQL Database',
  'Module 4: SQL Table',
  'Module 5: SQL Constraints',
  'Module 6: SQL Keywords',
  'Module 7: SQL Data Types',
  'Module 8: SQL Operators',
  'Module 9: SQL Wildcard Characters',
  'Module 10: SQL Aggression Functions',
  'Module 11: SQL views',
  'Module 12: SQL Dates',
  'Module 13: SQL Stored Procedures',
  'Module 14: Advanced SQL',
];

const dataScienceCourse = [
  {
    title: 'Introduction to Data Science',
    topics: [
      'Overview of data science',
      'Roles in data science',
      'Key skills required',
    ],
  },
  {
    title: 'Data Exploration and Visualization',
    topics: [
      'Introduction to data visualization tools',
      'Statistical analysis',
      'Data exploration using Python libraries (Pandas, NumPy, Matplotlib, Seaborn)',
      'Case Study 1',
      'Case Study 2',
      'Case Study 3',
      'Case Study 4',
    ],
  },
  {
    title: 'Data Preprocessing',
    topics: [
      'Handling missing data',
      'Data transformation',
      'Feature scaling and normalization',
      'Encoding categorical variables',
    ],
  },
  {
    title: 'Supervised Learning',
    topics: [
      'Linear regression',
      'Logistic regression',
      'Decision trees',
      'Random forests',
      'Support vector machines (SVM)',
      'K-Nearest Neighbors (KNN)',
      'Naive Bayes',
      'Case Study 1',
      'Case Study 2',
    ],
  },
  {
    title: 'Unsupervised Learning',
    topics: [
      'Clustering techniques (K-means, hierarchical, DBSCAN)',
      'Dimensionality reduction techniques (PCA, t-SNE)',
      'Case Study 1',
      'Case Study 2',
    ],
  },
  {
    title: 'Model Evaluation and Selection',
    topics: [
      'Cross-validation',
      'Hyperparameter tuning',
      'Model performance metrics (accuracy, precision, recall, F1-score, ROC curve)',
    ],
  },
  {
    title: 'Time Series Analysis',
    topics: [
      'Introduction to time series data',
      'Time series decomposition',
      'ARIMA models',
      'Exponential smoothing',
      'Project 1',
      'Project 2',
    ],
  },
  {
    title: 'Introduction to Deep Learning',
    topics: [
      'Neural networks basics',
      'Convolutional Neural Networks (CNN)',
      'Recurrent Neural Networks (RNN)',
      'Long Short-Term Memory (LSTM)',
      'Project 1',
    ],
  },
  {
    title: 'Natural Language Processing',
    topics: [
      'Text preprocessing',
      'Text analytics',
      'Sentiment analysis',
      'Topic modeling',
      'Word embeddings (Word2Vec, GloVe)',
      'Project 1',
    ],
  },
  {
    title: 'Big Data Analytics',
    topics: [
      'Introduction to big data',
      'Hadoop and Spark',
      'Distributed computing and storage',
    ],
  },
  {
    title: 'Data Science Project Lifecycle',
    topics: [
      'Problem formulation',
      'Data collection and cleaning',
      'Feature engineering',
      'Model development',
      'Model evaluation and deployment',
    ],
  },
  {
    title: 'Capstone Project and Case Studies',
    topics: [
      'Real-world data science projects',
      'Industry-specific case studies',
      'Hands-on experience with data science tools and techniques',
    ],
  },
];

const dataAnalystCourse = [
  {
    title: 'Module 1: Business Analytics with Excel',
    topics: [
      'Introduction to Business Analytics',
      'Conditional Formatting and Important Functions',
      'Analyzing Data with Pivot Tables',
      'Dashboarding',
      'Business Analytics with Excel',
      'Data Analysis Using Statistics',
      'Power BI',
    ],
  },
  {
    title: 'Module 2: SQL',
    topics: [
      'Fundamental SQL Statements',
      'Restore and Back-up',
      'Selection Commands: Filtering',
      'Selection Commands: Ordering Alias',
      'Aggregate Commands Group By Commands',
      'Conditional Statement',
      'Joins',
      'Subqueries',
      'Views and Index',
      'String Functions',
      'Mathematical Functions',
      'Date and Time Functions',
      'Pattern (String) Matching',
      'User Access Control Functions',
    ],
  },
  {
    title: 'Module 3: Programming Foundation and Data Analytics with Python',
    topics: [
      'Introduction to Programming',
      'Programming Environment Setup',
      'OOPs Concepts',
      'Programming Fundamentals of Python',
      'File Handling, Exception Handling, and Package Handling',
      'Course Introduction',
      'Data Analytics Overview',
      'Statistical Computing',
      'Mathematical Computing Using NumPy',
      'Data Manipulation with Pandas',
      'Data Visualization with Python',
      'Intro to Model Building',
    ],
  },
  {
    title: 'Module 4: Tableau Training',
    topics: [
      'Getting Started with Tableau',
      'Core Tableau in Topics',
      'Creating Charts in Tableau',
      'Working with Metadata',
      'Filters in Tableau',
      'Applying Analytics to the Worksheet',
      'Dashboards in Tableau',
      'Modifications to Data Connections',
      'Introduction to Level of Details in Tableau (LODS)',
    ],
  },
  {
    title: 'Module 5: Data Visualization Using Power BI',
    topics: [],
  },
  {
    title: 'Module 6: Data Analytics Capstone',
    topics: [],
  },
];
const softwareTestingCourse = [
  {
    title: 'Manual Testing',
    topics: [
      'Introduction',
      'Verification and Validation',
      'Types of applications',
      'Probabilities Of getting an error in an application',
      'SDLC',
      'Waterfall',
      'Prototype',
      'Spiral',
      'Incremental',
      'V-model',
      'Advantage and Disadvantages of SDLC',
      'Principal of Testing',
      'STLC',
      'Difference between Test case, Use case & Scenario',
      'How to prepare Test plan and Strategy',
      'How to prepare a Test case template',
      'Diff. Between error, bug, defect & failure',
      'Test Case design techniques',
      'Bug life analysis',
      'How to prepare bug template?',
      'Bug tracking tool',
      'Type of tetsing',
      'Statis and Dynamic Tetsing',
      'Functional & Non functional Tetsing',
      'Black box & its type',
      'White box & its type',
      'System vs User Acceptance tetsing',
      'Entry & Exit Criteria',
      'Test Environment & Test Data Preparation',
      'Flow Graph notation',
      'Integration Tetsing',
      'Requirement tracability Matrix',
    ],
  },
  {
    title: 'Automation Testing',
    topics: [
      'Java/Python Basics (Preferred by Student)',
      'Introduction to selenium',
      'Introduction to Automation Tetsing',
      'Introduction to webdriver',
      'Selenium Installation',
      'Webdriver Basics-1',
      'Webdriver Basics-2',
      'TestNG',
      'Webdriver framework',
      'Selenium grid',
      'DB Testing using webdriver',
      'BDD Framework using cucumber',
      'Project Execution',
      'Mobile App Test Automation using Appium',
      'Version Control Introduction',
      'Github',
      'JUnit',
      'Log4j',
      'Resume Preparation',
    ],
  },
];

const computerScienceSubjects = [
  'Compiler Design',

  'C-Programming & DS',

  'Computer Networks',

  'Operating System',

  'DataBase Management',

  'Algorithms',

  'Theory Of Computation',

  'Digital Logic',

  'Computer Organisation',
];

const courseImageURL = {
  'Python Programming': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
  'Python Projects': 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
  'SQL': 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-1125-SQL_Server_2022_web_blade_image_RWWaqg:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=600&qlt=100&fmt=png-alpha&fit=constrain',
  'Power BI': 'https://pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg',
  'Data Science': 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
  'Data Analytics': 'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICS-1686234812978.png',
  'Software Testing': 'https://optimworks.com/wp-content/uploads/2022/06/Software-Testing-1280x720-1.jpg',
  'Computer Science Subjects': 'https://us.123rf.com/450wm/ra2studio/ra2studio2104/ra2studio210405103/168030448-hand-touching-digital-button-modern-technology-concept.jpg?ver=6',
  'How to start a Career in Tech': 'https://resumeperk.com/uploads/2092/images/343961d2512a15982661376304c9372b.jpg',
};


const mainimage = "https://e-learning2-tailwind-nextjs-free.vercel.app/_next/image?url=%2Fassets%2Fbanner%2Fmard.png&w=1080&q=75"


export {
  courseCategories,
  demoCourses,
  pythonCourse,
  pythonProjects,
  powerBICourse,
  sqlCourse,
  dataScienceCourse,
  dataAnalystCourse,
  softwareTestingCourse,
  computerScienceSubjects,
  courseImageURL,
  mainimage
};
