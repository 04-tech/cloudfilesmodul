$(document).ready(function(){
      $(".module1").dblclick(()=>{
     location.href="https://cloudfiles.io"
      });
        $("#btn").click(()=>{
        $("#textarea").css("display","block");
        $("#nametext").css("display","block");
        $(".main").css("display","none");
        $("#name").css("display","none");
    });
    $(".module1").mouseleave(()=>{
      var textarea1=document.getElementById("nametext").value;
      if(textarea1!="")
      localStorage.setItem("text1",textarea1);
      else
          localStorage.setItem("text1",localdata2);
        var textarea=document.getElementById("textarea").value;
        if(textarea!="")
        localStorage.setItem("text",textarea);
        else
            localStorage.setItem("text",localdata);
            localdata2=localStorage.getItem("text1");
             localdata=localStorage.getItem("text");
        document.getElementById("main").innerHTML=localdata;
        document.getElementById("name").innerHTML=localdata2;
        // var nametext=document.getElementById("nametext").value;
        // console.log(textarea);
        $("#btn").css("display","none");
        if(textarea!=""&&textarea1!=""){
      document.getElementById("main").innerHTML=textarea;
      document.getElementById("name").innerHTML=textarea1;
        }
      $("#textarea").css("display","none");
         $("#nametext").css("display","none");
        $(".main").css("display","block");  
        $("#name").css("display","block");
    });
      $(".module1").mouseenter(()=>{
          $("#btn").css("display","block");
      });
      let localdata2=localStorage.getItem("text1");
      document.getElementById("name").innerHTML=localdata2;
      let localdata=localStorage.getItem("text");
      document.getElementById("main").innerHTML=localdata;

// document.querySelector("#myfileinput").addEventListener("change",()=>{
//   const reader=new FileReader();
//   reader.addEventListener("load",()=>{
//     localStorage.setItem("image",reader.result);
//   })
//   reader.readAsDataURL(this.files[0]);
// });
// document.addEventListener("DOMContentLoaded",()=>{
//   const recentImageDataUrl=localStorage.getItem("image");
//    if(recentImageDataUrl){
//      document.querySelector("#image").setAttribute("src",recentImageDataUrl);
//    }
// });
});
 


   
