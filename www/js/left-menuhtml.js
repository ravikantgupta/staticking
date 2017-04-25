
 var menuhtml='<div class="gw-sidebar"><div id="gw-sidebar" class="gw-sidebar"><div class="nano-content"><ul class="gw-nav gw-nav-list">';
 menuhtml+='<li class="init-un-active" style="height:60px;"> <a onClick="slide(\'index.html\')" style="padding:0px;"> <img src="images/log.jpg" width="260" height="60" class="img-responsive" style="height:60px !important;"> </a> </li>';
 menuhtml+='<li class="init-un-active" style="">  <input type="text" id="filtersearch" class="form-control" placeholder="Search Page" style="border-radius:0px; border:none !important; height:40px;"> </li>';
 menuhtml+='<li class="init-un-active"> <a onClick="slide(\'index.html\')"> <i class="fa fa-align-justify"></i> DASHBOARD </a> </li>';
 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-comments"></i> SMS</span> <b class="gw-arrow"></b> </a>';

 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a  onClick="slide(\'compose-sms.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Compose SMS</a></li>';
 menuhtml+='<li><a onClick="slide(\'all-sent-sms.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> All Sent SMS</a></li>';
 menuhtml+='<li><a href="schedule-sms.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Schedule SMS</a>';
 menuhtml+='<li><a href="quick-compose.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Quick Compose</a></li>';
 menuhtml+='<li><a href="quick-sent-item.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Quick Sent Item</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';
 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-phone"></i> Miss Call Alerts</span> <b class="gw-arrow icon-arrow-up8"></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a href="view-miss-call-alerts.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Miss Call Alerts</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';
 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-th"></i> Short/Long Code</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a href="view-short-long-code.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Short/Long Code</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-file"></i> Others</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a href="add-template.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Add Template</a></li>';
 menuhtml+='<li><a href="view-template.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Template</a></li>';
 menuhtml+='<li><a href="add-group.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Add Group</a></li>';
 menuhtml+='<li><a href="view-group.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Group</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-user"></i> Users</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a href="add-user.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Add User</a></li>';
 menuhtml+='<li><a href="view-user.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View User</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-users"></i> Reseller</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a href="add-reseller.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Add Reseller</a></li>';
 menuhtml+='<li><a href="view-reseller.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Reseller</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-cogs"></i> Settings</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';

 menuhtml+='<li><a href="changeusertype.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Change User Type </a></li>';
 menuhtml+='<li><a href="transfer-credits.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer Credits </a></li>';
 menuhtml+='<li><a href="transsactionin.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Transactions In </a></li>';
 menuhtml+='<li><a href="transsactionout.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Transactions Out </a></li>';
 menuhtml+='<li><a href="smsapi.html"><i class="fa fa-angle-right" aria-hidden="true"></i> HTTP API </a></li>';

 menuhtml+='<li><a href="bulksmsapi.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Bulk SMS API </a></li>';
 menuhtml+='<li><a href="xmlapi.html"><i class="fa fa-angle-right" aria-hidden="true"></i> XML API </a></li>';
 menuhtml+='<li><a href="credit-api.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Credits API </a></li>';
 menuhtml+='<li><a href="delivery-api.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery API </a></li>';
 menuhtml+='<li><a href="view-sender-ids.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Sender IDs </a></li>';
 menuhtml+='<li><a href="viewactualcredits.html"><i class="fa fa-angle-right" aria-hidden="true"></i> View Actual Credits </a></li>';
 menuhtml+='<li><a href="send-notifications.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Send Notifications </a></li>';
 menuhtml+='<li><a href="delivery-cutting.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery Cutting </a></li>';
 menuhtml+='<li><a href="delivery-cutting-users-list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery Cutting Users List</a></li>';
 menuhtml+='<li><a href="website-settings.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Website Settings</a></li>';
 menuhtml+='<li><a href="check-dnd-number.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Check DND Number</a></li>';
 menuhtml+='<li><a href="block-number.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Block Number</a></li>';
 menuhtml+='<li><a href="my-transactions.html"><i class="fa fa-angle-right" aria-hidden="true"></i> My Transactions </a></li>';

 menuhtml+='</ul>';
 menuhtml+='</li>';
 
 document.getElementById("menu").innerHTML =menuhtml;

 var footerhtml='<div class="row">';
 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me"><a href="index.html"><i class="fa fa-home fav-icon"></i><br>Dashboard </a></div>';

  footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me"><a href="quick-compose.html"><i class="fa fa-envelope-o fav-icon"></i><br>Quick SMS </a></div>';

 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<a href="quick-sent-item.html">';
 footerhtml+='<i class="fa fa-pencil-square-o fav-icon"></i><br>';
 footerhtml+='Sent Item</a> </div>';

 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<a href="view-group.html">';
 footerhtml+='<i class="fa fa-users fav-icon"></i><br>';
 footerhtml+='Group </a></div>';


 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<span class="notifactions-icon">12</span>';
 footerhtml+='<a href="notification.html">';
 footerhtml+='<i class="fa fa-bell fav-icon"></i><br>';
 footerhtml+='Notification </a></div>';

 footerhtml+='</div>'; 
 
 document.getElementById("footercredits").innerHTML =footerhtml;
 
 
 var quickselection='<div class="col-sm-2 col-xs-2"> <img src="images/3.png" class="img-responsive quick-image"></div>';

	 quickselection+='<div class="col-sm-2 col-xs-2"> <img src="images/4.png" class="img-responsive quick-image"></div>';

	 quickselection+='<div class="col-sm-2 col-xs-2"> <img src="images/5.png" class="img-responsive quick-image"></div>';

	 quickselection+='<div class="col-sm-2 col-xs-2"> <img src="images/6.png" class="img-responsive quick-image"></div>';

	 quickselection+='<div class="col-sm-2 col-xs-2"> <img src="images/1.png" class="img-responsive quick-image"></div>';

	 quickselection+='<div class="col-sm-2 col-xs-2"> <img src="images/2.png" class="img-responsive quick-image"></div>';

  document.getElementById("quickselection").innerHTML =quickselection;
 

