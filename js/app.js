var NewApp = new Appcraft({
    modalTitle: 'Alert',
    modalButtonOk: 'Ok',
    modalButtonCancel: 'cancel',
    modalPreloaderTitle: 'Please wait..',
    actionsCloseByOutside: false,
    popupCloseByOutside: false,
    sortable: false,
    smartSelectInPopup: false,
    cache: true,
    template7Pages: true,
    precompileTemplates: true,
    swipeBackPageAnimateShadow: true,
    swipeBackPageActiveArea: 500,
    swipeBackPageThreshold: 50
});

var mainView = NewApp.addView('.view-main', {
    dynamicNavbar: true
});


function checkMediaRecFileExist() {
    checkFileOnly = true;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function onSuccessFileSystem(){}, null);
}


function onBackKeyDown() {
    $('#div_apps').hide();
$('#div_home').show();

}

//To gen or not to gen icons.
function appsIconCheck() {
    window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function(fs) {
        fs.root.getDirectory('/data/data/com.awaa.domlauncher/icons', {
                create: false
            },
            function(dirEntry) {
                window.installedapps.getApps({
                    success: saveapps
                });
            },
            function() {
                window.installedapps.getIcons({
                    success: saveapps
                });
            });
    }, null);
}

function saveapps(returnVal){
					var appListArray = JSON.parse(returnVal.returnVal);
						        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
            fileSystem.root.getFile("slauncher/apps.json", {create: true, exclusive: false}, function(fileEntry) {
                fileEntry.createWriter(function(writer) {
                    writer.onwriteend = function() {
					    $.getJSON(appListArray, function(data) {
                         localStorage.setItem("apps_count", data.length);
						 
						});
						//runThiserror("Success");
                    };
                    writer.write(JSON.stringify(appListArray));
					
                }, onError);
            }, onError);
        }, onError);
}
//appsIconCheck();

function onError() {
runThiserror("error");
}


var p1 = "apps.json";
var p2 = "apps.json";

//var p1 = "file:///sdcard/slauncher/apps.json";
//var p2 = "file:///storage/sdcard0/slauncher/apps.json";
//var p3 = "file:///storage/sdcard1/slauncher/apps.json";

	
//Codes for switching between path1 and path2 starts here
	$.get(
		p1, 
		function(data,status,xhr){ 
			var myStatusTemp = status;
			localStorage.setItem("theStatus", myStatusTemp);
			//break;
			//alert(status);
		},
		"json"
		
	);
	
	function dothis1(){
		var myStatus = localStorage.getItem("theStatus");
		//alert("myStatus: " + myStatus);
		if(myStatus != "" && myStatus != null){
			//alert("Success!");
			//localStorage.removeItem("theStatus");
		}else if(myStatus == "" || myStatus == null){
			//alert("Failed!");
			//localStorage.removeItem("theStatus");
		}
		
		//alert("Status1: " + localStorage.getItem("theStatus"));
		var myStatus2 = localStorage.getItem("theStatus")
		if(myStatus2 != "" && myStatus2 != null){
			//alert("Success!2");
			var path = p1;
			//localStorage.removeItem("theStatus");
		}else if(myStatus2 == "" || myStatus2 == null){
			//alert("Failed!2");
			path = p2;
			//localStorage.removeItem("theStatus");
		}
		
		//This is not just Code Redundancy, it is very important to leave it so!
		
		return path;
	}
//dothis1();
//alert(dothis1());

//This empties the stored status

var myPath = dothis1();
if(dothis1()){
	localStorage.removeItem("theStatus");
	//alert("testedStatus: " + localStorage.getItem("theStatus"));
}

//Codes for switching between  path1 and path2 ends here



