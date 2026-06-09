const projectData = {
  id: 'comp2',
  number: '07',
  title: 'SKN28-3rd-1Team<br>법률 상담 RAG',
  subtitle: '노인·고령층 법률 정보 검색 서비스',
  impact: 'Agentic RAG + GraphRAG로 흩어진 법령을 통합하고, 사용자가 이해하기 쉬운 상담 답변 제공',
  pills: [
    'Agentic RAG',
    'GraphRAG',
    'LangGraph',
    'FastAPI',
    'React'
  ],
  overview: {
    title: 'Overview',
    brief: '노인과 고령층이 법률, 기초연금, 고령자 고용, 근로 관련 정보를 자연어로 질문하고, 실제 공공 문서와 법령을 근거로 답변을 받을 수 있는 RAG 기반 상담 서비스',
    description: '노인복지법, 기초연금법, 고령자고용촉진법 등 관련 문서는 국가법령정보센터와 관련 기관에 흩어져 있고, 법률 용어가 어려워 사용자가 본인에게 맞는 정보를 찾기 어렵습니다.<br><br>이 서비스는 LangGraph 기반 Agent가 사용자 질문을 판단하고, RAG MCP Tool을 통해 실제 문서를 검색한 후, OpenRouter LLM으로 이해하기 쉬운 답변을 생성합니다. Memgraph 기반 GraphRAG로 문서 간 관계까지 활용하여 더 정확한 상담을 제공합니다.'
  },
  metaInfo: [
    {
      label: 'Duration',
      value: '약 2주<br>(2026-05-22 ~ 2026-06-04)'
    },
    {
      label: 'Team Role',
      value: '프론트엔드<br>개발'
    },
    {
      label: 'Tech Stack',
      value: 'React · TypeScript<br>LangChain · FastAPI<br>Memgraph · GraphRAG'
    }
  ],
  links: [
    {
      text: 'GitHub Repository',
      url: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-3rd-1Team'
    }
  ],
  keyDetails: 'React + TypeScript 기반 프론트엔드를 담당하여 사용자 질문 입력 화면부터 RAG 답변 표시까지 전체 UI/UX를 설계하고 구현했습니다. FastAPI backend와 RAG 시스템 통합, LangGraph Agent 테스트 케이스 설계, Streamlit 프로토타입과 최종 React 웹 구현으로 진행되었습니다.',
  keyPoints: [
    'Agentic RAG 기반 자연어 상담 시스템',
    'GraphRAG와 Memgraph를 활용한 관계도 검색',
    'LangGraph Agent와 MCP Tool 연동',
    'OpenRouter LLM 기반 근거 중심 답변',
    'React + Tailwind로 구현한 모던 상담 UI',
    '팀 협업을 통한 Backend-RAG-Frontend 통합'
  ],
  chart: {
    type: 'none',
    title: '',
    desc: ''
  }
};
