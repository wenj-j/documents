> [1] 데이터 베이스 설정

  1. JasperSoft Studio 실행화면(처음 킬시 Get Start 문구나 다른 문구화면이 먼저뜸 Get Start를 누를 것)
  ![캡처](https://user-images.githubusercontent.com/121803110/212691952-75aceae3-0877-46b5-aa46-932904139718.PNG)

  2. 데이터어뎁터를 만든다. - create Data adapter
  ![제목 없음](https://user-images.githubusercontent.com/121803110/212692212-a7be0262-6ad0-4d26-ad7f-beb59620e9c9.png)

  3. 데이터 어뎁터에서 JDBC DATABASE항목을 선택 그리고 다음에 db 종류와 jdbc드라이버 종류를 선택(JDBCURL://ip주소[localhost]:포트번호/DB명으로 드라이버 URL적음)
    - username과 password 입력
  ![제목 없음2](https://user-images.githubusercontent.com/121803110/212699603-5a2568d6-202f-47dd-a244-a4ce53257475.png)
  ![image](https://user-images.githubusercontent.com/121803110/212698784-157581d7-ac5e-44f9-8d93-cddcac77a97f.png)

  4. driver class path 지정 (OJDBC 또는 해당 db의 jdbc를 설치한 경로에서 jdbc드라이버를 add 함)
  ![image](https://user-images.githubusercontent.com/121803110/212699261-453a3396-766b-49ff-83fc-700e6031af5a.png)

  5. 최종적으로 Test 클릭후 Success가 뜨면 연결 성공
  ![image](https://user-images.githubusercontent.com/121803110/212699515-a6f0fe18-7a80-4eaf-960d-e9f7329a1a4d.png)

2 > 프로젝트 만들기
  1. file -> new -> jasper report
  ![image](https://user-images.githubusercontent.com/121803110/212699926-b89c62e9-c3d9-44ba-869f-a3c4a1f6217d.png)

  2. blank 카테고리 선택
  ![image](https://user-images.githubusercontent.com/121803110/212700150-57d7f874-35b4-4442-a5a1-a1bcc082b214.png)

  3. 프로젝트 폴더명과 japer파일명 적기
  ![image](https://user-images.githubusercontent.com/121803110/212700311-1b4e8167-3e27-4135-a16c-0deae3c519d7.png)

  4. 만들었던 데이터베이스와 연결하여 테이블을 조회함 그리고 테이블의 필드들을 각각 집어 넣음
  ![image](https://user-images.githubusercontent.com/121803110/212700620-d86583ec-3e34-472b-a29d-4ad5c8cc63af.png)
  ![image](https://user-images.githubusercontent.com/121803110/212700798-811412de-83a1-47ff-aefb-b282e0408d21.png)
  
  5. 그룹화할 필드를 선택(안해도 됨)
  ![image](https://user-images.githubusercontent.com/121803110/212700929-db64c424-fa7b-404e-802c-8098497d04b8.png)
  
  6. 최종화면
  ![image](https://user-images.githubusercontent.com/121803110/212701040-2d7ae3b3-0b91-437d-9301-0f243b143082.png)

  7. 사용 예시 화면 - 왼쪽하단에 있는 필드 한 개를 드래그해서 main화면에 놓으면 라벨과 필드값이 각각 생성된다.
  ![image](https://user-images.githubusercontent.com/121803110/212701176-3b5f04ba-dc4e-40d6-a451-8bb77754db33.png)
