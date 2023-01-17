23.01.03
  - 오피스 설치
  - 자바 JDK 1.8 설치 > 환경 변수 설정
  - 오라클 10버전 설치 > Oracle home 설정

23.01.04 ~ 01.06
  - DB툴 토드 설치(DB연결(Oracle home 설정된 곳 연결, DB서버 IP주소 포트 연결))
  - 스프링 부트 설치 > 인코딩 설정
                    > 환경에 맞추어 EUC-KR 또는 UTF-8로 설정
  - 깃 데스크톱 설치 > 공유한 깃 허브 주소 들어가기
                    > 해당 주소에 알려준 프로젝트 폴더 확인
                    > 해당 프로젝트 code 클릭후 주소 HTTP로 복사
                    > 깃 허브 데스크톱에서 클론 기능으로 복사된 주소 연결 후 기존 스프링 workSpace 외 경로로 지정
                    > 이후 스프링 부트에서 file import후 gradle로 클론 지정된 프로젝트 import
                    > configure > convert to gradle
                    > gradle > refresh gradle
                    > boot dashboard > 프로젝트명
                    > 우측 클릭 메뉴 > open config > profile: local > debug
23.01.09 ~ 01.10
  - SVN 설정 > help > eclipse market place > subclipse 설치
            > SVN Repositories open
            > 이후 Repostiories 에서 가져올 SVN 프로젝트 우측 클릭해서 check out함
            > SVN 연결 끊기 > 해당 프로젝ㄴ트 우클릭 후 > Team > Disconnect
  - jasper soft studio(출력물 DB툴) 설치
  - Report Designer(출력물 DB툴) 설치

23.01.11 ~ 01.12
  - jasper soft studio 툴을 이용하여 DB연동시켜 출력물 결과내기
  - Report Designer를 이용하여 이전 프로젝트 DB쿼리 조회함
  - 이전 프로젝트 DB와 As-Is 프로젝트(wils프로젝트)의 DB를 비교하여 To-Be 프로젝트 DB에 삽입
  - DB 입력 할 때 jrxml파일에 source탭에서 DB를 입력함

23.01.13
  - 화주별 Location별 재고현황 3개의 프린트 기능 db로 출력물 만들기
  - RD에는 64가 있지만 logis2gether에는 없음 물어볼 것 -> 61, 64 둘다 화물관리 대장
  - bnp에는 있지만 logistogether에 없을 경우 비슷한 양식이나 따로 추가할 것

23.01.16
  - 화주별 Location별 재고현황 3개의 프린트 기능 db로 출력물 만들기
  - bnp에는 있지만 logis2gether에 없을 경우 비슷한 양식이나 따로 추가할 것
  - 물어볼것
    - A.VESSEL_NM 이렇게 붙어있는 데이터 필드는 어떻게 가져오는지
    - 바코드가 있는 경우 바코드를 추가하고 만드는 지 ->barbecue code128형식
    - rd에는 입고번호가 없는데 비운 상태로 드는지
23.01.17
  - 화주별 Location별 재고현황 3개의 프린트 기능 db로 출력물 만들기 - 현재 320(내국화물관리대장 페이지 빼고 거의 완료)
  - bnp에는 있지만 logis2gether에 없을 경우 비슷한 양식이나 따로 추가할 것
