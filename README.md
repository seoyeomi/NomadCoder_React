# NormadCoder_React

* prop-types -> type checking 

ReactJS: 어플리케이션이 interactive하게 만들어주는 라이브러리.  
ReactDOM: 모든 react element들을 HTML body에 둘 수 있도록 해줌.  
ReactDOM.render(): 
render의 의미 [React element를 가지고 HTML로 만들어서 배치한다는 뜻 -> show it to the user]

---

### 2.2 강의내용정리  
  

```
<!-- This html is for practice ReactJS again -->

<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src ="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
        const root= document.getElementById("root");
        const span= React.createElement(
            "span",
            {id:"spanspan",style:{color:"red"}},
            "Hi I'm a span"
        );
        ReactDOM.render(span,root); 
</script>
    </html>
``` 
위 코드는, 단지 빨간 span을 페이지에 두는 데 코드가 많다고 느낄 수 있다.  
즉 : 
root를 생성하고, 두 가지를 import하고, root를 가져오고, element를 생성하고, element를 render해야한다.

`React.createElement("span",{span의 property}, "span의 내용")` 과 같이 작성한다. ->이때 property는 class name,id,style 가능  

\* 바닐라JS : HTML ->JS 의 순서  
\* 리액트 : JS->HTML 의 순서  

---

### 2.3 강의내용 정리

``` 
Warning: Each child in a list should have a unique "key" prop.
``` 
위와 같은 경고가 발생했는데, import한 패키지를 development에서 production.min.js로 변경하니 해결됨.  


### 2.4 Recap: 강의내용정리  

요약:  
이전까지는 React JS와 ReactDOM을 먼저 import하고 이후 createElement를 통해 코드를 작성하였다. props 안에서 event listener을 등록할 수 있다. 예를들어 on으로 시작하는 event를 작성하면 React JS가 event listener임을 알아챈다. 

### 2.5 JSX 강의내용정리  
목표:  
createElement를 대체하고자 한다(by JSX:JavaScript를 확장한 문법, HTML과 유사).  
예시:  
```
const h3= React.createElement(
            "h3",
            {
                onMouseEnter: () => console.log("mouse enter!"),
            },
            "Hi I'm a span"
            );
```
를 JSX로 바꾸면 다음과 같다.  

```
const Title = ( <h3 id="title onMouseEnter={() => console.log("mouse enter")}> Hello I'm a Title</h3>);
```  

```
const btn = React.createElement(
    "button",
    {
        onClick: () => console.log("I'm cliked"),
    },
    "Click me"
);
```
위 코드 또한 아래와 같이 바꾸어 작성할 수 있다.  
``` 
 const Button = <button style ={{backgroundColor:"tomato"}} onClick ={()=> console.log("I'm clicked")}>Click me</button>
```  

-> JSX는 html문법과 유사하게 태그를 열고 닫으며, 내용은 그 사이에 담고 props는 태그를 연 이후 작성해주면 된다.(createElement가 불필요!)  

그대신, 브라우저가 JSX를 이해할 수 있도록 `Babel`이라는 도구를 설치해야 한다. 더불어 Babel을 적용하기 위해 type을 text/babel로 작성해주어야 한다.  

### 2.6 JSX part 2  
* ()=> : arrow function  

```  
function Title() {
    return (
        <h3 id="title" onMouseEnter{() => console.log("mouse enter")}>
        Hello I'm a span
        </h3>
    );
}
```
와 아래 코드는 동일하다.  
```
const Title = () => (
    <h3 id="title" onMouseEnter{() => console.log("mouse enter")}>
        Hello I'm a span
    </h3>
)
```
이러한 함수들을 일반적인 HTML태그인 것처럼 포함시켜주려면,  
<함수명 /> 와 같이 작성한다.  
예시: ``` const Contatiner = ( <div> <Title /> <Button /> </div>); ```

* html 요소 : 소문자로 작성  (<button>)  
* 직접만든 요소 : 대문자로 작성 (<Button />)  

즉, JSX문법을 통해 각각의 요소를 만들고(함수를 작성) 한꺼번에 이들을 rendering 해주면 된다.  




