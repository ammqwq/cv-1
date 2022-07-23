let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我叫时茶
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 0px, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 20px, rgba(0,0,0,1) 21px);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 20px, rgba(255,255,255,1) 21px, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 接下来让这个太极开始转动 */
#div1{
    animation:roll 2s linear infinite;
}
@keyframes roll{
    0%{
      transform: translateX(-50%) rotate(0deg);
    }
    100%{
      transform: translateX(-50%) rotate(360deg);
    }
}
/* 接下来在太极的下方加一个用来控制太极转动速度的滑块，向左变慢，向右变快。 */
.speedController-box{
  visibility: visible;
}
`;
let string2 = "";
let n = 0;

window.onload = ()=> {
  let $$ = (dom)=> {
      return document.querySelector(dom);
  }
  $$('#taiChispeed').oninput = ()=> {
      let taiChispeedValue = 101-$$('#taiChispeed').value;
      let animation = `roll ${taiChispeedValue}s linear infinite`;
      $$('#div1').style.animation = animation;
  }
}

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬
    // 如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续
      n += 1;
      step();
    }
  }, 30);
};

step(); // 1=>2