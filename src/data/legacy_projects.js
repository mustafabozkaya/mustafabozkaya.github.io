export const legacyProjects = [
  {
    id: 1,
    title: "Ollama Chat App",
    shortDescription: "Private and local LLM deployment with a sleek, responsive chat interface.",
    images: ["assets/ollama_cover.png", "images/chatbot2.jpg", "images/chatbot3.jpg"],
    categories: ["python", "streamlit", "ollama", "localllm"],
    longDescription: "Built a private LLM deployment solution using Ollama and Streamlit. This application allows users to run and interact with powerful large language models locally, ensuring data privacy and offline accessibility with a modern UI.",
    technologies: ["Python", "Streamlit", "Ollama", "Docker", "Pandas"],
    features: [
      "No-code local LLM management and interface",
      "Support for multiple local models (Llama3, Mistral, etc.)",
      "Real-time streaming responses and chat history",
      "Simple integration for specialized private workflows"
    ],
    keyFeatures: ["Local Inference", "Privacy-Focused", "No-Code UI"],
    results: "Enabled developers and individuals to use powerful AI models securely without relying on cloud providers.",
    repoLink: "https://github.com/mustafabozkaya/ollama-chat-app"
  },
  {
    id: 2,
    title: "Awesome Agent RAG LLMs Apps",
    shortDescription: "A comprehensive orchestration of multi-agent RAG workflows designed for complex reasoning.",
    images: ["assets/rag_cover.png", "images/chatbot2.jpg", "images/chatbot3.jpg"],
    categories: ["python", "langchain", "rag", "agents", "machinelearning"],
    longDescription: "Developed an advanced Agentic RAG system that uses multi-agent orchestration for complex information retrieval and reasoning. The system integrates multiple LLM providers and specialized agents to handle diverse research tasks with high precision.",
    technologies: ["Python", "LangChain", "OpenAI", "FAISS", "Docker", "FastAPI"],
    features: [
      "Multi-agent task decomposition and execution",
      "Dynamic prompt engineering and tool selection",
      "Robust error handling and agent self-correction",
      "Optimized vector search with hybrid retrieval"
    ],
    keyFeatures: ["Agentic RAG", "Multi-Agent Workflows", "Hybrid Search"],
    results: "Achieved significant improvements in retrieval accuracy and task completion rates for complex queries.",
    repoLink: "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
  },
  {
    id: 3,
    title: "ROS2 Based Package & Robots",
    shortDescription: "Modular robotics middleware for advanced SLAM, navigation, and coordination.",
    images: ["assets/ros_cover.png", "images/chatbot2.jpg", "images/chatbot3.jpg"],
    categories: ["robotics", "ros2", "cpp", "python", "slam"],
    longDescription: "Engineered a comprehensive ROS2-based robotics environment, focusing on modular package design for SLAM, autonomous navigation, and multi-robot coordination. The project includes simulations and real-world implementation scripts for cutting-edge robotics research.",
    technologies: ["C++", "Python", "ROS2", "Gazebo", "Rviz", "SLAM", "Navigation ToolBox"],
    features: [
      "Modular ROS2 package architecture for easy expansion",
      "Advanced SLAM implementation with LiDAR and Odometry",
      "Autonomous path planning and obstacle avoidance",
      "Integration with Gazebo for high-fidelity simulations"
    ],
    keyFeatures: ["Robotics Middleware", "SLAM/Navigation", "Digital Twins"],
    results: "Developed a stable, reusable framework for rapid robotics prototyping and testing in diverse environments.",
    repoLink: "https://github.com/mustafabozkaya/Ros-Based-Package-and-Robots"
  },
  {
    id: 4,
    title: "ChatGPT Discord Bot",
    shortDescription: "A scalable, event-driven Discord microservice built in Go for real-time AI interactions.",
    images: ["assets/ai_arch_cover.png", "images/chatbot2.jpg", "images/chatbot3.jpg"],
    categories: ["go", "microservice", "discord", "openai"],
    longDescription: "Developed a high-performance Discord bot in Go, integrating OpenAI's GPT models to provide intelligent, real-time responses. The backend is designed as a scalable microservice, emphasizing concurrency and low-latency interaction.",
    technologies: ["Go", "Discordgo", "OpenAI API", "Redis", "Docker", "async/await"],
    features: [
      "Scalable Go-based backend for multi-server support",
      "Asynchronous message processing for high throughput",
      "Intelligent context management for natural conversations",
      "Extensible command system for custom AI behaviors"
    ],
    keyFeatures: ["Scalable Microservice", "Real-time AI", "Concurrent Go"],
    results: "Successfully handled thousands of concurrent users with minimal latency and high reliability.",
    repoLink: "https://github.com/mustafabozkaya/chatgpt-discord-bot"
  }
];