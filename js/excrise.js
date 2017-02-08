/**
 * Created by Administrator on 2016/12/23.
 */
$(function(){

  function f1(){
    n=999;
    nAdd=function(){n+=1}
    function f2(){
      alert(n);
    }
    return f2;
  }
  f1();

});




