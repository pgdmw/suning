window.onload=function(){
	
	//导航下拉
	let li=document.querySelectorAll(".header .header1 .headercon");
	console.log(li);
	let divs=document.querySelectorAll(".header .header1 .headercon .child");
	console.log(divs);
	for(let i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			for(let j=0;j<divs.length;j++){
				divs[j].style.display="none";
				li[j].style.background="";
				li[j].style.border="none";
			}
			li[i].style.background="#FFFFFF";
			li[i].style.border="1px solid #DDDDDD";
			li[i].style.borderBottom="none";
			li[i].style.height="36px";
			divs[i].style.display="block";
			
		}
		li[i].onmouseout=function(){
			divs[i].style.display="none";
			li[i].style.background="";
			li[i].style.border="none";
		}
	}
	
	//侧拉
	let li1=document.querySelectorAll(".banner .banner_l ul li");
	let sortDetail=document.querySelectorAll(".banner .banner_l ul li .sort-detail");
	console.log(li1,sortDetail);
	for(let i=0;i<li1.length;i++){
		li1[i].onmouseover=function(){
			for(let j=0;j<sortDetail.length;j++){
				sortDetail[j].style.display="none";
			}
			sortDetail[i].style.display="block";
		}
		li1[i].onmouseout=function(){
			sortDetail[i].style.display="none";
		}
	}
	
	//搜索
	let searchs=document.querySelector(".search_t input");
	let recresult=document.querySelector(".search .rec-result");
	console.log(searchs,recresult);
	searchs.onfocus=function(){
		recresult.style.display="block";
	}
	searchs.onblur=function(){
		recresult.style.display="none";
	}
	
	
	//轮播
	let imgs=document.querySelectorAll(".banner .firstscreen .banners a img");
	let banners=document.querySelector(".banner .firstscreen");
	let pages=document.querySelectorAll(".banner .firstscreen .pages .pages-item");
	let a1=document.querySelectorAll(".banner .firstscreen .banners a");
	let leftB=document.querySelector(".banner .firstscreen .leftbtn");
	let rightB=document.querySelector(".banner .firstscreen .rightbtn");
	let num=0;
	console.log(imgs,banners,pages,leftB,rightB);
	//初始化
	imgs[0].style.opacity=1;
	a1[0].style.opacity=1;
	pages[0].classList.add("active");
	//鼠标移入时
	for(let i=0;i<pages.length;i++){
		pages[i].onmouseover=function(){
			for(let j=0;j<pages.length;j++){
				pages[j].classList.remove("active");
				imgs[j].style.opacity=0;
				a1[j].style.opacity=0;
			}
			pages[i].classList.add("active");
			imgs[i].style.opacity=1;
			a1[i].style.opacity=1;
			num=i;
		}
	}
	
	//自动轮播
	let t=setInterval(move,3000);
	function move(){
		num++;
		if(num==8){
			num=0;
		}
		for(let j=0;j<pages.length;j++){
			pages[j].classList.remove("active");
			imgs[j].style.opacity=0;
			a1[j].style.opacity=0;
		}
		pages[num].classList.add("active");
		imgs[num].style.opacity=1;
		a1[num].style.opacity=1;
	}
	
