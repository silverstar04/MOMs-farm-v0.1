# Mom's Farm 현재 기획/시스템 정리

이 문서는 Mom's Farm 프로젝트를 다른 GPT와 이어서 이야기할 수 있도록 현재 코드 기준으로 정리한 문서입니다.

## 프로젝트 개요

Mom's Farm은 모바일 정적 HTML/CSS/JS 농장 게임 프로토타입입니다.

- 빌드 도구 없음
- npm 사용 없음
- `index.html`, `style.css`, `script.js`, `firebase-ranking.js`, `firebase-save.js` 중심 구조
- 이미지 자산은 `assets/...` 상대경로 사용
- Firebase 랭킹은 CDN module import 방식 사용
- 현재 구현: 밭, 작물, 가방 판매, 밭 업그레이드, 날씨/동네뉴스/시세, 가공 건물, 베이커리/빵, 동물 생산, Firebase 랭킹/계정 저장

## 작물 가격/성장

| 작물 | 잠금해제 | 성장 | 기본 수확 | 씨앗값 | 기준가 | 하한~상한 | 선호 날씨 | 과잉판매 기준 |
|---|---:|---:|---:|---:|---:|---:|---|---:|
| 밀 | Lv.1 | 10초 | 4 | 0G | 2G | 1~4G | 맑음 | 32개 |
| 옥수수 | Lv.2 | 16초 | 3 | 1G | 4G | 2~7G | 맑음 | 26개 |
| 당근 | Lv.3 | 20초 | 3 | 2G | 5G | 3~8G | 비 | 24개 |
| 토마토 | Lv.9 | 30초 | 2 | 4G | 8G | 6~13G | 맑음 | 16개 |
| 가지 | Lv.11 | 42초 | 1 | 6G | 18G | 12~28G | 비 | 9개 |
| 피망 | Lv.12 | 54초 | 1 | 9G | 26G | 18~40G | 맑음 | 7개 |

## 가공/동물 아이템 가격

| 아이템 | 생산 방식 | 기준가 | 하한~상한 | 과잉판매 기준 |
|---|---|---:|---:|---:|
| 밀가루 | 풍차: 밀 2개 -> 밀가루 1개, 20초 | 10G | 8~13G | 18개 |
| 소 사료 | 사료공장: 밀 2개 -> 소 사료 1개, 24초 | 8G | 6~10G | 22개 |
| 닭 사료 | 사료공장: 옥수수 2개 -> 닭 사료 1개, 24초 | 9G | 7~11G | 24개 |
| 빵 | 베이커리: 밀가루 2개 -> 빵 1개, 45초 | 42G | 32~56G | 8개 |
| 계란 | 닭 + 닭 사료 1개, 28초 | 22G | 16~30G | 12개 |
| 우유 | 소 + 소 사료 1개, 40초 | 34G | 26~46G | 8개 |

## 잠금해제/레벨 구조

- 시작: 밭 2칸, 밀만 가능
- Lv.2: 옥수수 씨앗 잠금해제
- Lv.3: 당근 씨앗 잠금해제, 밭 3칸 구매 가능
- Lv.4: 밭 업그레이드 잠금해제
- Lv.5: TV 날씨/동네뉴스 잠금해제
- Lv.6: 작물/아이템 시세 잠금해제
- Lv.7: 밭 4칸 구매 가능
- Lv.9: 토마토 씨앗, 밭 5칸 구매 가능
- Lv.10: 전체 심기 잠금해제
- Lv.11: 가지 씨앗, 밭 6칸 구매 가능
- Lv.12: 피망 씨앗 잠금해제

## 동물/가공 칸 잠금해제

가공 칸:

- 1칸: Lv.12
- 2칸: Lv.14
- 3칸: Lv.16
- 4칸: Lv.18
- 5칸: Lv.20
- 6칸: Lv.22

동물 칸:

- 1칸: Lv.16
- 2칸: Lv.18
- 3칸: Lv.20
- 4칸: Lv.22
- 5칸: Lv.24
- 6칸: Lv.26

## 밭/업그레이드

기본 밭은 2칸입니다. 레벨 조건을 만족하면 골드로 직접 밭을 구매합니다.

밭 확장 비용:

| 밭 수 | 비용 |
|---:|---:|
| 3칸 | 45G |
| 4칸 | 95G |
| 5칸 | 160G |
| 6칸 | 240G |

밭 업그레이드는 3종입니다.

- 성장속도 증가
- 수확량 증가
- 씨앗 구매 비용 감소

업그레이드 비용:

| 업그레이드 | Lv.1 -> Lv.2 | Lv.2 -> Lv.3 |
|---|---:|---:|
| 성장속도 | 25G | 70G |
| 수확량 | 20G | 60G |
| 씨앗할인 | 25G | 70G |

효과:

- 성장속도 Lv.1: 기본
- 성장속도 Lv.2: 20% 단축
- 성장속도 Lv.3: 40% 단축
- 씨앗할인 Lv.1: 0%
- 씨앗할인 Lv.2: 20%
- 씨앗할인 Lv.3: 40%
- 수확량은 x1, x2, x3 형태
- 밭 이미지는 성장속도/수확량/씨앗할인 평균 레벨에 따라 `plot_lv1.png`~`plot_lv5.png`로 변경

## 날씨/동네뉴스/시세

