var url = window.document.location.href;
if(url.indexOf("www.baidu.com")>0)
{
  setInterval(changeBackgroundColor,1000);
}
//广告背景色加深
function changeBackgroundColor()
{
   var url = window.document.location.href;
   if(url.indexOf("www.baidu.com")>0)
   {
	   var searchResult = $("#content_left").children("div");
	   
	   searchResult.each(function(){
		   //验证是否为广告结果(如果为广告id 会是 3001 这种数值)
		   if(typeof($(this).attr("id")=="number")&& parseInt($(this).attr("id"))>=3000)
		   {
							   
			   //以"推广"字段的广告
			   var div = $(this);
			   $(this).find("font").each(function(){
				   var text =$(this).find("a").text();

				  if(text=="广告")
				   {
					  div.css("background-color","#ccc") ; 
				   }

			   })
		   
		   }
		   if($(this).children("a").text()=="广告")
		   {
			  //以"推广链接"字段的 广告
			  $(this).css("cssText","background-color:#ccc !important; ");
					   
		   }
		   
	   })
   }
   
}



