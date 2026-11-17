const projectData = {
  id: 'personal-writeday',
  number: 'D',
  icon: 'images/writeday.png',
  iconRound: true,
  title: 'Writeday iOS',
  subtitle: '적으면 일정이 되는 메모 — 평소 말투로 적은 메모를 캘린더 일정과 미리 알림으로 바꿔 주는 앱',
  impact: '일정 앱을 열고 날짜·시간을 고르는 과정 없이, 한 줄 메모만으로 일정 등록',
  pills: [
    'Swift',
    'EventKit',
    'WidgetKit',
    'Foundation Models'
  ],
  overview: {
    title: 'Overview',
    brief: '평소 말투로 적은 메모를 캘린더 일정과 미리 알림으로 바꿔 주는 메모 앱',
    description: 'Writeday는 메모를 적기만 하면 캘린더에 일정이 들어가는 앱입니다. "내일 두시 엄마와 쇼핑"이라고 적고 엔터를 치면 내일 오후 2시에 "엄마와 쇼핑" 일정이 생기고, "투두 장보기"처럼 적으면 미리 알림에 할 일로 등록됩니다.<br><br>한국어와 영어 자연어를 모두 이해하며, 규칙으로 해석하기 어려운 문장은 Apple Intelligence 기기에서 온디바이스 Foundation Models로 해석합니다. 서버·계정·광고 없이 모든 메모는 기기에만 저장됩니다.'
  },
  metaInfo: [
    {
      label: 'Type',
      value: 'Personal Project<br>iOS App'
    },
    {
      label: 'Status',
      value: 'Released<br>App Store'
    },
    {
      label: 'Platform',
      value: 'iPhone · iOS 18+'
    },
    {
      label: 'Language',
      value: '한국어 · English'
    }
  ],
  links: [
    {
      text: 'App Store',
      url: 'https://apps.apple.com/kr/app/writeday/id6832256504'
    }
  ],
  keyDetails: 'Writeday는 "내일, 다음주 화요일, 3일 후", "두시, 10시 반, 14:30", "2시~4시, 12월 24일부터 26일까지" 같은 평소 표현을 인식해 iPhone 기본 캘린더의 "Writeday" 캘린더에 일정을 등록합니다(EventKit). "매주 화요일 7시 수영"처럼 반복 일정과 종료일도 한 줄로 정할 수 있고, 메모 속 날짜는 하이라이트되어 누르면 캘린더 탭의 그 날짜로 이동합니다. 메모를 고치면 연결된 일정이 업데이트되고 지우면 함께 삭제되어 중복이 생기지 않으며, 등록된 일정과 완료한 할 일은 다음 날 메모에서 정리되어 캘린더에 남습니다.',
  keyPoints: [
    '한국어·영어 자연어 인식 — 날짜·시간·기간·반복 일정을 한 줄로 등록',
    '"투두"로 시작하면 미리 알림에 등록, 메모에서 체크하면 미리 알림도 완료',
    '메모 속 날짜 하이라이트 → 탭하면 캘린더의 해당 날짜로 이동',
    '메모 수정·삭제 시 연결된 일정도 함께 업데이트·삭제 (중복 없음)',
    'Apple Intelligence 기기에서 온디바이스 Foundation Models로 해석 보완',
    '다음 날 자동 정리 · 홈 화면 위젯 · 다크 모드',
    '서버·계정·광고 없음, 메모는 기기에만 저장 (Data Not Collected)'
  ],
  chart: {
    type: 'images',
    columns: 'repeat(3, minmax(0, 1fr))',
    gap: '0.7rem',
    tight: true,
    framed: true,
    images: [
      'images/writeday1.png',
      'images/writeday2.png',
      'images/writeday3.png'
    ]
  }
};
