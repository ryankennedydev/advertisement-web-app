let FundoColor = document.getElementById("mudarTema")
let user = ""
FundoColor.addEventListener("click", function(){
    let iconTema = document.getElementById("temaIcon")

    if (document.body.style.backgroundColor === "black"){
        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
        iconTema.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png"; // Lua
        
    }
    else {
        let colorsky = document.getElementById("colorBluesky")
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        iconTema.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sol
    }
})

let loginTela = document.querySelector(".login")
loginTela.style.display = "none";

let loginaccept = false

let login = document.getElementById("buttonLogin")
let loginCancelar = document.getElementById("loginCancelar")
let loginSair = document.getElementById("loginSair")
loginSair.style.display = "none"

login.addEventListener("click",function() {

    loginTela.style.display = "block";



    let fazerLogin = document.getElementById("loginEntrar")

    fazerLogin.addEventListener("click",function(){

    let email = document.getElementById("loginEmail").value.trim()
    let password = document.getElementById("loginSenha").value.trim()
    let erroPassword = document.getElementById("erroSenha")    
    let erroEmail = document.getElementById("erroEmail")
        if (!email){
            erroEmail.innerHTML = "O email não pode estar vazio!"
        }
        else if(password.length > 15){
            erroPassword.innerHTML = "sua senha deve conter menos que 16 caracteres"
        }
        else if (password.length <4){
            erroPassword.innerHTML = "sua senha deve conter mais de 3 caracteres"
            
        }
        
        else if (email && password.length > 3 && password.length < 16) {
            
            let userLogado = document.getElementById("userLogado")
            user = email
            userLogado.innerHTML = user
            erroPassword.innerHTML = ""
            loginTela.style.display = "none"
            loginSair.style.display = "block"
            login.style.display = "none"
            erroEmail.innerHTML = ""
            erroPassword.innerHTML =""
            loginaccept = true
            

        }
        

    })

})

loginCancelar.addEventListener("click",function(){
    
    user = ""
    loginTela.style.display = "none";

})


loginSair.addEventListener("click",function(){
    user = ""
    loginaccept = false
    let userLogado = document.getElementById("userLogado")
    userLogado.innerHTML = "Você não está logado"
    loginSair.style.display = "none"
    login.style.display = "block"
    telaPostar.style.display = "none"

})


let telaPostar = document.querySelector(".postarAnuncio")
telaPostar.style.display = "none"
postarAds = document.getElementById("postarAds")

postarAds.addEventListener("click",function(){
    if (loginaccept === true){
        telaPostar.style.display = "block"
        

    }

    else {
        let alerta = document.getElementById("erroAdicionar")

        alerta.style.display = "block"

        setTimeout(() => {
            alerta.style.display = "none"
        }, 3000)
                
            }

 })
let publicarAds = document.getElementById("buttonPublicar")
       

publicarAds.addEventListener("click",function(){

        let tituloAds = document.getElementById("tituloAds").value
        
        let imagemAds = document.getElementById("imagemAds")
        let descAds = document.getElementById("descAds").value
        let linkAds = document.getElementById("linkAds").value

        imagemAds = imagemAds.files[0]
        if (imagemAds) {
            imagemAds = URL.createObjectURL(imagemAds)
        }
        
        
        let areaAnuncio = document.querySelector(".areaAnuncios")
        let publicarAds = document.getElementById("buttonPublicar")
        let erro = document.getElementById("erroTodos")
        let erroTitulo = document.getElementById("erroTitulo")
        let erroDesc = document.getElementById("erroDesc")
            
            if (tituloAds.length >= 30){
                erroTitulo.innerHTML = `<span id="erro">Seu titulo deve ser menor que 30 letras</span>`
                return
            }
            
            if (descAds.length >= 60){
                erroDesc.innerHTML = `<span id="erro">Sua descrição deve ser menor que 60 letras</span>`
                return
            }
            if (!tituloAds || !imagemAds || !descAds || !linkAds) {
                erro.innerHTML = `<span id="erro">Selecione todas as opções</span>`
                return
            }
            else  {
                areaAnuncio.innerHTML += `
            <div id="anuncioPublicado">
                <img src="${imagemAds}" alt="image">

                <div id="informacoes">
                    <h1>${tituloAds}</h1>
                    <p>${descAds}</p>
                    <a href="${linkAds}">saiba mais</a>
                </div>
            </div>
            `
            
            document.getElementById("imagemAds").value = ""
            document.getElementById("tituloAds").value = ""
            document.getElementById("descAds").value = ""
            document.getElementById("linkAds").value = ""
            descAds = ""
            tituloAds = ""
            imagemAds = ""
            linkAds = ""
            document.getElementById("erroTitulo").innerHTML = ""
            document.getElementById("erroDesc").innerHTML = ""
            document.getElementById("erroTodos").innerHTML = ""  
            
            telaPostar.style.display = "none"

            let alertaPostado = document.getElementById("notificacaoPost")

            alertaPostado.style.display = "block"

            setTimeout(() => {
                alertaPostado.style.display = "none"
            },3000)

            }

        })
        
let cancelarAds = document.getElementById("cancelarPublicar")
    cancelarAds.addEventListener("click",function(){
        document.getElementById("imagemAds").value = ""
        document.getElementById("tituloAds").value = ""
        document.getElementById("descAds").value = ""
        document.getElementById("linkAds").value = ""
        document.getElementById("erroTitulo").innerHTML = ""
        document.getElementById("erroDesc").innerHTML = ""
        document.getElementById("erroTodos").innerHTML = ""        
        telaPostar.style.display = "none"
        })

