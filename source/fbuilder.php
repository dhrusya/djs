<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script type="text/javascript" src="dj.js"></script>
<script type="text/javascript" src="fbuilder.js"></script>
<script type="text/javascript" src="jscolor.js"></script>


 <script type="text/javascript">
			//ftypes: input, hidden, select, textarea, file, color, calender
				var form=	{	
								
							"fields":	{
										"0":{"ftype":"input", "label":"Title", "props":{"type":"text","name":"title","class":"required"}},
										"1":{"ftype":"hidden", "props":{"type":"hidden","name":"hidden"}},
										"2":{"ftype":"select", "label":"Parent", "props":{"name":"parent","class":"required","id":"parent"}},
										"3":{"ftype":"textarea", "label":"Description", "props":{"name":"description","id":"parent"}},
										"4":{"ftype":"input", "label":"Gender", "props":{"type":"radio","name":"gender","class":"required"}, values:{"M":"Male","F":"Female"},default:'M'},
										"5":{"ftype":"input", "label":"Gender", "props":{"type":"checkbox","name":"gender","class":"required"}, values:{"M":"Male","F":"Female"}, default:'M'},
										"6":{"ftype":"input", "label":"Color", "props":{"type":"text","name":"color","class":"color"}},
										"7":{"ftype":"date", "label":"Date", "props":{"type":"date","name":"date","class":"datepicker"},format:"yyyy-mm-dd"},
										"8":{"ftype":"date", "label":"Date", "props":{"type":"date","name":"date","class":"datepicker"},format:"dd-mm-yyyy"}
									},
							
							"action":"aa.php",
							"submitbutton":{name:"submit_cat", value:"Add Category", id:"submit_cat", class:"bt_blue"},
							"props":{name:"frm_cats", class:"frmclass", id:"frm_cats", method:"get"}
							};
							
				dj_buildForm(form);				
				var optionvalues={0:"Option1",1:"Option2",2:"Option2"};
				dj_getOptions(optionvalues,'parent');
</script>
<script>
	
</script>
<style type="text/css">
input::-webkit-inner-spin-button,
input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
</body>
</html>