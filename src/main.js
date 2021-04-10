let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*你好，我叫骏
* 首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div 变成一个八卦图
*首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*制作八卦图
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    left:0;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left:0;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
let n = 0;
let step = () => {
    setTimeout(() => {

        if (string[n] === "\n") {
            //如果是回车，就照搬
            string2 += '<br>';
        } else if (string[n] === " ") { //如果不是回车就照搬
            string2 += "&nbsp;";
        } else {
            string2 = string2 + string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //n不是最后一个，就继续
            n += 1;
            step();
        }
    }, 50);
};

step();

setTimeout(() => {
    style.innerHTML = `
body{
    color: red;
}
`;
}, 3000);