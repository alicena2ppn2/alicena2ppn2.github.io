const projectData = {
  id: '2-carpark-search',
  number: '02',
  title: 'Car Park<br>Search',
  subtitle: '주차장 검색 및 지역별 주차 수급 분석 대시보드',
  impact: '정량·정성 데이터 결합으로 지역별 주차 수급 불균형을 시각화한 분석 대시보드 구축',
  pills: [
    'Data Analysis',
    'Dashboard',
    'Crawling'
  ],
  overview: {
    title: 'Overview',
    brief: '공공 데이터와 크롤링 데이터를 결합한 지역별 주차 수급 분석 서비스',
    description: '기존 지도 서비스는 현재 빈자리만 보여줄 뿐, 해당 지역의 근본적인 주차 난이도를 파악할 수 없다는 문제에서 출발해, 데이터 기반 혼잡도 분석으로 사용자의 주차 의사결정을 돕는 대시보드를 개발했습니다.<br><br>단순 주차 위치 조회를 넘어 지역별 주차 수급 불균형을 분석하는 서비스를 기획·개발했습니다. 공공데이터 기반 차량 등록 대수 대비 주차 면수를 비교하고, 네이버·구글 리뷰 데이터 크롤링으로 혼잡도 지수를 도출했습니다. UI/UX 설계를 담당하여 사용자 친화적인 Streamlit 대시보드를 구현했습니다.'
  },
  metaInfo: [
    {
      label: 'Role',
      value: 'UI/UX 설계<br>주차 데이터 분석<br>데이터 가공'
    },
    {
      label: 'Stack',
      tags: ['Python', 'Streamlit', 'MySQL', 'Pandas', 'Folium', 'Selenium', 'BeautifulSoup']
    },
    {
      label: 'Results',
      value: '혼잡도 분석 완료<br>사용자 친화적 UI<br>지도 시각화'
    }
  ],
  links: [
    {
      text: 'GitHub Repository',
      url: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-1st-2team'
    }
  ],
  keyDetails: '공공데이터 수집부터 DB 설계, 혼잡도 분석, Streamlit 대시보드 구현까지 전 과정을 진행했습니다. Folium을 이용한 지도 시각화와 Pandas를 통한 데이터 분석으로 사용자가 직관적으로 주차 수급 불균형을 파악할 수 있도록 설계했습니다.',
  keyPoints: [
    '공공데이터 기반 차량 등록 대수 분석',
    '네이버·구글 리뷰 크롤링으로 혼잡도 지수 도출',
    'MySQL DB 설계 및 데이터 관계 구성',
    'Folium 기반 지도 시각화 및 사용자 경험 최적화'
  ],
  chart: {
    type: 'erd',
    title: 'Database ERD',
    desc: '▸ 주차장, 주소, 운영시간, 결제방식, 리뷰, 차량 등록 정보를 통합한 데이터베이스 설계',
    svg: `<svg viewBox="0 30 1050 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Noto Sans KR',sans-serif;">
          <line x1="300" y1="205" x2="440" y2="140" stroke="rgba(124,109,250,0.6)" stroke-width="2" stroke-dasharray="5,4"/>
          <line x1="175" y1="300" x2="175" y2="390" stroke="rgba(124,109,250,0.6)" stroke-width="2" stroke-dasharray="5,4"/>
          <line x1="175" y1="300" x2="175" y2="520" stroke="rgba(124,109,250,0.6)" stroke-width="2" stroke-dasharray="5,4"/>
          <line x1="300" y1="250" x2="440" y2="310" stroke="rgba(124,109,250,0.6)" stroke-width="2" stroke-dasharray="5,4"/>
          <line x1="660" y1="125" x2="755" y2="125" stroke="rgba(124,109,250,0.6)" stroke-width="2" stroke-dasharray="5,4"/>

          <rect x="440" y="70" width="220" height="111" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="440" y="70" width="220" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="550" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">address</text>
          <text x="452" y="123" font-size="16" fill="#5b4ef0">PK</text><text x="474" y="123" font-size="16" fill="#3a3a5c">address_code</text>
          <text x="452" y="143" font-size="16" fill="#6b6b8a">· sd_name, ssg_name</text>
          <text x="452" y="163" font-size="16" fill="#6b6b8a">· gemd_name</text>

          <rect x="30" y="150" width="270" height="150" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="30" y="150" width="270" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="165" y="172" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">parking_lot</text>
          <text x="44" y="202" font-size="16" fill="#5b4ef0">PK</text><text x="68" y="202" font-size="16" fill="#3a3a5c">pl_id</text>
          <text x="44" y="222" font-size="16" fill="#5b4ef0">FK</text><text x="68" y="222" font-size="16" fill="#3a3a5c">address_code</text>
          <text x="44" y="242" font-size="16" fill="#6b6b8a">· pl_name, capacity</text>
          <text x="44" y="262" font-size="16" fill="#6b6b8a">· is_free, base_fee</text>
          <text x="44" y="282" font-size="16" fill="#6b6b8a">· op_days, pl_type</text>

          <rect x="30" y="390" width="270" height="111" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="30" y="390" width="270" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="165" y="412" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">operation_time</text>
          <text x="44" y="443" font-size="16" fill="#5b4ef0">PK</text><text x="68" y="443" font-size="16" fill="#3a3a5c">op_type</text>
          <text x="44" y="463" font-size="16" fill="#5b4ef0">FK</text><text x="68" y="463" font-size="16" fill="#3a3a5c">pl_id</text>
          <text x="44" y="483" font-size="16" fill="#6b6b8a">· start_time, end_time</text>

          <rect x="30" y="520" width="270" height="91" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="30" y="520" width="270" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="165" y="542" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">payment_type</text>
          <text x="44" y="573" font-size="16" fill="#5b4ef0">PK</text><text x="68" y="573" font-size="16" fill="#3a3a5c">pay_name</text>
          <text x="44" y="593" font-size="16" fill="#5b4ef0">FK</text><text x="68" y="593" font-size="16" fill="#3a3a5c">pl_id</text>

          <rect x="440" y="310" width="250" height="131" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="440" y="310" width="250" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="565" y="332" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">n_pkreviews</text>
          <text x="454" y="363" font-size="16" fill="#5b4ef0">PK</text><text x="478" y="363" font-size="16" fill="#3a3a5c">category_code</text>
          <text x="454" y="383" font-size="16" fill="#5b4ef0">FK</text><text x="478" y="383" font-size="16" fill="#3a3a5c">pl_id</text>
          <text x="454" y="403" font-size="16" fill="#6b6b8a">· pk_name, review_txt</text>
          <text x="454" y="423" font-size="16" fill="#6b6b8a">· review_date, crawled_at</text>

          <rect x="755" y="70" width="260" height="131" rx="6" fill="white" stroke="rgba(124,109,250,0.5)" stroke-width="2"/>
          <rect x="755" y="70" width="260" height="32" rx="6" fill="rgba(124,109,250,0.22)"/>
          <text x="885" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1fa8">car_registration</text>
          <text x="768" y="123" font-size="16" fill="#5b4ef0">FK</text><text x="792" y="123" font-size="16" fill="#3a3a5c">address_code</text>
          <text x="768" y="143" font-size="16" fill="#6b6b8a">· sd_name, ssg_name</text>
          <text x="768" y="163" font-size="16" fill="#6b6b8a">· total_gov, total_prv</text>
          <text x="768" y="183" font-size="16" fill="#6b6b8a">· total_com</text>
        </svg>`
  }
};
