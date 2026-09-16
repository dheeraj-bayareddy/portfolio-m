export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string;
  result: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "dr-detection-deep-learning",
    title: "DR Detection with Deep Learning",
    summary:
      "5-class diabetic retinopathy severity grading from retinal images.",
    tags: ["Python", "PyTorch", "CNN", "ResNet50", "MobileNetV2", "Gradio"],
    problem:
      "Manual DR grading is slow and subjective, risking missed early-stage diagnoses.",
    approach:
      "Trained and compared a custom CNN, ResNet50, and MobileNetV2 (transfer learning) on the APTOS 2019 dataset, deployed as an ensemble.",
    result:
      "Shipped as an interactive Gradio demo on Hugging Face Spaces.",
    githubUrl:
      "https://github.com/dheeraj-bayareddy/diabetic-retinopathy-severity-grading",
    demoUrl:
      "https://huggingface.co/spaces/dheeraj029/diabetic-retinopathy-grading",
  },
  {
    slug: "live-grocery-price-tracker",
    title: "Live Grocery Price Tracker (System Design)",
    summary:
      "Real-time price comparison architecture across six retailers, delivered via Scrum.",
    tags: [
      "Selenium",
      "Kafka",
      "Spark",
      "PostgreSQL",
      "FastAPI",
      "React",
      "Scrum",
    ],
    problem:
      "Consumers can't easily compare grocery prices across retailers in real time.",
    approach:
      "Designed a scraping/streaming pipeline (Selenium, Kafka, Spark) with a PostgreSQL backend and FastAPI/React frontend — led as Scrum Master over a 5-person team across sprints.",
    result:
      "Delivered full system design, sprint backlog, and architecture as the graded deliverable.",
  },
  {
    slug: "population-trends-dashboard",
    title: "55-Country Population Trends Dashboard",
    summary:
      "Analytics on 65 years of population data across 55 countries.",
    tags: ["Python", "pandas", "HTML/JS Dashboard", "Data Viz"],
    problem:
      "Which countries are aging or growing fastest, and what's driving the divergence.",
    approach:
      "Analyzed 1960–2024 population data with Python/pandas and built an interactive HTML dashboard.",
    result:
      "Presented via PowerPoint deck and live dashboard walkthrough in a 1:1 professor review.",
  },
];
