const btns = document.querySelectorAll(".btns");
const articles = document.querySelectorAll("section article");


for(let btn in btns){
    // console.log(i);
    //각 버튼 클릭
    btn.addEventListener("click", (e) => {
        // on 클래스 추가 및 제거 로직
        // console.log(btn)

        for(let element of btns) {
            // console.log(element);
            element.classList.remove('on');
        };
        btn.classList.add('on');
        for(let element of articles) {
            element.classList.remove('on');
        }
        articles[i].classList.add('on');

    });
};