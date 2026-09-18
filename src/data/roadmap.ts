/** Future goals from the supplied roadmap; not completed work or verified proficiency. */
export const learningPlan = [
  {
    title: 'Python & API foundations',
    topics:
      'Independent Python practice, HTTP, REST, JSON, async programming, FastAPI, Pydantic, and database CRUD.',
  },
  {
    title: 'AI agents & local models',
    topics:
      'LLM fundamentals, tool calling, LangGraph, Ollama, embeddings, vector search, RAG, and persistent memory.',
  },
  {
    title: 'Testing & delivery',
    topics: 'pytest, API tests, agent evaluation, logging, configuration, and a reproducible Docker setup.',
  },
];

export const companionPlan = {
  title: 'Local AI Companion',
  status: 'Planned',
  overview:
    'A planned privacy-first AI companion designed to run locally, retain conversations, and retrieve information from private documents.',
  architecture:
    'Proposed architecture: Next.js interface → FastAPI backend → LangGraph agent, with Ollama for local models and SQLite or PostgreSQL for persistence.',
  goals: [
    'Local chat and conversation history',
    'Persistent memory and semantic search',
    'Tool calling and retrieval over private files',
    'Tests, evaluation examples, and a Docker run setup',
  ],
};
