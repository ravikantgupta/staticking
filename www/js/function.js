
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', app.onDeviceReady, false);
	}
	
};


	            document.addEventListener("deviceready", function() {
					
									 
				 
			  // then override any default you want
			  window.plugins.nativepagetransitions.globalOptions.duration = 700;
			  window.plugins.nativepagetransitions.globalOptions.iosdelay = 100;
			  window.plugins.nativepagetransitions.globalOptions.androiddelay = 150;
			  window.plugins.nativepagetransitions.globalOptions.winphonedelay = 175;
			  window.plugins.nativepagetransitions.globalOptions.slowdownfactor = 8;
			  // these are used for slide left/right only currently
			  window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop = 64;
			  window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom = 48;
			  
			  
			
				  
			}, false);
			
			

/********Left menu********/
function addmenu(){
		
	var menuhtml='<li><a onClick="slide(\'index.html\')" class="waves-effect"><span class="nav-icon"><i class="fa fa-align-justify"></i></span><span class="nav-label">Dashboard</span></a></li>';
        menuhtml+='<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-comments"></i></span><span class="nav-label">SMS</span></a>';
        menuhtml+='<ul><li><a onClick="slide(\'composesms.html\')" >Compose SMS</a></li><li><a onClick="slide(\'allsentsms.html\')">All Sent Sms</a></li><li><a onclick="slide(\'schedule.html\')" >Schedule Sms</a></li><li><a onClick="slide(\'dynamicsms.html\')" >Dynamic Sms</a></li></ul></li>';
                
        menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-microphone"></i></span><span class="nav-label">Voice SMS</span></a>';
	    menuhtml+= '<ul><li><a onClick="slide(\'uploadvoicefile.html\')" >Upload Voice File</a></li><li><a onClick="slide(\'mysounds.html\')" >View Voice Files</a></li><li><a onClick="slide(\'voicesms.html\')" >Compose Voice SMS</a></li><li><a onClick="slide(\'allvoicesentsms.html\')" >All Sent Voice Sms</a></li><li><a onClick="slide(\'voicespecialprice.html\')" >Add Voice Special Price</a></li><li><a onClick="slide(\'voicespecialpricelist.html\')" >View Voice Special Price</a></li></ul></li>';
        
	    menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-phone"></i></span><span class="nav-label">Miss Call Alerts</span></a>';

        menuhtml+= '<ul><li><a onClick="slide(\'viewmisscall.html\')">View Miss Call Alerts</a></li></ul></li>';

        menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-th"></i></span><span class="nav-label">Short/Long Code</span></a>';

        menuhtml+= '<ul><li><a onClick="slide(\'viewlongcode.html\')">View Short/Long Code</a></li></ul></li>';
                
        menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-facebook-official"></i></span><span class="nav-label">Social Media</span></a>';
 
       menuhtml+= '<ul><li><a onClick="slide(\'addpackage.html\')" >Add Package</a></li><li><a onClick="slide(\'viewpackage.html\')" >View Package</a></li><li><a onClick="slide(\'placeorder.html\')" >Place Order</a></li><li><a onClick="slide(\'vieworder.html\')" >View Order</a></li><li><a onClick="slide(\'socialpricing.html\')" >Social Pricing</a></li></ul></li>';
                
       menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-android"></i></span><span class="nav-label">Android App Installation</span></a>';

      menuhtml+= '<ul><li><a onClick="slide(\'add.html\')" >Place Order</a></li><li><a onClick="slide(\'viewcampaign.html\')" >View Order</a></li><li><a onClick="slide(\'pricing.html\')" >Pricing</a></li></ul></li>';
      
	   menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-file"></i></span><span class="nav-label">Others</span></a>';

	   menuhtml+= '<ul><li><a onClick="slide(\'smstemplate.html\')" >Add Template</a></li><li><a onClick="slide(\'viewsmstemplate.html\')" >View Templates</a> </li><li><a onClick="slide(\'newgroup.html\')" >Add Group</a></li><li><a onClick="slide(\'viewgroup.html\')" >View Group</a></li></ul></li>';
                
       menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-user"></i></span><span class="nav-label">Users</span></a>';
       
	    menuhtml+= '<ul><li><a onClick="slide(\'addusers.html\')" >Add Users</a></li><li><a onClick="slide(\'viewusers.html\')" >View Users</a></li> </ul></li>';

       menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-users"></i></span><span class="nav-label">Reseller</span></a>';
      menuhtml+= '<ul><li><a onClick="slide(\'addresellers.html\')" >Add Reseller</a></li><li><a onClick="slide(\'viewreseller.html\')" >View Reseller</a></li><li><a onClick="slide(\'usersmpp.html\')" >Add Your Smpp</a></li></ul></li>';
    
	 menuhtml+= '<li><a href="#" class="waves-effect"><span class="nav-icon"><i class="fa fa-cogs"></i></span><span class="nav-label">Settings</span></a>';
     
	  menuhtml+='<ul><li><a onClick="slide(\'viewusersmpp.html\')" >Client Smpp</a></li><li><a onClick="slide(\'changeusertype.html\')">Change User Type</a></li><li><a onClick="slide(\'transfercredits.html\')" >Transfer Credits</a></li><li><a onClick="slide(\'transsactionin.html\')" >Transactions In</a></li><li><a onClick="slide(\'transsactionou.html\')" >Transactions Out</a></li><li><a onClick="slide(\'myshorturls.html\')" >My Short Urls</a></li><li><a onClick="slide(\'smsapi.html\')" >HTTP API</a></li><li><a onClick="slide(\'bulksmsapi.html\')" >Bulk SMS API</a></li><li><a onClick="slide(\'xmlapi.html\')" >XML API</a></li><li><a onClick="slide(\'creditapi.html\')" >Credits API</a></li><li><a onClick="slide(\'deliveryapi.html\')" >Delivery API</a></li><li><a onClick="slide(\'allsenderids.html\')" >View Sender IDs</a></li><li><a onClick="slide(\'actualcredits.html\')" >View Actual Credits</a></li><li><a onClick="slide(\'notifications.html\')">Send Notifications</a></li><li><a onClick="slide(\'deliverycutting.html\')" >Delivery Cutting</a></li><li><a onClick="slide(\'deliveryusers.html\')" >Delivery Cutting Users List</a></li><li><a onClick="slide(\'website.html\')" >Website Settings</a></li><li><a onClick="slide(\'checkdnd.html\')" >Check DND Number</a></li><li><a onClick="slide(\'blocknumber.html\')" >Block Number</a></li><li><a onClick="slide(\'mysmpptransactions.html\')" >My Transactions</a></li><li><a onClick="slide(\'smppmycredits.html\')" >Available Credits</a></li></ul></li>';
	
	jQuery('.list-accordion').html(menuhtml);
	
}