//alert("myPath: " + myPath);
function generateApps() {
//alert("myPath2: " + myPath);
$('#prodapps').empty();

function failed(){
runThiserror('Failed');
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function gotFS(fileSystem) {
   fileSystem.root.getDirectory("slauncher", {create: true}, function gotDir(dirEntry) {});
   generateApps();
localStorage.setItem("dir", 'Exist');
}, function fail(){});
checkMediaRecFileExist();
}
    // window.resolveLocalFileSystemURL('slauncher/apps.json', fileExist, failed);
  //  function fileExist(){
    //var p1 = "file:///storage/sdcard0/slauncher/apps.json";
    //var p2 = "file:///storage/sdcard1/slauncher/apps.json";
	
	
	
	
	//$.ajax({url: p2, success: function(result){
	//alert("Working " + myPath);
    $.getJSON(myPath, function(data) {
	//runThiserror("Loading p1");
	//alert("Working");
	var apkPackage = [];
	var apkName = [];
	
$.each(data, function(index, app) {
if(app.package == 'com.chronicles.sb'){}
	else if(app.package == 'com.smartOS'){}
    else if(app.package == 'com.extwebtech.bibliography'){}
    else if(app.package == 'com.Phaedrus.EarwigFree'){}
    else if(app.package == 'com.funbox.englishidioms'){}
    else if(app.package == 'binh.app.englishidiom'){}
    else if(app.package == 'air.com.revisionbuddies.gcsemaths'){}
    else if(app.package == 'com.educationapps.gojimo'){}
    else if(app.package == 'com.solvus_lab.android.BibleEN_kjv'){}
    else if(app.package == 'org.khanacademy.android'){}
    else if(app.package == 'com.learnerscloud.igcsemaths.videos'){}
    else if(app.package == 'org.zezi.gb'){}
    else if(app.package == 'com.mobisystems.msdict.embedded.wireless.oxford.dictionaryofenglish'){}
    else if(app.package == 'com.aspartame.RemindMe'){}
    else if(app.package == 'com.zapp2learn.app'){}
    else if(app.package == 'com.kuntec.braincafe'){}
    else if(app.package == 'com.icenta.sudoku.ui'){}
    else if(app.package == 'com.underwater.geoquiz'){}
    else if(app.package == 'org.pondar.mathquizfree'){}
    else if(app.package == 'air.com.panapps.PeriodicTable'){}
    else if(app.package == 'com.microblink.photomath'){}
    else if(app.package == 'com.physics.quiz.game1'){}
    else if(app.package == 'com.codeansoftware.speakforme'){}
    else if(app.package == 'org.urbian.android.quiz.bible.demo'){}
    else if(app.package == 'com.socratica.mobile.words'){}
    else if(app.package == 'lammar.flags'){}
    else if(app.package == 'org.unver.derstakvimi'){}
    else if(app.package == 'com.learningmate.goclass.view'){}
    else if(app.package == 'org.edx.mobile'){}
    else if(app.package == 'de.rakuun.MyClassSchedule.free'){}
    else if(app.package == 'com.speedAnatomy.speedAnatomyLite'){}
    else if(app.package == 'com.studyblue'){}
    else if(app.package == 'com.class123.teacher'){}
    else if(app.package == 'com.udacity.android'){}
    else if(app.package == 'com.udemy.android'){}
    else if(app.package == 'bbc.mobile.news.ww'){}
    else if(app.package == 'com.google.android.apps.blogger'){}
    else if(app.package == 'com.cnn.mobile.android.phone'){}
    else if(app.package == 'com.google.android.apps.plus'){}
    else if(app.package == 'com.facebook.katana'){}
    else if(app.package == 'com.google.android.youtube'){}
    else if(app.package == 'com.skype.raider'){}
    else if(app.package == 'com.twitter.android'){}
    else if(app.package == 'com.whatsapp'){}
    else if(app.package == 'com.mybio.apps'){}
    else if(app.package == 'com.school.app'){}
    else if(app.package == 'com.flyersoft.moonreader'){}
    else if(app.package == 'com.hed.app'){}
    else if(app.package == 'com.app.dailymanna2015'){}
    else if(app.package == 'com.youth.life'){}	
    else if(app.package == 'com.google.android.apps.docs.editors.docs'){}
    else if(app.package == 'ng.com.efiko.quiz'){}
    else if(app.package == 'com.google.android.apps.classroom'){}
    else if(app.package == 'com.gidimo'){}
    else if(app.package == 'com.google.android.apps.docs.editors.sheets'){}
    else if(app.package == 'com.twitter.android'){}
    else if(app.package == 'com.whatsapp'){}
    else if(app.package == 'com.facebook.katana'){}
    else if(app.package == 'com.linkedin.android'){}
    else if(app.package == 'com.google.android.apps.plus'){}
    else if(app.package == 'com.bbm'){}
    else if(app.package == 'com.tencent.mm'){}
    else if(app.package == 'com.skype.raider'){}
    else if(app.package == 'com.sbreader'){}
    else if(app.package == 'org.mozilla.firefox_beta'){}
    else if(app.package == 'com.android.browser'){}
    else if(app.package == 'com.chrome.beta'){}
    else if(app.package == 'com.android.chrome'){}
    else if(app.package == 'com.mxtech.videoplayer.ad'){}
    else if(app.package == 'com.qmobi.videoeditor'){}
    else {
	
		//alert(app.package);
		apkPackage[apkPackage.length] = app.package;
		apkName[apkName.length] = app.name;
	
		function openApp(e){
			//alert("Kai" + apkPackage);
			//alert("Kai" + apkName);
			testIt(e);
			
			var checkApk = localStorage.getItem("apkName");
			//alert(checkApk);
			for(var l = 0; l < apkPackage.length; l++){
				//alert(apkPackage[l]);
				if(checkApk == apkName[l]){
					//alert("Done");
					//alert("Kai" + apkPackage[l]);
					
					try{
						window.launch.app({package: apkPackage[l]});
					}catch(e){
						runThiserror(e.message);
					}
				}
				
				
			}
		}
		
		function testIt(e){
       
			if(!e){
				var e = window.event;
			}
			if(e.target){
				targ = e.target;
			}else if(e.srcElement){
				targ = e.srcElement;
			}
			var option;

			var parent;
			option = targ.className;
			content = targ.innerHTML;
			parent = targ.parentNode;
			//alert(parent.querySelector("span").innerHTML);
			//alert(targ.nodeName);
			if(targ.nodeName == "DIV"){
				var apktext = targ.querySelector("span").innerHTML;
			}else{
				 apktext = parent.querySelector("span").innerHTML;
			}
			//alert("option: " +option + "Content: "+content);
			parentOfOption = parent;

			//alert(apktext);

			localStorage.setItem("apkName", apktext);


		}
		
		//$('#prodapps').append('<div class="tab col-md-3 col-sm-3 col-lg-2 col-xs-4"><a href="#" onclick="try{window.launch.app({package: '+app.package+'});}catch(e){runThiserror(e.message);}"><img data-appName="' + app.name + '" data-appPackage="' + app.package + '" data-appPackage="' + app.activity + '" src="' + app.path + '" id="app_app" /><span style="padding-top: 12px; font-size: 18px;">' + app.name + '</span></a></div>');
		//$('#prodapps').append('<div class="tab col-md-3 col-sm-3 col-lg-2 col-xs-4"><a href="#" onclick="openApp(e);"><img data-appName="' + app.name + '" data-appPackage="' + app.package + '" data-appPackage="' + app.activity + '" src="' + app.path + '" id="app_app" /><span style="padding-top: 12px; font-size: 18px;">' + app.name + '</span></a></div>');
		//alert("Cool");
		
		var apks = '<div class="tab col-md-3 col-sm-3 col-lg-2 col-xs-4"><a href="#"  onclick=""><div id = "apkImg"><img data-appName="' + app.name + '" data-appPackage="' + app.package + '" data-appPackage="' + app.activity + '" src="' + app.path + '" id="app_app" /><span style="padding-top: 12px; font-size: 18px;">' + app.name + '</span></div></a></div>';
		var prodapps = document.querySelector("#prodapps");
		//alert(app.path);
		//alert(apks);
		prodapps.innerHTML += apks;
		
		var apkImg = document.querySelectorAll("#apkImg");
		for(var r = 0; r < apkImg.length; r++){
			apkImg[r].addEventListener("click", openApp, false);
			
		}
	}
});
});      
    
	
//}

	NewApp.hideIndicator();

}	


// Launch Apps
$(document).on('tap', '#this_app', function() {
    var pkg = $(this).attr('data-appPackage');
    var act = $(this).attr('data-appActivity');
    window.launch.app({
        package: pkg,
        activity: act
    });
});


function compare(a, b) {
    if (a.name < b.name)
    return - 1;
    if (a.name > b.name)
    return 1;
    return 0;
}

//var checking;
function slide2(x){
var owl = $('.owl-carousel');
owl.owlCarousel();
owl.trigger('to.owl.carousel', [x, 300]);

 
scrollWin();
}

function scrollWin() {
    //alert("Yes");
	//alert(window.outerHeight);
	var html = document.documentElement;
	html.scrollTop = 0;
}

function openHome(x){
$('#div_home').hide();
var owl = $('.owl-carousel');
owl.owlCarousel();
owl.trigger('to.owl.carousel', [x, 300]);
$('#div_apps').show();
}

function back(){
$('#div_apps').hide();
$('#div_home').show();
}

function runThiserror(y){
	try {
	window.plugins.toast.showWithOptions({message: y,duration: "long", position: "bottom", addPixelsY: 0},function(a){},function(b){});		
	}catch(e){}
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	  items: 1,
	  dots: true
  });
});