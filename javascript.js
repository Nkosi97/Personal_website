function validate(){
    var FirstName=document.getElementById("fname");
    var LastName=document.getElementById("lname");
    var Subject=document.getElementById("subject");
  
    if(FirstName.value()=="" || LastName.value()=="" || Subject.value()=="")
      {
        alert("No blanks allowed");
        return false;
      }
      else
      {
        true;
      }
  
  
  }