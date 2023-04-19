> JasperSoftStudio Expression 사용하는 방법(방법 추가중)
- jasper report 구성요소  ![image](https://user-images.githubusercontent.com/121803110/222336897-c562f950-a320-486d-80cb-577db8bd0864.png)
  - report구성요소에는 Styles, Parameters, Fields, Sort Fields, Variables, Scriptlets, Title, Column Header, Detail(1~n)
  , Column Footer, Page Footer, Last Page Footer, Summary, Background, main report화면, palette, composite elements, properties
  탭(Design, Source,Preview)으로 구성되어있다.
  
  - Report(Outline) 구성요소
  -   ![image](https://user-images.githubusercontent.com/121803110/222341226-132ddfd7-c8f0-4237-9441-26b3e8eb23c9.png)
   1) Styles: report의 요소에 Text, Patter Expression, 글자크기등의 스타일의 객체를 만드는 곳
   2) Parameters: report의 preview에 넣을 값 또는 사용자가 java에서 넘겨주는 값을 정의하는 곳
   3) Fields: report의 sql쿼리결과의 필드값들을 정의하는 곳
   4) Sort Fields: report field, Variables요소를 정렬해주는 곳(기본값은 오름차순 정렬(ASC))
     -  ![image](https://user-images.githubusercontent.com/121803110/222341831-533fb546-6e86-4733-816b-75cd60ce4328.png)
     - 참고한 URL: https://stackoverflow.com/questions/28349368/how-to-sort-fields-in-jasper-report

   5) Variables: 컬럼별로 합계, 개수 또는 field텍스트 값에 넣을 변수를 정의하는 곳
   6) Scriptlets: (추가중)
   7) Title: 제목 레이아웃(보고서의 처음에만 나타는 영역)
   8) Page Header: 머리글
   9) Column Header: 데이터 테이블의 헤더
   10) Detail(1~n): 보고서 본문(데이터 필드값의 영역)
   11) Column Footer: 데이터 테이블의 footer
   12) Page Footer: 바닥글
   13) Last Page Footer: (추가중)
   14) Summary: 보고서 데이터들의 합계 또는 개수를 표시할때 필요한 레이아웃
   15) No Data: (추가중)
   16) Background: (추가중)

   
   
> JasperSoftStudio subreport path설정 방법(java를 통한 방법)  
  - jasper 파일을 여는 java파일에 가서, main report와 subreport경로를 같게 한 뒤, main경로를 가지고 subreport이름을 파라미터로 받아서 jasper 파라미터로
  넘기는 값에 집어 넣는다 map타입으로 거의 되어있으므로, map에다 jasper subreport 파라미터 이름과 경로값을 집어넣는다.
  - jasper출력물에서는 java에서 넘긴 파라미터값으로 subreport expression에 값을 넣는다.(jasper에서 받는 파라미터값으로)
