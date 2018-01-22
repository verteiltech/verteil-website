
$(document).ready(function(){
	$("#mainNav").css("background-color", "transparent");
	$("#mainNav").css('background', 'transparent');
	$("#mainNav").css('border-color', 'transparent');
	
	//document.getElementById('header').style.backgroundImage = "url('./img/blog_bg.png')";
	var scroll_pos = 0;
	$(document).scroll(function() { 
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 550) {
	
			document.getElementById('aboutNavbar').style.color='#222222';
			document.getElementById('technologyNavbar').style.color='#222222';
			document.getElementById('propositionNavbar').style.color='#222222';
			document.getElementById('propositionNavbar').style.color='#222222';
			document.getElementById('milestoneNavbar').style.color='#222222';
			document.getElementById('foundersNavbar').style.color='#222222';
			document.getElementById('contactNavbar').style.color='#222222';
			document.getElementById('newsNavbar').style.color='#222222';
			document.getElementById('blogNavbar').style.color='#222222';
		
			$("#mainNav").css('background-color', 'white');
			$("#mainNav").css('background', 'white');
			$("#mainNav").css('border-color', 'white');
		} else {
		
			document.getElementById('aboutNavbar').style.color='#ffffff';
			document.getElementById('technologyNavbar').style.color='#ffffff';
			document.getElementById('propositionNavbar').style.color='#ffffff';
			document.getElementById('milestoneNavbar').style.color='#ffffff';
			document.getElementById('foundersNavbar').style.color='#ffffff';
			document.getElementById('contactNavbar').style.color='#ffffff';
			document.getElementById('newsNavbar').style.color='#ffffff';
			document.getElementById('blogNavbar').style.color='#ffffff';
			
			$("#mainNav").css('background-color', 'transparent');
			$("#mainNav").css('background', 'transparent');
			$("#mainNav").css('border-color', 'transparent');
		}
	});
});


	const mq = window.matchMedia( "@media (min-width: 768px)");
			
	function shownews(value) {debugger;
		   if(value == 'newsroom') {				
				//window.location.href='index.html#newsroom';
				document.getElementById('header').style.backgroundImage = "url('./img/inner_page_bg.png')";
				document.getElementById('newsroom').style.display = 'block';
				document.getElementById('blog').style.display = 'none';
				
			} else {
				document.getElementById('blog').style.display = 'block';
				document.getElementById('header').style.backgroundImage = "url('./img/blog_bg.png')";
				document.getElementById('header').style.height="420px";
				document.getElementById('header').style.minHeight="0%";					
			}
			if (mq.matches){
				document.getElementById('header').style.minHeight="0%";
			}
		
		
		var scroll_pos = 0;
	$(document).scroll(function() { 
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 200) {
	
			document.getElementById('aboutNavbar').style.color='#222222';
			document.getElementById('technologyNavbar').style.color='#222222';
			document.getElementById('propositionNavbar').style.color='#222222';
			document.getElementById('propositionNavbar').style.color='#222222';
			document.getElementById('milestoneNavbar').style.color='#222222';
			document.getElementById('foundersNavbar').style.color='#222222';
			document.getElementById('contactNavbar').style.color='#222222';
			document.getElementById('newsNavbar').style.color='#222222';
			document.getElementById('blogNavbar').style.color='#222222';
		
			$("#mainNav").css('background-color', 'white');
			$("#mainNav").css('background', 'white');
			$("#mainNav").css('border-color', 'white');
		} else {
		
			document.getElementById('aboutNavbar').style.color='#ffffff';
			document.getElementById('technologyNavbar').style.color='#ffffff';
			document.getElementById('propositionNavbar').style.color='#ffffff';
			document.getElementById('milestoneNavbar').style.color='#ffffff';
			document.getElementById('foundersNavbar').style.color='#ffffff';
			document.getElementById('contactNavbar').style.color='#ffffff';
			document.getElementById('newsNavbar').style.color='#ffffff';
			document.getElementById('blogNavbar').style.color='#ffffff';
			
			$("#mainNav").css('background-color', 'transparent');
			$("#mainNav").css('background', 'transparent');
			$("#mainNav").css('border-color', 'transparent');
		}
    });

		
	   
	}
	function homeclick() {
		if (mq.matches){
			document.getElementById('header').style.minHeight="100%";
		}
		window.location.href='index.html';
		document.getElementById('header').style.backgroundImage = "url('./img/home_bg.jpg')";



		document.getElementById('newsroom').style.display = 'none';
		document.getElementById('blog').style.display = 'none';
		document.getElementById('about').style.display = 'block';
		document.getElementById('proposition').style.display = 'block';
		document.getElementById('technology').style.display = 'block';
		document.getElementById('milestones').style.display = 'block';
		document.getElementById('founders').style.display = 'block';
		document.getElementById('contact').style.display = 'block';
		document.getElementById('header').style.minHeight="100%";
		
		document.getElementById('banner1').style.display = 'block';
		document.getElementById('banner2').style.display = 'block';
		document.getElementById('banner3').style.display = 'block';
		
		document.getElementById('banner1').style.padding = "0px 0px 0px 140px";
		document.getElementById('banner2').style.padding = "14px 0px 13px 0px;";
	}
