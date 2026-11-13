늘품 9기 학급 기록 - 휴대폰 앱(설치용 페이지) 안내
==================================================

이 폴더는 늘품 9기 웹앱을 휴대폰에 "앱처럼" 설치할 수 있게 해 주는 페이지예요.
학급 기록 내용은 여기에 저장되지 않고, 늘 구글 Apps Script 웹앱에서 불러와요.

[1] 주소 넣기 (한 번만)
  - index.html을 메모장으로 열고 아래 줄을 찾아요.
      const APP_URL = 'https://script.google.com/macros/s/여기에_배포_ID를_넣어_주세요/exec';
  - 따옴표 안을 Apps Script의 '배포 → 배포 관리'에 있는 웹앱 URL(…/exec)로 바꾸고 저장해요.

[2] Apps Script 배포 설정 확인
  - Code.gs를 새 버전으로 바꾸고 '배포 → 배포 관리 → 수정 → 새 버전'으로 다시 배포해요.
  - 액세스 권한(누가 액세스할 수 있음)은 '모든 사용자'로 해 주세요.
    ('Google 계정이 있는 모든 사용자'로 두면 아이폰에서 로그인 화면이 반복될 수 있어요.)

[3] GitHub Pages에 올리기 (무료)
  1. github.com에 가입하고 로그인해요.
  2. 오른쪽 위 + → New repository → 이름: neulpum → Public → Create repository
  3. 'uploading an existing file'을 눌러 이 폴더의 파일 8개를 모두 끌어다 놓고 Commit changes
     (index.html, manifest.webmanifest, sw.js, 아이콘 png 5개)
  4. Settings → Pages → Branch: main, 폴더: / (root) → Save
  5. 1~2분 뒤 https://(내 아이디).github.io/neulpum/ 주소가 생겨요. 이 주소를 학생들에게 알려 주세요.

[4] 학생 휴대폰에 설치하기
  - 안드로이드(크롬): 주소를 열면 아래에 '설치' 버튼이 떠요. 안 보이면 ⋮ 메뉴 → '앱 설치' 또는 '홈 화면에 추가'
  - 아이폰/아이패드(사파리): 아래쪽 공유 버튼(□↑) → '홈 화면에 추가'
  - 카카오톡이나 네이버 앱에서 연 주소는 설치가 안 돼요. 크롬이나 사파리로 다시 열어 주세요.

[5] 나중에 앱을 고쳤을 때
  - Code.gs, Index.html만 바꾸고 Apps Script에서 새 버전으로 배포하면 돼요.
    휴대폰 앱에도 바로 반영돼요. 이 폴더는 다시 올릴 필요가 없어요.
