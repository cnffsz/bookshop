/**
 * 
 */
$(function() {
	
	function createRequest(){
    	try {
    		var request = new XMLHttpRequest();
    	} catch (tryMS) {
    		try {
    			request = new ActiveXObject("Msxml2.XMLHTTP");
    		} catch (otherMS) {
    			try {
    				request = new ActiveXObject("Microsoft.XMLHTTP");
    			} catch (failed) {
    				request = null;
    			}
    		}
    	}
    	return request;
    }
	
	
	$("#exit").click(function() {
		alert("确定退出吗");
		exitRequest = createRequest();
		var url = "exit";
		exitRequest.open("GET",url,true);
		exitRequest.onreadystatechange = exitHandle;
		exitRequest.send(null);
	})
	
	function exitHandle() {
		if(exitRequest.readyState==4){
			if(exitRequest.status==200){
				
			}
		}
	}
	
})