let left=document.querySelector('.btn-left'), 
    right=document.querySelector('.btn-right'); 
// 定义变量
let curpage=1, 
    sliding=false, 
    click=true, 
    svg=true; 


function prev(){
    if(click){
        if(curpage==1) curpage=5;
        sliding=true;
        curpage--;
        svg=true;
        click=false;
        for(i=1;i<=4;i++){
            let a=document.querySelector('.slide'+i);
            a.classList.add('scale');
        }
        setTimeout(() => {
            change();
        }, 200);
        setTimeout(() => {
            for(i=1;i<=4;i++){
                let a=document.querySelector('.slide'+i);
                a.classList.remove('scale');
            }
        }, 1400);
    }
}

// 下一张
function next(){
    if(click){
        if(curpage==4) curpage=0;
        sliding=true;
        curpage++;
        svg=false;
        click=false;
        for(i=1;i<=4;i++){
            let a=document.querySelector('.slide'+i);
            a.classList.add('scale');
        }
        setTimeout(() => {
            change();
        }, 200);
        setTimeout(() => {
            for(i=1;i<=4;i++){
                let a=document.querySelector('.slide'+i);
                a.classList.remove('scale');
            }
        }, 1400);
    }
}

// 切换焦点图
function change(){
    if(sliding){
        sliding=false;
        if(svg){
            for(j=1;j<=9;j++){
                let a=document.querySelector('.svg1 .circle'+j);
                a.classList.add('streak');
            }
        }else{
            for(j=1;j<=9;j++){
                let a=document.querySelector('.svg2 .circle'+j);
                a.classList.add('streak');
            }
        }
        setTimeout(() => {
            for(i=1;i<=4;i++){
                if(i==curpage){
                    let a=document.querySelector('.slide'+i);
                    a.classList.add('active');
                }else{
                    let a=document.querySelector('.slide'+i);
                    a.classList.remove('active');
                }
            }
            sliding=true;
        }, 600);
        setTimeout(() => {
            click=true;
        }, 1700);
        setTimeout(() => {
            if(svg){
                for(j=1;j<=9;j++){
                    let a=document.querySelector('.svg1 .circle'+j);
                    a.classList.remove('streak');
                }
            }else{
                for(j=1;j<=9;j++){
                    let a=document.querySelector('.svg2 .circle'+j);
                    a.classList.remove('streak');
                }
                sliding=true;
            }
        }, 850);
        setTimeout(() => {
            click=true;
        }, 1700);
    }
}

// 绑定左按钮的点击事件
left.addEventListener('click',prev);
// 绑定右按钮的点击事件
right.addEventListener('click',next);
// 绑定键盘左右键事件
document.addEventListener('keydown',function(e){
    if(e.keyCode==37){
        prev();
    }else if(e.keyCode==39){
        next();
    }
})

// $(".slider .item").each(function (i) {
//     if (i == 0) {
//       $(this).addClass("active");
//       $(this).next().addClass("next");
//       $(this).prev().addClass("prev");
//     }
  
//     $(this).attr("id", "slide-" + i);
  
//     $(this).prepend(
//       $("<div>", {
//         class: "blur",
//         style: "background-image: url(" + imags[i] + ");"
//       }),
//       $("<div>", {
//         class: "bg",
//         style: "background-image: url(" + imags[i] + ");"
//       })
//     );
  
//     $(this)
//       .find(".block")
//       .css("background-image", "url(" + imags[i] + ")");
  
//     $(".navigations .dots").append(
//       $("<li>", { class: i == 0 ? "active" : "", id: i }).on(
//         "click",
//         function () {
//           var cSlide = $(".slider #slide-" + $(this).attr("id"));
  
//           $(".navigations .dots li").removeClass("active");
//           $(this).addClass("active");
  
//           $(".slider .item").removeClass("active prev next");
//           cSlide.addClass("active");
//           cSlide.next().addClass("next");
//           cSlide.prev().addClass("prev");
//         }
//       )
//     );
//   });
  