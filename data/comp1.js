const projectData = {
  id: 'comp1',
  number: '08',
  title: 'KBO 실시간<br>AI 해설<br>서비스',
  subtitle: '야구 입문자를 위한 실시간 AI 해설 서비스 — Solar LLM + KBO 데이터 파이프라인',
  impact: '야구를 몰라도 괜찮아 — AI가 지금 이 순간을 설명해줍니다',
  pills: [
    'AI',
    'LLM',
    'React',
    'Python'
  ],
  overview: {
    title: 'Overview',
    brief: '야구 초보자도 실시간으로 경기를 이해할 수 있도록 AI가 경기 상황을 자연스럽게 설명하는 서비스',
    description: '야구장에서 규칙도 모르고 답답해하는 첫 경험에서 출발했습니다. 야구를 즐기고 싶지만 복잡한 규칙과 전술이 진입장벽인 관중들을 위해, AI가 실시간 경기 데이터를 수집하고 입문자 눈높이의 자연스러운 해설을 자동 생성하는 서비스를 기획했습니다.<br><br>KBO 공식 API와 네이버 스포츠 API를 이중 수집하고, 업스테이지의 Solar LLM을 활용한 프롬프트 엔지니어링으로 "왜 이런 선택을 했나?"부터 "이게 왜 중요한가?"까지 설명합니다. 실제 경기(롯데 vs SSG, 5월 2일)에서 174개 이벤트를 수집해 PoC를 검증하고, 41건의 자동 해설을 성공적으로 생성했습니다.'
  },
  metaInfo: [
    {
      label: 'Type',
      value: 'AI 대회 아이디어<br>(업스테이지 트랙)'
    },
    {
      label: 'Output',
      value: '기획서 · PoC 구현<br>피칭'
    },
    {
      label: 'Focus',
      value: '실시간 데이터<br>파이프라인 / LLM<br>프롬프트 엔지니어링'
    },
    {
      label: 'PoC Results',
      value: '1,231만 (2025 KBO)<br>174건 (이벤트 수집)<br>41건 (해설 성공)'
    }
  ],
  links: [
    {
      text: '▶ YouTube 시연 영상',
      url: 'https://youtu.be/_qrFCqIMuD0'
    }
  ],
  keyDetails: '실시간 스포츠 데이터와 LLM을 결합한 혁신적인 해설 서비스입니다. KBO 공식 모바일 API와 네이버 스포츠 API 이중 수집으로 실시간성을 확보했고, 업스테이지의 Solar LLM 기반 프롬프트 엔지니어링으로 입문자 맞춤 자연어 해설을 생성합니다. 팬 댓글 크롤링으로 자동 질문 생성 기능도 구현했으며, FastAPI 백엔드와 React 모바일 반응형 프론트로 완전한 서비스 형태를 갖추었습니다.',
  keyPoints: [
    'KBO 공식 모바일 API + 네이버 스포츠 API 이중 수집 파이프라인',
    'Solar LLM 기반 입문자 눈높이 자연어 해설 자동 생성',
    '실제 경기(롯데 vs SSG, 5/2) PoC 검증 완료 — 이벤트 174건 수집 · 해설 41건 성공',
    '팬 댓글 크롤링으로 자동 질문 생성 기능',
    'FastAPI 백엔드 + React 모바일 반응형 프론트'
  ],
  chart: {
    type: 'none',
    title: '',
    desc: ''
  }
};
