const projectData = {
  id: '3-wifi-multiap',
  number: '04',
  title: 'Wi-Fi Multi-AP 구축',
  subtitle: 'Ultra-High Reliable Multi-AP Cooperation Utilizing Securely Compressed Channel Status Information',
  impact: 'BC-SCMM 기법을 통한 Wi-Fi 다중 접근점 환경에서의 채널 보안 연구',
  pills: [
    'Wireless Network',
    'Network Security',
    'Research Paper',
    'Patent'
  ],
  overview: {
    title: 'Overview',
    brief: 'Wi-Fi Multi-AP 환경에서 증가하는 Control Information Overhead와 CSI 보안 문제를 해결하기 위한 해시 기반 채널 관리 기법 연구',
    description:
  '차세대 Wi-Fi 8 Ultra-High Reliable Network에서는 다수 AP가 협력하는 Multi-AP Cooperation 기술이 중요해지고 있습니다. 하지만 AP 간 Control Information 증가로 인한 Network Overhead와 Channel Status Information(CSI) 조작 보안 문제가 발생하고 있습니다.<br><br>' +

  '본 연구에서는 Hash 기반 Bitmap Compression 방식의 BC-SCMM(Bitmap Compression-based Secure Channel Management Mechanism)을 제안하여 CSI 정보를 안전하게 압축·관리하고, 효율적인 채널 선택이 가능한 보안 채널 관리 기법을 개발했습니다.<br><br>' +

  '실험 결과 기존 NCMM 대비 Latency 74.12% 감소, Throughput 232.49% 증가, Energy Consumption 105.19% 감소를 달성했으며, 연구 결과는 국제 학술지 게재 및 특허 출원으로 이어졌습니다.'
  },
  metaInfo: [
    {
      label: 'Duration',
      value: '8개월<br>(2024.03 ~ 2024.10)'
    },
    {
      label: 'Type',
      value: '학술 연구'
    },
    {
      label: 'Results',
      value: 'Latency ↓74.12%<br>Throughput ↑232.49%<br>Energy ↓105.19%<br>특허 출원'
    },
    {
      label: 'Status',
      value: '논문 게재<br>저작권 등록<br>특허 진행중'
    }
  ],
  links: [
    {
      text: 'Research Paper',
      url: 'https://yoonstudy.tistory.com/43'
    },
    {
      text: 'Patent Application',
      url: '#'
    }
  ],
  keyDetails: 'BC-SCMM(Binary Coded Secure Channel Measurement) 기법을 개발하여 Wi-Fi 다중 접근점 환경에서의 채널 보안을 획기적으로 개선했습니다. 시뮬레이션 및 실제 네트워크 환경에서의 광범위한 실험을 통해 성능을 검증했습니다.',
  keyPoints: [
    'BC-SCMM 해시 기반 채널 보안 기법 개발',
    '레이턴시 74% 감소 및 처리량 232% 증가 달성',
    '에너지 효율성 105% 개선',
    '특허 출원 성과 확보'
  ],
  chart: {
    type: 'gallery',
    title: 'Research Overview',
    desc: '▸ Wi-Fi 다중 접근점 환경에서의 채널 보안 연구 시각화'
  },
  hasImages: true
};
