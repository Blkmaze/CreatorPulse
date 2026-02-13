import axios from 'axios';

// Ollama local API endpoint
const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

export async function generateContentIdeas(topic: string, platformType: string) {
  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model: "mistral", // or "llama2" 
      prompt: `Generate 3 engaging content ideas for ${platformType} about ${topic}. 
      For each idea, provide:
      - A catchy title
      - Brief description
      - Estimated engagement potential`,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error("Error generating content ideas:", error);
    return null;
  }
}

export async function analyzeContentPerformance(contentText: string) {
  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model: "mistral",
      prompt: `Analyze the potential performance of this content:
      ${contentText}
      
      Provide insights on:
      - Likely audience engagement
      - Potential virality score (1-10)
      - Recommended improvements`,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error("Error analyzing content:", error);
    return null;
  }
}

// Add more AI-powered creator tools as needed