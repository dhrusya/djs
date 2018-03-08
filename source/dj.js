// JavaScript Document

var myQuery, dj, djob;

(function() {

     dj = function(selector) {
      var djob=typeof(selector)=='object'?[selector]:document.querySelectorAll(selector);
      return new djs(djob);
    };

	var djs=function(ob){
		return {
			remove:function(){ //removes element
				doExec(ob,function(aob){ aob.parentNode.removeChild(aob);});
			},
			empty:function(){ //makes element empty
				doExec(ob,function(aob){ aob.innerHTML="";});
			},
      hide:function(){
        doExec(ob,function(aob){ aob.style.display="none";});
      },
      show:function(){
        doExec(ob,function(aob){ aob.style.display="block";});
      },
			html:function(str){ //gets or sets innerHTML
				if(str)	doExec(ob,function(aob){ aob.innerHTML=str;});
				else return doExec(ob,function(aob){ return aob.innerHTML;},true);
			},
      append:function(str){
        // doExec(ob,function(aob){ aob.innerHTML=aob.innerHTML+str;});
        doExec(ob,function(aob){ aob.insertAdjacentHTML('beforeend', str);});
      },
      prepend:function(str){
        doExec(ob,function(aob){ aob.insertAdjacentHTML('afterbegin', str);});
        // doExec(ob,function(aob){ aob.innerHTML=str+aob.innerHTML;});
      },
      createNode:function(el,str){
        var elm = document.createElement(el);
        if(str) elm.innerHTML = str;
        return elm.firstChild;
      },
      cssTojs: function(name){
          var split = name.split("-");
          var output = "";
          for(var i = 0; i < split.length; i++)
          {
              if (i > 0 && split[i].length > 0 && !(i == 1 && split[i] == "ms"))
              {
                  split[i] = split[i].substr(0, 1).toUpperCase() + split[i].substr(1);
              }
              output += split[i];
          }
          return output;
      },
      jsTocss: function(name){
          return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      },
      after:function(str){
        doExec(ob,function(aob){ aob.insertAdjacentHTML('afterend', str);});
      },
      before:function(str){
        doExec(ob,function(aob){ aob.insertAdjacentHTML('beforebegin', str);});
      },
      addNodeAfter:function(el,html){
        var node=this.createNode(el,html);
        doExec(ob,function(aob){ aob.parentNode.insertBefore(node, aob.nextSibling);});
      },
      addNodeBefore:function(el,html){
        var node=this.createNode(el,html);
        doExec(ob,function(aob){ aob.parentNode.insertBefore(node, aob);});
      },
      addClass:function(cls){

      },
      removeClass:function(cls){

      },
      addAttr:function(attr, value){ //adds or sets or resets attribute

      },
      removeAttr:function(attr){

      },
      css: function(attr, val){ //check attr is json object with multiple css props 
        attr=attr.indexOf("-")?this.cssTojs(attr):attr;
        if(val) doExec(ob,function(aob){ aob.style[attr]=val;});
        else return doExec(ob,function(aob){ return aob.style[attr];});
      },

      // val, toggle, width, height,
      ajax:function(url, method, data, callback){

      },
      parseJSON:function(){

      },
      on:function(type,callback){ //event handling
        doExec(ob,function(aob){ aob['on'+type]=callback;});
      },
      each:function(callback){
        ob.forEach.call(ob, function(item, i){
            callback(item, i);
        });
      },


		};
	};

  var doExec=function(ob, callback,returnFlag) {
		var ret="";
		for (var i = 0; i < ob.length; i++){
			if (returnFlag) ret+=callback(ob[i]);
			else callback(ob[i]);
		}
		return ret;
	};


}());

dj.sample = function() {
        alert("Nee tata parri");
        //do something here
        //return that; //if you want to chain.
};

	// function doExec(ob, callback,returnFlag) {
	// 	var ret="";
	// 	for (var i = 0; i < ob.length; i++){
	// 		if (returnFlag) ret+=callback(ob[i]);
	// 		else callback(ob[i]);
	// 	}
	// 	return ret;
	// }


	function is_array(input){
    	return typeof(input)=='object'&&(input instanceof Array);
 	}



