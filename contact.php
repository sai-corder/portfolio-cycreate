<?php
// POSTでアクセスされたかチェック
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contact.html");
    exit;
}

// ここではバリデーションやデータ取得だけ行い、メールは送らない
$company = htmlspecialchars($_POST['company'] ?? '', ENT_QUOTES);
$name = htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES);
$tel1 = htmlspecialchars($_POST['tel1'] ?? '', ENT_QUOTES);
$tel2 = htmlspecialchars($_POST['tel2'] ?? '', ENT_QUOTES);
$tel3 = htmlspecialchars($_POST['tel3'] ?? '', ENT_QUOTES);
$email = htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES);
$pref = htmlspecialchars($_POST['prefecture'] ?? '', ENT_QUOTES);
$inquiry = htmlspecialchars($_POST['inquiry'] ?? '', ENT_QUOTES);
$text = htmlspecialchars($_POST['text'] ?? '', ENT_QUOTES);

// 必要であればここでログファイルに保存したりできます（任意）

// 完了ページへリダイレクト
header("Location: thanks.html");
exit;
?>
