<template>
  <div class="test">
    <header class="header">
      <div class="header__logo-box">
        <img :src="HeaderLogoSource" alt="Logo" class="header__logo">
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" class="btn btn--white btn--animated">Discover Out tours</a>
      </div>
    </header>

    <main>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div class="row-test">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Your're going to fall in love with nature
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione
              iure, commodi in slt neque perspiciatis laudantinum omnis nemo doloribus nesciunt
              ad earum debitis aspernatur recusandae est uno dolore!
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p class="paragraph">
              this is blank text that i dont know what to say but i have to full fill
              this shit text and i tired to think about it and i dont have that blank
              text generator okay?
            </p>

            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img src="../../assets/images/test/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
              <img src="../../assets/images/test/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
              <img src="../../assets/images/test/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
            </div>
          </div>
        </div>
      </section>

      <section class="section-feature">
        <div class="row-test">
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fa fa-flash"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">explore the world</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis laudantinum omnis nemo doloribus
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fa fa-compass"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">meet nature</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis laudantinum omnis nemo doloribus
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fa fa-map-o"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">find your way</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis laudantinum omnis nemo doloribus
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fa fa-heart-o"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis laudantinum omnis nemo doloribus
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-tours">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Most popular tours
          </h2>
        </div>

        <div class="row-test">
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">the sea explore</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back--1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $297
                    </p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now！</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--2">
                    the forest hiker</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>7 days tour</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back--2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $467
                    </p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now！</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--3">
                    the snow adventurer</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>5 days tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back--3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $897
                    </p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now！</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-center-text u-margin-top-huge">
          <a href="#" class="btn btn--green">Discover all tours</a>
        </div>
      </section>

      <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="~@/assets/images/test/video.mp4" type="video/mp4">
            <source src="~@/assets/images/test/video.webm" type="video/webm">
            你的浏览器不支持播放视频，请更新您的浏览器
          </video>
        </div>
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            We make people genuinely happy
          </h2>
        </div>

        <div class="row-test">
          <div class="story">
            <figure class="story__shape">
              <img src="~@/assets/images/test/nat-8.jpg" class="story__image" alt="person on a tour">
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>

            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatisLorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatisLorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis
              </p>
            </div>
          </div>
        </div>

        <div class="row-test">
          <div class="story">
            <figure class="story__shape">
              <img src="~@/assets/images/test/nat-9.jpg" class="story__image" alt="person on a tour">
              <figcaption class="story__caption">Jack Wilson
              </figcaption>
            </figure>

            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                WOW! My life is completely different now!
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatisLorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatisLorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione iure,
                commodi in slt neque perspiciatis
              </p>
            </div>
          </div>
        </div>

        <div class="u-center-text u-margin-top-huge">
          <a href="#" class="btn-text">Read all stories &rarr;</a>
        </div>
      </section>

      <section class="section-book">
        <div class="row-test">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">
                    Start Booking Now
                  </h2>
                </div>
                <div class="form__group">
                  <input type="text" class="form__input" id="name" placeholder="我该怎么称呼你呢？" required>
                  <label for="name" class="form__label">全称</label>
                </div>
                <div class="form__group">
                  <input type="email" class="form__input" id="email" placeholder="邮箱" required>
                  <label for="email" class="form__label">邮箱</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
<!--
    <section class="grid-test">
      <div class="row-test">
        <div class="col-1-of-2">
          Col 1 of 2
        </div>
        <div class="col-1-of-2">
          col 1 of 2
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          col 1 of 3
        </div>
        <div class="col-1-of-3">
        col 1 of 3
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-2-of-3">
          col 2 of 3
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-2-of-4">
          col 2 of 4
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-3-of-4">
          col 3 of 4
        </div>
      </div>
    </section>
-->
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      HeaderLogoSource: require('../../assets/images/test/logo-white.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  .test {
    font-weight: 400;
    font-size: $default-font-size;
    line-height: 1.7;
    color: #777;
    padding: 3rem;
    box-sizing: border-box;
    /*margin-bottom: 45px;*/
  }

  .header {
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)),
    url(../../assets/images/test/hero.jpg);
    background-size: cover;
    background-position: top;
    position: relative;

    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    &__logo-box {
      position: absolute;
      top: 4rem;
      left: 4rem;
    }

    &__logo {
      height: 3.5rem;
    }

    &__text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%); /* 让text-box绝对居中 */
      text-align: center;
    }
  }
</style>
