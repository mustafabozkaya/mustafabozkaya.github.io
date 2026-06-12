
    // ============================================================
    // PROJECT DATA (extracted from original React app)
    // ============================================================
    const PROJECTS = [
      {
        "id": "medical-fundus-rag",
        "title": "Medical Fundus RAG",
        "shortDescription": "Explainable AI for Eye Disease Diagnosis using Vision RAG and Gemini Pro.",
        "longDescription": "A SOTA medical assistant that uses Retrieval-Augmented Generation (RAG) for explainable eye disease diagnosis. It leverages Microsoft's BiomedCLIP for multimodal feature extraction and Google Gemini Pro for clinical reasoning, providing diagnosis reports backed by similar historical cases.",
        "categories": ["Agentic AI", "Machine Learning", "Computer Vision"],
        "technologies": ["Python", "BiomedCLIP", "Gemini Pro", "Qdrant", "Gradio", "Docker"],
        "image": "https://raw.githubusercontent.com/mustafabozkaya/medical-fundus-rag/main/docs/images/gradio_main.png",
        "link": "https://github.com/mustafabozkaya/medical-fundus-rag"
      },
      {
        "id": "ollama-chat",
        "title": "Ollama Streamlit Chat",
        "shortDescription": "Desktop-grade UI for local LLM interaction with chat history and model switching.",
        "longDescription": "Built a private LLM deployment solution using Ollama and Streamlit. Run and interact with powerful large language models locally, ensuring data privacy and offline accessibility with a modern UI.",
        "categories": ["Web", "Machine Learning"],
        "technologies": ["Python", "Streamlit", "Ollama", "Docker", "Pandas"],
        "image": "./assets/ollama_cover.png",
        "link": "https://github.com/mustafabozkaya/ollama-chat-app"
      },
      {
        "id": "ai-system-architect",
        "title": "AI System Architect Agent",
        "shortDescription": "Advanced R1-based agent for designing complex software architectures.",
        "longDescription": "A sophisticated AI agent using DeepSeek-R1 for automating high-level system design. Generates architecture diagrams, component specifications, and technology stack recommendations based on natural language requirements.",
        "categories": ["Agentic AI", "Machine Learning"],
        "technologies": ["DeepSeek-R1", "LangGraph", "Python", "React"],
        "image": "https://mustafabozkaya.github.io/images/chatbot.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "deep-researcher",
        "title": "AI Deep Research Agent",
        "shortDescription": "Autonomous researcher that performs multi-step analysis on any topic.",
        "longDescription": "An autonomous agent capable of browsing the web, synthesizing information from multiple sources, and producing comprehensive research reports. Perfect for competitor analysis or deep-dives.",
        "categories": ["Agentic AI", "Web"],
        "technologies": ["OpenAI", "Tavily", "LangChain", "Python"],
        "image": "https://mustafabozkaya.github.io/images/chatbot2.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "self-evolving-agent",
        "title": "AI Self-Evolving Agent",
        "shortDescription": "Agent that improves its own prompts and strategies based on task outcomes.",
        "longDescription": "A meta-cognitive AI agent that reflects on its own performance and iteratively improves. Uses feedback loops to refine reasoning strategies and tool-use patterns over time.",
        "categories": ["Agentic AI", "Deep Learning"],
        "technologies": ["Claude", "LangGraph", "Python", "Reflection"],
        "image": "https://mustafabozkaya.github.io/images/chatbot3.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "mcp-multi-tool",
        "title": "MCP Multi-Tool Suite",
        "shortDescription": "Model Context Protocol server with integrated tools for enhanced agent capabilities.",
        "longDescription": "A comprehensive MCP server implementation providing agents with file system access, web search, code execution, and database query tools through a standardized protocol interface.",
        "categories": ["MCP", "Agentic AI"],
        "technologies": ["Python", "MCP", "FastAPI", "Docker"],
        "image": "https://raw.githubusercontent.com/modelcontextprotocol/specification/main/assets/mcp-logo.png",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "agentic-rag",
        "title": "Agentic RAG with Reasoning",
        "shortDescription": "Advanced RAG system combining vector search with agent-based reasoning loops.",
        "longDescription": "An Agentic RAG pipeline that combines dense retrieval with multi-hop reasoning. Uses an agent orchestrator to decompose complex queries and synthesize answers from multiple retrieved contexts.",
        "categories": ["Agentic AI", "Machine Learning"],
        "technologies": ["Python", "Qdrant", "OpenAI", "LangChain", "Docker"],
        "image": "./assets/rag_cover.png",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "ros2-navigator",
        "title": "ROS2 Autonomous Navigator",
        "shortDescription": "Autonomous robot navigation using ROS2 with SLAM and path planning.",
        "longDescription": "A full ROS2-based autonomous navigation stack with real-time SLAM mapping, adaptive path planning, and obstacle avoidance. Tested on simulated and physical robot platforms.",
        "categories": ["Robotics", "Computer Vision"],
        "technologies": ["ROS2", "Python", "C++", "SLAM", "Gazebo"],
        "image": "./assets/ros_cover.png",
        "link": "https://github.com/mustafabozkaya/Ros-Based-Package-and-Robots"
      },
      {
        "id": "cv-retail",
        "title": "Computer Vision for Retail",
        "shortDescription": "Real-time object detection and tracking for retail analytics and automation.",
        "longDescription": "A computer vision system for retail environments using YOLO-based detection and DeepSORT tracking. Tracks customer movement, shelf inventory, and generates heatmaps.",
        "categories": ["Computer Vision", "Deep Learning"],
        "technologies": ["YOLO", "DeepSORT", "PyTorch", "OpenCV", "Docker"],
        "image": "https://mustafabozkaya.github.io/images/autonomous-retail.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "drug-discovery",
        "title": "Generative AI for Drug Discovery",
        "shortDescription": "Molecular generation and property prediction using deep generative models.",
        "longDescription": "Uses generative AI models (VAE, GAN, diffusion) to propose novel molecular structures with desired biochemical properties. Includes molecular docking simulation.",
        "categories": ["Deep Learning", "Machine Learning"],
        "technologies": ["PyTorch", "RDKit", "Diffusion Models", "Python"],
        "image": "https://mustafabozkaya.github.io/images/drug-discovery.jpg",
        "link": "https://github.com/mustafabozkaya/generative-ai-drug-discovery"
      },
      {
        "id": "predictive-maintenance",
        "title": "Industrial IoT Predictive Maintenance",
        "shortDescription": "Real-time equipment failure prediction using sensor data and deep learning.",
        "longDescription": "An end-to-end predictive maintenance system that analyzes IoT sensor data to forecast equipment failures before they occur. Features anomaly detection, remaining useful life estimation, and a real-time dashboard.",
        "categories": ["IoT", "Deep Learning", "Machine Learning"],
        "technologies": ["Python", "LSTM", "MQTT", "Grafana", "Docker", "InfluxDB"],
        "image": "https://mustafabozkaya.github.io/images/predictive-maintenance.jpg",
        "link": "https://github.com/mustafabozkaya/iiot-predictive-maintenance"
      },
      {
        "id": "quantum-supply-chain",
        "title": "Quantum-Inspired Supply Chain",
        "shortDescription": "Quantum annealing and classical hybrid optimization for logistics.",
        "longDescription": "A hybrid quantum-classical optimization system for supply chain logistics. Uses quantum annealing (D-Wave) for route optimization and classical ML for demand forecasting.",
        "categories": ["Deep Learning", "Machine Learning"],
        "technologies": ["Python", "D-Wave", "QUBO", "NumPy", "Pandas"],
        "image": "https://mustafabozkaya.github.io/images/quantum-supply-chain.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "telemedicine",
        "title": "AI Telemedicine Platform",
        "shortDescription": "Full-stack telemedicine platform with AI-powered diagnostic assistance.",
        "longDescription": "A comprehensive telemedicine platform featuring AI-assisted preliminary diagnosis, symptom analysis, appointment scheduling, and secure video consultations with EMR integration.",
        "categories": ["Web", "Machine Learning"],
        "technologies": ["React", "FastAPI", "PostgreSQL", "OpenAI", "Docker", "WebRTC"],
        "image": "https://mustafabozkaya.github.io/images/telemedicine.jpg",
        "link": "https://github.com/mustafabozkaya/ai-telemedicine-platform"
      },
      {
        "id": "blockchain-dapp",
        "title": "Blockchain Supply Chain DApp",
        "shortDescription": "Decentralized application for transparent supply chain management.",
        "longDescription": "A blockchain-based supply chain DApp using Ethereum smart contracts. Provides immutable tracking of goods, automated payments via smart contracts, and a React-based dashboard.",
        "categories": ["Blockchain", "Web"],
        "technologies": ["Solidity", "React", "Web3.js", "Node.js", "IPFS"],
        "image": "https://mustafabozkaya.github.io/images/blockchain-dapp.jpg",
        "link": "https://github.com/mustafabozkaya/blockchain-supply-chain-dapp"
      },
      {
        "id": "social-analytics",
        "title": "AI Social Media Analytics",
        "shortDescription": "NLP-powered analytics and sentiment analysis for social media platforms.",
        "longDescription": "An AI-powered social media analytics platform that performs sentiment analysis, trend detection, and audience segmentation across multiple social platforms using NLP.",
        "categories": ["Machine Learning", "Web"],
        "technologies": ["Python", "BERT", "React", "PostgreSQL", "Docker"],
        "image": "https://mustafabozkaya.github.io/images/social-analytics.jpg",
        "link": "https://github.com/mustafabozkaya/ai-social-media-analytics"
      },
      {
        "id": "ar-ecommerce",
        "title": "AR-Enhanced E-commerce",
        "shortDescription": "Mobile e-commerce app with AR product visualization capabilities.",
        "longDescription": "A React Native mobile app that leverages ARKit/ARCore for virtual product try-on and 3D visualization. Includes image recognition and product recommendation engine.",
        "categories": ["Mobile", "Computer Vision"],
        "technologies": ["React Native", "ARKit", "ARCore", "Python", "Firebase"],
        "image": "https://mustafabozkaya.github.io/images/ar-ecommerce.jpg",
        "link": "https://github.com/mustafabozkaya/ar-ecommerce-mobile-app"
      },
      {
        "id": "core-weather",
        "title": "Core Weather (SwiftUI)",
        "shortDescription": "Beautiful weather app built with SwiftUI and Core Location.",
        "longDescription": "A feature-rich iOS weather application built entirely with SwiftUI. Includes animated weather backgrounds, hourly/daily forecasts, location-based updates, and widget support.",
        "categories": ["Mobile"],
        "technologies": ["SwiftUI", "Core Location", "WeatherKit", "Xcode"],
        "image": "https://mustafabozkaya.github.io/images/weather-app.jpg",
        "link": "https://github.com/mustafabozkaya/ios-weather-app-swiftui"
      },
      {
        "id": "ios-toolkit",
        "title": "iOS Developer Toolkit",
        "shortDescription": "Collection of reusable SwiftUI components and developer utilities.",
        "longDescription": "A comprehensive toolkit for iOS developers featuring reusable SwiftUI components, utility extensions, custom animations, and a component playground for rapid prototyping.",
        "categories": ["Mobile"],
        "technologies": ["SwiftUI", "UIKit", "Swift", "Xcode", "CocoaPods"],
        "image": "https://mustafabozkaya.github.io/images/ios-toolkit.jpg",
        "link": "https://github.com/mustafabozkaya/ios-developer-toolkit-app"
      },
      {
        "id": "blog-podcast",
        "title": "AI Blog to Podcast Agent",
        "shortDescription": "Automatically converts blog posts into professional podcast episodes.",
        "longDescription": "An AI agent that transforms written blog content into natural-sounding podcast episodes using TTS, content summarization, and multi-voice dialogue generation.",
        "categories": ["Agentic AI", "Machine Learning"],
        "technologies": ["Python", "TTS", "OpenAI", "LangChain", "FFmpeg"],
        "image": "https://mustafabozkaya.github.io/images/blog-podcast.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "meme-generator",
        "title": "AI Meme Generator (Browser)",
        "shortDescription": "Browser-based meme generator using AI for caption and template suggestions.",
        "longDescription": "A client-side meme generator that uses AI to suggest captions and templates. Built entirely for the browser with TensorFlow.js for on-device ML inference.",
        "categories": ["Web", "Machine Learning"],
        "technologies": ["JavaScript", "TensorFlow.js", "HTML5 Canvas", "CSS"],
        "image": "https://mustafabozkaya.github.io/images/meme-generator.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "xai-finance",
        "title": "xAI Finance Agent",
        "shortDescription": "AI-powered financial analysis and trading signal agent.",
        "longDescription": "An AI agent that performs financial market analysis, generates trading signals, and provides portfolio recommendations using technical indicators and sentiment analysis.",
        "categories": ["Agentic AI", "Machine Learning"],
        "technologies": ["Python", "XGBoost", "OpenAI", "Pandas", "yfinance"],
        "image": "https://mustafabozkaya.github.io/images/xai-finance.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "chess-master",
        "title": "AI Chess Master",
        "shortDescription": "Chess engine with ML-based move prediction and evaluation.",
        "longDescription": "A chess AI that combines traditional minimax search with neural network position evaluation. Features multiple difficulty levels and a clean web interface.",
        "categories": ["Machine Learning", "Web"],
        "technologies": ["Python", "PyTorch", "Chess.js", "React", "WebSocket"],
        "image": "https://mustafabozkaya.github.io/images/chess-ai.jpg",
        "link": "https://github.com/mustafabozkaya/Awesome_Agent_Rag_LMMs_apps"
      },
      {
        "id": "titanic-survival",
        "title": "Titanic Survival Predictor",
        "shortDescription": "Classic ML pipeline for survival prediction with EDA and model comparison.",
        "longDescription": "A complete ML pipeline for the Titanic dataset featuring thorough EDA, feature engineering, model comparison (Logistic Regression, Random Forest, XGBoost), and deployment with Streamlit.",
        "categories": ["Machine Learning"],
        "technologies": ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
        "image": "https://mustafabozkaya.github.io/images/titanic.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "streamlit-eda",
        "title": "Streamlit EDA Dashboard",
        "shortDescription": "Interactive EDA dashboard built with Streamlit for rapid data exploration.",
        "longDescription": "An interactive Exploratory Data Analysis dashboard built with Streamlit. Upload any CSV and get instant visualizations, statistical summaries, correlation analysis, and feature distributions.",
        "categories": ["Web", "Machine Learning"],
        "technologies": ["Python", "Streamlit", "Plotly", "Pandas", "Seaborn"],
        "image": "./assets/streamlit_eda.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "bert-chatbot",
        "title": "BERT Customer Service Bot",
        "shortDescription": "BERT-based customer service chatbot with intent classification and FAQ retrieval.",
        "longDescription": "A customer service chatbot using fine-tuned BERT for intent classification and a FAQ retrieval system. Features context-aware conversation management and seamless handoff to human agents.",
        "categories": ["Machine Learning", "Web"],
        "technologies": ["Python", "BERT", "Transformers", "Flask", "React"],
        "image": "https://mustafabozkaya.github.io/images/chatbot.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "ecommerce-fullstack",
        "title": "React E-Commerce Fullstack",
        "shortDescription": "Full-featured e-commerce platform with React frontend and Node.js backend.",
        "longDescription": "A production-ready e-commerce platform featuring product management, cart, checkout, payment integration (Stripe), user authentication, and an admin dashboard.",
        "categories": ["Web"],
        "technologies": ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Docker"],
        "image": "https://mustafabozkaya.github.io/images/ecommerce.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "personalized-learning",
        "title": "AI Personalized Learning",
        "shortDescription": "Adaptive learning platform using AI to personalize educational content.",
        "longDescription": "An AI-driven adaptive learning platform that analyzes student performance and learning styles to personalize content delivery, recommend resources, and generate adaptive assessments.",
        "categories": ["Machine Learning", "Web"],
        "technologies": ["Python", "React", "PostgreSQL", "OpenAI", "Docker"],
        "image": "https://mustafabozkaya.github.io/images/learning-platform.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "rn-blueprint",
        "title": "React Native Blueprint",
        "shortDescription": "Production-ready React Native starter with best practices and pre-built components.",
        "longDescription": "A comprehensive React Native starter template featuring navigation, state management, theming, API integration, form validation, and push notifications out of the box.",
        "categories": ["Mobile"],
        "technologies": ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
        "image": "https://mustafabozkaya.github.io/images/rn-blueprint.jpg",
        "link": "https://github.com/mustafabozkaya"
      },
      {
        "id": "chatgpt-discord",
        "title": "ChatGPT Discord Bot",
        "shortDescription": "Discord bot integrating ChatGPT with multi-channel conversations and memory.",
        "longDescription": "A Discord bot that brings ChatGPT's conversational capabilities to Discord servers. Features multi-channel conversations, conversation memory, custom personas, and moderation controls.",
        "categories": ["Web", "Machine Learning"],
        "technologies": ["Python", "Discord.py", "OpenAI", "Redis", "Docker"],
        "image": "./assets/ai_arch_cover.png",
        "link": "https://github.com/mustafabozkaya/chatgpt-discord-bot"
      }
    ];

    // ============================================================
    // THREE.JS — HERO BACKGROUND
    // ============================================================
    (function initHero() {
      const canvas = document.getElementById('hero-canvas');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Particle system
      const count = 2000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      const color1 = new THREE.Color('#0284c7');
      const color2 = new THREE.Color('#4f46e5');
      const color3 = new THREE.Color('#0ea5e9');

      for (let i = 0; i < count; i++) {
        positions[i*3] = (Math.random() - 0.5) * 30;
        positions[i*3+1] = (Math.random() - 0.5) * 20;
        positions[i*3+2] = (Math.random() - 0.5) * 20 - 5;

        const mixed = color1.clone().lerp(color2, Math.random()).lerp(color3, Math.random() * 0.5);
        colors[i*3] = mixed.r;
        colors[i*3+1] = mixed.g;
        colors[i*3+2] = mixed.b;

        sizes[i] = Math.random() * 3 + 1;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Connection lines (fiber network effect)
      const lineGeometry = new THREE.BufferGeometry();
      const lineCount = 200;
      const linePositions = new Float32Array(lineCount * 6);
      const lineColors = new Float32Array(lineCount * 6);

      const verts = [];
      for (let i = 0; i < 80; i++) {
        verts.push({
          x: (Math.random() - 0.5) * 25,
          y: (Math.random() - 0.5) * 18,
          z: (Math.random() - 0.5) * 18 - 5
        });
      }

      let lineIdx = 0;
      for (let i = 0; i < lineCount; i++) {
        const a = Math.floor(Math.random() * verts.length);
        const b = Math.floor(Math.random() * verts.length);
        if (a === b) continue;
        linePositions[lineIdx*6] = verts[a].x;
        linePositions[lineIdx*6+1] = verts[a].y;
        linePositions[lineIdx*6+2] = verts[a].z;
        linePositions[lineIdx*6+3] = verts[b].x;
        linePositions[lineIdx*6+4] = verts[b].y;
        linePositions[lineIdx*6+5] = verts[b].z;
        const alpha = Math.random() * 0.3 + 0.05;
        lineColors[lineIdx*6] = 0.02;
        lineColors[lineIdx*6+1] = 0.52;
        lineColors[lineIdx*6+2] = 0.78;
        lineColors[lineIdx*6+3] = 0.02;
        lineColors[lineIdx*6+4] = 0.52;
        lineColors[lineIdx*6+5] = 0.78;
        lineIdx++;
      }

      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      camera.position.z = 8;

      let mouseX = 0, mouseY = 0;
      document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;
        lines.rotation.y = particles.rotation.y;
        lines.rotation.x = particles.rotation.x;

        // Subtle mouse parallax
        particles.rotation.y += (mouseX * 0.05 - particles.rotation.y) * 0.01;
        particles.rotation.x += (mouseY * 0.03 - particles.rotation.x) * 0.01;

        renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    })();

    // ============================================================
    // THREE.JS — 3D GALLERY (Rotating Project Cards)
    // ============================================================
    (function initGallery() {
      const canvas = document.getElementById('gallery-3d-canvas');
      const section = document.getElementById('gallery-3d');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, section.clientWidth / section.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(section.clientWidth, section.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create 3D card meshes
      const cards = [];
      const cardData = PROJECTS.slice(0, 12); // Show 12 in 3D
      const radius = 4.5;
      const colors = [0x0284c7, 0x4f46e5, 0x0ea5e9, 0x7c3aed, 0x06b6d4, 0x6366f1];

      cardData.forEach((project, i) => {
        const geometry = new THREE.PlaneGeometry(2, 1.2);
        const color = colors[i % colors.length];
        const material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.25,
          side: THREE.DoubleSide,
        });
        const card = new THREE.Mesh(geometry, material);

        const angle = (i / cardData.length) * Math.PI * 2;
        card.position.x = Math.cos(angle) * radius;
        card.position.z = Math.sin(angle) * radius;
        card.position.y = Math.sin(angle * 1.5) * 0.5;
        card.lookAt(0, 0, 0);

        scene.add(card);
        cards.push({ mesh: card, angle: angle, baseY: card.position.y });

        // Add a small label plane for each card
        const labelGeo = new THREE.PlaneGeometry(1.6, 0.24);
        const labelCanvas = document.createElement('canvas');
        labelCanvas.width = 320;
        labelCanvas.height = 48;
        const ctx = labelCanvas.getContext('2d');
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.beginPath();
        // roundRect fallback for older browsers
        if (ctx.roundRect) {
          ctx.roundRect(0, 0, 320, 48, 8);
        } else {
          ctx.rect(0, 0, 320, 48);
        }
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(project.title.length > 22 ? project.title.slice(0, 20) + '…' : project.title, 160, 24);

        const labelTexture = new THREE.CanvasTexture(labelCanvas);
        const labelMat = new THREE.MeshBasicMaterial({
          map: labelTexture,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        const label = new THREE.Mesh(labelGeo, labelMat);
        label.position.copy(card.position);
        label.position.y -= 0.85;
        label.lookAt(0, 0, 0);
        scene.add(label);
        cards[cards.length-1].label = label;
      });

      // Add floating particles around
      const pCount = 500;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const r = 3 + Math.random() * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        pPos[i*3] = Math.sin(theta) * Math.cos(phi) * r;
        pPos[i*3+1] = Math.sin(theta) * Math.sin(phi) * r;
        pPos[i*3+2] = Math.cos(theta) * r;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0x0284c7,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      camera.position.z = 7;

      let mouseX = 0, mouseY = 0;
      section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      });

      let autoRotate = true;

      function animate() {
        requestAnimationFrame(animate);

        if (autoRotate) {
          cards.forEach((c, i) => {
            c.angle += 0.003;
            const speed = 1 + Math.sin(i) * 0.3;
            const a = c.angle * speed;
            c.mesh.position.x = Math.cos(a) * radius;
            c.mesh.position.z = Math.sin(a) * radius;
            c.mesh.position.y = Math.sin(a * 1.5) * 0.5;
            c.mesh.lookAt(0, 0, 0);
            if (c.label) {
              c.label.position.copy(c.mesh.position);
              c.label.position.y -= 0.85;
              c.label.lookAt(0, 0, 0);
            }
          });
        }

        // Subtle mouse parallax on the group
        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;

        renderer.render(scene, camera);
      }
      animate();

      // Pause auto-rotate on hover
      section.addEventListener('mouseenter', () => { autoRotate = false; });
      section.addEventListener('mouseleave', () => { autoRotate = true; });

      function resizeGallery() {
        const w = section.clientWidth;
        const h = section.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
      window.addEventListener('resize', resizeGallery);
    })();

    // ============================================================
    // GSAP — SCROLL ANIMATIONS
    // ============================================================
    gsap.registerPlugin(ScrollTrigger);

    // Fade in sections
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.from(section.querySelector('.section-title'), {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from(section.querySelector('.section-subtitle'), {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    });

    // Navbar hide/show on scroll
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 200) {
        navbar.classList.toggle('hidden', currentScroll > lastScroll && currentScroll > 400);
      } else {
        navbar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
    });

    // ============================================================
    // PROJECTS — RENDER GRID
    // ============================================================
    const projectsGrid = document.getElementById('projectsGrid');
    const filterBar = document.getElementById('filterBar');

    // Get unique categories
    const allCats = [...new Set(PROJECTS.flatMap(p => p.categories))].sort();
    let activeFilter = 'All';

    function renderFilters() {
      filterBar.innerHTML = '<button class="filter-btn active" data-cat="All">All</button>';
      allCats.forEach(cat => {
        filterBar.innerHTML += `<button class="filter-btn" data-cat="${cat}">${cat}</button>`;
      });
      filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          filterBar.querySelector('.active').classList.remove('active');
          btn.classList.add('active');
          activeFilter = btn.dataset.cat;
          renderProjects();
        });
      });
    }

    function renderProjects() {
      const filtered = activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.categories.includes(activeFilter));

      projectsGrid.innerHTML = filtered.map((p) => `
        <div class="project-card" data-id="${p.id}">
          <div class="project-card-image-wrap">
            <img class="project-card-image" src="${p.image}" alt="${p.title}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" 
                 loading="lazy" />
            <div class="project-card-image-placeholder" style="display:none;">
              <span style="font-size:2rem;opacity:0.3;">📁</span>
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-card-categories">
              ${p.categories.map(c => `<span class="project-card-category">${c}</span>`).join('')}
            </div>
            <h3 class="project-card-title">${p.title}</h3>
            <p class="project-card-desc">${p.shortDescription}</p>
            <div class="project-card-tech">
              ${p.technologies.map(t => `<span class="project-card-tech-item">${t}</span>`).join('')}
            </div>
            <a href="${p.link}" target="_blank" class="project-card-link" onclick="event.stopPropagation()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
              View on GitHub
            </a>
          </div>
        </div>
      `).join('');

      // Card click -> modal
      projectsGrid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.dataset.id;
          const p = PROJECTS.find(pr => pr.id === id);
          if (p) openModal(p);
        });
      });

      // Animate cards
      gsap.from('.project-card', {
        scrollTrigger: { trigger: '#projectsGrid', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }

    // ============================================================
    // MODAL
    // ============================================================
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalCategories = document.getElementById('modalCategories');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTech = document.getElementById('modalTech');
    const modalLink = document.getElementById('modalLink');
    const modalClose = document.getElementById('modalClose');

    function openModal(p) {
      modalImage.src = p.image;
      modalImage.alt = p.title;
      modalImage.style.display = 'block';
      modalImage.onerror = () => { modalImage.style.display = 'none'; modalImage.nextElementSibling.style.display = 'flex'; };
      modalImage.onload = () => { modalImage.style.display = 'block'; if (modalImage.nextElementSibling) modalImage.nextElementSibling.style.display = 'none'; };
      modalCategories.innerHTML = p.categories.map(c => `<span class="project-card-category">${c}</span>`).join('');
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.longDescription;
      modalTech.innerHTML = p.technologies.map(t => `<span class="project-card-tech-item">${t}</span>`).join('');
      modalLink.href = p.link;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // ============================================================
    // MOBILE MENU
    // ============================================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ============================================================
    // INIT
    // ============================================================
    renderFilters();
    renderProjects();
  