"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { RESEARCH_DETAILS } from "@/utils/data";
import { ResearchDetail } from "@/types/types";

export default function ResearchDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [research, setResearch] = useState<ResearchDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const researchId = parseInt(params.id as string);
    const foundResearch = RESEARCH_DETAILS.find(r => r.id === researchId);
    
    if (foundResearch) {
      setResearch(foundResearch);
    } else {
      router.push("/research");
    }
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (!research) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Research Not Found</h1>
          <Link href="/research" className="btn-primary">
            Back to Research
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "methodology", label: "Methodology" },
    { id: "results", label: "Results" },
    { id: "datasets", label: "Datasets" },
    { id: "algorithms", label: "Algorithms" },
    { id: "experimental", label: "Experimental Setup" },
    { id: "team", label: "Team" },
    { id: "publications", label: "Publications" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing": return "bg-green-500";
      case "completed": return "bg-blue-500";
      case "upcoming": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(research.status)}`}></span>
              <span className="text-cyan-400 text-sm font-mono capitalize">{research.status} Research</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text font-orbitron">{research.title}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {research.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 font-orbitron">
                  {research.startDate.split('-')[0]}
                </div>
                <div className="text-sm text-gray-400">Started</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 font-orbitron">
                  {research.teamMembers.length}
                </div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 font-orbitron">
                  {research.publications.length}
                </div>
                <div className="text-sm text-gray-400">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* Full Description */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {research.fullDescription}
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Objectives</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {research.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {research.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {research.applications.map((application, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-400 font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {research.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Timeline */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Timeline</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phase 1: Foundation (2020-2021)</h3>
                      <p className="text-gray-300">Initial research setup, literature review, and preliminary experiments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phase 2: Development (2021-2023)</h3>
                      <p className="text-gray-300">Core algorithm development, dataset collection, and model training</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phase 3: Validation (2023-Present)</h3>
                      <p className="text-gray-300">Performance evaluation, publication, and real-world deployment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact and Significance */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Impact and Significance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Medical Impact</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Improved diagnostic accuracy in skin lesion classification</li>
                      <li>• Enhanced early detection of Alzheimer&apos;s disease</li>
                      <li>• Reduced false positives in medical imaging</li>
                      <li>• Support for radiologists and dermatologists</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Security Impact</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Robust defense against adversarial attacks</li>
                      <li>• Enhanced AI system reliability</li>
                      <li>• Protection of critical healthcare systems</li>
                      <li>• Improved trust in AI-assisted diagnosis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Methodology Tab */}
          {activeTab === "methodology" && (
            <div className="space-y-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Methodology</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {research.methodology}
                </p>
              </div>

              {/* Research Framework */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Framework</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 1: Data Collection</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Medical image dataset acquisition</li>
                      <li>• Adversarial example generation</li>
                      <li>• Data preprocessing and augmentation</li>
                      <li>• Quality control and validation</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 2: Model Development</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Architecture design and optimization</li>
                      <li>• Adversarial training implementation</li>
                      <li>• Defense mechanism development</li>
                      <li>• Hyperparameter tuning</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 3: Evaluation</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Performance metrics calculation</li>
                      <li>• Robustness testing</li>
                      <li>• Real-world validation</li>
                      <li>• Comparative analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experimental Setup */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Experimental Setup</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Hardware Configuration</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• NVIDIA RTX 4090 GPUs (4x)</li>
                      <li>• Intel Xeon CPU (32 cores)</li>
                      <li>• 128GB RAM</li>
                      <li>• High-speed SSD storage</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Software Environment</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Python 3.9+ with PyTorch 1.12+</li>
                      <li>• CUDA 11.6 for GPU acceleration</li>
                      <li>• Docker containers for reproducibility</li>
                      <li>• Weights & Biases for experiment tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Evaluation Metrics */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Evaluation Metrics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Classification Metrics</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Accuracy, Precision, Recall, F1-Score</li>
                      <li>• Area Under Curve (AUC)</li>
                      <li>• Confusion Matrix Analysis</li>
                      <li>• Cross-validation Results</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Robustness Metrics</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Adversarial Success Rate</li>
                      <li>• PSNR and SSIM for image quality</li>
                      <li>• Attack Transferability</li>
                      <li>• Defense Effectiveness</li>
                    </ul>
                  </div>
                </div>
              </div>

              {research.challenges && research.challenges.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-6">Challenges Addressed</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {research.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                        <p className="text-gray-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {research.futureWork && research.futureWork.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-6">Future Work</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {research.futureWork.map((work, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <p className="text-gray-300">{work}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Results Tab */}
          {activeTab === "results" && research.results && (
            <div className="space-y-12">
              {research.results.map((result, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-4">{result.title}</h2>
                  <p className="text-lg text-gray-300 mb-6">{result.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {result.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                        <div className="text-3xl font-bold text-cyan-400 font-orbitron mb-2">
                          {metric.value}
                        </div>
                        <div className="text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div className="space-y-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Research Team</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {research.teamMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {member.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{member}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {research.funding && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-6">Funding</h2>
                  <p className="text-lg text-gray-300">{research.funding}</p>
                </div>
              )}
            </div>
          )}

          {/* Datasets Tab */}
          {activeTab === "datasets" && (
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Datasets Used</h2>
                {research.datasets ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {research.datasets.map((dataset, index) => (
                      <div key={index} className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                        <h3 className="text-xl font-semibold text-white mb-3">{dataset.split(':')[0]}</h3>
                        <p className="text-gray-300">{dataset.split(':')[1]?.trim()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Medical Imaging Datasets</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• ISIC-2017: Skin lesion classification (2,000 images)</li>
                        <li>• ISIC-2018: Melanoma detection (10,015 images)</li>
                        <li>• ADNI: Alzheimer&apos;s disease neuroimaging (1,000+ scans)</li>
                        <li>• CIFAR-10/100: General image classification</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Adversarial Datasets</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• ImageNet: Large-scale adversarial examples</li>
                        <li>• CIFAR-10 Adversarial: PGD, FGSM attacks</li>
                        <li>• Medical Adversarial: Healthcare-specific attacks</li>
                        <li>• Custom Datasets: Pipeline rust detection</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Algorithms Tab */}
          {activeTab === "algorithms" && (
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Core Algorithms</h2>
                {research.algorithms ? (
                  <div className="space-y-6">
                    {research.algorithms.map((algorithm, index) => (
                      <div key={index} className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                        <h3 className="text-xl font-semibold text-white mb-3">{algorithm.split(':')[0]}</h3>
                        <p className="text-gray-300">{algorithm.split(':')[1]?.trim()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">AdvPatchShield Framework</h3>
                      <p className="text-gray-300 mb-4">Three-stage defense against adversarial patch attacks:</p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                        <li>Segmentation: Region Adjacency Graph (RAG) construction</li>
                        <li>Detection: Pixel-level anomaly detection with spatial consistency</li>
                        <li>Reconstruction: Context-aware GAN for natural image restoration</li>
                      </ol>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">PSIG-Net Architecture</h3>
                      <p className="text-gray-300 mb-4">Pseudo-sample generation for skin lesion classification:</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>DC-GAN: Deep Convolutional Generative Adversarial Network</li>
                        <li>Siamese Network: Quality control and validation</li>
                        <li>DBSCAN Clustering: Density-based spatial clustering</li>
                        <li>Data Augmentation: Balancing underrepresented classes</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Vector Quantization (VQ)</h3>
                      <p className="text-gray-300 mb-4">Enhanced adversarial attack generation:</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>Q-PGD: Vector Quantization + Projected Gradient Descent</li>
                        <li>Q-JSMA: Vector Quantization + Jacobian-based Saliency Map Attack</li>
                        <li>Codebook Learning: Precise perturbation control</li>
                        <li>Block-wise Processing: Improved attack efficiency</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Experimental Setup Tab */}
          {activeTab === "experimental" && (
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Experimental Setup</h2>
                {research.experimentalSetup ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Hardware Configuration</h3>
                      <ul className="space-y-2 text-gray-300">
                        {research.experimentalSetup.hardware.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Software Environment</h3>
                      <ul className="space-y-2 text-gray-300">
                        {research.experimentalSetup.software.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Hardware Configuration</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• NVIDIA RTX 4090 GPUs (4x)</li>
                        <li>• Intel Xeon CPU (32 cores)</li>
                        <li>• 128GB RAM</li>
                        <li>• High-speed SSD storage</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Software Environment</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Python 3.9+ with PyTorch 1.12+</li>
                        <li>• CUDA 11.6 for GPU acceleration</li>
                        <li>• Docker containers for reproducibility</li>
                        <li>• Weights & Biases for experiment tracking</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Evaluation Metrics */}
              {research.evaluationMetrics && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-6">Evaluation Metrics</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Classification Metrics</h3>
                      <ul className="space-y-2 text-gray-300">
                        {research.evaluationMetrics.classification.map((metric, index) => (
                          <li key={index}>• {metric}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">Performance Metrics</h3>
                      <ul className="space-y-2 text-gray-300">
                        {research.evaluationMetrics.performance.map((metric, index) => (
                          <li key={index}>• {metric}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === "publications" && (
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Related Publications</h2>
                <div className="space-y-4">
                  {research.publications.map((publication, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">{publication}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Publication #{index + 1}</span>
                        <span>•</span>
                        <span>Related to {research.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Research Button */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/research" className="btn-primary">
            ← Back to Research Areas
          </Link>
        </div>
      </section>
    </div>
  );
}
