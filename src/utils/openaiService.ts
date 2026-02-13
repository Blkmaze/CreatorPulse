import OpenAI from 'openai';

// Initialize OpenAI with your API key (store in environment variables)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateContentIdeas(topic: string, platformType: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system", 
          content: "You are a creative content strategist helping creators generate viral content ideas."
        },
        {
          role: "user", 
          content: `Generate 3 engaging content ideas for ${platformType} about ${topic}. 
          For each idea, provide:
          - A catchy title
          - Brief description
          - Estimated engagement potential`
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating content ideas:", error);
    return null;
  }
}

export async function analyzeContentPerformance(contentText: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system", 
          content: "You are an AI content performance analyst."
        },
        {
          role: "user", 
          content: `Analyze the potential performance of this content:
          ${contentText}
          
          Provide insights on:
          - Likely audience engagement
          - Potential virality score (1-10)
          - Recommended improvements`
        }
      ],
      max_tokens: 300,
      temperature: 0.6
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error analyzing content:", error);
    return null;
  }
}

// Add more AI-powered creator tools as needed