function setOutput(value) {

  document.getElementById('output').value += value;
}
function result() {
  let res= document.getElementById('output').value;
  document.getElementById('output').value=eval(res);
}
function clearOut() {
  document.getElementById('output').value="";
}
function del() {
  let del=document.getElementById('output').value;
  document.getElementById('output').value=del.substring(0,del.length-1);

}
