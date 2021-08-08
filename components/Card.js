import React from 'react';
import styles from './Card.module.scss';

const hideText = (
  <>
    防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字防窺文字
  </>
);

const text = (
  <>
    <h6 className={styles['card-description']}>
      Dear 沈子絃:<br></br>
      現在妳是沒有情人的人所以我就是妳暫時的情人，想要在情人節的時候跟妳講一些話
      <br></br>
      我最喜歡跟妳一起玩耍，還有去你家找妳，還有跟妳一起逛街，還有吃飯跟睡覺
      <br></br>
      妳有潔癖，跟妳再一起需要學習很多潔癖的東西，我很喜歡，因為我可以學習成為乾淨的人
      <br></br>每次看到妳潔癖的時候就覺得超好笑但很厲害 其實我很崇拜
      <br></br>
      妳有時候很像成熟大姊姊，有時候很可愛，有時候又很機車(半夜講電話不讓我睡覺)
      <br></br>妳有一個很特別的地方 就是很會感動
      剛好我會被你的感動滿足就會想做什麼才能再觸動妳的心弦<br></br>
      讓妳發出Awwww的聲音 每次聽到就會很開心 有一種很刺激的感覺<br></br>
      每次去你家我都覺得超級溫暖，妳的家人也對我好好，雖然他們常常讓妳覺得annoying
      <br></br>
      不過我覺得很謝謝也很幸運，謝謝妳陪我走過很煎熬的日子，有妳互相抱怨
      <br></br>真的好想好想去APU交換學生跟妳一起上學!
      我一定會努力看看好好讀雅思還有賺錢<br></br>
      妳需要我的時候我隨時都會在 不管未來妳交了幾個男朋友 甚至是結婚了都是
      <br></br>
      一定可以找到大肌肌的男人(胸大也有腦的男人)，尤其一定要找一個很愛妳的，不可以只看妳內內😠
      <br></br>
      不然就白費妳有那麼多可愛的地方了，還有值得欣賞的地方，浪漫跟夢幻跟潔癖還有認真😚
    </h6>
    <h6 className={styles['card-under']}>
      祝妳不是情人節的時候也每天都快樂! Love You{`<3`} from梁梁🐨
    </h6>
  </>
);

export default function Card() {
  return (
    <div class='hoverArea' className={styles.container}>
      <aside className={styles.card} hover='showText()'>
        <div className={styles['wrp-card']}>
          <h1 className={styles['card-hide']}>{hideText}</h1>
          <h1 className={styles['card-title']}>🦝情人節快樂🦝</h1>
          {text}
          <img
            className={styles['card-img']}
            src='https://64.media.tumblr.com/38623c4d544e424726626c6076e02f6b/tumblr_pn9ekxznU11wpz8k8_400.gifv'
            alt=''
          />
        </div>
      </aside>
    </div>
  );
}
