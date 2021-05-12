<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="eng" lang="eng"> 

<head>
	<title>IDI Web Accessibility Checker : Web Accessibility Checker</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="Generator" content="AChecker - Copyright 2009 by ATRC http://atrc.utoronto.ca/" />
	<meta name="keywords" content="achecker,free, open source, accessibility checker, accessibility reviewer, accessibility evaluator, accessibility evaluation, WCAG evaluation, 508 evaluation, BITV evaluation, evaluate accessibility, test accessibility, review accessibility, ATRC, WCAG 2, STANCA, BITV, Section 508." />
	<meta name="description" content="AChecker is a Web accessibility evalution tool designed to help Web content developers and Web application developers ensure their Web content is accessible to everyone regardless to the technology they may be using, or their abilities or disabilities." />
	<base href="https://achecker.ca/" />
	<link rel="shortcut icon" href="https://achecker.ca/images/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="https://achecker.ca/themes/default/forms.css" type="text/css" />
	<link rel="stylesheet" href="https://achecker.ca/themes/default/styles.css" type="text/css" />
	<!--[if IE]>
	  <link rel="stylesheet" href="https://achecker.ca/themes/default/ie_styles.css" type="text/css" />
	<![endif]-->
	<script src="https://achecker.ca/jscripts/lib/jquery.js" type="text/javascript"></script>
	<script src="https://achecker.ca/jscripts/lib/jquery-URLEncode.js" type="text/javascript"></script>
	<script src="https://achecker.ca/jscripts/AChecker.js" type="text/javascript"></script>   
		
	<script language="javascript" type="text/javascript">
	//<!--

var AChecker = AChecker || {};
AChecker.lang = AChecker.lang || {};

(function () {

    // Define langauge translations that are used in checker.js
    // @ see checker/js/checker.js
    AChecker.lang.provide_uri = "Please provide a uri!";
    AChecker.lang.provide_html_file = "Please provide a html file!";
    AChecker.lang.provide_upload_file = "Please upload html (or htm) file only!";
    AChecker.lang.provide_html_input = "Please provide a html input!";
    AChecker.lang.wait = "Please wait ...";
    AChecker.lang.get_file = "Get File";
    AChecker.lang.error_occur = "An error occured:";
    AChecker.lang.pass_decision = "Pass Decision Made";
    AChecker.lang.warning = "Warning: Confirmation Required";
    AChecker.lang.manual_check = "Manual Check Required";
    AChecker.lang.get_seal = '&nbsp;&nbsp;<span style="color:#E41B17;;border:thin solid #E41B17;"><a href="checker/index.php#seals_div">Conformance seal now issued.</a></span>';
    AChecker.lang.congrats_likely = '<img src="https://achecker.ca/images/feedback.gif" alt="Feedback" />  Congratulations! No likely problems.';
    AChecker.lang.congrats_potential = '<img src="https://achecker.ca/images/feedback.gif" alt="Feedback" />  Congratulations! No potential problems.';

})();
	//-->
	</script>
	<script src="https://achecker.ca/checker/js/checker.js" type="text/javascript"></script>
</head>

<body onload="AChecker.input.initialize('AC_by_uri', 'by_guideline');">

<div id="liquid-round"><div class="top"><span></span></div>
<div class="center-content" id="center-content">
		<div id="logo">
			<a href="http://www.atutor.ca/achecker/"><img src="https://achecker.ca/themes/default/images/checker_logo.png"  alt="AChecker" style="border:none;" /></a>
		</div>
	<div id="banner">

	<span id="logininfo"> 
        				<a href="https://achecker.ca/login.php" >Login</a>
				&nbsp;&nbsp;
				<a href="https://achecker.ca/register.php" >Register</a>
        	</span>
		
	</div>

	<div class="topnavlistcontainer">
	<!-- the main navigation. in our case, tabs -->
		<ul class="navigation">
																				<li class="navigation"><a href="/checker/index.php" title="Web Accessibility Checker" class="active"><span class="nav">Web Accessibility Checker</span></a></li>
									</ul>
	</div>

	<!-- the sub navigation and guide -->
	<div id="sub-menu">
		<!-- guide -->
				<div>
			<a href="/documentation/index.php?p=checker/index.php" onclick="AChecker.popup('/documentation/index.php?p=checker/index.php'); return false;" id="guide" target="_new" title="AChecker Handbook: Web Accessibility Checker"><em>Web Accessibility Checker</em></a>
		</div>
		
		<!-- the sub navigation -->
		<div id="sub-navigation">
					&nbsp;
				</div>
	</div>


