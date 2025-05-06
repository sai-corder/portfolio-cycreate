<?php
// セキュリティ対策（XSS）
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>内容確認</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="confirm_page">
<header class="header">
        <div class="wrapper">
            <div class="flex">
                <div class="logo">
                    <a href="index.html"><img src="img/logo.png" alt="株式会社cycreate"></a>
                </div>
                <div class="menu_wrapper">
                    <!-- ハンバーガーメニューのボタン -->
                    <div class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="menu flex" id="menu">
                        <li class="menu_items"><a href="#">会社概要</a></li>
                        <li class="menu_items"><a href="#">サービス</a></li>
                        <li class="menu_items"><a href="#">実績紹介</a></li>
                        <li class="menu_items"><a href="#">お知らせ</a></li>
                        <li class="menu_items"><a href="#">よくある質問</a></li>
                        <li class="menu_items"><a class="btn_contact" href="contact.html">お問い合わせ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="wrapper">
            <div class="confirm_wrapper">
                <h1 class="main_title">ご入力内容の確認</h1>
                <div class="progress flex">
                    <p class="progress_items"><span class="inner_text">step 1</span><br>フォームを入力</p>
                    <div class="line"></div>
                    <p class="progress_items"><span class="inner_text">step 2</span><br>入力内容確認</p>
                    <div class="line"></div>
                    <p class="progress_items"><span class="inner_text">step 3</span><br>お問い合わせ完了</p>
                </div>
                <form action="contact.php" method="post">
                    <dl>
                        <div class="flex">
                            <dt>会社名（屋号）</dt>
                            <dd><?= h($_POST['company']) ?><input type="hidden" name="company" value="<?= h($_POST['company']) ?>"></dd>
                        </div>
                        <div class="flex">
                            <dt>お名前</dt>
                            <dd><?= h($_POST['name']) ?><input type="hidden" name="name" value="<?= h($_POST['name']) ?>"></dd>
                        </div>
                        <div class="flex">
                            <dt>電話番号</dt>
                            <dd><?= h($_POST['tel1']) . '-' . h($_POST['tel2']) . '-' . h($_POST['tel3']) ?>
                                <input type="hidden" name="tel1" value="<?= h($_POST['tel1']) ?>">
                                <input type="hidden" name="tel2" value="<?= h($_POST['tel2']) ?>">
                                <input type="hidden" name="tel3" value="<?= h($_POST['tel3']) ?>">
                            </dd>
                        </div>
                        <div class="flex">
                            <dt>メールアドレス</dt>
                            <dd><?= h($_POST['email']) ?><input type="hidden" name="email" value="<?= h($_POST['email']) ?>"></dd>
                        </div>
                        <div class="flex">
                            <dt>都道府県</dt>
                            <dd><?= h($_POST['prefecture']) ?><input type="hidden" name="prefecture" value="<?= h($_POST['prefecture']) ?>"></dd>
                        </div>
                        <div class="flex">
                            <dt>ご相談内容</dt>
                            <dd><?= h($_POST['inquiry']) ?><input type="hidden" name="inquiry" value="<?= h($_POST['inquiry']) ?>"></dd>
                        </div>
                        <div class="flex">
                            <dt>ご相談内容の詳細</dt>
                            <dd><?= nl2br(h($_POST['text'])) ?><input type="hidden" name="text" value="<?= h($_POST['text']) ?>"></dd>
                        </div>
                    </dl>
                    <div class="btn_wrapper">
                        <button type="button" onclick="history.back()">戻る</button>
                        <input type="submit" class="submit_btn" value="送信する">
                    </div>
                </form>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="wrapper">
            <div class="logo_wrapper">
                <a href="index.html"><img src="img/footer_logo.png" alt="株式会社cycreate"></a>
            </div>
            <ul class="footer_menu">
                <li class="menu_items"><a href="#">会社概要</a></li>
                <li class="menu_items"><a href="#">サービス</a></li>
                <li class="menu_items"><a href="#">実績紹介</a></li>
                <li class="menu_items"><a href="#">お知らせ</a></li>
                <li class="menu_items"><a href="#">よくある質問</a></li>
                <li class="menu_items"><a href="contact.html">お問い合わせ</a></li>
            </ul>
            <div class="sns_wrapper">
                <p class="sns_text">公式SNSはこちら</p>
                <a class="fa-brands fa-instagram" href="https://www.instagram.com/" target="_blank"></a>
                <a class="fa-brands fa-x-twitter" href="https://twitter.com/" target="_blank"></a>
            </div>
            <div class="copy_right">
                <p class="copy_text">Copyright&nbsp;©&nbsp;2025&nbsp;株式会社cycreate&nbsp;All&nbsp;rights&nbsp;reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>
