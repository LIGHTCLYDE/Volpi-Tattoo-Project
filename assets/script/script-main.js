$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});



// ============================================ //

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}



// ============================================ //

function sendEmail() {
  Email.send({
      SecureToken : 'ee2b918a-0756-4843-a48d-90c3fd001921',
      To : 'volpitattoo@outlook.com',
      From : document.getElementById("email").value,
      Subject : "Novo E-mail de contato recebido",
      Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Telefone: " + document.getElementById("phone").value
          + "<br> Mensagem: " + document.getElementById("message").value
          
  }).then(
    message => alert("E-mail Enviado Com Sucesso")
  );
}


// ============================================ //

function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
  document.getElementById("main").style.marginLeft = "250px"
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("main").style.marginLeft = "0"
  document.body.style.backgroundColor = "white";
}