<a name="content" title="Start Content"></a>
<table style="width:100%">
<tr>
<td>
<div class="center-input-form">
<div style="color:red;margin:auto;font-weight:bold;width:70%;line-height:1.5rem">AChecker website will shut down on April 30, 2021. Please use other accessibility validators such as <a href="https://wave.webaim.org/">WAVE</a>, <a href="https://www.deque.com/axe/browser-extensions/">AXE</a> or refer to <a href="https://www.w3.org/WAI/ER/tools/">W3C Web Accessibility Evaluation Tools List</a> for more tools.</div>
<form name="input_form" enctype="multipart/form-data" method="post" action="/checker/index.php" >

	<div class="left-col" style="float:left;clear:left;"><br />
	<fieldset class="group_form"><legend class="group_form">Check Accessibility By:</legend>

		<div class="topnavlistcontainer"><br />
			<ul class="navigation">
				<li class="navigation"><a href="javascript:void(0)" accesskey="a" title="Web Page URL Alt+1" id="AC_menu_by_uri" onclick="return AChecker.input.onClickTab('AC_by_uri');" class="active"><span class="nav">Web Page URL</span></a></li>
				<li class="navigation"><a href="javascript:void(0)" accesskey="b" title="HTML File Upload Alt+2" id="AC_menu_by_upload" onclick="return AChecker.input.onClickTab('AC_by_upload');" ><span class="nav">HTML File Upload</span></a></li>
				<li class="navigation"><a href="javascript:void(0)" accesskey="c" title="Paste HTML Markup Alt+3" id="AC_menu_by_paste" onclick="return AChecker.input.onClickTab('AC_by_paste');" ><span class="nav">Paste HTML Markup</span></a></li>
			</ul>
		</div>
		
		<div id="AC_by_uri" class="input_tab" style="display:block">
			<div style="text-align:center;">
				<label for="checkuri">Address:</label>
				<input type="text" name="uri" id="checkuri" value="" size="50"   />
				<div class="validation_submit_div">
					<div class="spinner_div">
						<img class="spinner_img" id="AC_spinner_by_uri" style="display:none" src="https://achecker.ca/themes/default/images/spinner.gif" alt="Accessibility Validation in Progress" />
						&nbsp;
					</div>
					<input class="validation_button" type="submit" name="validate_uri" id="validate_uri" size="100" value="Check It" onclick="return AChecker.input.validateURI();" />
				</div>
			</div>
		</div>
		
		<div id="AC_by_upload" class="input_tab" style="display:none">
			<div style="text-align:center;">
				<label for="checkfile">File:</label>
				<input type="hidden" name="MAX_FILE_SIZE" value="52428800" />
				<input type="file" id="checkfile" name="uploadfile" size="47" />
			
				<div class="validation_submit_div">
					<div class="spinner_div">
						<img class="spinner_img" id="AC_spinner_by_upload" style="display:none" src="https://achecker.ca/themes/default/images/spinner.gif" alt="Accessibility Validation in Progress" />
						&nbsp;
					</div>
					<input class="validation_button" type="submit" name="validate_file" id="validate_file" value="Check It" onclick="return AChecker.input.validateUpload();"  />
				</div>
			</div>
		</div>
		
		<div id="AC_by_paste" class="input_tab" style="display:none">
			<label for="checkpaste">Paste from clipboard complete HTML source:</label>
			<div style="text-align:center;">
				<textarea rows="20" cols="75" name="pastehtml" id="checkpaste"></textarea>
		
				<div class="validation_submit_div">
					<div class="spinner_div">
						<img class="spinner_img" id="AC_spinner_by_paste" style="display:none" src="https://achecker.ca/themes/default/images/spinner.gif" alt="Accessibility Validation in Progress" />
						&nbsp;
					</div>
					<input class="validation_button" type="submit" name="validate_paste" id="validate_paste" value="Check It" onclick="return AChecker.input.validatePaste();" />
				</div>
			</div>
		</div>
		
		<div>
			<h2 align="left">
				<img src="images/arrow-closed.png" alt="Expand Guidelines" title="Expand Guidelines" id="toggle_image" border="0" />
				<a href="javascript:AChecker.toggleDiv('div_options', 'toggle_image');">Options</a>
			</h2>
		</div>

		<div id="div_options" style="display:none">

		<table class="data static" style="background-colour:#eeeeee;">
			<tr>
				<td class="one_third_width">
				<input type="checkbox" name="enable_html_validation" id="enable_html_validation" value="1"  />
				<label for='enable_html_validation'>Enable HTML Validator</label>
				</td>
				
				<td class="one_third_width">
				<input type="checkbox" name="enable_css_validation" id="enable_css_validation" value="1"  />
				<label for='enable_css_validation'>Enable CSS Validator</label>
				</td>
				
				<td class="one_third_width">
				<input type="checkbox" name="show_source" id="show_source" value="1"  />
				<label for='show_source'>Show Source</label>
				</td>
				
			</tr>
			
			<tr>
				<td colspan="3"><h3>Guidelines to Check Against</h3></td>
			</tr>