/********End Left menu********/


 

	 function slide(hrf) {
		 
		 window.plugins.nativepagetransitions.flip({
				 'backgroundColor' : "#BBBBBB",
				'direction': 'up',
				'duration': 2000,
				"href" : hrf
            });
			  
  }
  
  
   function logout() {
	   
	   window.localStorage.removeItem("loggedIn");
	     window.localStorage.removeItem("userdetail");
	    window.localStorage.removeItem("loggedwithfb");
	      
	   slide('login.html');
	   
   }
   
   function viewprofile() {
	   
   }
   
   
   function addrightmenu(logged_in)
   {
	   
	  
		  
		
		  
		  
		  
		   datastring='logged_in='+logged_in;
			
											
							jQuery.ajax({
									
									type:'GET',
									contentType: 'application/json',
									 dataType: 'jsonp',
									
									url:'http://manage.staticking.net/index.php/servicessms/rightmenuapi',
									data:datastring,
									

									
									success:function(data)
									{
										//  alert(JSON.stringify(data.routes));
										  
										 var userdata =data.userdata;
										 var acc_type=userdata.acc_type;
										 var usercredits=data.usercredits;
										 
										 var actualcredits=data.actualcredits;
										 
																				 
										 
										 
		 var creditmenu='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Promotional<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.promotional+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Promotional 1<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.promotional1+'</span></li>';
          creditmenu+=' <li class="chat-u-online"><a href="#"><span class="chat-u-info">Promo Sender ID<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.promosenderid+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Transactional<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.transactional+'</span></li>';
          creditmenu+=' <li class="chat-u-online"><a href="#"><span class="chat-u-info">Transactional 2<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.transactional2+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">API Promotional (PA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.apipromotional+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info"> API Promo Sender ID  (PSA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.apipromosenderid+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info"> API Transactional  (TA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+usercredits.apitransactional+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Voice Sms<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+usercredits.voicesms+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Social Media<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+usercredits.socialmedia+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Bulk Email<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+usercredits.bulkemail+'</span></li>';
          creditmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Android App Installation<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+usercredits.androidapp+'</span></li>';
		  
		  jQuery('#creditslist').html(creditmenu);
										  	
			
             if(Object.keys(actualcredits).length>0)
			 {
				  var acualmenu='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Promotional<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.promotional+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Promotional1<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.promotional1+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Promo Sender ID<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.promosenderid+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Transactional<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.transactional+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Transactional 2<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.transactional2+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">API Promotional (PA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.apipromotional+'</span></li>';
	         acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">API Promo Sender ID (PSA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.apipromosenderid+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">API Transactional (TA)<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">'+actualcredits.apitransactional+'</span></li>';
	         acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Social Media<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+actualcredits.socialmedia+'</span></li>';
             acualmenu+='<li class="chat-u-online"><a href="#"><span class="chat-u-info">Bulk Email<cite>Route</cite></span></a><span class="chat-u-status" style="color:green;">Rs. '+actualcredits.bulkemail+'</span></li>';
			
		 
		  jQuery('#actuallist').html(acualmenu);
				 
			 }else
			 {
				 
				 jQuery('#actmn').hide();
				 
			 }
			
										 			  

									}

									

								

							});
	
	   
   }
   
   function setuserinfo(logged_in)
   {
	   
	           var loggedwithfb= window.localStorage.getItem("loggedwithfb");
			   
			     var userdetail= JSON.parse(window.localStorage.getItem("userdetail"));
				  
				  if(loggedwithfb==1)
				  {
				  
				    
					 
				        var username = userdetail.name;
						var userin=username+' <cite>'+userdetail.email+'</cite>'
						jQuery('#uname').html(userin);
						jQuery('#uname1').html(username);
						var picture='<img src="'+window.localStorage.getItem("picture")+'"  style="height: 50px;width: 50px;" class="img-responsive">';
						jQuery('.user-thumb').html(picture);
				  
				  
				  }else
				  
				  {

						var username = userdetail.username;
						var userin=username+' <cite>'+userdetail.email+'</cite>'
						jQuery('#uname').html(userin);
						
						jQuery('#uname1').html(username);
						
					    var ufna=username.charAt(0);
						
						jQuery('#proicon').html(ufna.toUpperCase());
				  
				  }  
	   
   }
   
  function setuserinfoinner(logged_in)
   {
	   
	      var loggedwithfb= window.localStorage.getItem("loggedwithfb");
			   
			     var userdetail= JSON.parse(window.localStorage.getItem("userdetail"));
				  
				  if(loggedwithfb==1)
				  {
				  
				    
					 
				        var username = userdetail.name;
						var userin=username+' <cite>'+userdetail.email+'</cite>'
						jQuery('#uname').html(userin);
						
						var picture='<img src="'+window.localStorage.getItem("picture")+'" style="height: 50px;width: 50px;"  class="img-responsive">';
						jQuery('.user-thumb').html(picture);
				  
				  
				  }else
				  
				  {

						var username = userdetail.username;
						var userin=username+' <cite>'+userdetail.email+'</cite>'
						jQuery('#uname').html(userin);
						
						
						
					    var ufna=username.charAt(0);
						
						jQuery('#proicon').html(ufna.toUpperCase());
				  
				  } 
	   
   }
   
   app.initialize();
   
   
   