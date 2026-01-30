export const projects = [
    // --- New High-Impact Systems ---
    {
        id: 'agent-rag',
        title: 'Awesome Agentic RAG LMMs',
        shortDescription: 'Advanced RAG system with multi-agent orchestration and LangChain.',
        longDescription: 'A production-grade Agentic RAG system that bridges the gap between local LLMs (Ollama) and high-throughput serving (vLLM). Features sophisticated chunking, vector search with PGVector, and multi-agent workflows designed for enterprise-level performance.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['Python', 'LangChain', 'vLLM', 'PGVector', 'Docker'],
        images: ['./assets/rag_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },
    {
        id: 'ros-robotics',
        title: 'ROS2 Autonomous Navigator',
        shortDescription: 'SLAM and autonomous navigation system using C++ and ROS2.',
        longDescription: 'Robotics middleware project featuring Gazebo simulations, SLAM (Simultaneous Localization and Mapping), and path planning. Built with a focus on real-time constraints and sensor fusion.',
        categories: ['Robotics'],
        technologies: ['C++', 'ROS2', 'Gazebo', 'SLAM'],
        images: ['./assets/ros_cover.png'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'bmad-architect',
        title: 'BMAD: Multi-Agent Patterns',
        shortDescription: 'Framework for designing robust autonomous agent collaboration.',
        longDescription: 'Implementation of Multi-Agent Design Patterns (BMAD) for Vision-Language-Action (VLA) models. Focuses on scalable agent communication and fault-tolerant orchestration.',
        categories: ['Agentic AI', 'Machine Learning'],
        technologies: ['Python', 'VLA Models', 'AIOps', 'Kubernetes'],
        images: ['https://mustafabozkaya.github.io/images/chatbot.jpg'], // Fallback to a working image
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'mcp-suite',
        title: 'MCP Multi-Tool Suite',
        shortDescription: 'Model Context Protocol implementation for tool-augmented LLMs.',
        longDescription: 'A comprehensive suite of MCP agents (Browser, GitHub, Notion) that seamlessly connect LLMs to external ecosystems using the latest industry standards.',
        categories: ['MCP', 'Web'],
        technologies: ['Python', 'MCP', 'TypeScript', 'Node.js'],
        images: ['https://raw.githubusercontent.com/modelcontextprotocol/specification/main/assets/mcp-logo.png'],
        repoLink: 'https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps'
    },

    // --- High-Quality Production Legacy (Verified Images) ---
    {
        id: 'autonomous-retail',
        title: 'Computer Vision for Autonomous Retail',
        shortDescription: 'AI system for cashier-less stores using computer vision.',
        longDescription: 'Developed a state-of-the-art computer vision system for autonomous retail stores, enabling a seamless shopping experience without cashiers or checkouts. The system tracks customers, recognizes products with 99.9% accuracy, and automatically processes transactions.',
        categories: ['Computer Vision', 'Deep Learning'],
        technologies: ['Python', 'PyTorch', 'OpenCV', 'TensorRT', 'CUDA', 'Redis', 'gRPC', 'Kubernetes'],
        images: ['https://mustafabozkaya.github.io/images/autonomous-retail.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/autonomous-retail-vision'
    },
    {
        id: 'drug-discovery',
        title: 'Generative AI for Drug Discovery',
        shortDescription: 'AI system for generating novel drug candidates.',
        longDescription: 'Pioneered a groundbreaking generative AI system for accelerating drug discovery. The system uses advanced deep learning models (GANs, RL) to generate and evaluate novel drug candidates, significantly reducing the time and cost of traditional drug discovery processes.',
        categories: ['Deep Learning', 'Healthcare'],
        technologies: ['Python', 'PyTorch', 'RDKit', 'Dask', 'Ray', 'MLflow', 'Docker', 'Kubernetes'],
        images: ['https://mustafabozkaya.github.io/images/drug-discovery.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/generative-ai-drug-discovery'
    },
    {
        id: 'industrial-iot',
        title: 'Predictive Maintenance for Industrial IoT',
        shortDescription: 'AI-driven failure forecasting for manufacturing equipment.',
        longDescription: 'Engineered a cutting-edge predictive maintenance system leveraging Industrial IoT data and advanced machine learning (LSTMs, Transformers) to forecast equipment failures in manufacturing plants with 96% accuracy.',
        categories: ['Machine Learning', 'IoT'],
        technologies: ['Python', 'TensorFlow', 'Spark', 'Kafka', 'Elasticsearch', 'Docker', 'Kubernetes'],
        images: ['https://mustafabozkaya.github.io/images/predictive-maintenance.jpg'],
        repoLink: 'https://github.com/mustafabozkaya/iiot-predictive-maintenance'
    },
    {
        id: 'quantum-supply-chain',
        title: 'Quantum-Inspired Optimization',
        shortDescription: 'Hybrid quantum-classical algorithms for supply chain optimization.',
        longDescription: 'Developed a cutting-edge quantum-inspired optimization system for complex supply chain problems. The system leverages hybrid quantum-classical algorithms to solve large-scale logistics and inventory management challenges.',
        categories: ['Machine Learning'],
        technologies: ['Python', 'Qiskit', 'D-Wave Ocean', 'CPLEX', 'Gurobi'],
        images: ['https://mustafabozkaya.github.io/images/quantum-supply-chain.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'telemedicine-ai',
        title: 'AI-Assisted Telemedicine Platform',
        shortDescription: 'Secure web app with AI-powered diagnostic support.',
        longDescription: 'Engineered a cutting-edge telemedicine platform integrating AI-powered diagnostics support to assist healthcare professionals. Enables secure video consultations, AI-based symptom analysis, and EHR management.',
        categories: ['Web', 'Machine Learning', 'Healthcare'],
        technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WebRTC', 'TensorFlow.js'],
        images: ['https://mustafabozkaya.github.io/images/ai-telemedicine.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'blockchain-supply',
        title: 'Blockchain-based Traceability',
        shortDescription: 'Decentralized app for transparent supply chain management.',
        longDescription: 'Created a decentralized application (DApp) for supply chain tracking using React and Ethereum. Provides end-to-end visibility and traceability for products, ensuring authenticity and reducing fraud.',
        categories: ['Web', 'Blockchain'],
        technologies: ['React', 'Solidity', 'Web3.js', 'IPFS', 'Ethereum'],
        images: ['https://mustafabozkaya.github.io/images/blockchain-supply-chain.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'ar-ecommerce',
        title: 'AR-Enhanced E-commerce',
        shortDescription: 'React Native app with AR product visualization.',
        longDescription: 'Developed an innovative e-commerce mobile application featuring augmented reality (AR) capabilities. Allows users to visualize products in their own space before purchasing.',
        categories: ['Mobile', 'AR'],
        technologies: ['React Native', 'ARKit', 'ARCore', 'Redux', 'Stripe'],
        images: ['https://mustafabozkaya.github.io/images/ar-ecommerce.jpg'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'ios-weather',
        title: 'iOS Weather (SwiftUI)',
        shortDescription: 'Modern weather app built with SwiftUI and WeatherKit.',
        longDescription: 'Developed a sleek and intuitive weather application leveraging the latest iOS features to provide users with accurate, real-time weather information and interactive maps.',
        categories: ['Mobile'],
        technologies: ['Swift', 'SwiftUI', 'Combine', 'WeatherKit', 'MapKit'],
        images: ['https://mustafabozkaya.github.io/images/weatherhome.png'],
        repoLink: 'https://github.com/mustafabozkaya'
    },
    {
        id: 'ios-toolkit',
        title: 'iOS Developer Toolkit',
        shortDescription: 'Comprehensive resource showcasing Apple development tools.',
        longDescription: 'An interactive handbook containing code snippets, component playgrounds, and benchmarks for modern Apple development frameworks.',
        categories: ['Mobile'],
        technologies: ['Swift', 'SwiftUI', 'WidgetKit', 'ARKit', 'Core ML'],
        images: ['https://mustafabozkaya.github.io/images/toolkithome.png'],
        repoLink: 'https://github.com/mustafabozkaya'
    }
];
