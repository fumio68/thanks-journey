# README

### アプリ名  Thanks Journey

  URL:https://thanks-journey.herokuapp.com/

  ※レスポンシブデザインにはまだ対応できていないため、パソコン画面でご覧ください
  ![スクリーンショット 2020-03-10 22 47 46](https://user-images.githubusercontent.com/59637985/76703931-d3e38200-6718-11ea-99f0-9ab14f15e576.png)

  ![スクリーンショット 2020-03-10 23 12 26](https://user-images.githubusercontent.com/59637985/76703939-e3fb6180-6718-11ea-8c09-a49db2119176.png)


### 概要と目的

  日々の暮らしの中で、感謝したことを記録するためのアプリです。感謝を意識するきっかけにしていただき、物事の良い点を見る習慣をつけてもらうことで、ユーザーの幸福度を高めることを目的としています。

### アプリ開発のきっかけ

  私にとって初めての個人アプリであり、「せっかく作るのであれば、人を幸せにするアプリを作りたい」という思いから開発しました。   自分の技術力でその思いを実現するにはどうすればいいかを考え、感謝を記録するというテーマを設定しました。

  その主な理由は、幸せの尺度は個人の思考によるものであり、SNSなどでバッシングや過剰な批判などの否定的な情報を多く目にする現代では、肯定的な考えや幸福感を持ちづらいのではないかと考えたためです。   感謝を記録することを通じて、物事を肯定的に捉える習慣をつけ、ユーザーが幸福感を持つ機会が増えることを期待しています。

### テスト用ID等

  Sign inで次のメールアドレスとパスワードを入力いただくとログインできます。
  - メールアドレス   test@gmail.com
  - パスワード   testpass
  ![スクリーンショット 2020-03-10 22 57 39](https://user-images.githubusercontent.com/59637985/76703947-f9708b80-6718-11ea-9420-dd46f1bbf0fe.png)


### アプリの機能紹介
   - トップ画面でユーザー登録をすると、記録したい内容を投稿できるメイン画面に移動します
   - 入力フォームでは、写真のアイコンをクリックして写真を選ぶことで、テキストと一緒に写真を投稿することができます
   - 投稿をすると、それを祝福するメッセージが出現し、船のアイコンが動きます

  <img width="700" alt="スクリーンショット 2020-03-10 22 50 21" src="https://user-images.githubusercontent.com/59637985/76320163-9d29f800-6323-11ea-94a2-b9a628a3f41f.gif">

   - 投稿は本のアイコンから一覧でき、各投稿は編集、削除ができます

  ![スクリーンショット 2020-03-10 22 50 21](https://user-images.githubusercontent.com/59637985/76703952-01303000-6719-11ea-90a2-89ccf536ecef.png)

   - ペンのアイコンからはユーザー情報の編集ができます
   - ベッドのアイコンはログアウトです
   - Twitter・Facebookへのリンクは、素敵な感謝のエピソードがあった場合には、SNSでも発信していただきたいという思いから設置しています

### 工夫した点
   - アプリを使ってみたくなるようなデザインにすることを工夫しました。アプリの機能に合わせて日記などのようなデザインでは面白くないと考え、「人生≒旅」という発想から船旅のデザインを採用しました。また、老若男女に楽しんでもらえるように、映画などでも人気のある海賊の航海のようなレトロな船旅のイメージで全画面をデザインしています。
   - アニメーションを積極的に導入しました。全てが静的な要素で構成されているアプリでは、ユーザーに関心を持ってもらうのが難しいと考えたためです。特に、ユーザーに投稿することを楽しんでもらえるよう、投稿ごとにアニメーションが発動するように設定しています。

### 使用した技術
   - Haml
   - Sass
   - Ruby(2.5.1)
   - Ruby on Rails(5.2.4.1)
   - jQuery
   - Bootstrap