//	banners.onmouseover=function(){
//		clearInterval(t);
//	}
//	banners.onmouseout=function(){
//		t=setInterval(move,3000);
//	}
	
	//点击右键头
	rightB.onclick=function(){
		move();
	}
	//点击左键头
	leftB.onclick=function(){
		movel();
	}
	function movel(){
		num--;
		if(num<0){
			num=7;
		}
		for(let j=0;j<pages.length;j++){
			pages[j].classList.remove("active");
			imgs[j].style.opacity=0;
			a1[j].style.opacity=0;
		}
		pages[num].classList.add("active");
		imgs[num].style.opacity=1;
		a1[num].style.opacity=1;
	}
	
	//失去焦点
	window.onblur=function(){
		clearInterval(t);
	}
	//得到焦点
	window.onload=function(){
		t=setInterval(move,3000);
	}
	
	
	//向上轮播
	let bannertop=document.querySelector(".banner .banner_r .bannertop");
	let bannermes=document.querySelectorAll(".banner .banner_r .banner_r_mes");
	console.log(bannertop,bannermes);
	let now=0;
	let next=0;
	let heights=parseInt(getComputedStyle(bannertop,null).height);
	console.log(heights);
	bannermes[0].style.top=0;
	let t1=setInterval(change,3000);
	function change(){
		next++;
		if(next==2){
			next=0;
		}
		bannermes[now].style.top=0;
		bannermes[next].style.top=heights+"px";
		animate(bannermes[now],{top:-heights});
		animate(bannermes[next],{top:0});
		now=next;
	}
	
	//排行榜轮播
	let dots=document.querySelectorAll(".home_con3_r .home_con3_r_b .dot .dots");
	let btnl=document.querySelector(".home_con3_r .home_con3_r_b .btnl");
	let btnr=document.querySelector(".home_con3_r .home_con3_r_b .btnr");
	let uls3=document.querySelectorAll(".home_con3_r .home_con3_r_b ul");
	let divs3=document.querySelector(".home_con3_r .home_con3_r_b");
	let now2=0;
	let next2=0;
	console.log(dots,btnl,btnr,uls3,divs3);
	uls3[0].style.left=0;
	dots[0].classList.add("current");
	let widths3=parseInt(getComputedStyle(divs3,null).width);
	console.log(widths3);
	for(let i=0;i<uls3.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<dots.length;j++){
				uls3[j].style.left=widths3+"px";
				dots[j].classList.remove("current");
			}
			uls3[i].style.left=0;
			dots[i].classList.add("current");
				now2=i;
				next2=i;
		}
	}
	btnr.onclick=function(){
		mover();
	}
	function mover(){
		next2++;
		if(next2==2){
			//循环
			next2=0;
		}
		uls3[now].style.left=0;
		uls3[next].style.left=widths3+"px";
		animate(uls3[now2],{left:-widths3},function(){
			dots[now2].classList.remove("current");
//				flag=true;
		});
		animate(uls3[next2],{left:0},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("current");
			}
			dots[next2].classList.add("current");
//				flag=true;
		});
		now2=next2;
	}
	btnl.onclick=function(){
		movel();
	}
		function movel(){
		next2--;
		if(next2==-1){
			//循环
			next2=1;
		}
		uls3[now].style.left=0;
		uls3[next].style.left=-widths3+"px";
		animate(uls3[now2],{left:widths3},function(){
			dots[now2].classList.remove("current");
//				flag=true;
		});
		animate(uls3[next2],{left:0},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("current");
			}
			dots[next2].classList.add("current");
//				flag=true;
		});
		now2=next2;
	}
	
	
	//视频轮播
	let li2=document.querySelectorAll(".home_con5 .home_con5_r .home_con5_r_t3 li");
	let li3=document.querySelectorAll(".home_con5 .home_con5_r .home_con5_r_t2 li");
	let leftbtn=document.querySelector(".home_con5 .home_con5_r .home_con5_r_t3 .left-pointer");
	let rightbtn=document.querySelector(".home_con5 .home_con5_r .home_con5_r_t3 .right-pointer");
	let uls=document.querySelector(".home_con5 .home_con5_r .home_con5_r_t3 ul");
	let opacitys=document.querySelector(".home_con5 .home_con5_r .home_con5_r_t3 .black-opacity");
	console.log(li2,li3,leftbtn,rightbtn,uls);
	
	let widths1=parseInt(getComputedStyle(uls,null).width)/2;
	console.log(widths1);
	let nums=0;
	li3[0].style.opacity=1;
	rightbtn.onclick=function(){
		nums++;
		if(nums==2){
			nums=1;
			return;
		}
		console.log(nums);
		uls.style.transform="translateX("+(-widths1*nums)+"px)";
	}
	leftbtn.onclick=function(){
		nums--;
		if(nums==-1){
			nums=0;
			return;
		}
		console.log(nums);
		uls.style.transform="translateX("+(-widths1*nums)+"px)";
	}
	for(let i=0;i<li2.length;i++){
		li2[i].onmouseover=function(){
			for(let j=0;j<li3.length;j++){
				li3[j].style.opacity=0;
			}
			li3[i].style.opacity=1;
		}
	}
	
	//苏宁拼购中的轮播
	let uls1=document.querySelector(".home_con9 .home_con9_r .home_con9_r_b ul");
	let btnL=document.querySelector(".home_con9 .home_con9_r .home_con9_r_b .btn-left");
	let btnR=document.querySelector(".home_con9 .home_con9_r .home_con9_r_b .btn-right");
//	let lis2=document.querySelectorAll(".home_con9 .home_con9_r .home_con9_r_b li");
	console.log(uls1,btnL,btnR);
	let width2=parseInt(getComputedStyle(uls1,null).width)/5;
	let num2=0;
	btnR.onclick=function(){
		num2++;
		if(num2==5){
			num2=4;
			return;
		}
		uls1.style.transform="translateX("+(-width2*num2)+"px)";
	}
	btnL.onclick=function(){
		num2--;
		if(num2==-1){
			num2=0;
			return;
		}
		uls1.style.transform="translateX("+(-width2*num2)+"px)";
	}
	
	//楼层跳转
	let tiaozhuan=document.querySelectorAll("div.tiaozhuan");
	console.log(tiaozhuan);
	let lists=document.querySelectorAll(".footerbar li");
	let leftlist=document.querySelector(".footerbar");
	let fixbar=document.querySelector(".fix-bar");
	let fixs=document.querySelectorAll(".fixs");
	console.log(fixs);
	console.log(lists);
	let bodytop;
	let arr=[];
	tiaozhuan.forEach(function(val,index){
//		console.log(val);
//		console.log(index);
		arr.push(val.offsetTop);
	})
	console.log(arr);
	window.onscroll=function(){
		bodytop=document.body.scrollTop||document.documentElement.scrollTop;
		console.log(bodytop);
		//左侧出现消失
		if(bodytop>=2500){
			leftlist.style.left="3px";
			fixbar.style.top=0;
		}
		if(bodytop<2500){
			leftlist.style.left="-70px";
			fixbar.style.top="-100px";
		}
		
		//进行判断
		arr.forEach((val,index)=>{
			if(bodytop+innerHeight/2>val-100){
				for(let i=0;i<lists.length;i++){
					lists[i].classList.remove("hot");
				}
				lists[index].classList.add("hot");
			}
		})
		
	}
	
	//点击跳转
	lists.forEach((val,index)=>{
		val.onclick=function(){
			for(let i=0;i<lists.length;i++){
				lists[i].classList.remove("hot");
			}
			val.classList.add("hot");
			animate(document.body,{scrollTop:arr[index]-100});
			animate(document.documentElement,{scrollTop:arr[index]-100});
		}
	})
	
	
	//点击右边固定栏底部回到顶部
	let tops=document.querySelector(".side-bottom .top");
	console.log(tops);
	let bodyt=document.body.scrollTop||document.documentElement.scrollTop;
	tops.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
	
	
}
