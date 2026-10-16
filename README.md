# KU.ARCHIVE | 이력서 및 포트폴리오 웹사이트

고려대학교 학부생을 위한 맞춤형 이력서 & 족보/학습 솔루션 아카이브 웹사이트입니다.

---

## 📌 주요 특징
1. **고려대학교 상징색 (Crimson PANTONE 202C: `#862633`) 디자인 시스템**
   - 세련된 글래스모피즘(Glassmorphism)과 앰비언트 글로우 효과 적용
2. **다크 모드 & 라이트 모드 지원**
   - 상단 내비게이션 바의 토글 버튼으로 실시간 전환
   - 사용자의 환경설정(`localStorage`) 자동 보존
3. **학부생 (족보 제작 전문) 맞춤형 섹션 구성**
   - **Hero**: 핵심 적중률, 제작 족보 수, 무결점 원칙 지표
   - **Core Strengths**: 3대 역량 (고밀도 압축·시각화, 기출 경향 역공학, 무결점 검증)
   - **Timeline**: 고려대 학부 재학 및 스터디 총괄 이력
   - **Featured Archives**: 대표 족보 및 요약집 컬렉션 (인터랙티브 모달 미리보기 지원)
   - **Contact**: 원클릭 이메일 복사 (토스트 알림), GitHub / Notion 바로가기
4. **원클릭 PDF 이력서 출력 / 저장**
   - 상단 인쇄 아이콘 클릭 시 A4 포맷에 최적화된 프린트 스타일시트 자동 적용

---

## 🚀 로컬 실행 방법
현재 백그라운드에서 로컬 서버가 포트 `8080`으로 실행 중입니다:
- 브라우저 주소창: [http://localhost:8080](http://localhost:8080)

추후 다시 실행할 때 터미널 명령어:
```bash
python -m http.server 8080 --directory "f:\2026 2학기\데이터과학과인공지능\homepage"
```

또는 [index.html](file:///f:/2026%202%ED%95%99%EA%B8%B0/%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B3%BC%ED%95%99%EA%B3%BC%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5/homepage/index.html) 파일을 크롬/엣지 등의 웹 브라우저로 더블 클릭하여 바로 여실 수도 있습니다.

---

## 🛠 구성 파일
- [`index.html`](file:///f:/2026%202%ED%95%99%EA%B8%B0/%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B3%BC%ED%95%99%EA%B3%BC%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5/homepage/index.html): 메인 시맨틱 구조 및 이력서 콘텐츠
- [`style.css`](file:///f:/2026%202%ED%95%99%EA%B8%B0/%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B3%BC%ED%95%99%EA%B3%BC%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5/homepage/style.css): 크림슨 테마, 다크/라이트 CSS 변수, 글래스모피즘, 인쇄용 스타일
- [`script.js`](file:///f:/2026%202%ED%95%99%EA%B8%B0/%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B3%BC%ED%95%99%EA%B3%BC%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5/homepage/script.js): 테마 전환, 클립보드 복사 토스트, 모달 팝업, 스크롤 스파이 로직
