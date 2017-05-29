<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

<script type="text/javascript" src="dj.js"></script>

<script type="text/javascript" src="jscolor.js"></script>


</head>



<body>

<div id="id1" class="a">This is sample text</div>

<div class="a">This is sample text</div>

<div>This is sample text</div>

<div class="a">This is sample text</div>

Click here: <input type="text" class="color" value="">

<input type="button" value="empty this" onclick="dj('#id1').empty()" />

<input type="button" value="Fill Text" onclick="dj('div.a').html('This is loaded by djs')" />

<input type="button" value="hide this" onclick="dj('#id1').hide()" />

<input type="button" value="show this" onclick="dj('#id1').show()" />


</body>

</html>