하루는 현실 시간 기준 4시간 단위로 6구간입니다.

날씨:

- 맑음
- 비
- 흐림

날씨 효과:

- 선호 날씨: 작물 성장 시간 20% 감소
- 싫어하는 날씨: 작물 성장 시간 25% 증가
- 흐림: 변화 없음

시세:

- 모든 판매 가능 아이템에 시세 적용
- 오늘 가격이 `(하한가 + 상한가) / 2`보다 높은 작물은 동네뉴스에서 "장터에서 평소보다 잘 나간다"고 표시
- 전 구간에 많이 판 아이템은 다음 구간 가격 하락
- 1단계 과잉판매: 18% 가격 하락
- 2단계 과잉판매: 35% 가격 하락

## 경험치

레벨업 요구 경험치:

| 현재 레벨 | 다음 레벨 필요 경험치 |
|---:|---:|
| Lv.1 | 8 |
| Lv.2 | 12 |
| Lv.3 | 18 |
| Lv.4 | 26 |
| Lv.5 | 36 |
| Lv.6 이후 | `40 + (현재레벨 - 5) * 12` |

경험치 획득:

- 작물 수확: 성장시간 / 3 정도
- 가공품 수령: 가공시간 / 6 정도
- 동물 생산 완료: 생산시간 / 10 정도

경험치를 주지 않는 행동:

- 작물 심기
- 전체 심기
- 밭 확장
- 밭 업그레이드
- 가공 건물 설치
- 가공 시작
- 건물 철거
- 판매

## 현재 UI/UX 상태

- 모바일 중심 UI
- 하단 탭: 농장 / 가방 / 업그레이드
- 농장 내부 메뉴: 밭 / 동물 / 가공
- TV 아이콘으로 동네뉴스 열고 닫기
- 작물 선택창은 스크롤 가능
- 가방에서 아이템 선택 후 `- / +`로 판매 수량 조절
- 전체 판매는 확인 팝업 표시
- 랭킹 팝업은 자동 갱신
- 1초마다 전체 화면을 재렌더하지 않고, 남은 시간/진행률만 갱신하도록 개선
- iPhone Safari 깜빡임 완화 작업 적용

## Firebase 랭킹

- `firebase-ranking.js` 사용
- Firebase CDN module import 방식
- Firestore `rankings` 컬렉션 사용
- 같은 기기/플레이어 기록은 새 점수로 덮어쓰기
- 랭킹 팝업이 열려 있는 동안 30초마다 자동 갱신
- Firebase 에러가 나도 게임은 멈추지 않도록 처리

## 이미지/자산 상태

현재 이미지들은 GitHub에 올리기 쉽도록 대부분 축소되어 있습니다.

- 작물/동물/상품 아이콘: 주로 512x512
- 건물/밭/공터 이미지: 주로 640x640
- 배경 이미지: 폭 720px 기준
- 빵과 베이커리 이미지는 가공 시스템에 연결된 상태

베이커리 자산:

- `assets/products/bread.png`
- `assets/buildings/bakery.png`

## 추가하면 좋은 기능

1. 상점
   - 씨앗, 사료, 특수 아이템 구매
   - 초보자에게 "어디서 뭘 사야 하는지" 명확해짐

2. 동물 업그레이드
   - 생산 시간 감소
   - 사료 효율 증가
   - 생산량 증가

3. 주문/퀘스트
   - 예: "오늘 계란 3개 납품", "밀가루 2개 만들기"
   - 반복 플레이 동기 강화

4. 초보자 튜토리얼
   - "밭을 눌러 밀을 심어보세요"
   - "수확한 작물은 가방에서 팔 수 있어요"
   - 40~60대 비게이머 타겟에 중요

5. 일일 보너스/출석
   - 짧게 들어와도 보상 받는 구조

6. 저장/백업
   - 현재는 localStorage 저장
   - 나중에 Firebase 저장 또는 수동 백업 기능 고려 가능

7. 밸런스 조정
   - Lv.9~12 사이 작물 잠금해제가 몰려 있음
   - Lv.6~8 사이에 작은 목표를 더 넣으면 좋음

## 현재 주의할 점

- 프로젝트는 정적 파일 기준이라 모든 경로는 상대경로를 유지해야 함
- GitHub Pages/Netlify 모두 루트에 `index.html`이 있는 구조로 배포 가능
- 이미지 추가 시 원본 그대로 넣지 말고, GitHub 업로드가 편하도록 크기를 줄여 넣는 편이 좋음
- 코드 구조는 아직 단일 `script.js` 중심이라 기능이 계속 늘면 데이터/렌더/시스템을 파일별로 나눌 필요가 있음

## Firebase Cloud Save Update

- Firebase app/Auth/Firestore initialization is shared through `firebase-init.js`.
- Ranking still uses the `rankings` collection through `firebase-ranking.js`.
- Account cloud save still uses `users/{uid}/save/main` through `firebase-save.js`.
- Anonymous Auth remains enabled for automatic device save.
- Google login is now supported with Firebase Auth uid-based saves.
- The app does not store Google email/name/profile data in save documents.
- If an anonymous account links to Google successfully, the same account flow continues.
- If linking cannot happen and Google login changes uid, the app asks before moving the current local save into the Google cloud save.
- LocalStorage remains the primary safety net; Firebase failures should never stop gameplay.
