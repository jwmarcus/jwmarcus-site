var form_offset = Math.floor(Math.random() * 20);
$("#form_num_mod").val(form_offset);
$("#form_num_mod_text").html(form_offset.toString());

needMsgs = ["Hey John, I need help with people. ",
            "Hey John, I need help with process. ",
            "Hey John, I need help with technology. "];

function prependMessage(message) {
  var msgEl = document.getElementById('form_text');
  msgEl.value = message + msgEl.value;
  return false;
}
