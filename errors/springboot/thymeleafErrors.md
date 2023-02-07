template might not exist or might not be accessible by any of the configured Template Resolvers
- 경로 관련 오류다.
  - 타임리프 관련함수를 썼을 때 페이지 이름 철자가 틀렸거나 controller에서 경로를 부르는데 오류가 생길수 있다.
> 해결방법
  - 해당 페이지를 부르는 controller에서 경로를 수정한다.
  - 해당 페이지를 부르는 타임리프 관련함수의 페이지 이름 철자를 확인한다.

> 참고 URL: https://dev-jwblog.tistory.com/40