<!-- 
			<tr>
				<td>
					<input type="checkbox" name="gid[]" id='gid_1' value='1'  />
					<label for='gid_1'>BITV 1.0 (Level 2)</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_2' value='2'  />
					<label for='gid_2'>Section 508</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_3' value='3'  />
					<label for='gid_3'>Stanca Act</label>
				</td>
			</tr>
			<tr>
				<td>
					<input type="checkbox" name="gid[]" id='gid_4' value='4'  />
					<label for='gid_4'>WCAG 1.0 (Level A)</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_5' value='5'  />
					<label for='gid_5'>WCAG 1.0 (Level AA)</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_6' value='6'  />
					<label for='gid_6'>WCAG 1.0 (Level AAA)</label>
				</td>
			</tr>
			<tr>
				<td>
					<input type="checkbox" name="gid[]" id='gid_7' value='7'  />
					<label for='gid_7'>WCAG 2.0 (Level A)</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_8' value='8'  />
					<label for='gid_8'>WCAG 2.0 (Level AA)</label>
				</td>
				<td>
					<input type="checkbox" name="gid[]" id='gid_9' value='9'  />
					<label for='gid_9'>WCAG 2.0 (Level AAA)</label>
				</td>
			</tr>
 -->
			<tr>
			<td colspan="3">
				<div id="guideline_in_radio">
				<table width="100%">
					<tr>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_1" value="1" />
							<label for="radio_gid_1">BITV 1.0 (Level 2)</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_2" value="2" />
							<label for="radio_gid_2">Section 508</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_3" value="3" />
							<label for="radio_gid_3">Stanca Act</label>
						</td>
					</tr>
					<tr>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_4" value="4" />
							<label for="radio_gid_4">WCAG 1.0 (Level A)</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_5" value="5" />
							<label for="radio_gid_5">WCAG 1.0 (Level AA)</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_6" value="6" />
							<label for="radio_gid_6">WCAG 1.0 (Level AAA)</label>
						</td>
					</tr>
					<tr>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_7" value="7" />
							<label for="radio_gid_7">WCAG 2.0 (Level A)</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_8" value="8" checked="checked" />
							<label for="radio_gid_8">WCAG 2.0 (Level AA)</label>
						</td>
						<td class="one_third_width">
							<input type="radio" name="radio_gid[]" id="radio_gid_9" value="9" />
							<label for="radio_gid_9">WCAG 2.0 (Level AAA)</label>
						</td>
					</tr>
				</table>
			</div>
				<div id="guideline_in_checkbox" style="display:none">
				<table width="100%">
					<tr>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_1" value="1" />
							<label for="checkbox_gid_1">BITV 1.0 (Level 2)</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_2" value="2" />
							<label for="checkbox_gid_2">Section 508</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_3" value="3" />
							<label for="checkbox_gid_3">Stanca Act</label>
						</td>
					</tr>
					<tr>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_4" value="4" />
							<label for="checkbox_gid_4">WCAG 1.0 (Level A)</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_5" value="5" />
							<label for="checkbox_gid_5">WCAG 1.0 (Level AA)</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_6" value="6" />
							<label for="checkbox_gid_6">WCAG 1.0 (Level AAA)</label>
						</td>
					</tr>
					<tr>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_7" value="7" />
							<label for="checkbox_gid_7">WCAG 2.0 (Level A)</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_8" value="8" checked="checked" />
							<label for="checkbox_gid_8">WCAG 2.0 (Level AA)</label>
						</td>
						<td class="one_third_width">
							<input type="checkbox" name="checkbox_gid[]" id="checkbox_gid_9" value="9" />
							<label for="checkbox_gid_9">WCAG 2.0 (Level AAA)</label>
						</td>
					</tr>
				</table>
			</div>
			</td>
			</tr>
			
			<tr>
				<td colspan="3"><h3>Report Format</h3></td>
			</tr>
			<tr>
				<td class="one_third_width"><input type="radio" name="rpt_format" value="1" id="option_rpt_gdl" checked="checked" /><label for="option_rpt_gdl">View by Guideline</label></td>
				<td class="one_third_width"><input type="radio" name="rpt_format" value="2" id="option_rpt_line"  /><label for="option_rpt_line">View by Line Number</label></td>
			</tr>
		</table>
		</div>
	</fieldset>
	</div>
