const projects = [
  {
    title: "Syder Ideas",
    description:
      "Syder Ideas is a web application where you can store your side-project ideas in an easy, intuitive and systems based way.",
    tech: ["js", "react", "redux", "node", "express", "postgresql", "passport"],
    category: "dev",
    // imageUrl: "../static/projects/dev/syder-ideas-main.png",
    githubUrl: "https://github.com/guidosantillan01/syder-ideas",
    liveUrl: "https://syder-ideas-client.herokuapp.com/",
    showProject: true,
  },
  {
    title: "Expofranquicias",
    description:
      "Expofranquicias is a web application where users can search for available Latinamerican franchises based on its budget, country of origin and categories.",
    tech: ["react", "gatsby", "graphql"],
    category: "dev",
    // imageUrl: "../static/projects/dev/expofranquicias-main.png",
    githubUrl: undefined,
    liveUrl: "https://expofranquiciasecuador.com/franquicias-disponibles",
    showProject: true,
  },
  {
    title: "Amazon Books Web Scraper",
    description:
      "This program will scrape books from a list of Amazon links (spreadsheet). It will generate a csv file with book data.",
    tech: ["python", "pandas"],
    category: "dev",
    // imageUrl: "../static/projects/dev/expofranquicias-main.png",
    githubUrl: "https://github.com/guidosantillan01/amazon-books-web-scraper",
    liveUrl: undefined,
    showProject: true,
  },
  {
    title: "Recipio",
    description: "Store and manage your recipes.",
    tech: ["js"],
    category: "dev",
    // imageUrl: "../static/projects/dev/expofranquicias-main.png",
    githubUrl: "https://github.com/guidosantillan01/recipio",
    liveUrl: "https://recipes-app.netlify.com/",
    showProject: true,
  },
  {
    title: "Personal Blog",
    description: "Guido Santillan's personal blog.",
    tech: ["react", "gatsby", "graphql"],
    category: "dev",
    // imageUrl: "../static/projects/dev/expofranquicias-main.png",
    githubUrl: "https://github.com/guidosantillan01/blog",
    liveUrl: "https://www.guidosantillan.com",
    showProject: true,
  },
  {
    title: "Robot controlled by Human Motion",
    description: "It uses KINECT to capture your movement.",
    tech: ["arduino", "processing"],
    category: "mechatronics",
    // imageUrl: "../static/projects/mechatronics/robot-main.png",
    githubUrl: undefined,
    liveUrl: undefined,
    showProject: true,
  },
  {
    title: "Distracted Driver Detection using CNNs",
    description: "State Farm Distracted Driver Detection Challenge",
    tech: ["python", "pytorch"],
    category: "ai",
    // imageUrl: "../static/projects/others/deep-learning-main.png",
    githubUrl: "https://github.com/guidosantillan01/pytorch-distracted-drivers",
    liveUrl: undefined,
    showProject: true,
  },
  {
    title: "Flower Classification using CNNs",
    description:
      "Use deep learning with convolutional neural networks to classificate flowers. For the PyTorch Scholarship Challenge from Udacity.",
    tech: ["pytorch", "python"],
    category: "ai",
    // imageUrl: "../static/projects/others/deep-learning-main.png",
    githubUrl:
      "https://github.com/guidosantillan01/pytorch-flower-classification",
    liveUrl: undefined,
    showProject: true,
  },
]

export { projects as default }
