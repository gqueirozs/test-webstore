export async function login({ email, password }:{email:string, password:string}) {
  const formdata = new FormData();
        formdata.append("tipo", "Login");
        formdata.append("user", email);
        formdata.append("password", password);
        
  const requestOptions = {
    method: "POST",
    body: formdata
  };
  
  const res = await fetch("https://wsapi.webstore.net.br/parceiro/login", requestOptions)
  const data:any = await res.json();

  if (data.erro == 400 || data.erro == 404) throw data.mensagem
  return data;
}

export async function recoverPass({email}:{email:string}) {
  const formdata = new FormData();
  formdata.append("email", email);

  var requestOptions = {
      method: 'POST',
      body: formdata,
  };

  const res = await fetch("https://wsapi.webstore.net.br/parceiro/lembrar", requestOptions)
  const data:any = await res.json();

  if (data.erro == 400 || data.erro == 404) throw data.mensagem
  return data;
}