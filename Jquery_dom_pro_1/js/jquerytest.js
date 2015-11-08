$(document).ready(function(){
	var dropdown1 = $("#dropdown1");
	var items = ['Choose hero', 'Spider Man', 'Wolverine','Captain America','X-Men','Crocodile'];
	var selected = 'Crocodile';

	dropdown1.html('<a class="tag" href="#"></a><a class="cli" href="#">∨</a><ul class="list" style="display: none;"></ul>');
	var list = $(".list");
	var tag = $(".tag");
	
	tag.text(selected);

	appendHtml = '';
	for (i in items) {
		var itemName = items[i];
		var className = '';
		if (itemName === selected) {
			className = 'class="selected"';
		}	
		appendHtml += "<li " + className + ">" + "<a>" + itemName + "</a>" + "</li>";
	}
	list.append(appendHtml);
 	tag.click(function(event){
 		list.fadeToggle("slow");
 		event.stopPropagation();
 	});
 	$(".cli").click(function(event){
 		list.fadeToggle("slow");
 		event.stopPropagation();
 	});
 	$("li").click(function(){
 		$(".selected").attr("class","");
 		$(this).attr("class","selected");
 		tag.text($(this).text());
 	});
 	$(document).click(function(){
 		list.fadeOut("slow");
 	});

});

