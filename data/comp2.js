const projectData = {
  id: 'comp2',
  number: '03',
  title: '법률 상담 RAG',
  subtitle: '노인·고령층을 위한 AI 법률·복지 상담 서비스',

  impact:
    'Agentic RAG와 GraphRAG를 활용해 흩어진 법령·복지 정보를 연결하고, ' +
    '사용자가 이해하기 쉬운 상담 답변과 근거·실행 절차를 제공',

  pills: [
    'Next.js',
    'React',
    'TypeScript',
    'Agentic RAG',
    'GraphRAG',
    'LangGraph'
  ],

  overview: {
    title: 'Overview',

    brief:
      '노인과 고령층 사용자가 법률·복지·고용 정보를 자연어로 질문하면 ' +
      '공공 문서와 법령 데이터를 기반으로 답변을 제공하는 AI 상담 서비스',

    description:
      '노인복지법, 기초연금법, 고령자고용촉진법 등 관련 정보는 여러 기관에 분산되어 있고 ' +
      '법률 용어 또한 복잡해 사용자가 필요한 정보를 찾기 어렵습니다.<br><br>' +
      '본 서비스는 LangGraph Agent가 질문 의도를 분석하고 RAG MCP Tool을 호출하여 ' +
      '관련 문서를 검색합니다. 이후 검색 결과를 기반으로 근거 문서, 신청 절차, 지역 기관 정보까지 ' +
      '하나의 상담 경험으로 제공합니다.'
  },

  metaInfo: [
    {
      label: 'Duration',
      value: '약 2주<br>(2026-05-22 ~ 2026-06-04)'
    },
    {
      label: 'Role',
      value:
        'Frontend Developer<br>' +
        '상담 UI 및 AI 서비스 화면 구현'
    },
    {
      label: 'Tech Stack',
      value:
        'Next.js · React · TypeScript<br>' +
        'Tailwind CSS · FastAPI · LangGraph'
    }
  ],

  links: [
    {
      text: 'GitHub Repository',
      url:
        'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-3rd-1Team'
    }
  ],

  keyDetails:
    'Next.js 기반 상담 인터페이스 개발을 담당했습니다. ' +
    '사용자가 질문을 입력하고 AI 답변, 근거 문서, 기관 정보, 실행 체크리스트를 확인할 수 있도록 ' +
    'workspace 형태의 UI 구조를 설계했습니다.<br><br>' +

    'Backend Django Channels SSE API와 연동하여 실시간 스트리밍 답변을 구현하고, ' +
    'AI SDK UIMessage 형식으로 변환하는 BFF 흐름을 적용했습니다. ' +
    '또한 음성 입력 상태, TTS 응답 상태, Agent trace 정보를 확인할 수 있는 사용자 경험을 개발했습니다.',

  keyPoints: [
    'Next.js App Router 기반 AI 상담 UI 개발',
    'Backend SSE 스트리밍 API 연동 및 실시간 답변 표시',
    'RAG 답변과 근거 문서를 연결하는 Workspace UI 구현',
    '기관 지도·목록·체크리스트 등 Agent 결과 화면 설계',
    '음성 입력 및 TTS 상태 표현 UX 개발',
    'LangGraph Agent 테스트 케이스 설계 및 서비스 통합'
  ],

  chart: {
    type: 'none',
    title: '',
    desc: ''
  }
};