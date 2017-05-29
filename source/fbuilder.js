
// JavaScript Document

function dj_buildForm(json){
	//var obj = jQuery.parseJSON(json);
	//alert(obj.method);
	var fields="";
	fields+="<div class=\"dj_form\"><form "+((json.action!="ajax")?'action="'+json.action+'\" ':'');
	fields+=dj_getProps(json.props);
	fields+=">";
	fields+=dj_prepareFields(json.fields);
	fields+='<input '+((json.action!="ajax")?'type="submit" ':'type="button" ');
	fields+=dj_getProps(json.submitbutton);
	fields+='/>';
	fields+='<div class="clear"></div>';
	fields+="</form></div>";
	document.write(fields);
	//alert(json.method);
};

function dj_prepareFields(flds){
	var data="";
	for(f in flds){
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
};

function dj_getFProps(arr,begin,end){
	var data="";
	var label=(arr.label)?"<dl><dt>"+arr.label+"</dt>":'';
	data+=label+begin;
	if(arr.values){
		var df=arr.default;
		for(v in arr.values){
			data+='<input ';
			data+=dj_getProps(arr.props);
			data+='value="'+v+'"';
			//alert(df+' '+v)
			data+=(df===v)?' checked="checked" ':'';
			data+='/>';
			data+="<label>"+arr.values[v]+"</label>";	
		}
	}else{
		data+=dj_getProps(arr.props);
	}
	data+=end;
	return data;
};

function dj_getProps(arr){
	var data='';
	for(p in arr){
		data+= p+"=\""+arr[p]+"\" ";
	}
	return data;
};

function dj_prepareSelect(arr){
	var data="";
	var label=(arr.label)?"<dl><dt>"+arr.label+"</dt>":'';
	data+=label+"<dd class=\"dj_select\"><select ";
	data+=dj_getProps(arr.props);
	data+=">";
	//put values
	if(arr.values){
		data+=dj_getOptions(arr.values);	
	}
	data+="</select></dd></dl>";
	return data;
};


function dj_getOptions(arr,id){
	if(!id) id=false;
	data='';
	for(v in arr){
		data+='<option value="'+v+'">'+arr[v]+'</option>';
	}
	if(id) document.getElementById(id).innerHTML=data;
	return data;
};

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

/*if (!IsAttributeSupported("input", "placeholder")) {
    // Do something special here
    alert("placeholder attribute is not supported");
}*/

