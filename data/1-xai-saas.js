const projectData = {
  id: '1-xai-saas',
  number: '01',
  title: 'XAI 기반<br>SaaS 고객<br>이탈 예측',
  subtitle: 'Explainable AI · Churn Prediction · Retention Strategy Dashboard',
  impact: 'Retention 전략 수립 가능한 churn 예측 + XAI 원인 분석 시스템 구축',
  pills: [
    'Explainable AI',
    'Machine Learning',
    'Dashboard'
  ],
  overview: {
    title: 'Overview',
    brief: 'SaaS 기업을 위한 예측 가능하고 설명 가능한 고객 이탈 예측 시스템',
    description: 'SaaS 기업은 고객 이탈이 발생한 후에야 원인을 파악하는 경우가 많아, 선제적인 retention 전략 수립이 어렵습니다. 단순히 "이탈할 것 같다"는 예측만으로는 실무에서 활용하기 어렵고, 담당자가 납득할 수 있는 근거와 구체적인 개입 전략이 함께 필요하다고 판단했습니다.<br><br>이를 해결하기 위해 XAI 기반 이탈 예측 모델을 설계하고, 원인 분석부터 retention 액션까지 연결되는 대시보드를 구축했습니다. accounts, subscriptions, feature_usage 등 다중 테이블을 account 단위로 통합하고, ML(Logistic Regression, Random Forest)과 DL(MLP) 모델을 비교 실험했습니다.'
  },
  metaInfo: [
    {
      label: 'Role',
      value: 'Readme 초안 작성<br>Streamlit 구현<br>UI 개선<br>모델 코드 분석'
    },
    {
      label: 'Stack',
      tags: ['Python', 'PyTorch', 'scikit-learn', 'SHAP', 'Streamlit', 'Pandas']
    },
    {
      label: 'Results',
      value: 'Best F1: 0.433 (DL_MLP)<br>Optimal Threshold: 0.45<br>Streamlit 배포 완료'
    }
  ],
  links: [
    {
      text: 'Project Report',
      url: 'https://yoonstudy.tistory.com/42'
    },
    {
      text: 'GitHub Repository',
      url: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-2nd-3Team'
    },
    {
      text: 'Live Demo',
      url: 'https://skn28-2nd-3teamgit.streamlit.app/'
    }
  ],
  keyDetails: 'K단순 정확도가 아닌 운영 threshold tuning(0.45)으로 실무 적용성을 높이고, SHAP 기반 XAI로 이탈 원인을 설명 가능한 형태로 시각화했습니다. 최종적으로 고객 유지 전략까지 연결되는 Streamlit 대시보드를 배포했습니다.',
  keyPoints: [
    '다중 테이블 통합 및 데이터 파이프라인 구축',
    'ML/DL 모델 비교 실험 및 성능 최적화',
    'SHAP을 이용한 모델 해석 가능성 확보',
    'Streamlit 기반 인터랙티브 대시보드 개발'
  ],
  chart: {
    type: 'threshold',
    title: 'Threshold 변화에 따른 F1 Score',
    desc: '▸ threshold 조정 전(0.5) 대비 tuning 후 logistic_regression이 F1 0.433으로 최고 성능 달성'
  }
};
