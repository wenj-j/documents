> JasperSoftStudio Expression 사용하는 방법
  ![image](https://github.com/wenj-j/documents/assets/121803110/99a7c39a-da7e-4753-b561-7a5591f2dd94)
  ![image](https://github.com/wenj-j/documents/assets/121803110/778ce335-673e-4824-a90e-1ea6e9000fee)
  - 오른쪽 메뉴는 해당필드의 타입에 따른 메소드들이 있다, 보여지는 것은 string과 관련된 메소드
  - 왼쪽 메뉴는 jasper 현재 프로젝트의 요소를 볼 수 있다.
> jasper report 구성요소  ![image](https://user-images.githubusercontent.com/121803110/222336897-c562f950-a320-486d-80cb-577db8bd0864.png)
  - report구성요소에는 Styles, Parameters, Fields, Sort Fields, Variables, Scriptlets, Title, Column Header, Detail(1~n)
  , Column Footer, Page Footer, Last Page Footer, Summary, Background, main report화면, palette, composite elements, properties
  탭(Design, Source,Preview)으로 구성되어있다.
  
  - Report(Outline) 구성요소
  -   ![image](https://user-images.githubusercontent.com/121803110/222341226-132ddfd7-c8f0-4237-9441-26b3e8eb23c9.png)
   1) Styles: report의 요소에 Text, Patter Expression, 글자크기등의 스타일의 객체를 만드는 곳
   2) Parameters: [report의 preview에 넣을 값] 또는 [사용자가 java에서 넘겨주는 값], [subreport에서 mainreport에서 넘겨받는 값]을 받는 곳을 정의하는 곳
   3) Fields: report의 sql쿼리결과의 필드값들을 정의하는 곳
   4) Sort Fields: report field, Variables요소를 정렬해주는 곳(기본값은 오름차순 정렬(ASC))
     -  ![image](https://user-images.githubusercontent.com/121803110/222341831-533fb546-6e86-4733-816b-75cd60ce4328.png)
     - 참고한 URL: https://stackoverflow.com/questions/28349368/how-to-sort-fields-in-jasper-report

   5) Variables: 컬럼별로 합계, 개수 또는 field텍스트 값에 넣을 변수를 정의하는 곳
   6) Title: 제목 레이아웃(보고서의 처음에만 나타는 영역)
   7) Page Header: 머리글
   8) Column Header: 데이터 테이블의 헤더
   9) Detail(1~n): 보고서 본문(데이터 필드값의 영역)
   10) Column Footer: 데이터 테이블의 footer
   11) Page Footer: 바닥글
   12) Summary: 보고서 데이터들의 총 합계 또는 개수를 표시할때 필요한 레이아웃

> JasperSoftStudio subreport path설정 방법(java를 통한 방법)  
  - jasper 파일을 여는 java파일에 가서, main report와 subreport경로를 같게 한 뒤, main경로를 가지고 subreport이름을 파라미터로 받아서 jasper 파라미터로
  넘기는 값에 집어 넣는다 map타입으로 거의 되어있으므로, map에다 jasper subreport 파라미터 이름과 경로값을 집어넣는다.
  - jasper출력물에서는 java에서 넘긴 파라미터값으로 subreport expression에 값을 넣는다.(jasper에서 받는 파라미터값으로)
  
> JasperSoftStudio group화 관련 URL
  - https://www.youtube.com/watch?v=oBHFHoKOTj4

> JasperSoftStudio subreport edit parameter 설정
  - subreport클릭 후 subreport 탭에서 edit parameter를 통해 main report에서 subreport로 필드값이든 파라미터값이든 variable이든 넘길 수 있다.

> JasperSoftStudio pattern 설정
  - 각 변수 타입에 맞게 pattern을 지정할 수 있다. ex) int,float등은 Number pattern에서 Use 1000 separator항목을 체크하면 1000단위및 소수점단위의 패턴을 형성
