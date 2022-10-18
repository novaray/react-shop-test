# inflearn 강의 정리
따라하며 배우는 리액트 테스트
> https://inf.run/giDV

# 프로젝트 세팅
해당 강의 기준으로,  
react-create-app으로 자동으로 생성된 `package.json`에 정의되어 있는 eslint 관련 세팅 부분을 삭제하고,  
`.eslintrc.json`파일을 만들어 그 부분에 정의한다.

그 다음, 다음 플러그인을 설치하고, `.eslintrc.json`파일에 추가(`plugins`)하고, 사용하도록 규칙을 설정(`extends`)한다.
```shell
npm install eslint-plugin-testing-library eslint-plugin-jest-dom --save-dev
```
근데 WebStorm 문제인지는 몰라도 다음의 에러가 계속 뜬다.  
`ESLint: TypeError: this.libOptions.parse is not a function`

그래서 추가로 eslint의 버전을 8.22.0로 깔면 된다는 말이있어 설치해서 사용해봤더니 해결됨.

```shell
npm install eslint@8.22.0 --save-exact
```
> https://stackoverflow.com/questions/73509984/eslint-typeerror-this-liboptions-parse-is-not-a-function
