import type { Metadata } from 'next'
import './faro-casino.css'

export const metadata: Metadata = {
  title: 'Faro Casino — официальный сайт, зеркало, играть онлайн в казино',
  description:
    'Faro Casino официальный сайт для игры онлайн. Зеркало рабочее, бонусы, слоты, рулетка, live-дилеры. Играть в Faro Casino на мобильном и ПК.',
  alternates: {
    canonical: 'https://farocasino17.vercel.app/',
  },
  openGraph: {
    title: 'Faro Casino — официальный сайт, зеркало, играть онлайн',
    description:
      'Faro Casino официальный сайт: зеркало рабочее, слоты, бонусы, live-казино. Играть онлайн на ПК и мобильном.',
    url: 'https://farocasino17.vercel.app/',
    siteName: 'Faro Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FaroCasinoLanding() {
  return (
    <main className="fc-shell" lang="ru">
      <header className="fc-topbar" role="banner">
        <div className="fc-topbar-inner">
          <a href="/" className="fc-brandmark" aria-label="Faro Casino — на главную">
            <span className="fc-brandmark-glyph">F</span>
            <span className="fc-brandmark-text">Faro Casino</span>
          </a>
          <nav className="fc-topnav" aria-label="Основная навигация">
            <a href="#fc-about" className="fc-topnav-link">О площадке</a>
            <a href="#fc-mirror" className="fc-topnav-link">Зеркало</a>
            <a href="#fc-games" className="fc-topnav-link">Игры</a>
            <a href="#fc-bonus" className="fc-topnav-link">Бонусы</a>
            <a href="#fc-mobile" className="fc-topnav-link">Мобильная</a>
            <a href="#fc-faq" className="fc-topnav-link">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="fc-hero" aria-labelledby="fc-hero-title">
        <div className="fc-hero-inner">
          <div className="fc-hero-copy">
            <p className="fc-hero-eyebrow">Faro Casino · официальный сайт</p>
            <h1 id="fc-hero-title" className="fc-hero-title">
              Faro Casino — играть онлайн на официальном сайте
            </h1>
            <p className="fc-hero-lead">
              Faro Casino — это игровая платформа с лицензией Кюрасао, где собраны слоты,
              рулетка, карточные столы и live-дилеры. На faro casino официальный сайт заходят
              игроки, которым важны честные выплаты и быстрый вход без блокировок.
            </p>
            <div className="fc-hero-actions">
              <a href="#fc-mirror" className="fc-cta-primary">Войти через зеркало</a>
              <a href="#fc-about" className="fc-cta-secondary">Узнать больше</a>
            </div>
            <ul className="fc-hero-points" aria-label="Ключевые преимущества">
              <li className="fc-hero-point">Лицензия и SSL</li>
              <li className="fc-hero-point">3000+ игр</li>
              <li className="fc-hero-point">Бонус 100% + 200 FS</li>
              <li className="fc-hero-point">Вывод от 15 минут</li>
            </ul>
          </div>
          <figure className="fc-hero-figure">
            <img
              src="/hero-art.png"
              alt="Faro Casino — игровая платформа со слотами, рулеткой и live-дилерами"
              width={720}
              height={420}
              className="fc-hero-image"
            />
          </figure>
        </div>
      </section>

      <section id="fc-about" className="fc-block" aria-labelledby="fc-about-title">
        <div className="fc-block-inner">
          <p className="fc-block-eyebrow">О площадке</p>
          <h2 id="fc-about-title" className="fc-block-title">
            Faro Casino: что это за площадка и кому подходит
          </h2>
          <p className="fc-block-text">
            Faro Casino работает с 2020 года и ориентирован на русскоязычных игроков.
            На faro casino официальный сайт собраны слоты, настольные игры и live-казино
            от Pragmatic Play, NetEnt, Microgaming и Evolution. Интерфейс простой,
            регистрация занимает меньше минуты, а поддержка отвечает в чате круглосуточно.
            Для новых клиентов Faro казино действует приветственный пакет, а для постоянных —
            кэшбэк и турниры.
          </p>
          <p className="fc-block-text">
            Фарo казино — это бренд, который делает ставку на прозрачность: правила бонусов
            описаны человеческим языком, лимиты на вывод указаны заранее, а служба поддержки
            решает вопросы без шаблонных отписок. Именно поэтому faro casino официальный сайт
            выбирают те, кто устал от скрытых условий.
          </p>
        </div>
      </section>

      <section id="fc-mirror" className="fc-block fc-block-alt" aria-labelledby="fc-mirror-title">
        <div className="fc-block-inner">
          <p className="fc-block-eyebrow">Доступ</p>
          <h2 id="fc-mirror-title" className="fc-block-title">
            Faro Casino зеркало: вход без блокировок
          </h2>
          <p className="fc-block-text">
            Если основной адрес недоступен, используйте faro casino зеркало — это точная
            копия сайта с тем же балансом, бонусами и историей ставок. Faro casino зеркало
            рабочее обновляется каждый день, поэтому ссылка всегда актуальна. Через
            фарo казино зеркало рабочее вы попадаете в личный кабинет и продолжаете игру
            с того же места, где остановились.
          </p>
          <p className="fc-block-text">
            Ссылки на актуальные зеркала публикуются в Telegram-канале Faro Casino и в
            email-рассылке. Чтобы не потерять доступ, добавьте зеркало в закладки и
            проверяйте обновления раз в сутки. Фарo казино официальный сайт и его зеркала
            используют единую базу, поэтому регистрация на новом адресе не требуется.
          </p>
          <ul className="fc-mirror-list" aria-label="Способы входа">
            <li className="fc-mirror-item">
              <span className="fc-mirror-num">01</span>
              <span className="fc-mirror-label">Основной адрес faro casino официальный сайт</span>
            </li>
            <li className="fc-mirror-item">
              <span className="fc-mirror-num">02</span>
              <span className="fc-mirror-label">Актуальное faro casino зеркало рабочее</span>
            </li>
            <li className="fc-mirror-item">
              <span className="fc-mirror-num">03</span>
              <span className="fc-mirror-label">Мобильная версия фарo казино онлайн</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="fc-games" className="fc-block" aria-labelledby="fc-games-title">
        <div className="fc-block-inner fc-block-split">
          <div className="fc-block-copy">
            <p className="fc-block-eyebrow">Каталог</p>
            <h2 id="fc-games-title" className="fc-block-title">
              Фарo казино онлайн: игры на любой вкус
            </h2>
            <p className="fc-block-text">
              В фарo казино онлайн собрано больше 3000 игр: классические слоты, Megaways,
              рулетка, блэкджек, баккара и live-казино с живыми дилерами. Каждую неделю
              добавляются новинки, а топовые автоматы вынесены в отдельный раздел для
              быстрого доступа. Чтобы faro casino играть было удобно, все игры разбиты
              по категориям и провайдерам.
            </p>
            <p className="fc-block-text">
              Для тех, кто только знакомится с площадкой, в Faro казино работает демо-режим.
              Можно запустить любой слот бесплатно, изучить механику и только потом
              переходить к ставкам на деньги. Это удобно и безопасно: вы не рискуете
              депозитом, пока не разберётесь в правилах.
            </p>
          </div>
          <figure className="fc-block-figure">
            <img
              src="/games-art.png"
              alt="Каталог игр Faro Casino: слоты, рулетка, карты, live-дилеры"
              width={560}
              height={420}
              loading="lazy"
              className="fc-block-image"
            />
          </figure>
        </div>
      </section>

      <section id="fc-bonus" className="fc-block fc-block-alt" aria-labelledby="fc-bonus-title">
        <div className="fc-block-inner">
          <p className="fc-block-eyebrow">Бонусы</p>
          <h2 id="fc-bonus-title" className="fc-block-title">
            Faro казино: бонусы и акции для игроков
          </h2>
          <p className="fc-block-text">
            Faro казино радует игроков щедрой бонусной программой. Новым клиентам —
            100% на первый депозит и 200 фриспинов. Постоянным игрокам — кэшбэк до 15%,
            еженедельные турниры с призовым фондом и программа лояльности с уровнями.
            Все бонусы от faro casino официальный можно активировать в один клик в
            личном кабинете, а условия отыгрыша прописаны прозрачно.
          </p>
          <p className="fc-block-text">
            Фарo казино официальный сайт регулярно запускает временные акции: бесплатные
            вращения за подписку, розыгрыши призов среди активных игроков и турниры по
            слотам с денежными призами. Следить за актуальными предложениями удобно
            через раздел «Акции» в личном кабинете или в Telegram-канале бренда.
          </p>
          <div className="fc-bonus-grid" aria-label="Основные бонусы">
            <article className="fc-bonus-tile">
              <h3 className="fc-bonus-tile-title">Приветственный пакет</h3>
              <p className="fc-bonus-tile-text">100% на первый депозит и 200 фриспинов для новых игроков Faro Casino.</p>
            </article>
            <article className="fc-bonus-tile">
              <h3 className="fc-bonus-tile-title">Кэшбэк до 15%</h3>
              <p className="fc-bonus-tile-text">Еженедельный возврат для активных клиентов фарo казино онлайн.</p>
            </article>
            <article className="fc-bonus-tile">
              <h3 className="fc-bonus-tile-title">Турниры и розыгрыши</h3>
              <p className="fc-bonus-tile-text">Призовые фонды каждую неделю на faro casino официальный сайт.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="fc-mobile" className="fc-block" aria-labelledby="fc-mobile-title">
        <div className="fc-block-inner fc-block-split fc-block-split-reverse">
          <figure className="fc-block-figure">
            <img
              src="/mobile-art.png"
              alt="Faro Casino на смартфоне: мобильная версия для iPhone и Android"
              width={560}
              height={420}
              loading="lazy"
              className="fc-block-image"
            />
          </figure>
          <div className="fc-block-copy">
            <p className="fc-block-eyebrow">Мобильная версия</p>
            <h2 id="fc-mobile-title" className="fc-block-title">
              Faro Casino на мобильном: играть где угодно
            </h2>
            <p className="fc-block-text">
              Faro casino играть можно не только с компьютера, но и со смартфона.
              Мобильная версия сайта адаптирована под iPhone SE и последние Pro Max,
              загружается быстро и не требует установки приложения. На фарo казино
              официальный сайт мобильная версия сохраняет все функции: пополнение,
              вывод, бонусы, турниры и live-игры.
            </p>
            <p className="fc-block-text">
              Фарo казино онлайн на телефоне работает через браузер — Chrome, Safari,
              Яндекс Браузер. Интерфейс перестраивается под диагональ экрана, кнопки
              увеличены для удобного нажатия, а слоты запускаются в полноэкранном
              режиме. Это удобно для тех, кто играет в дороге или в перерыве.
            </p>
          </div>
        </div>
      </section>

      <section id="fc-faq" className="fc-block fc-block-alt" aria-labelledby="fc-faq-title">
        <div className="fc-block-inner">
          <p className="fc-block-eyebrow">FAQ</p>
          <h2 id="fc-faq-title" className="fc-block-title">
            Часто задаваемые вопросы о Faro Casino
          </h2>
          <div className="fc-faq-list" role="list">
            <article className="fc-faq-item" role="listitem">
              <h3 className="fc-faq-q">Как найти faro casino зеркало рабочее?</h3>
              <p className="fc-faq-a">
                Ссылки публикуются в официальном Telegram-канале Faro Casino и обновляются
                ежедневно. Можно также запросить актуальный адрес у поддержки в чате.
              </p>
            </article>
            <article className="fc-faq-item" role="listitem">
              <h3 className="fc-faq-q">Сколько времени занимает вывод средств?</h3>
              <p className="fc-faq-a">
                От 15 минут до 24 часов в зависимости от платёжной системы. На фарo казино
                официальный сайт выплаты приходят в срок, без задержек и скрытых комиссий.
              </p>
            </article>
            <article className="fc-faq-item" role="listitem">
              <h3 className="fc-faq-q">Нужно ли проходить верификацию?</h3>
              <p className="fc-faq-a">
                Для вывода крупных сумм потребуется подтверждение личности. Это стандартная
                процедура на faro casino официальный, которая занимает не больше суток.
              </p>
            </article>
            <article className="fc-faq-item" role="listitem">
              <h3 className="fc-faq-q">Можно ли играть бесплатно?</h3>
              <p className="fc-faq-a">
                В фарo казино онлайн доступен демо-режим для всех слотов. Это удобный способ
                изучить механику без риска для депозита.
              </p>
            </article>
            <article className="fc-faq-item" role="listitem">
              <h3 className="fc-faq-q">Какие бонусы доступны новым игрокам?</h3>
              <p className="fc-faq-a">
                Faro казино предлагает 100% на первый депозит и 200 фриспинов. Условия
                отыгрыша прозрачные и описаны в разделе «Акции».
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="fc-footer" role="contentinfo">
        <div className="fc-footer-inner">
          <div className="fc-footer-brand">
            <span className="fc-footer-glyph">F</span>
            <span className="fc-footer-name">Faro Casino</span>
            <p className="fc-footer-tagline">
              Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы,
              слоты, рулетка и live-дилеры на любом устройстве.
            </p>
          </div>
          <nav className="fc-footer-tags" aria-label="Поисковые хештеги Faro Casino">
            <a href="#fc-about" className="fc-footer-tag">#faro casino</a>
            <a href="#fc-mirror" className="fc-footer-tag">#faro casino зеркало</a>
            <a href="#fc-games" className="fc-footer-tag">#faro casino играть</a>
            <a href="#fc-bonus" className="fc-footer-tag">#faro casino официальный</a>
            <a href="#fc-about" className="fc-footer-tag">#faro casino официальный сайт</a>
            <a href="#fc-bonus" className="fc-footer-tag">#faro казино</a>
            <a href="#fc-about" className="fc-footer-tag">#фарo казино</a>
            <a href="#fc-mirror" className="fc-footer-tag">#фарo казино зеркало</a>
            <a href="#fc-mirror" className="fc-footer-tag">#фарo казино зеркало рабочее</a>
            <a href="#fc-games" className="fc-footer-tag">#фарo казино играть</a>
            <a href="#fc-games" className="fc-footer-tag">#фарo казино онлайн</a>
            <a href="#fc-bonus" className="fc-footer-tag">#фарo казино официальный</a>
            <a href="#fc-about" className="fc-footer-tag">#фарo казино официальный сайт</a>
          </nav>
          <p className="fc-footer-meta">
            © {new Date().getFullYear()} Faro Casino. Информационный лендинг. Играйте ответственно.
          </p>
        </div>
      </footer>
    </main>
  )
}
