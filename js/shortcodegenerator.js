jQuery("#vegas_shortcodeg_button").click(function(){jQuery("#example_shortcode").toggle("slow",function(){});jQuery("#vegas-shortcode-generator").toggle("slow",function(){});var e=jQuery("#vegas_shortcodeg_button").val();if(e==="Generate Your Own Shortcode"){jQuery("#vegas_shortcodeg_button").val("View Old Shortcode")}if(e==="Generate a New Shortcode"){jQuery("#vegas_shortcodeg_button").val("View Old Shortcode")}if(e==="View Old Shortcode"){jQuery("#vegas_shortcodeg_button").val("Generate a New Shortcode")}});jQuery("#vegas_generate_button").click(function(){jQuery("#generated-shortcode-container").slideDown("slow",function(){});var e="id="+jQuery("#id").val();var t=" fade="+jQuery("#fade").val();var n=" delay="+jQuery("#delay").val();var r=" overlay="+jQuery("#overlay").val();var i=jQuery("#overlay").val();var s=" arrows="+jQuery("#arrows").val();var o=" autoplay="+jQuery("#autoplay").val();var u=" poster="+jQuery("#poster").val();var a=" random="+jQuery("#random").val();if(!i){r=""}var f="[vegas "+e+t+n+r+s+o+u+a+"]";jQuery("#generated-shortcode").val(f)});jQuery("#vegas_help_button").click(function(){jQuery("#vegas-shortcode-generator").toggle("slow",function(){});jQuery("#vegas_shortcodeg_button").prop("disabled",true);jQuery("#vegas-parameter-explaination").toggle("slow",function(){})});jQuery("#vegas_help-back_button").click(function(){jQuery("#vegas-shortcode-generator").toggle("slow",function(){});jQuery("#vegas_shortcodeg_button").prop("disabled",false);jQuery("#vegas-parameter-explaination").toggle("slow",function(){})})