

//$('input[name="F26b42c30c06ac6c80adea3219aaebd5a1136d8ea_Form_DataViewer2_Customer_26faea88eaa35bcb567e7a3f68388f87685b49ce_Option"]').val('EDIT_1');


$('[Form-Action-click]').on('click',function () {
    
    var nameO = $(this).attr('LinkOption');
    $('[name="' + nameO + '"]').attr('value',$(this).attr('Action'));
    
    var nameF = $(this).attr('LinkForm');
    $('[name="' + nameF + '"]').submit();
});

$('[Form-Action-change]').on('change',function () {
    
    var nameO = $(this).attr('LinkOption');
    $('[name="' + nameO + '"]').attr('value',$(this).attr('Action'));
    
    var nameF = $(this).attr('LinkForm');
    $('[name="' + nameF + '"]').submit();
});

$(function(){ 
    // $.switcher(); 
    $.switcher('.ONOFF');
  }); 


//$('#F26b42c30c06ac6c80adea3219aaebd5a1136d8ea_Form_DataViewer2_Customer_26faea88eaa35bcb567e7a3f68388f87685b49ce').submit();