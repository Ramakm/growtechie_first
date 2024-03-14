import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Data Science",
  subTitle: "Complete Data Science Bootcamp",
  imageUrl:
    "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
  detail:
    "The course provides the entire toolbox you need to become a data scientist Warm up your fingers as you will be eager to apply everything you have learned here to more and more real-life situations",
  requirements: [
    "No prior experience is required. We will start from the very basics",
    "Microsoft Excel 2003, 2010, 2013, 2016, or 365 ",
  ],
  description:
    "You should take this course if you want to become a Data Scientist or if you want to learn about the field",
  isDetailedSyllabus: true,
  syllabus: [
    {
      title: "Introduction to Data Science",
      topics: [
        "Overview of data science",
        "Roles in data science",
        "Key skills required",
      ],
    },
    {
      title: "Data Exploration and Visualization",
      topics: [
        "Introduction to data visualization tools",
        "Statistical analysis",
        "Data exploration using Python libraries (Pandas, NumPy, Matplotlib, Seaborn)",
        "Case Study 1",
        "Case Study 2",
        "Case Study 3",
        "Case Study 4",
      ],
    },
    {
      title: "Data Preprocessing",
      topics: [
        "Handling missing data",
        "Data transformation",
        "Feature scaling and normalization",
        "Encoding categorical variables",
      ],
    },
    {
      title: "Supervised Learning",
      topics: [
        "Linear regression",
        "Logistic regression",
        "Decision trees",
        "Random forests",
        "Support vector machines (SVM)",
        "K-Nearest Neighbors (KNN)",
        "Naive Bayes",
        "Case Study 1",
        "Case Study 2",
      ],
    },
    {
      title: "Unsupervised Learning",
      topics: [
        "Clustering techniques (K-means, hierarchical, DBSCAN)",
        "Dimensionality reduction techniques (PCA, t-SNE)",
        "Case Study 1",
        "Case Study 2",
      ],
    },
    {
      title: "Model Evaluation and Selection",
      topics: [
        "Cross-validation",
        "Hyperparameter tuning",
        "Model performance metrics (accuracy, precision, recall, F1-score, ROC curve)",
      ],
    },
    {
      title: "Time Series Analysis",
      topics: [
        "Introduction to time series data",
        "Time series decomposition",
        "ARIMA models",
        "Exponential smoothing",
        "Project 1",
        "Project 2",
      ],
    },
    {
      title: "Introduction to Deep Learning",
      topics: [
        "Neural networks basics",
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN)",
        "Long Short-Term Memory (LSTM)",
        "Project 1",
      ],
    },
    {
      title: "Natural Language Processing",
      topics: [
        "Text preprocessing",
        "Text analytics",
        "Sentiment analysis",
        "Topic modeling",
        "Word embeddings (Word2Vec, GloVe)",
        "Project 1",
      ],
    },
    {
      title: "Big Data Analytics",
      topics: [
        "Introduction to big data",
        "Hadoop and Spark",
        "Distributed computing and storage",
      ],
    },
    {
      title: "Data Science Project Lifecycle",
      topics: [
        "Problem formulation",
        "Data collection and cleaning",
        "Feature engineering",
        "Model development",
        "Model evaluation and deployment",
      ],
    },
    {
      title: "Capstone Project and Case Studies",
      topics: [
        "Real-world data science projects",
        "Industry-specific case studies",
        "Hands-on experience with data science tools and techniques",
      ],
    },
  ],
};

const DataScience = () => <CourseBody data={data} />;

export default DataScience;
