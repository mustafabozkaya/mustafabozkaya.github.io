const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Service Chatbot",
    shortDescription: "NLP-based chatbot for efficient customer support.",
    image: "images/chatbot.jpg",
    categories: ["nlp", "machinelearning", "customer_service"],
    longDescription: "Developed an advanced AI-powered chatbot using state-of-the-art NLP techniques to revolutionize customer support. This system significantly improved response times and customer satisfaction while reducing operational costs.",
    technologies: ["Python", "TensorFlow", "BERT", "FastAPI", "React", "Docker", "Kubernetes"],
    features: [
      "Natural language understanding using BERT",
      "Multi-language support with 98% accuracy",
      "Seamless integration with CRM systems",
      "Real-time sentiment analysis for escalation"
    ],
    keyFeatures: ["BERT NLP", "Multi-language", "CRM Integration"],
    results: "Handled 80% of customer inquiries autonomously, reduced average response time by 90%, and improved customer satisfaction scores by 25%. Resulted in annual savings of $1.5 million for the client.",
    repoLink: "https://github.com/yourusername/ai-customer-service-chatbot"
  },
  {
    id: 2,
    title: "Predictive Maintenance for Industrial IoT",
    shortDescription: "AI-driven system for predicting equipment failures in manufacturing.",
    image: "images/predictive-maintenance.jpg",
    categories: ["machinelearning", "time_series", "anomaly_detection", "iot"],
    longDescription: "Engineered a cutting-edge predictive maintenance system leveraging Industrial IoT data and advanced machine learning algorithms to forecast equipment failures in manufacturing plants, significantly reducing downtime and maintenance costs.",
    technologies: ["Python", "TensorFlow", "Spark", "Kafka", "Elasticsearch", "Kibana", "Docker", "Kubernetes"],
    features: [
      "Real-time data processing from thousands of IoT sensors",
      "Anomaly detection using unsupervised learning and autoencoders",
      "Time series forecasting with LSTM and Transformer networks",
      "Interactive dashboard for maintenance scheduling and risk assessment"
    ],
    keyFeatures: ["Real-time IoT", "LSTM & Transformers", "Risk Assessment"],
    results: "Achieved 96% accuracy in predicting equipment failures 48 hours in advance, resulting in a 40% reduction in unplanned downtime and an estimated annual saving of $5 million for the client.",
    repoLink: "https://github.com/yourusername/iiot-predictive-maintenance"
  },
  {
    id: 3,
    title: "Computer Vision for Autonomous Retail",
    shortDescription: "AI system for cashier-less stores using computer vision.",
    image: "images/autonomous-retail.jpg",
    categories: ["computer_vision", "deeplearning", "retail"],
    longDescription: "Developed a state-of-the-art computer vision system for autonomous retail stores, enabling a seamless shopping experience without cashiers or checkouts. The system tracks customers, recognizes products, and automatically processes transactions.",
    technologies: ["Python", "PyTorch", "OpenCV", "TensorRT", "CUDA", "Redis", "gRPC", "Kubernetes"],
    features: [
      "Real-time multi-camera object detection and tracking",
      "Product recognition with 99.9% accuracy",
      "Gesture-based interaction for product inquiries",
      "Seamless integration with payment gateways and inventory systems"
    ],
    keyFeatures: ["Real-time Tracking", "99.9% Accuracy", "Gesture Recognition"],
    results: "Reduced checkout time by 90%, increased store capacity by 30%, and improved inventory accuracy to 99.99%. The system has been successfully deployed in 50 stores across 3 countries.",
    repoLink: "https://github.com/yourusername/autonomous-retail-vision"
  },
  {
    id: 4,
    title: "AI-Driven Personalized Learning Platform",
    shortDescription: "Adaptive learning system using ML and cognitive science.",
    image: "images/personalized-learning.jpg",
    categories: ["machinelearning", "edtech", "recommendation_systems"],
    longDescription: "Created an innovative AI-driven personalized learning platform that adapts to individual student needs, learning styles, and progress. The system uses machine learning algorithms and principles from cognitive science to optimize the learning experience.",
    technologies: ["Python", "TensorFlow", "Neo4j", "FastAPI", "React", "Redux", "Docker", "AWS"],
    features: [
      "Adaptive curriculum sequencing using reinforcement learning",
      "Knowledge graph for connecting learning concepts",
      "Real-time difficulty adjustment based on student performance",
      "Personalized content recommendation using collaborative filtering"
    ],
    keyFeatures: ["Adaptive Learning", "Knowledge Graph", "Personalized Content"],
    results: "Improved student engagement by 40%, increased test scores by an average of 25%, and reduced course completion time by 30%. The platform is now used by over 500,000 students worldwide.",
    repoLink: "https://github.com/yourusername/ai-personalized-learning"
  },
  {
    id: 5,
    title: "Generative AI for Drug Discovery",
    shortDescription: "AI system for generating novel drug candidates.",
    image: "images/drug-discovery.jpg",
    categories: ["deeplearning", "generative_models", "healthcare"],
    longDescription: "Pioneered a groundbreaking generative AI system for accelerating drug discovery. The system uses advanced deep learning models to generate and evaluate novel drug candidates, significantly reducing the time and cost of traditional drug discovery processes.",
    technologies: ["Python", "PyTorch", "RDKit", "Dask", "Ray", "MLflow", "Docker", "Kubernetes"],
    features: [
      "Generative adversarial networks for molecular structure generation",
      "Reinforcement learning for optimizing drug properties",
      "Quantum chemistry simulations for accurate property prediction",
      "Integration with high-throughput screening robotics systems"
    ],
    keyFeatures: ["Molecular GANs", "RL Optimization", "Quantum Simulations"],
    results: "Generated over 1 million novel drug candidates, with 100 compounds showing high potential in pre-clinical trials. Reduced early-stage drug discovery time by 60% and costs by 40% for pharmaceutical partners.",
    repoLink: "https://github.com/yourusername/generative-ai-drug-discovery"
  },
  {
    id: 6,
    title: "Quantum-Inspired Optimization for Supply Chain",
    shortDescription: "Hybrid quantum-classical algorithms for supply chain optimization.",
    image: "images/quantum-supply-chain.jpg",
    categories: ["quantum_computing", "optimization", "supply_chain"],
    longDescription: "Developed a cutting-edge quantum-inspired optimization system for complex supply chain problems. The system leverages hybrid quantum-classical algorithms to solve large-scale logistics and inventory management challenges that are intractable for classical computers.",
    technologies: ["Python", "Qiskit", "D-Wave Ocean", "CPLEX", "Gurobi", "FastAPI", "React", "Docker"],
    features: [
      "Quantum approximate optimization algorithm (QAOA) for route planning",
      "Quantum annealing for inventory optimization",
      "Tensor network renormalization for demand forecasting",
      "Integration with classical solvers for hybrid optimization"
    ],
    keyFeatures: ["Quantum QAOA", "Quantum Annealing", "Hybrid Optimization"],
    results: "Reduced logistics costs by 18%, improved on-time delivery by 22%, and optimized inventory levels leading to a 15% reduction in working capital. The system is being adopted by major logistics companies worldwide.",
    repoLink: "https://github.com/yourusername/quantum-supply-chain-optimization"
  },
  {
    id: 7,
    title: "AI-Powered Social Media Analytics Dashboard",
    shortDescription: "Real-time social media analytics platform with AI insights.",
    image: "images/social-media-analytics.jpg",
    categories: ["webmobile", "react", "nextjs", "machinelearning"],
    longDescription: "Developed a comprehensive social media analytics dashboard using Next.js and React, integrating AI-powered insights for trend prediction and sentiment analysis. This platform provides businesses with real-time data visualization and actionable intelligence.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "TensorFlow.js", "Chart.js", "Socket.io"],
    features: [
      "Real-time data streaming and visualization",
      "AI-driven trend prediction and sentiment analysis",
      "Customizable dashboard with drag-and-drop widgets",
      "Multi-platform social media integration (Twitter, Facebook, Instagram, LinkedIn)",
      "Automated report generation and scheduling"
    ],
    keyFeatures: ["Real-time Analytics", "AI Insights", "Multi-platform"],
    results: "Increased client social media engagement by 35%, improved campaign ROI by 28%, and reduced response time to trending topics by 60%. Now used by over 500 businesses worldwide.",
    repoLink: "https://github.com/yourusername/ai-social-media-analytics"
  },
  {
    id: 8,
    title: "Blockchain-based Supply Chain Tracking App",
    shortDescription: "Decentralized app for transparent supply chain management.",
    image: "images/blockchain-supply-chain.jpg",
    categories: ["webmobile", "react", "blockchain"],
    longDescription: "Created a decentralized application (DApp) for supply chain tracking using React and Ethereum blockchain. This solution provides end-to-end visibility and traceability for products, ensuring authenticity and reducing fraud in the supply chain.",
    technologies: ["React", "Redux", "Tailwind CSS", "Solidity", "Web3.js", "Truffle", "IPFS", "Express", "PostgreSQL"],
    features: [
      "Blockchain-based product tracking and verification",
      "QR code and NFC integration for easy product scanning",
      "Smart contract automation for supply chain milestones",
      "Decentralized file storage using IPFS",
      "Real-time notifications and alerts for stakeholders"
    ],
    keyFeatures: ["Blockchain Tracking", "Smart Contracts", "Decentralized Storage"],
    results: "Reduced product counterfeiting by 95%, increased supply chain efficiency by 40%, and improved stakeholder trust. Adopted by major retailers and manufacturers in the luxury goods and pharmaceuticals industries.",
    repoLink: "https://github.com/yourusername/blockchain-supply-chain-dapp"
  },
  {
    id: 9,
    title: "AI-Assisted Telemedicine Platform",
    shortDescription: "Next.js-based telemedicine app with AI diagnostics support.",
    image: "images/ai-telemedicine.jpg",
    categories: ["webmobile", "nextjs", "machinelearning", "healthcare"],
    longDescription: "Engineered a cutting-edge telemedicine platform using Next.js, integrating AI-powered diagnostics support to assist healthcare professionals. This application enables secure video consultations, AI-based symptom analysis, and electronic health record (EHR) management.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "TensorFlow.js", "WebRTC", "Auth0"],
    features: [
      "Secure, HIPAA-compliant video consultations",
      "AI-powered symptom checker and preliminary diagnosis",
      "Integration with wearable devices for real-time health monitoring",
      "Electronic prescription and lab order management",
      "Multi-language support with real-time translation"
    ],
    keyFeatures: ["AI Diagnostics", "Secure Video Calls", "EHR Integration"],
    results: "Increased patient satisfaction by 45%, reduced diagnosis time by 30%, and enabled healthcare access for 100,000+ patients in remote areas. Currently used by over 1,000 healthcare providers across 20 countries.",
    repoLink: "https://github.com/yourusername/ai-telemedicine-platform"
  },
  {
    id: 10,
    title: "AR-Enhanced E-commerce Mobile App",
    shortDescription: "React Native app with AR for immersive shopping experience.",
    image: "images/ar-ecommerce.jpg",
    categories: ["webmobile", "react", "ar", "ecommerce"],
    longDescription: "Developed an innovative e-commerce mobile application using React Native, featuring augmented reality (AR) capabilities for an immersive shopping experience. This app allows users to visualize products in their own space before purchasing.",
    technologies: ["React Native", "Expo", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB", "ARKit", "ARCore", "Stripe"],
    features: [
      "AR product visualization in real-world environments",
      "AI-powered size and fit recommendations",
      "Social shopping with shared AR experiences",
      "Voice and visual search capabilities",
      "Seamless checkout with multiple payment options"
    ],
    keyFeatures: ["AR Visualization", "AI Recommendations", "Social Shopping"],
    results: "Increased conversion rates by 35%, reduced return rates by 25%, and improved customer engagement time by 50%. The app has been downloaded over 1 million times with a 4.8-star rating on app stores.",
    repoLink: "https://github.com/yourusername/ar-ecommerce-mobile-app"
  }
];