//AJAX
var ajax=function(){

	//REQ
	this.loadReq=function(){
		var req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ((window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : null);
		if (req === null) {
			alert("Seems this browser not supportd AJAX");
			return false;
		}else {
			return req;
		}
	};

	this.arrayToURL=function(params, method) {
		var urlStr = method == 'GET' ? '?' : '';
		for (var param in params) urlStr += param + '=' + params[param] + '&';
		return urlStr;
	};

	this.getData=function(url, return_func_or_id, method, params,callback) {
		if(!callback) callback=false;
		if(!method) method="GET";
		if(!params) params="";

		var req=this.loadReq();
		if(req){
			var parameters = params !== null ? this.arrayToURL(params, method) : null;
			method=!method?"GET":method;
			var URL = method == 'GET' ? url + parameters : url;

			req.open(method, URL, true);

			req.setRequestHeader('User-Agent','XMLHTTP/1.0');
			if (method == 'POST') req.setRequestHeader('Content-type','application/x-www-form-urlencoded');

			req.onreadystatechange = function() {
				//o=document.getElementById(id);
				if (req.readyState == 4 && req.status == 200) {
					if(callback===true){
						funcl=return_func_or_id.length-1;
						func=return_func_or_id.substr(0,(funcl));
						//alert(func)
						eval(func+ 'req.responseText)');
					}else{
						o=document.getElementById(return_func_or_id);
						o.innerHTML=req.responseText;
					}
					// delete req;
				}
			};
			req.send(parameters);
		}
	};
	//END

};


// JavaScript Document

function dj_buildForm(json){
	//var obj = jQuery.parseJSON(json);
	//alert(obj.method);
	var fields="";
	fields+="<div class=\"\"><form "+((json.action!="ajax")?'action="'+json.action+'\" ':'');
	fields+=dj_getProps(json.props);
	fields+=">";
	fields+=dj_prepareFields(json.fields);
	fields+='<input '+((json.action!="ajax")?'type="submit" ':'type="button" ');
	fields+=dj_getProps(json.submitbutton);
	fields+='/>';
	fields+="</form>";
	document.write(fields);
	//alert(json.method);
}

function dj_prepareFields(flds){
	var data="";
	for(var f in flds){
		var ftype=flds[f].ftype;

		switch(ftype){
			case 'input':
				if(flds[f].values){
					data+=dj_getFProps(flds[f],'<dd>', '</dd></dl>');
				}else{
					data+=dj_getFProps(flds[f],'<dd><input ', '/></dd></dl>');
				}
				break;
			case 'hidden':
				data+=dj_getFProps(flds[f],'<input ', '/>');
				break;
			case 'textarea':
				data+=dj_getFProps(flds[f],"<dd><textarea ","></textarea></dd></dl>");
				break;
        case "select":
  				data+=dj_prepareSelect(flds[f]);
  				break;
  			case "date":
  				if (IsAttributeSupported("input", "placeholder")) {
  					data+=dj_getFProps(flds[f],'<dd><input type="date" ', '/></dd></dl>');
  				}else{
  					data+=dj_getFProps(flds[f],'<dd><input type="text" ', '/></dd></dl>');
  				}
  				break;

		}

	}

	return data;
}

function dj_getFProps(arr,begin,end){
	var data="";
	var label=(arr.label)?"<dl><dt>"+arr.label+"</dt>":'';
	data+=label+begin;
	if(arr.values){
		for(var v in arr.values){
			data+='<input ';
			data+=dj_getProps(arr.props);
			data+='value="'+v+'"';
			data+='/>';
			data+="<label>"+arr.values[v]+"</label>";
		}
	}else{
		data+=dj_getProps(arr.props);
	}
	data+=end;
	return data;
}

function dj_getProps(arr){
	var data='';
	for(var p in arr){
		data+= p+"=\""+arr[p]+"\" ";
	}
	return data;
}

function dj_prepareSelect(arr){
	var data="";
	var label=(arr.label)?"<dl><dt>"+arr.label+"</dt>":'';
	data+=label+"<dd><select ";
	data+=dj_getProps(arr.props);
	data+=">";
	//put values
	if(arr.values){
		data+=dj_getOptions(arr.values);
	}
	data+="</select></dd></dl>";
	return data;
}


function dj_getOptions(arr,id){
	if(!id) id=false;
	data='';
	for(var v in arr){
		data+='<option value="'+v+'">'+arr[v]+'</option>';
	}
	if(id) document.getElementById(id).innerHTML=data;
	return data;
}

function IsAttributeSupported(tagName, attrName) {
    var val = false;
    // Create element
    var input = document.createElement(tagName);
    // Check if attribute (attrName)
    // attribute exists
    if (attrName in input) {
        val = true;
    }
    // Delete "input" variable to
    // clear up its resources
    delete input;
    // Return detected value
    return val;
}
