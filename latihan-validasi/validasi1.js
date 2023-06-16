function validasi(){
    let nomorInput=document.forms["form-nomor"]["nomor"].value;


    if (nomorInput==null || nomorInput==""){
      alert("Harus diisi!");
      return false;
    } 
     else if (nomorInput.length!=12){
      alert("Nomor Harus 12 Digit");
      return false;
    };
 }