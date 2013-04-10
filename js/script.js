$(function(){
	var jarallax = new Jarallax();
	jarallax.setDefault('#intro-page', {display:'none'});
	
	jarallax.setDefault('#site,#site-main,#site-arrow-1,#site-arrow-2,#site-arrow-3', {display:'none'});	
	jarallax.setDefault('#digital-marketing,#digital-marketing-main,#digital-marketing-texture-1,#digital-marketing-texture-2', {display:'none'});
	jarallax.setDefault('#mobile,#mobile-main,#mobile-rings', {display:'none'});
	jarallax.setDefault('#social-media-main,#social-media-sub-1,#social-media-sub-2', {display:'none'});
	jarallax.setDefault('#BI-bg1, #BI-bg2, #BI-bg3, #BI-bg4, #BI1, #BI2, #BI3, #BI4', {display:'none'});

	jarallax.setDefault('#ranking-bg', {display:'none'});
	jarallax.setDefault('#wrap-reports,#span-Reports', {display:'none'});
	jarallax.setDefault('#R1,#R2,#R3,#R4,#R5', {display:'none'});
	
	jarallax.setDefault('#ranking-reportcover1-1,#ranking-reportcover1-2,#ranking-reportcover1-3,#ranking-reportcover1-4', {display:'none'});
	jarallax.setDefault('#ranking-reportcover2-1,#ranking-reportcover2-2,#ranking-reportcover2-3,#ranking-reportcover2-4', {display:'none'});
	jarallax.setDefault('#ranking-reportcover3-1,#ranking-reportcover3-2,#ranking-reportcover3-3', {display:'none'});
	jarallax.setDefault('#ranking-homepagelink', {display:'none'});
	
	
	jarallax.addAnimation('#l2-logo', 
						   [{progress:'0%', top: '18%', opacity: '1'},
						   {progress:'5%', top: '9%', opacity: '1'},
						   {progress:'10%', top: '3%', opacity: '0'},
						   {progress:'75%', top: '3%', opacity: '0'}]);
						   
	jarallax.addAnimation('h1', 
						   [{progress:'0%', top: '35%', opacity: '1', fontSize:'60px', paddingLeft: '124px'},
						   {progress:'10%', top: '10%', opacity: '1', fontSize:'60px', paddingLeft: '124px'},
						   {progress:'15%', top: '2%', opacity: '0.5', fontSize:'39px', paddingLeft: '230px'},
						   {progress:'75%', top: '2%', opacity: '0.5', fontSize:'39px', paddingLeft: '230px'}]);
						   
	jarallax.addAnimation('#scrollDown', 
						   [{progress:'0%', top: '0%'},
						   {progress:'5%', top: '0%'},
						   {progress:'10%', top: '-20%'},
						   {progress:'100%', top: '-20%'}]);

	jarallax.addAnimation('#intro-page', 
						   [{progress:'0%', top: '100%', opacity: '0.5', display:'block'},
						   {progress:'5%', top: '100%', opacity: '0.5', display:'block'},
						   {progress:'10%', top: '25%', opacity: '1', display:'block'},
						   {progress:'20%', top: '15%', opacity: '0.5', display:'block'},
						   {progress:'75%', top: '15%', opacity: '0.5', display:'block'},
						   {progress:'100%', top: '15%', opacity: '0.5', display:'block'}]);
	
	jarallax.addAnimation('#elevator-statement', 
						   [{progress:'0%', top: '100%', fontSize:'17px', paddingLeft: '170px'},
						   {progress:'10%', top: '50%', opacity: '1', fontSize:'17px', paddingLeft: '170px'},
						   {progress:'12%', top: '50%', opacity: '1', fontSize:'17px', paddingLeft: '170px'},
						   {progress:'14%', top: '50%', opacity: '0', fontSize:'17px', paddingLeft: '170px'},
						   {progress:'20%', top: '45%', opacity: '0', fontSize:'17px', paddingLeft: '170px'},
						   {progress:'75%', top: '45%', opacity: '0', fontSize:'17px', paddingLeft: '170px'}]);

	jarallax.addAnimation('#brands-are', 
						   [{progress:'0%', top: '100%', paddingLeft: '124px'},
						   {progress:'10%', top: '56%', opacity: '1', paddingLeft: '124px'},
						   {progress:'15%', top: '56%', opacity: '1', paddingLeft: '246px'},
						   {progress:'20%', top: '45%', opacity: '0.5', paddingLeft: '246px'},
						   {progress:'75%', top: '45%', opacity: '0.5', paddingLeft: '246px'}]);
						   
	jarallax.addAnimation('#intro-page-site', 
						   [{progress:'0%', top: '55%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'18%', top: '47%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'25%', top: '50%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '50%', opacity: '0', width:'150px', marginLeft:'0px'}]);
						   						   
	jarallax.addAnimation('#intro-page-digital-marketing', 
						   [{progress:'0%', top: '55%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'18%', top: '47%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'25%', top: '50%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);

	jarallax.addAnimation('#intro-page-mobile', 
						   [{progress:'0%', top: '55%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'18%', top: '47%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'25%', top: '50%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);

	jarallax.addAnimation('#intro-page-social-media', 
						   [{progress:'0%', top: '55%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'18%', top: '47%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'25%', top: '50%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);
						   						   	
	jarallax.addAnimation('#intro-page-text', 
						   [{progress:'0%', top: '100%'},
						   {progress:'10%', top: '50%', opacity: '1'},
						   {progress:'15%', top: '50%', opacity: '1'},
						   {progress:'20%', top: '45%', opacity: '0'},
						   {progress:'75%', top: '45%', opacity: '0'}]);

//main site
	jarallax.addAnimation('#top-background', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'30%', top: '100%', opacity: '1'},
						   {progress:'45%', top: '0%', opacity: '1'},
						   {progress:'55%', top: '0%', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '1'}]);

//SITE					   
	jarallax.addAnimation('#site', 
						   [{progress:'0%', top: '100%', opacity: '1', display:'block'},
						   {progress:'42%', top: '32%', opacity: '1', display:'block'},
						   {progress:'48%', top: '10%', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0'}]);


	jarallax.addAnimation('#site-main', 
						   [{progress:'0%', top: '100%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'20%', top: '100%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'28%', top: '40%', left: '61%', display:'block', opacity: '1'},
						   {progress:'41%', top: '40%', left: '61%', display:'block', opacity: '1'},
						   {progress:'48%', top: '100%', left: '-150%', display:'block', opacity: '0'},
						   {progress:'100%', top: '100%', left: '-150%', display:'block', opacity: '0'}]);
						     
	jarallax.addAnimation('#site-arrow-1', 
						   [{progress:'0%', top: '34%', left: '-150%'},
						   {progress:'21%', top: '34%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'33%', top: '34%', left: '58%', display:'block', opacity: '1'},
						   {progress:'41%', top: '34%', left: '58%', display:'block', opacity: '1'},
						   {progress:'48%', top: '10%', left: '-150%', display:'block', opacity: '0'},
						   {progress:'100%', top: '10%', left: '-150%', display:'block', opacity: '0'}]);
						   
	jarallax.addAnimation('#site-arrow-2', 
						   [{progress:'0%', top: '0%', left: '-150%'},
						   {progress:'21%', top: '0%', left: '58%', display:'block'},
						   {progress:'36%', top: '38%', left: '56%', display:'block'},
						   {progress:'41%', top: '38%', left: '56%', display:'block'},
						   {progress:'48%', top: '0%', left: '58%', display:'block'},
						   {progress:'100%', top: '0%', left: '-150%', display:'block'}]);
						   
	jarallax.addAnimation('#site-arrow-3', 
						   [{progress:'0%', top: '37%', left: '150%'},
						   {progress:'21%', top: '37%', left: '150%', display:'block'},
						   {progress:'36%', top: '37%', left: '56%', display:'block'},
						   {progress:'41%', top: '37%', left: '56%', display:'block'},
						   {progress:'48%', top: '37%', left: '150%', display:'block'},
						   {progress:'100%', top: '37%', left: '150%', display:'block'}]);
						   
// DIGITAL MARKETING						   
	jarallax.addAnimation('#digitalMarketing', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'464px'},
						   {progress:'50%', top: '100%', opacity: '1', marginLeft:'464px'},
						   {progress:'53%', top: '46%', opacity: '1', marginLeft:'464px', display:'block'},
						   {progress:'64%', top: '10%', opacity: '0', marginLeft:'464px', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0', marginLeft:'464px'}]);
						   
	jarallax.addAnimation('#digital-marketing-main', 
						   [{progress:'0%', top: '0%', opacity: '0'},
						   {progress:'43%', top: '0%', marginLeft: '7%', display:'block', opacity: '0'},
						   {progress:'51%', top: '36%', marginLeft: '7%', display:'block', opacity: '1'},
						   {progress:'56%', top: '36%', marginLeft: '7%', display:'block', opacity: '1'},
						   {progress:'61%', top: '0%', marginLeft: '7%', display:'block', opacity: '0'},
						   {progress:'100%', top: '0%', marginLeft: '7%', display:'block', opacity: '0'}]);
						   
	jarallax.addAnimation('#digital-marketing-texture-1', 
						   [{progress:'0%', top: '25%', marginLeft: '-150%', display:'block'},
						   {progress:'43%', top: '25%', marginLeft: '-150%', display:'block'},
						   {progress:'51%', top: '25%', marginLeft: '-6%', display:'block'},
						   {progress:'56%', top: '25%', marginLeft: '-6%', display:'block'},
						   {progress:'61%', top: '25%', marginLeft: '-150%', display:'block'},
						   {progress:'100%', top: '25%', marginLeft: '-150%', display:'block'}]);
	
	jarallax.addAnimation('#digital-marketing-texture-2', 
						   [{progress:'0%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'43%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'51%', top: '25%', marginLeft: '-6%', display:'block'},
						   {progress:'56%', top: '25%', marginLeft: '-6%', display:'block'},
						   {progress:'61%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'100%', top: '100%', marginLeft: '-6%', display:'block'}]);

						   
//MOBILE						   
	jarallax.addAnimation('#mobile', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'61%', top: '100%', opacity: '1', display:'block'},
						   {progress:'64%', top: '52%', opacity: '1', display:'block'},
						   {progress:'67%', top: '42%', opacity: '1', display:'block'},
						   {progress:'74%', top: '10%', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0'}]);					   

	jarallax.addAnimation('#mobile-main', 
						   [{progress:'0%', top: '100%', marginLeft:'-150px', opacity: '0'},
						   {progress:'63%', top: '100%', marginLeft: '-150px', opacity: '1', display:'block'},
						   {progress:'66%', top: '39%', marginLeft:'653px', opacity: '1', display:'block'},
						   {progress:'69%', top: '27%', marginLeft:'653px', opacity: '1', display:'block'},
						   {progress:'76%', top: '10%', marginLeft:'653px', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', marginLeft: '-150', opacity: '0', display:'block'}]);
						   	
	jarallax.addAnimation('#mobile-rings', 
						   [{progress:'0%', top: '0%', opacity: '0'},
						   {progress:'57%', top: '0%', opacity: '1', display:'block'},
						   {progress:'59%', top: '10%', opacity: '1', display:'block'},
						   {progress:'74%', top: '15%', opacity: '0', display:'block'},
						   {progress:'100%', top: '100%', opacity: '0', display:'block'}]);	
					   

//SOCIAL MEDIA	
	jarallax.addAnimation('#socialMedia', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'66%', top: '100%', opacity: '1'},
						   {progress:'81%', top: '39%', opacity: '1'},
						   {progress:'86%', top: '39%', opacity: '1'},
						   {progress:'100%', top: '39%', opacity: '1'}]);

	jarallax.addAnimation('#social-media-main', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'141px'},
						   {progress:'66%', top: '100%', opacity: '1', marginLeft:'141px', display:'block'},
						   {progress:'83%', top: '38%', opacity: '1', marginLeft:'141px', display:'block'},
						   {progress:'84%', top: '38%', opacity: '1', marginLeft:'141px', display:'block'},
						   {progress:'100%', top: '38%', opacity: '1', marginLeft:'141px', display:'block'}]);						   

	jarallax.addAnimation('#social-media-sub-1', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'66%', top: '100%', opacity: '1', display:'block'},
						   {progress:'81%', top: '34%', opacity: '1', display:'block'},
						   {progress:'88%', top: '34%', opacity: '1', display:'block'},
						   {progress:'100%', top: '34%', opacity: '1', display:'block'}]);

	jarallax.addAnimation('#social-media-sub-2', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'43px'},
						   {progress:'66%', top: '100%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'81%', top: '64%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'88%', top: '64%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'100%', top: '64%', opacity: '1', marginLeft:'43px', display:'block'}]);

//BOTTOM ICONS
	jarallax.addAnimation('#wrap-bottom-icons', 
						   [{progress:'0%', top: '100%'},
						   {progress:'20%', top: '100%'},
						   {progress:'25%', top: '85%'},
						   
						   {progress:'100%', top: '85%'}]);	
	//icon glow
	jarallax.addAnimation('#BI-bg1', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'25%', top: '85%', opacity: '0', display:'block'},
						   {progress:'44%', top: '85%', opacity: '1', display:'block'},
						   {progress:'46%', top: '85%', opacity: '1', display:'block'},
						   {progress:'49%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg2', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'45%', top: '85%', opacity: '0', display:'block'},
						   {progress:'52%', top: '85%', opacity: '1', display:'block'},
						   {progress:'60%', top: '85%', opacity: '1', display:'block'},
						   {progress:'63%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg3', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'63%', top: '85%', opacity: '0', display:'block'},
						   {progress:'67%', top: '85%', opacity: '1', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'72%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg4', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'59%', top: '85%', opacity: '0'},
						   {progress:'66%', top: '85%', opacity: '0', display:'block'},
						   {progress:'72%', top: '85%', opacity: '1', display:'block'},
						   {progress:'86%', top: '85%', opacity: '1', display:'block'},
						   {progress:'88%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	
	//icon img
/*
	jarallax.addAnimation('#BI1', 
						   [{progress:'0%', top: '85%', opacity: '0', width:'45px;'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'25%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'42%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'45%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'47%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'100%', top: '85%', opacity: '0.2', width:'45px;'}]);	

	jarallax.addAnimation('#BI2', 
						   [{progress:'0%', top: '85%', opacity: '0', width:'45px;'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'47%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'50%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'60%', top: '85%', opacity: '1', display:'block', width:'60px;'},
						   {progress:'62%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'100%', top: '85%', opacity: '0.2', width:'45px;'}]);	
*/
/*
	jarallax.addAnimation('#BI1', 
						   [{progress:'0%', top: '85%', opacity: '0', width:'45px;'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'25%', top: '85%', opacity: '1', display:'block', width:'45px;'},
						   {progress:'42%', top: '85%', opacity: '1', display:'block', width:'45px;'},
						   {progress:'45%', top: '85%', opacity: '1', display:'block', width:'45px;'},
						   {progress:'47%', top: '85%', opacity: '0.2', display:'block', width:'45px;'},
						   {progress:'100%', top: '85%', opacity: '0.2', width:'45px;'}]);	
*/
	jarallax.addAnimation('#BI1', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'25%', top: '85%', opacity: '1', display:'block'},
						   {progress:'42%', top: '85%', opacity: '1', display:'block'},
						   {progress:'45%', top: '85%', opacity: '1', display:'block'},
						   {progress:'47%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.2'}]);	

	jarallax.addAnimation('#BI2', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'44%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'47%', top: '85%', opacity: '1', display:'block'},
						   {progress:'50%', top: '85%', opacity: '1', display:'block'},
						   {progress:'60%', top: '85%', opacity: '1', display:'block'},
						   {progress:'62%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.2'}]);	

	jarallax.addAnimation('#BI3', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'59%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'62%', top: '85%', opacity: '1', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'72%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.2'}]);	

	jarallax.addAnimation('#BI4', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'63%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'72%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'75%', top: '85%', opacity: '1', display:'block'},
						   {progress:'86%', top: '85%', opacity: '1', display:'block'},
						   {progress:'88%', top: '85%', opacity: '0.2', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.2'}]);	
						   
//RANKING PAGE
	jarallax.addAnimation('#span-DigitalIQ', 
						   [{progress:'0%', top: '100%'},
						   {progress:'85%', top: '100%', display:'block'},
						   {progress:'89%', top: '0%', display:'block'},
						   {progress:'100%', top: '0%'}]);

	jarallax.addAnimation('#span-Ranking', 
						   [{progress:'0%', top: '100%', opacity: '0', marginTop:'56px'},
						   {progress:'85%', top: '100%', opacity: '1', marginTop:'56px', display:'block'},
						   {progress:'89%', top: '0%', opacity: '1', marginTop:'56px', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0', marginTop:'56px'}]);

	//span that changes "Ranking" to Reports"						   
	jarallax.addAnimation('#span-Reports', 
						   [{progress:'0%', top: '100%'},
						   {progress:'94%', top: '100%', marginTop:'56px', display:'block', opacity: '0'},
						   {progress:'98%', top: '0%', marginTop:'56px', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', marginTop:'56px', display:'block', opacity: '1'}]);

	jarallax.addAnimation('#ranking-bg', 
						   [{progress:'0%', top: '100%'},
						   {progress:'85%', top: '100%', display:'block'},
						   {progress:'89%', top: '0%', display:'block'},
						   {progress:'100%', top: '0%'}]);
					   
	jarallax.addAnimation('#R1', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '30%', display:'block', opacity: '1'},
						   {progress:'90%', top: '30%', display:'block', opacity: '1'},
						   {progress:'93%', top: '30%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);
						   
	jarallax.addAnimation('#R2', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '40%', display:'block', opacity: '1'},
						   {progress:'90%', top: '40%', display:'block', opacity: '1'},
						   {progress:'93%', top: '36%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);			
						   	
	jarallax.addAnimation('#R3', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '50%', display:'block', opacity: '1'},
						   {progress:'90%', top: '50%', display:'block', opacity: '1'},
						   {progress:'93%', top: '38%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	
						   	
	jarallax.addAnimation('#R4', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '60%', display:'block', opacity: '1'},
						   {progress:'90%', top: '60%', display:'block', opacity: '1'},
						   {progress:'93%', top: '42%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	
						   	
	jarallax.addAnimation('#R5', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '70%', display:'block', opacity: '1'},
						   {progress:'90%', top: '70%', display:'block', opacity: '1'},
						   {progress:'93%', top: '46%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	

//REPORT PAGE
	jarallax.addAnimation('#reports, #wrap-reports', 
						   [{progress:'0%', top: '100%'},
						   {progress:'93%', top: '100%', display:'block'},
						   {progress:'100%', top: '25.5%', display:'block'}]);

});

