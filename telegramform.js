



document.querySelector(".form").onsubmit = (event) => 
{

event.preventDefault();

let message= event.target.querySelector('.status-message');
let data = new FormData(event.target);

message.innerHTML=(`Отправка формы...`);
message.style.cssText = 'color: #f9ae3f;';

sendTelegramRequest(data)
.then(data =>

printStatusMessage(data,message)

)
  .catch(err => console.log(err))
}

// отправка в php файл
function sendTelegramRequest(form) 
{
  return fetch( 'send-message-to-telegram.php', {

    method: 'POST',
    body:form,

  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}
// отправка в php файл End

// статус
function printStatusMessage(response,messageHtml) 
{

  if (response.senden ) {
    messageHtml.innerHTML=(``+response.statusMesage+``)
    messageHtml.style.cssText = 'color: #37bc64;';
setTimeout(() => 
{
  messageHtml.style.cssText = 'color: transparent;';
}, 5000);
  }

  else if (response.error) 
{
          messageHtml.innerHTML=(``+response.statusMesage+``)
          messageHtml.style.cssText = 'color: #De5050;';
}

else 
{
  messageHtml.innerHTML=('Что то пошло не так')
  messageHtml.style.cssText = 'color: #De5050;';
}
}


// статус END
