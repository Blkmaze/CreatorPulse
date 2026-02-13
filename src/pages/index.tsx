import React, { useState } from 'react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import { 
  generateContentIdeas, 
  analyzeContentPerformance 
} from '../utils/openaiService';
import { 
  TrendingUp, 
  Analytics, 
  AutoAwesome 
} from '@mui/icons-material'; // Make sure to install @mui/icons-material

const HomePage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('YouTube');
  const [contentIdeas, setContentIdeas] = useState<string | null>(null);
  const [performanceAnalysis, setPerformanceAnalysis] = useState<string | null>(null);

  const handleGenerateIdeas = async () => {
    if (!topic) return;
    const ideas = await generateContentIdeas(topic, platform);
    setContentIdeas(ideas);
  };

  const handleAnalyzeContent = async () => {
    if (!contentIdeas) return;
    const analysis = await analyzeContentPerformance(contentIdeas);
    setPerformanceAnalysis(analysis);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <DashboardCard 
            title="Monthly Earnings" 
            value="$4,523" 
            icon={<TrendingUp />} 
            trend="up" 
          />
          <DashboardCard 
            title="Content Views" 
            value="256K" 
            icon={<Analytics />} 
            trend="up" 
          />
          <DashboardCard 
            title="Engagement Rate" 
            value="7.2%" 
            icon={<AutoAwesome />} 
            trend="neutral" 
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-brand-purple-600 mb-6">
            AI Content Idea Generator
          </h2>

          <div className="flex space-x-4 mb-6">
            <input 
              type="text" 
              placeholder="Enter content topic" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-grow p-3 border rounded-lg"
            />
            <select 
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="p-3 border rounded-lg"
            >
              <option>YouTube</option>
              <option>TikTok</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
            </select>
            <button 
              onClick={handleGenerateIdeas}
              className="bg-brand-purple-600 text-white px-6 py-3 rounded-lg hover:bg-brand-purple-700"
            >
              Generate Ideas
            </button>
          </div>

          {contentIdeas && (
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Generated Content Ideas:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
                {contentIdeas}
              </pre>
              <button 
                onClick={handleAnalyzeContent}
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Analyze Performance
              </button>
            </div>
          )}

          {performanceAnalysis && (
            <div>
              <h3 className="font-bold text-lg mb-4">Performance Analysis:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
                {performanceAnalysis}
              </pre>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;