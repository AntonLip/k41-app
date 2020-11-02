import React from 'react';
import classes from './MyNew.module.css'

const MyNew = (props) => {
  debugger;
  return (

    <div className={classes.card_many_news}>
      <div className={classes.card_news}>
        <div className={classes.card_news_header}>
          {props.message.newsHeader}
        </div>
        <div className={classes.card_news_descr}>
          {props.message.newM}
        </div>
        <div className={classes.card_news_footer}>
          <div className={classes.card_news_footer_data}>{props.message.data}</div>
          <div className={classes.card_news_footer_more}>подробнее</div>
        </div>
      </div>

      <div className={classes.card_news_big}>
        <div className={classes.card_news_big_header}>заголовок новости публикуемой на сайте</div>
        <div className={classes.card_news_big_descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laboriosam
        reiciendis! Explicabo praesentium dignissimos animi ut cum quod quae veniam et velit. Excepturi ex alias illo,
        dolorem deleniti sit aspernatur!
        Incidunt tempore consequuntur ullam veritatis. Nisi minima sequi eum ex maiores nemo placeat animi ab
        obcaecati, ut laboriosam ipsum neque architecto quam deserunt qui numquam iste earum quos esse asperiores.
        Quis id et atque voluptate ipsa ea, cumque quia dolores dolor aliquid neque, quasi molestias necessitatibus
        pariatur! Adipisci consectetur, magni natus aspernatur corporis nesciunt deserunt expedita placeat pariatur?
        Corporis, deleniti.
        Sequi molestiae a non totam at voluptatem ratione, tenetur pariatur nulla reprehenderit dicta alias, qui illo
        ullam est porro? Laboriosam tempore iusto tempora nemo doloribus harum commodi fuga amet vitae!
        Doloribus, facilis totam eaque, consequuntur voluptatem doloremque nulla, distinctio perspiciatis molestiae
        nobis odit quisquam sapiente! Sed dolores, molestias facilis aspernatur amet nam illum, sunt excepturi qui
        doloremque, quas officiis provident.
        Ullam cum, odit distinctio ad dolor aliquid. Ut accusamus aliquam nostrum officia iusto soluta ipsa quas,
        aspernatur maxime? Delectus aliquid quibusdam illum commodi velit consectetur omnis neque dicta amet error?
        Quod nobis, dolorem rerum officiis fugiat quam! Nobis harum rem molestias temporibus vitae laboriosam? Soluta,
        id vero aliquam consequuntur, velit illum asperiores consequatur ducimus, delectus ipsa dignissimos possimus
        harum suscipit?
</div>
        <div className={classes.card_news_big_footer}>
          <div className={classes.card_news_big_footer_data}>22.06.2020</div>
          <div className={classes.card_news_big_footer_close}>закрыть</div>
        </div>
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
}

export default MyNew;