const projectData = {
  id: '8-law-rag',
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

  background: {
    title: 'Background',
    content:
      '노인과 고령층이 기초연금, 긴급복지, 노인일자리, 고령자 고용과 근로 제도에 대한 정보를 얻기 위해 ' +
      '여러 기관의 법령과 안내 문서를 직접 찾아다녀야 한다는 문제에서 출발했습니다.<br><br>' +
      '기초연금법과 노인복지법처럼 지원 자격을 규정하는 법령이 있는 반면, 지역별 조례와 사업 공고, ' +
      '실제 신청 절차는 주민센터나 복지관 등 다양한 기관에 흩어져 있습니다. 행정 용어는 어렵고 정보가 ' +
      '분산되어 있어 필요한 내용을 스스로 파악하기 쉽지 않습니다.<br><br>' +
      '또한 지원 기준과 지급 금액은 정책 변화에 따라 달라질 수 있어, 잘못된 정보를 바탕으로 신청할 경우 ' +
      '실제 불이익으로 이어질 위험도 있습니다. 이러한 어려움은 고령층뿐만 아니라 부모님을 대신 알아보는 ' +
      '가족이나 복지 상담 실무자에게도 동일하게 나타납니다.<br><br>' +
      '저희는 사용자가 복잡한 법률 용어나 행정 절차를 미리 알지 못하더라도 자신의 상황을 자연스럽게 설명하면, ' +
      '관련 법령과 지원 기준을 바탕으로 확인해야 할 사항과 다음에 해야 할 행동을 하나의 흐름으로 안내받을 수 있는 ' +
      'AI 상담 서비스를 만들고자 했습니다.'
  },

  metaInfo: [
    {
      label: 'Duration',
      value: '약 5주<br>(2026-05-22 ~ 2026-06-26)'
    },
    {
      label: 'Role',
      value:
        'Frontend Developer<br>' +
        '상담 UI 및 AI 서비스 화면 구현' +
        '테스트 케이스 설계 및 서비스 통합' 
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

  sections: [
    {
      title: '검색 전략과 Routing',
      content:
        '일반적인 RAG 구조는 질문을 임베딩한 뒤 관련성이 높은 문서를 검색하고, reranking을 통해 가장 적합한 chunk를 선택하는 방식입니다. ' +
        '범위가 좁고 질문 유형이 일정한 서비스라면 이러한 구조만으로도 충분한 성능을 기대할 수 있습니다.<br><br>' +
        '하지만 복지 상담은 질문마다 필요한 근거가 달랐습니다. 지원 자격만 확인하면 되는 질문도 있었지만, ' +
        '현재 진행 중인 지자체 사업이나 기관 운영 정보를 함께 확인해야 하는 경우도 있었고, ' +
        '법령과 지역 정보를 함께 비교해야만 정확한 안내가 가능한 질문도 있었습니다.<br><br>' +
        '모든 질문에 동일한 Retrieval Pipeline을 적용하면 이런 차이를 반영하기 어려웠습니다. ' +
        'Top-k를 크게 설정하면 관련 없는 조문까지 Context에 포함되어 토큰 사용량이 증가하고, ' +
        '모델이 핵심 조건을 유지하기 어려워질 수 있습니다. ' +
        '반대로 Top-k를 작게 설정하면 상위법과 시행령, 지역 조례처럼 함께 읽어야 하는 근거를 놓칠 가능성이 있었습니다.<br><br>' +
        '그래서 모든 질문에 같은 검색 과정을 반복하는 대신, 먼저 어떤 종류의 근거가 필요한지를 판단하는 Routing 단계를 두었습니다. ' +
        '법적 판단이 필요한 질문인지, 현재 지역 정보가 필요한 질문인지, 혹은 두 정보를 함께 확인해야 하는지를 먼저 분류한 뒤, ' +
        '필요한 경우에만 RAG와 Web Search를 조합하도록 설계했습니다.<br><br>' +
        '이러한 검색 전략을 통해 불필요한 Context를 줄이면서도 질문에 맞는 근거를 보다 효율적으로 수집할 수 있었습니다.'
    },
    {
      title: 'Agent Orchestration',
      content:
        '검색 경로가 분리되면서 Agent의 역할도 단순한 답변 생성이 아니라 여러 도구를 조율하는 Orchestrator가 되었습니다.<br><br>' +
        'Agent는 먼저 질문을 분석하고 어떤 정보가 필요한지를 판단합니다. ' +
        '지원 자격을 묻는 질문이라면 법령 RAG를 조회하고, 현재 운영 중인 사업이나 기관 정보를 확인해야 하는 경우에는 ' +
        'Web Search와 지도 서비스를 함께 호출합니다. ' +
        '이후 수집된 정보를 하나의 답변으로 통합하여 사용자에게 근거와 함께 다음 행동을 안내합니다.<br><br>' +
        '이 과정에서 Agent는 하나의 검색기를 대체하는 것이 아니라, 질문의 성격에 따라 적절한 도구를 선택하고 실행 순서를 조율하는 역할을 수행합니다. ' +
        '사용자는 하나의 상담을 경험하지만, 내부에서는 필요한 근거를 찾기 위해 여러 도구가 순차적으로 호출되는 구조입니다.'
    },
    {
      title: 'RAG 서비스 아키텍처',
      content:
        'RAG를 Main Agent 내부 모듈로 구현하는 방법도 고려했습니다. ' +
        '하지만 법령 데이터를 구축하는 과정과 상담 서비스를 개발하는 과정은 변경 주기가 서로 달랐습니다.<br><br>' +
        '법령 데이터는 새로운 문서를 수집하고 Ingest를 반복하며 검색 품질을 개선해야 했고, ' +
        '상담 서비스는 Agent 로직과 외부 도구 연동, UI를 지속적으로 수정해야 했습니다. ' +
        '두 작업을 하나의 애플리케이션으로 구성하면 서로의 변경 사항이 개발 일정과 배포에 영향을 주게 됩니다.<br><br>' +
        '그래서 RAG를 FastAPI 기반의 독립 서비스와 MCP Server 형태로 분리했습니다. ' +
        '이를 통해 RAG 팀은 문서 수집과 검색 품질 개선에 집중하고, Backend 팀은 Main Agent와 외부 도구 연동을 독립적으로 개발할 수 있었습니다. ' +
        '또한 RAG가 변경되더라도 Agent 개발을 중단할 필요가 없었고, Backend 수정이 발생할 때마다 Ingest 코드를 함께 수정해야 하는 문제도 줄일 수 있었습니다.<br><br>' +
        '서비스를 분리한 것은 개발 효율뿐만 아니라 재사용성도 고려한 선택이었습니다. ' +
        '이후 다른 Agent가 동일한 법령 지식을 활용해야 하는 경우에도 MCP Server만 연결하면 같은 검색 기능을 그대로 사용할 수 있습니다. ' +
        'RAG 내부의 Chunking 방식이나 Graph Schema가 변경되더라도 외부에서는 동일한 Tool Interface만 유지하면 되기 때문에 ' +
        '확장성과 유지보수 측면에서도 유리한 구조였습니다.'
    },
    {
      title: 'Construction Pipeline',
      content:
        'Agentic RAG가 주목받기 시작하면서 Obsidian을 MCP나 Graph Database와 연결해 문서를 업로드하면 Node가 생성되는 데모를 자주 볼 수 있었습니다. ' +
        '개인의 노트를 Graph로 연결하는 경험은 인상적이었지만, 실제 조직의 문서를 검색 가능한 지식 기반으로 구축하는 과정은 여전히 별도의 구축 프로젝트처럼 다뤄지고 있었습니다.<br><br>' +
        'AI Expo에서 여러 Database와 RAG Solution 업체를 찾아 "문서를 업로드하면 자동으로 지식 기반을 구축해 주는 SaaS가 있습니까?"라고 질문했을 때도 ' +
        '대부분의 답변은 비슷했습니다. 문서의 규모와 형태를 먼저 확인한 뒤 구축 비용과 기간을 산정해야 하며, ' +
        '사람이 문서를 정제하고 Chunk를 나누고 관계를 연결해야 한다는 것이었습니다.<br><br>' +
        '저희도 이러한 설명이 틀렸다고 생각하지는 않았습니다. 실제 조직의 문서는 구조가 제각각이고 같은 개념을 서로 다른 이름으로 표현하는 경우도 많기 때문입니다. ' +
        '다만 법령과 조례는 문서의 위계와 연결 기준이 비교적 명확했습니다. ' +
        '그렇다면 반복적으로 수행되는 구축 과정의 상당 부분은 Agent가 대신할 수 있지 않을까라는 생각에서 Construction Pipeline을 설계하게 되었습니다. ' +
        '문서를 등록하는 순간부터 Graph에 반영되기까지의 전체 흐름을 하나의 Construction Pipeline으로 구성했습니다.'
    },
    {
      title: 'Agent-assisted Construction',
      content:
        'Construction Pipeline에서 Agent는 반복적인 구축 작업을 담당합니다.<br><br>' +
        'Chunking Agent는 원문을 의미 단위로 분리하고, Embedding Worker는 각 Chunk의 Embedding을 생성합니다. ' +
        '이후 Graph Candidate Agent는 기존 Graph를 탐색하여 연결 가능한 Node와 Relationship Candidate를 제안합니다.<br><br>' +
        '하지만 Agent가 Graph를 직접 수정하지는 않습니다. Agent가 생성하는 것은 확정된 관계가 아니라 후보(Candidate)입니다.<br><br>' +
        '검토자는 Candidate가 제시한 원문과 생성 근거를 확인한 뒤 승인하거나 거절하며, 승인된 경우에만 실제 Graph Edge가 생성됩니다. ' +
        '거절된 결과 역시 함께 저장하고, 이후 Construction 과정에서는 이전 Review 기록을 Memory Context로 활용해 ' +
        'Agent가 과거의 판단 기준을 참고할 수 있도록 했습니다.<br><br>' +
        '자동화의 목적은 사람을 제거하는 것이 아니라, 사람이 반복적으로 수행하던 작업을 Agent가 대신하고 최종 판단은 사람이 담당하도록 역할을 분리하는 것이었습니다.'
    },
    {
      title: 'Provenance와 Chunking',
      content:
        'Construction 과정에서 가장 먼저 수행하는 작업은 LLM이 문서를 해석하는 것이 아니라 원문을 등록하는 것입니다.<br><br>' +
        'Document Registry는 원문의 SHA-256 Hash와 원문 전체를 저장하고 Document ID를 생성합니다. ' +
        '이후 Chunk 생성부터 Graph 구축까지 모든 과정은 이 Document ID를 기준으로 진행됩니다.<br><br>' +
        '이러한 구조를 선택한 이유는 Provenance 때문입니다. ' +
        'Chunk와 Relationship가 아무리 잘 생성되더라도 어떤 원문에서 만들어졌는지 다시 확인할 수 없다면 법령의 근거로 활용하기 어렵습니다. ' +
        '생성 모델이 문서를 읽기 전에 먼저 문서의 Identity를 고정하고, 이후 생성되는 모든 데이터가 원문을 추적할 수 있도록 설계했습니다.<br><br>' +
        'Chunking 역시 요약을 만드는 과정이 아니라 원문을 검색 가능한 형태로 만드는 과정으로 접근했습니다. ' +
        'Agent는 의미 단위를 판단하지만 Chunk 본문은 원문을 그대로 유지하도록 제한했고, ' +
        '시작 문자열과 종료 문자열을 함께 저장하여 언제든 원문의 위치를 다시 확인할 수 있도록 했습니다.<br><br>' +
        '법령 데이터에서는 자연스러운 요약보다 근거를 다시 확인할 수 있는 구조가 더 중요하다고 판단했기 때문입니다.'
    },
    {
      title: 'Read-only MCP와 권한 분리',
      content:
        'Construction Pipeline에는 문서를 등록하고 Graph를 수정하는 권한이 필요하지만, 사용자와 대화하는 Main Agent는 이미 구축된 지식을 조회하기만 하면 됩니다.<br><br>' +
        '그래서 Construction 내부에는 문서를 등록하고 Chunk와 Relationship Candidate를 생성하는 도구를 두고, ' +
        'Main Agent에는 검색과 조회를 위한 Read-only MCP Tool만 공개했습니다.<br><br>' +
        'Construction Agent는 원문을 읽고 Chunk를 생성하며 승인된 Edge를 Graph에 반영하는 권한을 가지지만, ' +
        'Main Agent는 Text Search, Vector Search, Graph Traverse, Read Query 등을 통해 구축된 지식을 조회하는 권한만 가집니다.<br><br>' +
        '이러한 권한 분리는 이전 글에서 설명한 RAG 서비스 아키텍처와도 연결됩니다. ' +
        'Construction은 지식을 구축하는 영역이고, Main Agent는 구축된 지식을 활용하는 영역입니다. ' +
        '두 영역을 분리함으로써 개발과 운영을 독립적으로 진행할 수 있었고, 상담 중 Graph가 변경되는 상황도 방지할 수 있었습니다.<br><br>' +
        '결과적으로 저희는 Agent가 반복적인 구축 작업을 수행하고, 사람은 이를 검토하며, Main Agent는 검증된 지식만 활용하는 구조를 선택했습니다. ' +
        '반복 작업은 자동화하면서도 법령 데이터에 필요한 신뢰성과 추적 가능성은 유지하는 것이 목표였습니다.'
    },
    {
      title: '로디 상담 인터페이스',
      content:
        'RAG가 관련 법령을 찾았다고 해서 사용자의 일이 끝나는 것은 아닙니다. 기초연금 조건을 확인한 사람은 준비해야 할 서류를 알아야 하고, ' +
        '긴급복지 지원을 찾은 사람은 가까운 기관과 연락 방법을 확인해야 합니다. 결국 사용자가 원하는 것은 법령 자체가 아니라 다음에 무엇을 해야 하는지입니다.<br><br>' +
        '그래서 저희는 답변을 길게 만드는 대신, 대화와 근거 문서, 기관 지도, 실행 체크리스트를 하나의 상담 Workspace로 연결했습니다. ' +
        '사용자의 질문과 상담 단계에 맞춰 필요한 화면만 한 번에 하나씩 보여주고, 텍스트와 화면, 음성을 각각의 역할에 맞게 분리하여 처리했습니다.<br><br>' +
        '<strong>Agent Runtime</strong><br>' +
        '전체 구조는 Next.js BFF → Agent Runtime → RAG & External MCP의 세 단계로 구성됩니다. ' +
        'BFF는 사용자 요청을 SSE Stream으로 전달하고, Agent Runtime은 상담을 진행하며, ' +
        'RAG와 External MCP는 법령과 기관 정보, 지도와 현재 정보를 제공합니다.<br><br>' +
        '상담 Runtime에서는 세 개의 Agent가 하나의 상담을 함께 구성합니다. ' +
        'Main Agent는 사용자의 질문을 이해하고 RAG MCP, Naver Search, TMAP, Firecrawl 등의 도구를 사용해 필요한 근거를 찾습니다. ' +
        '하지만 화면이나 음성은 직접 생성하지 않습니다.<br><br>' +
        'Screen Control Agent는 Main Agent의 답변과 현재 화면 상태를 바탕으로 다음에 보여줄 화면을 결정합니다. ' +
        '출력은 React Component가 아니라 Schema 기반의 Workspace Command이며, Frontend는 이를 검증한 뒤 미리 정의된 화면만 렌더링합니다.<br><br>' +
        'Speech Text Agent는 화면에 적합한 답변을 음성에 적합한 문장으로 다시 구성합니다. ' +
        '문서명이나 목록처럼 화면에서는 필요한 정보도 음성에서는 자연스럽지 않을 수 있기 때문입니다. ' +
        '정리된 문장은 ElevenLabs TTS를 통해 스트리밍으로 재생됩니다.<br><br>' +
        '세 Agent는 각각 다른 역할을 수행하지만 하나의 상담 흐름 안에서 동시에 동작하도록 구성했습니다.<br><br>' +
        '<strong>Workspace Interface</strong><br>' +
        '생성형 AI가 임의의 React Component를 만드는 방식은 선택하지 않았습니다. 화면 구조와 사용자 행동은 제품 코드가 관리해야 한다고 판단했기 때문입니다.<br><br>' +
        'Backend는 Pydantic Schema로 Workspace Command를 검증하고, Frontend는 동일한 계약을 Zod로 다시 확인한 뒤 등록된 화면만 렌더링합니다.<br><br>' +
        '상담 과정에서는 필요한 정보에 따라 서로 다른 Workspace가 표시됩니다. ' +
        'Evidence는 법령과 근거 문서, Map은 기관 위치와 연락처, ' +
        'Checklist는 준비해야 할 서류와 다음 행동, Profile Intake는 추가 정보가 필요한 경우입니다.<br><br>' +
        '또한 여러 화면을 동시에 변경하지 않고, 한 번에 하나의 Workspace만 전환하도록 했습니다. ' +
        '지도와 문서, 체크리스트가 동시에 바뀌기보다 사용자가 지금 해야 할 행동 하나를 명확하게 보여주는 것이 상담 경험에 더 적합하다고 판단했습니다.<br><br>' +
        '<strong>Voice Experience</strong><br>' +
        '음성은 별도의 기능이 아니라 상담 인터페이스의 일부입니다.<br><br>' +
        '사용자의 음성 입력은 브라우저 Dictation을 통해 일반 텍스트 질문과 동일한 Agent Flow로 전달됩니다. ' +
        '이후 Speech Text Agent가 음성에 적합한 형태로 답변을 정리하고, ElevenLabs TTS가 Audio Stream을 생성합니다.<br><br>' +
        '로디(Rody)는 Road와 Buddy를 합친 이름으로, 사용자의 길을 함께 찾아주는 동반자라는 의미를 담았습니다. ' +
        '캐릭터는 대기, 입력 감지, 듣는 중, 생각 중, 답변 중, 오류 상태를 각각 다른 Sprite Animation으로 표현하며, ' +
        '별도의 로딩 화면 대신 현재 상담 상태를 자연스럽게 전달합니다.<br><br>' +
        '결과적으로 사용자는 하나의 상담 안에서 질문하고, 답변을 듣고, 근거와 다음 행동을 화면으로 확인할 수 있습니다.<br><br>' +
        '<strong>Prototype 범위</strong><br>' +
        '현재 시스템은 법률 전문가나 복지 상담사를 대체하기 위한 서비스가 아닙니다. ' +
        '지원 기준과 사업은 변경될 수 있고, 개인 상황에 따라 담당 기관의 추가 판단이 필요할 수도 있습니다.<br><br>' +
        '그래서 답변만 제공하는 대신 관련 법령과 근거 문서, 기관 정보, 다음 행동을 함께 제시하도록 설계했습니다.<br><br>' +
        '또한 현재 구현은 Prototype 단계로, 장기 대화 Memory와 개인정보 보관·삭제 정책까지 포함한 운영 서비스 수준은 아닙니다. ' +
        '이 글에서 다루는 범위는 근거 검색, Agent Orchestration, 화면 제어, 음성 인터페이스를 하나의 상담 경험으로 연결한 구조입니다.'
    }
  ],

  chart: {
    type: 'images',
    title: '로디 (Rody)',
    desc: 'Road + Buddy — 사용자의 길을 함께 찾아주는 동반자. 대기·입력 감지·듣는 중·생각 중·답변 중·오류 상태를 각각 다른 Sprite Animation으로 표현합니다.',
    columns: '1fr 1.15fr',
    images: [
      { src: 'images/rodi1.png' },
      { src: 'images/rodi2.png' }
    ]
  }
};