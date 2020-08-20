<?php

$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$token = "911702492:AAHG0Vm3jGvHaoG2WkTEF-sf3Zf4gKH_w5g";
$chat_id = "-302509922";

    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";


        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = "Имя пославшего: " . strip_tags($_POST['name']) . "%0A";
          }
        }

        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }
        if (isset($_POST['email'])) {
          if (!empty($_POST['email'])){
            $email = "email: " . "%2B" . strip_tags($_POST['email']) . "%0A";
          }
        }

        if (isset($_POST['message'])) {
          if (!empty($_POST['message'])){
            $message = "Сообщение: " . strip_tags($_POST['message']);
          }
        }


        // Формируем текст сообщения
        $txt = $name . $phone . $email . $message  ;

        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
          $msgs['error'] = false;
          $msgs['senden'] = true;
          $msgs['statusMesage'] = strip_tags($_POST['name']) .', данные отправленны!' ;
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
          $msgs['error'] =false;
          $msgs['senden'] =  true;
          $msgs['statusMesage'] = strip_tags($_POST['name']) .', данные отправленны!' ;
            echo json_encode($msgs);
          return true;
        } else {
          $msgs['error'] = true;
          $msgs['senden'] = false;
            $msgs['statusMesage'] = 'Ошибка. Данные не отправлены!';
            echo json_encode($msgs);
            die('Ошибка. Данные не отправлены!');
        }

    } else {
      $msgs['statusMesage'] = 'Имя и телефон:обязательные поля!';
      $msgs['error'] = true;
      $msgs['senden'] = false;

        echo json_encode($msgs);
    }
} else {
  // header ("Location: /");
}
?>