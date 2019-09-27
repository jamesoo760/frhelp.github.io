$(document).on('click','#myTab > li', function(e){
  var oldTab = $("#myTab li.active").removeClass("active").find("a[data-toggle='tab']")
  $(oldTab.attr("href")).removeClass("active")
  
  var newTab = $(this).addClass("active").find("a[data-toggle='tab']")
  $(oldTab.attr("href")).addClass("active")
  
  refreshTabHistory(false,$(this).attr('id').substring(4))
})



var currentTabId = ''
var pageCounter = 0

function addTab(id,text,url,innerTab) {
  if($('#myTab #tab-' + id).length > 0) {
    $('#myTab #tab-' + id + ' a').tab('show')
  }else{
    var tab_id = "tab-" + id,
    tab_content_id = "tab-content-" + id
    
    $("#myTab > li").removeClass("active")
    $("#myTab").append("<li id='" + tab_id + "' class='active'><a data-toggle='tab' href='#" + tab_content_id + "'>" + text + "</a>" + ("<i class='fa fa-times' onclick='deleteTab(\"" + id + "\")'></i>") + "</li>")
  }
}


function deleteTab(id){
  var tabJQ = $("#tab-"+id),
  tabContentJQ = $("#tab-content-" + id);    
    
  if(!tabJQ.hasClass("active")){
    tabJQ.remove();
    tabContentJQ.remove();
    refreshTabHistory(true/*isDelete*/,id);
  }else{    
      tabJQ.remove();
      tabContentJQ.remove();
      refreshTabHistory(true/*isDelete*/,id);
      $('#tab-' + currentTabId + ' > a').tab('show').click();
    }
    refreshWidth();
  }






var btns = document.getElementById('myTab').getElementsByTagName('li');
    var tabCon = document.getElementById('tabCon');
    for (var i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function(){
            for (var i = 0; i < btns.length; i++) {
                btns[i].className = '';
            };
            this.className = 'select';
            tabCon.src = 'model'+(this.index+1)+'.html';
        }
    };





//切換tabs
    $(function(){
        var $li = $('.top ul li');
            $($li. eq(0) .addClass('on').find('a').attr('href')).siblings('.bottom').hide();
            $li.click(function(){
                $($(this).find('a'). attr ('href')).show().siblings ('.bottom').hide();
                $(this).addClass('on'). siblings ('.on').removeClass('on');
            });
        });
    //點選.sign變藍
    $("li.minbutton").click(
      function() {
        $(this).find("span.sign").addClass("on");
      }
    );
    //展開收合
    jQuery(document).ready(function(){
        var sidebar = $('.sidebar');
        if( sidebar.length > 0 ) {
            sidebar.each(function(){
                //detect change in the input[type="checkbox"] value
                $(this).on('change', 'input[type="checkbox"]', function(){
                    var checkbox = $(this);
                    console.log(checkbox.prop('checked'));
                    ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
                });
            });
        }
    });





function ChangeString(){
    var NewStringValue = $("a#doc-a00-02 span.text").value;
    $("#new").html = NewStringValue;
}