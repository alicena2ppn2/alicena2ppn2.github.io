// 표 헬퍼: content 문자열 안에서 사용
const T = (caption, head, rows) =>
  '<div class="dv-scroll"><table class="dv-table">' +
  (caption ? '<caption>' + caption + '</caption>' : '') +
  (head ? '<thead><tr>' + head + '</tr></thead>' : '') +
  '<tbody>' + rows + '</tbody></table></div>';

const projectData = {
  id: '11-my-mochi',
  number: '05',
  title: 'MY MOCHI',
  subtitle: '모찌와 함께 작은 미션으로 밖에 나가고 · 하루를 기록하고 · 사람과 가볍게 이어지는 기능성 모바일 게임',

  impact:
    '위험한 사람을 찾아내는 대신, 지금 할 수 있는 작은 행동과 가벼운 만남을 게임처럼 건네고 ' +
    '사진·걸음으로 확인되는 행동에만 보상하는 iOS·Android 앱을 기획부터 서버·배포까지 구현',

  pills: [
    'Expo',
    'React Native',
    'React',
    'FastAPI',
    'SQLite',
    'Supabase Auth',
    'CLIP (ONNX)',
    'HealthKit',
    'Health Connect',
    'Railway',
    'EAS Build',
    'pytest'
  ],

  overview: {
    title: 'Overview',

    brief:
      '작은 일상 활동과 하루 기록을, 모찌와 함께 이어 가는 게임형 앱',

    description:
      '관계 맺기와 일상 활동이 어려운 사람에게 <strong>지금 할 수 있는 작은 행동과 가벼운 만남</strong>을 게임처럼 건네고, ' +
      '어떻게 하면 되는지까지 알려 주는 앱입니다. 목표는 검증하기 어려운 "예방"이 아니라 측정할 수 있는 ' +
      '<strong>"활동과 교류를 늘리기"</strong>입니다.<br><br>' +
      '대상은 외로움, 오랜만의 만남이 어색함, 집에 있는 시간이 늘어 활동이 줄어든 <strong>비교적 가벼운 단계</strong>입니다. ' +
      '진단·치료·상담은 하지 않고, 필요하면 도움받을 곳을 안내합니다. ' +
      '심리적 회복 → <strong>(MOCHI)</strong> → 사회적 회복 → 사회적 통합 사이에서 "작게 움직이고 가볍게 만나는" 단계를 맡습니다.<br><br>' +
      '캡스톤 프로젝트로, PM · 기획 · 백엔드(서버 · 연결 · 배포) · 프론트엔드(화면 다듬기) · 데이터 분석을 맡았습니다.'
  },

  metaInfo: [
    {
      label: 'Type',
      value: '캡스톤 프로젝트'
    },
    {
      label: 'Role',
      value: 'PM · 기획 · 백엔드<br>데이터 분석'
    },
    {
      label: 'Platform',
      value: 'iOS · Android (Expo)<br>웹 (React + Vite)'
    },
    {
      label: 'Scale',
      value: 'API 70개 · 미션 91개<br>테스트 418개'
    }
  ],

  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/alicena2ppn2/Capstone'
    },
    {
      text: 'API 문서 (/docs)',
      url: 'https://mymochi-api-production.up.railway.app/docs'
    }
  ],

  background: {
    title: 'Background',
    content:
      '<strong class="sub">근거</strong><br>' +
      '외로움과 활동량에 대한 연구에서 출발했습니다.' +
      T('설계 근거',
        '<th>연구</th><th>내용</th><th>앱에서</th>',
        '<tr><td>Cacioppo 2010</td><td>외로움이 이후의 우울을 예측</td><td>가벼운 연결 미션</td></tr>' +
        '<tr><td>Pearce 2022</td><td>활동이 거의 없던 사람이 조금만 늘려도 우울 위험이 가장 많이 줄어듦</td><td>5분 크기 미션부터</td></tr>' +
        '<tr><td>Bizzozero-Peroni 2024</td><td>하루 1,000보 늘 때마다 우울 위험 9% 낮음</td><td>"지난주보다 1,000보 더"</td></tr>' +
        '<tr><td>White 2019</td><td>자연에서 주 120분, 짧게 여러 번이어도 됨</td><td>주간 자연 산책 미션</td></tr>' +
        '<tr><td>포켓몬고 연구</td><td>걸음을 하루 약 1,500보 늘렸지만 몇 주 만에 효과 감소</td><td>매일 바뀌는 미션 · 수집 · 이웃 연결</td></tr>') +
      '<br><strong class="sub">비슷한 앱과 다른 점</strong><br>' +
      T('',
        '<th>앱</th><th>한계</th>',
        '<tr><td>Finch</td><td>스스로 체크 · 외출 초점 없음</td></tr>' +
        '<tr><td>피크민 블룸</td><td>이미 걷는 사람 중심</td></tr>' +
        '<tr><td>Habitica</td><td>실패하면 벌</td></tr>' +
        '<tr><td>상담 앱</td><td>이미 도움을 찾는 사람 대상</td></tr>') +
      '<br>MOCHI는 <strong>아주 작은 외출부터 · 사진·걸음으로 확인되는 행동에만 보상 · 벌점 없음 · 가벼운 연결 · 도움받을 곳 안내</strong>로 차별화했습니다. ' +
      '위험 점수나 "위험군" 라벨, 일기로 마음 상태를 평가하는 기능은 의도적으로 넣지 않았습니다.'
  },

  keyDetails:
    '코인 · XP · 레벨 · 미션 완료 · 상점 · 출석은 모두 <strong>서버가 판정</strong>하고 앱·웹은 보여 주기만 합니다(조작 방지, 앱·웹 결과 일치). ' +
    '앱(Expo)과 웹(React)은 게임 규칙 · 데이터 · SVG 그림 · 로그인 코드를 <strong>shared</strong> 폴더로 같이 쓰고, ' +
    'Supabase Auth로 로그인한 뒤 Bearer 토큰으로 Railway의 FastAPI 서버와 통신합니다.',

  keyPoints: [
    '사진 미션: EXIF 촬영 일시로 "오늘 찍은 사진"만 인정, GPS·기기 정보 제거 후 저장',
    '서버 내 CLIP ViT-B/32(ONNX)로 사진 인증 — 확실히 다를 때만 실패, 맞으면 모찌의 반응 한 줄 (외부 API 없음, 장당 0.1~0.3초)',
    'HealthKit · Health Connect 걸음 수 연동으로 "지난주보다 1,000보 더" 목표 설정',
    '사용자·날짜 시드 난수로 오늘의 미션 선택, 혼자 → 한 명 → 여럿 단계 사다리',
    '이웃 추천 · 방문 · 방명록 · 친밀도 · 친구 코드, 욕설 필터 · 신고 · 차단',
    'Railway(Docker + Volume) 서버 배포, EAS Build로 Android APK · iPhone 설치 파일'
  ],

  sections: [
    {
      title: '하루 흐름',
      content:
        '앱 열기 → <strong>연속 출석</strong>(1~7일차 선물) → 홈: 모찌와 방, 오늘의 문장, 오늘의 도전 → ' +
        '밖에 나가 <strong>사진 찍기 · 걸음 채우기</strong> → 오늘 찍은 사진이면 완료(AI 확인 + 모찌의 반응) → ' +
        '<strong>동네 탐험</strong>: GPS로 가까운 장소 · 지도 · 장소 쪽지 → 코인 · XP → 레벨업 → 상점에서 친구 · 옷 · 집 꾸미기 → ' +
        '<strong>이웃 방</strong> 방문 · 방명록 · 친구 신청 → 오늘의 주제로 <strong>일기</strong> → 사진첩에 하루가 쌓임.<br><br>' +
        '말투 원칙: 숫자로 판단을 통보하지 않습니다("위험도 82점" ✕ → "오늘 15분 걸어 볼까요?" ○). 부담은 5분 크기부터, 실패해도 벌점 없음.'
    },
    {
      title: '퀘스트 설계 — 심리학 개입을 게임으로',
      content:
        T('',
          '<th>원리</th><th>근거</th><th>앱에서</th>',
          '<tr><td>행동 활성화</td><td>Ekers 2014 (RCT 26편, 효과 크기 0.74)</td><td>작은 활동 → 하기 → "해 보니 어땠어?" 소감</td></tr>' +
          '<tr><td>평소 하던 것 + 조금 더</td><td>교수님 면담 — 새 활동이 많으면 부담</td><td>처음 설문(직업 · 관심사 · 외출 빈도) 기반 미션</td></tr>' +
          '<tr><td>성취감 × 소속감</td><td>생산적이면서 이어지는 활동이 기분을 가장 올림</td><td>가족 식사 차리기, 단골 가게 가기</td></tr>' +
          '<tr><td>사회 기술 팁 카드</td><td>PEERS 등 구체적 방법을 가르치는 방식</td><td>교류 미션마다 "이렇게 해 보세요"</td></tr>' +
          '<tr><td>단계 사다리</td><td>일본 히키코모리 지원 단계</td><td>혼자 → 한 명 → 여럿, 3번 하면 다음 단계</td></tr>' +
          '<tr><td>약한 연결</td><td>Sandstrom·Dunn 2014, Epley·Schroeder 2014</td><td>이웃 방 방문, 방명록, 짧은 인사 미션</td></tr>' +
          '<tr><td>주간 자연 산책</td><td>White 2019</td><td>공원 · 하천 사진, 서로 다른 날 2번</td></tr>') +
        '<br>하루 미션은 데일리 5개 + 오늘의 활동 3개(움직이기 · 집에서 · 이어지기, 하루 3번 바꾸기) + 주간 1개. ' +
        '보상은 밖에 나가는 미션이 가장 크고(20코인) 집 미션 12코인 · 스스로 체크 5코인. ' +
        '상점 가격은 그대로 두고 "사는 데 며칠 걸리나"로 경제 밸런스를 맞췄습니다(소품 1일 · 옷 2~3일 · 친구 2~6일).'
    },
    {
      title: '사진 인증 파이프라인',
      content:
        '<strong>① 촬영 일시 확인</strong> — 파일의 EXIF DateTimeOriginal을 먼저, 없으면 앱이 보낸 시각 → 미션 날짜(서울 기준)에 찍은 사진만 성공<br>' +
        '<strong>② 개인정보 제거</strong> — Pillow로 GPS · 기기 정보를 모두 지우고 방향 보정, HEIC → JPEG, 긴 변 1280px, 추측할 수 없는 무작위 id로 저장<br>' +
        '<strong>③ CLIP 인식</strong> — onnxruntime으로 CLIP ViT-B/32를 서버 안에서 실행, 이름표 42개(하늘 · 노을 · 고양이 · 빵 … + 화면 캡처 · 문서 같은 "아님" 이름표)와 비교. ' +
        '글 쪽 벡터는 미리 계산해 두어 장당 0.1~0.3초, 메모리 약 125MB<br>' +
        '<strong>④ 완료</strong> — 코인 · XP 지급, "미션 완료! +20코인 · 오늘 하늘이 잘 담겼어요!"<br><br>' +
        '제대로 찍은 사람이 실패하지 않도록 <strong>확실히 다를 때만 실패</strong>시키고, 애매하거나 모델 오류가 나면 통과시켰습니다. ' +
        '테스트 결과 진짜 사진 20장 모두 통과, 엉뚱한 미션 사진 72% · 앱 화면 캡처 15장 중 11장을 막았습니다.'
    },
    {
      title: '백엔드 구조',
      content:
        'FastAPI + Uvicorn을 Railway(Docker)에서 실행하고, SQLite(표 28개)와 사진을 Volume <code>/data</code>에 저장합니다.<br><br>' +
        '<strong>요청 흐름</strong>: 앱·웹 → <code>access.guard</code>(토큰 없으면 401, 남의 user_id면 403) → 라우트 → 규칙 모듈(missions · shop · survey …) → db<br><br>' +
        '<strong>로그인</strong>: Supabase Auth는 Google · 카카오 OAuth(PKCE)와 JWT 발급만, 데이터는 서버 SQLite에. 앱은 세션을 SecureStore에 보관합니다.<br><br>' +
        '<strong>코인 장부</strong>: 코인 · XP를 coin_ledger에 한 줄씩 쌓고 합계로 계산해 되돌리기 · 중복 방지를 쉽게 했습니다. ' +
        '레벨 n → n+1 필요 XP = 100 + 35×(n−1).<br><br>' +
        '<strong>운영</strong>: 계정 삭제 시 25개 표 · 사진 · Supabase 계정까지 삭제, <code>.githooks/pre-commit</code>으로 비밀 값 커밋 차단, 시연 데이터 스크립트.'
    },
    {
      title: '안전 장치',
      content:
        '<strong>위기 표현 확인</strong> — 일기 · 미션 글을 위기 표현 사전(103개)과 맞춰 high는 바로 상담 안내(109), medium은 캐릭터 안부, low는 기록만. 진단이 아니라 도움을 건네는 장치이며 글 내용은 저장하지 않습니다.<br><br>' +
        '<strong>커뮤니티 보호</strong> — 욕설 · 비하 · 혐오 표현 필터, 신고하면 신고자에게 바로 숨김 · 여러 명이 신고하면 모두에게 숨김, 차단하면 서로 안 보임(App Store 심사 1.2 대응).<br><br>' +
        '<strong>위치</strong> — 동네 탐험은 "내 위치로 보기"를 눌렀을 때만 권한을 요청하고, 위치는 거리 계산에만 쓰고 저장하지 않습니다. 장소 쪽지는 장소 근처에서만 남길 수 있습니다(서울 21곳).'
    },
    {
      title: '기능 한눈에',
      content:
        T('',
          '<th>영역</th><th>주요 기능</th>',
          '<tr><td>로그인 · 계정</td><td>Google · 카카오 로그인(Supabase OAuth PKCE), 모든 API 토큰 확인, 프로필, 계정 삭제</td></tr>' +
          '<tr><td>미션</td><td>미션 91개(JSON), 사용자·날짜 시드로 오늘의 미션 선택, 처음 설문, 단계 사다리, 하루 3번 바꾸기, 소감, 주간 미션</td></tr>' +
          '<tr><td>사진 · 걸음</td><td>EXIF 촬영 일시 확인, 메타데이터 제거, CLIP 사진 인증 · 반응, HealthKit · Health Connect 걸음 수</td></tr>' +
          '<tr><td>보상 · 상점</td><td>코인 장부 · XP · 레벨, 연속 출석(1~7일차), 상점(친구 12 · 옷 9 · 집 꾸미기 46), SVG 캐릭터 · 옷, 방 꾸미기 · 가구 옮기기</td></tr>' +
          '<tr><td>기록</td><td>하루 한 편 일기(주제 50개), 위기 표현 확인, 도움받을 곳 안내, 사진첩, 오늘의 문장</td></tr>' +
          '<tr><td>이웃 · 친구</td><td>비슷한 레벨 이웃 추천, 방문 · 방명록, 친밀도, 6자리 친구 코드, 필터 · 신고 · 차단</td></tr>' +
          '<tr><td>동네 탐험</td><td>가까운 장소 · 거리(하버사인), 지도(Apple · Google), 장소 근처에서만 남기는 쪽지</td></tr>' +
          '<tr><td>알림</td><td>휴대폰 안에서 예약하는 다시 부르기 알림(2 · 4 · 7일 뒤 저녁 7시)</td></tr>')
    },
    {
      title: '사용한 도구',
      content:
        T('',
          '<th>영역</th><th>도구</th>',
          '<tr><td>앱</td><td>Expo SDK 57 · React Native 0.86, react-native-svg, expo-location, react-native-maps, expo-notifications</td></tr>' +
          '<tr><td>웹</td><td>React 19 · Vite 7 (화면 확인 · 시연용)</td></tr>' +
          '<tr><td>서버</td><td>FastAPI · Uvicorn · Pydantic, SQLite</td></tr>' +
          '<tr><td>이미지 · AI</td><td>Pillow · pillow-heif, onnxruntime + CLIP ViT-B/32</td></tr>' +
          '<tr><td>로그인</td><td>Supabase Auth</td></tr>' +
          '<tr><td>데이터 분석</td><td>pandas · numpy · Jupyter (합성 데이터 · SK 통신인구 · 신한카드)</td></tr>' +
          '<tr><td>테스트</td><td>pytest(백엔드 284개), node --test(공통 134개), ESLint</td></tr>' +
          '<tr><td>배포 · 협업</td><td>Railway(Docker), EAS Build, GitHub · pre-commit 훅</td></tr>')
    },
    {
      title: '규모',
      content:
        '서버 API <strong>70개</strong> · 미션 <strong>91개</strong>(데일리 5 + 바뀌는 86) · 일기 주제 <strong>50개</strong> · ' +
        '상점 친구 12 · 옷 9 · 집 꾸미기 46 · DB 표 28개 · 테스트 백엔드 <strong>284개</strong> · 앱·공통 <strong>134개</strong>'
    }
  ],

  chart: {
    type: 'none',
    title: '',
    desc: ''
  }
};
