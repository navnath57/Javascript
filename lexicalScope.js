function a() {
  var b = 10;
  c();
  debugger;
  function c() {
    console.log(b);
  }
}
a();
