export const projects = [
    // --- OLLAMA CHAT APP (PRIORITIZED) ---
    {
        id: 'ollama-chat',
        title: 'Ollama Streamlit Chat',
        shortDescription: 'Desktop-grade UI for local LLM interaction with chat history and model switching.',
        longDescription: 'Built a private LLM deployment solution using Ollama and Streamlit. This application allows users to run and interact with powerful large language models locally, ensuring data privacy and offline accessibility with a modern UI.',
        categories: ['Web', 'Machine Learning'],
        technologies: ['Python', 'Streamlit', 'Ollama', 'Docker', 'Pandas'],
        images: ['./assets/ollama_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya/ollama-chat-app'
    },

    // --- SENIOR AI & AGENTIC SYSTEMS ---
    {
        id: 'ai-system-architect',
        title: 'AI System Architect Agent',
        shortDescription: 'Advanced R1-based agent for designing complex software architectures.',
        longDescription: 'A sophisticated AI agent using DeepSeek-R1 for automating high-level system design. It generates architecture diagrams, component specifications, and technology stack recommendations based on natural language requirements.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['DeepSeek-R1', 'LangGraph', 'Python', 'React'],
        images: ['https://mustafabozkaya.github.io/images/chatbot.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'deep-researcher',
        title: 'AI Deep Research Agent',
        shortDescription: 'Autonomous researcher that performs multi-step analysis on any topic.',
        longDescription: 'An autonomous agent capable of browsing the web, synthesizing information from multiple sources, and producing comprehensive research reports. Perfect for competitor analysis or technology deep-dives.',
        categories: ['Agentic AI', 'Web'],
        technologies: ['OpenAI', 'Tavily', 'LangChain', 'Python'],
        images: ['https://mustafabozkaya.github.io/images/chatbot2.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'self-evolving-agent',
        title: 'AI Self-Evolving Agent',
        shortDescription: 'Multi-agent system that improves its own code periodically.',
        longDescription: 'A groundbreaking system where agents monitor their own performance and use recursive feedback loops to refactor their logic and improve accuracy over time.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['Python', 'AutoGPT', 'Meta-Learning'],
        images: ['https://mustafabozkaya.github.io/images/chatbot3.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'mcp-multi-tool',
        title: 'MCP Multi-Tool Suite',
        shortDescription: 'Model Context Protocol implementation for tool-augmented LLMs.',
        longDescription: 'A comprehensive suite of MCP agents (Browser, GitHub, Notion) that seamlessly connect LLMs to external ecosystems using the latest industry standards.',
        categories: ['MCP', 'Web'],
        technologies: ['TypeScript', 'Node.js', 'MCP'],
        images: ['https://raw.githubusercontent.com/modelcontextprotocol/specification/main/assets/mcp-logo.png'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'agentic-rag-reasoning',
        title: 'Agentic RAG with Reasoning',
        shortDescription: 'Knowledge retrieval system with multi-step logical deduction.',
        longDescription: 'A production-grade RAG pipeline that uses reasoning models to validate retrieved context before generating answers, significantly reducing hallucinations.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['Ollama', 'Gemma', 'PGVector', 'Python', 'LangChain'],
        images: ['./assets/rag_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },

    // --- ROBOTICS & COMPUTER VISION ---
    {
        id: 'ros-autonomous',
        title: 'ROS2 Autonomous Navigator',
        shortDescription: 'SLAM and autonomous navigation system using C++ and ROS2.',
        longDescription: 'Robotics middleware project featuring Gazebo simulations, SLAM (Simultaneous Localization and Mapping), and path planning with real-time sensor fusion.',
        categories: ['Robotics'],
        technologies: ['C++', 'ROS2', 'Gazebo', 'SLAM'],
        images: ['./assets/ros_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya/Ros-Based-Package-and-Robots'
    },
    {
        id: 'cv-retail',
        title: 'Computer Vision for Retail',
        shortDescription: 'AI system for cashier-less stores with 99.9% accuracy.',
        longDescription: 'State-of-the-art computer vision system tracking customers and recognizing products in real-time, enabling a seamless shopping experience.',
        categories: ['Computer Vision', 'Machine Learning'],
        technologies: ['Python', 'PyTorch', 'OpenCV', 'CUDA'],
        images: ['https://mustafabozkaya.github.io/images/autonomous-retail.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },

    // --- CORE PRODUCTION SYSTEMS ---
    {
        id: 'drug-discovery',
        title: 'Generative AI for Drug Discovery',
        shortDescription: 'AI system for generating novel drug candidates via GANs.',
        longDescription: 'Accelerates drug discovery using generative models and reinforcement learning to evaluate molecular candidates, reducing R&D costs by 40%.',
        categories: ['Machine Learning', 'Deep Learning'],
        technologies: ['Python', 'PyTorch', 'RDKit', 'MLflow'],
        images: ['https://mustafabozkaya.github.io/images/drug-discovery.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/generative-ai-drug-discovery'
    },
    {
        id: 'industrial-iot',
        title: 'Industrial IoT Predictive Maintenance',
        shortDescription: '96% accuracy hazard prediction for manufacturing lines.',
        longDescription: 'Real-time hazard forecasting using LSTM and Transformer networks to detect equipment anomalies before failure occurs.',
        categories: ['Machine Learning', 'IoT'],
        technologies: ['Python', 'TensorFlow', 'Kafka', 'Spark'],
        images: ['https://mustafabozkaya.github.io/images/predictive-maintenance.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/iiot-predictive-maintenance'
    },
    {
        id: 'quantum-optimization',
        title: 'Quantum-Inspired Supply Chain',
        shortDescription: 'Hybrid quantum-classical algorithms for logistics.',
        longDescription: 'Solves complex routing and inventory challenges using quantum annealing and simulated optimization techniques.',
        categories: ['Machine Learning'],
        technologies: ['Python', 'Qiskit', 'D-Wave', 'Gurobi'],
        images: ['https://mustafabozkaya.github.io/images/quantum-supply-chain.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'telemedicine-ai',
        title: 'AI Telemedicine Platform',
        shortDescription: 'Secure Next.js platform with AI-powered diagnostics.',
        longDescription: 'HIPAA-compliant video consultation system with integrated symptom analysis and electronic health records.',
        categories: ['Web', 'Machine Learning'],
        technologies: ['Next.js', 'React', 'WebRTC', 'TensorFlow.js'],
        images: ['https://mustafabozkaya.github.io/images/ai-telemedicine.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/ai-telemedicine-platform'
    },
    {
        id: 'blockchain-tracking',
        title: 'Blockchain Supply Chain DApp',
        shortDescription: 'Transparent end-to-end product traceability system.',
        longDescription: 'Ethereum-based tracking app using smart contracts to ensure product authenticity and minimize supply chain fraud.',
        categories: ['Web', 'Blockchain'],
        technologies: ['Solidity', 'Web3.js', 'React', 'IPFS'],
        images: ['https://mustafabozkaya.github.io/images/blockchain-supply-chain.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/blockchain-supply-chain-dapp'
    },
    {
        id: 'social-analytics',
        title: 'AI Social Media Analytics',
        shortDescription: 'Real-time sentiment and trend prediction dashboard.',
        longDescription: 'Multi-platform analytics engine providing actionable intelligence through natural language processing and data visualization.',
        categories: ['Web', 'Machine Learning'],
        technologies: ['Next.js', 'Node.js', 'Chart.js', 'Socket.io'],
        images: ['https://mustafabozkaya.github.io/images/social-media-analytics.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/ai-social-media-analytics'
    },

    // --- MOBILE & INTERACTIVE ---
    {
        id: 'ar-ecommerce',
        title: 'AR-Enhanced E-commerce',
        shortDescription: 'Visualise products in your space using ARKit/ARCore.',
        longDescription: 'Immersive React Native mobile app allowing users to see life-sized 3D models of products in their environment before purchase.',
        categories: ['Mobile'],
        technologies: ['React Native', 'ARKit', 'ARCore', 'Stripe'],
        images: ['https://mustafabozkaya.github.io/images/ar-ecommerce.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/ar-ecommerce-mobile-app'
    },
    {
        id: 'ios-weather',
        title: 'Core Weather (SwiftUI)',
        shortDescription: 'Modern iOS 16 weather app leveraging WeatherKit.',
        longDescription: 'Beautiful, high-performance weather application built with the latest Apple design paradigms and interactive maps.',
        categories: ['Mobile'],
        technologies: ['Swift', 'SwiftUI', 'Combine', 'WeatherKit'],
        images: ['https://mustafabozkaya.github.io/images/weatherhome.png'],
        repoLink: 'https://github.com/mustafabozkaya/ios-weather-app-swiftui'
    },
    {
        id: 'ios-toolkit',
        title: 'iOS Developer Toolkit',
        shortDescription: 'Comprehensive catalog of iOS tools and frameworks.',
        longDescription: 'Interactive handbook for iOS developers featuring code snippets, playground areas, and UI component benchmarks.',
        categories: ['Mobile'],
        technologies: ['Swift', 'SwiftUI', 'WidgetKit', 'Core Data'],
        images: ['https://mustafabozkaya.github.io/images/toolkithome.png'],
        repoLink: 'https://github.com/mustafabozkaya/ios-developer-toolkit-app'
    },

    // --- AGENTIC UTILITIES & NLP ---
    {
        id: 'ai-blog-podcast',
        title: 'AI Blog to Podcast Agent',
        shortDescription: 'Converts written blog posts into engaging audio podcasts.',
        longDescription: 'Uses text-to-speech and natural language processing to generate professional voiceovers for existing blog content.',
        categories: ['Agentic AI', 'Web'],
        technologies: ['Python', 'TTS', 'LangChain'],
        images: ['https://mustafabozkaya.github.io/images/chatbot.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'ai-meme-gen',
        title: 'AI Meme Generator (Browser)',
        shortDescription: 'Autonomous agent that creates memes based on trends.',
        longDescription: 'Scours the web for trending topics and generates relevant image macros automatically.',
        categories: ['Agentic AI', 'Web'],
        technologies: ['Python', 'Selenium', 'Stable Diffusion'],
        images: ['https://mustafabozkaya.github.io/images/chatbot2.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'ai-finance-agent',
        title: 'xAI Finance Agent',
        shortDescription: 'Real-time stock analysis and advisory agent.',
        longDescription: 'Connects to financial APIs to provide real-time insights and portfolio recommendations.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['xAI', 'Python', 'FinanceAPIs'],
        images: ['https://mustafabozkaya.github.io/images/chatbot3.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'ai-chess-agent',
        title: 'AI Chess Master',
        shortDescription: 'Reinforcement learning based autonomous chess player.',
        longDescription: 'An agent trained on millions of games, capable of playing at Grandmaster levels via specialized neural networks.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['Python', 'PyTorch', 'Reinforcement Learning'],
        images: ['https://mustafabozkaya.github.io/images/chatbot.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'titanic-predict',
        title: 'Titanic Survival Predictor',
        shortDescription: 'Classic machine learning analysis with Streamlit UI.',
        longDescription: 'Interactive dashboard for exploring features and predicting survival outcomes for the Titanic dataset.',
        categories: ['Machine Learning', 'Web'],
        technologies: ['Python', 'Streamlit', 'Scikit-learn'],
        images: ['https://mustafabozkaya.github.io/images/streamlit_titanic.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'eda-app',
        title: 'Streamlit EDA Dashboard',
        shortDescription: 'One-click Exploratory Data Analysis tool.',
        longDescription: 'Automated data cleaning, visualization, and statistical reporting for any uploaded CSV/Excel file.',
        categories: ['Machine Learning', 'Web'],
        technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
        images: ['https://mustafabozkaya.github.io/images/streamlit_eda.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'chatbot-bert',
        title: 'BERT Customer Service Bot',
        shortDescription: 'High-accuracy NLP bot for enterprise support.',
        longDescription: 'Fine-tuned BERT model for understanding complex customer queries and providing automated resolutions.',
        categories: ['Machine Learning'],
        technologies: ['Python', 'BERT', 'FastAPI'],
        images: ['https://mustafabozkaya.github.io/images/chatbot.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'ecommerce-react',
        title: 'React E-Commerce Fullstack',
        shortDescription: 'Premium shopping experience with state-of-the-art UI.',
        longDescription: 'Comprehensive e-commerce solution featuring real-time search, dynamic filtering, and secure payment integration.',
        categories: ['Web'],
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        images: ['https://mustafabozkaya.github.io/images/ecommercecollection.png'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'personalized-learn',
        title: 'AI Personalized Learning',
        shortDescription: 'Adaptive curriculum system using Neo4j knowledge graphs.',
        longDescription: 'Uses cognitive science and reinforcement learning to adapt educational content to individual student progress.',
        categories: ['Machine Learning', 'Web'],
        technologies: ['Python', 'TensorFlow', 'Neo4j', 'FastAPI'],
        images: ['https://mustafabozkaya.github.io/images/personalized-learning.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'react-native-lib',
        title: 'React Native Blueprint',
        shortDescription: 'High-performance component library for mobile apps.',
        longDescription: 'A reusable boilerplate for React Native apps focusing on navigation performance and state management efficiency.',
        categories: ['Mobile'],
        technologies: ['React Native', 'Redux', 'Axios'],
        images: ['https://mustafabozkaya.github.io/images/react-native-app.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'discord-bot-go',
        title: 'ChatGPT Discord Bot',
        shortDescription: 'A scalable, event-driven Discord microservice built in Go.',
        longDescription: 'Developed a high-performance Discord bot in Go, integrating OpenAI\'s GPT models to provide intelligent, real-time responses. The backend is designed as a scalable microservice.',
        categories: ['Go', 'Web'],
        technologies: ['Go', 'Discordgo', 'OpenAI API', 'Docker'],
        images: ['./assets/ai_arch_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya/chatgpt-discord-bot'
    }
];