</form>
<div style="float:right;margin-right:2em;clear:right;width:250px;"><br />
<a href="checker/index.php#skipads"><img src="images/clr.gif" alt="Jump past advertisements" border="0"/></a>	
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle"
       style="display:inline-block;width:250px;height:250px"
       data-ad-client="pub-8538177464726172"
       data-ad-slot="0783349774"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
<a name="skipads" title="passed ads"></a>
</div>

</div>
</td>
</tr>
</table>
<div id="output_div" class="validator-output-form"><p><strong>Welcome to AChecker</strong>. This tool checks single HTML pages for conformance with accessibility standards to ensure the content can be accessed by everyone. See the Handbook link to the upper right for more about the Web Accessibility Checker.</p></div>
<div align="center" id="lang" style="clear: both;"><br />
<small><label for="lang">Translate to </label></small><strong>English</strong> | <a href="/checker/index.php?lang=deu">German</a>  | <a href="/checker/index.php?lang=ita">Italiano</a> </div><br /><br />



<div style="margin-left:auto; margin-right:auto; width:20em;">
	<small>Web site engine's code is copyright &copy; 2011</small><br />
	
</div>


</div> <!--  end center-content div -->
<div class="bottom"><span></span></div><!--  bottom for liquid-round theme -->
</div> <!-- end liquid-round div -->
<div style="margin-left:auto; margin-right:auto; width:56px;">
		<a href="http://inclusivedesign.ca/"><img width="56" src="https://achecker.ca/themes/default/images/IDI.png" height="73" alt="Inclusive Design Institute" title="Inclusive Design Institute" style="border:none;"/></a> 
	</div>
<script language="javascript" type="text/javascript">
//<!--
var selected;
function rowselect(obj) {
	obj.className = 'selected';
	if (selected && selected != obj.id)
		document.getElementById(selected).className = '';
	selected = obj.id;
}
function rowselectbox(obj, checked, handler) {
	var functionDemo = new Function(handler + ";");
	functionDemo();

	if (checked)
		obj.className = 'selected';
	else
		obj.className = '';
}
//-->
</script>
<div align="center" style="clear:both;margin-left:auto; width:15em;margin-right:auto;">
	<a href="documentation/web_service_api.php" title="Web Service API" target="_new">Web Service API</a>
</div>
</body>
</html>

