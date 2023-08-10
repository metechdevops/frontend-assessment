<template>
  <div class="row">
    <div class="image-wrap">
      <div class="img-content">
          <img src="https://via.placeholder.com/1920x650" alt="Banner Image">
      </div>
      <div class="overlay"></div>
      <div class="banner-content">
        <div class="content">
          <h1 class="display-4">Hello Developer!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
    </div>
  </div>

  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h1 {
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 768px) and (max-width: 1024px){
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 24px;
    line-height: 30px;
  }
  .img-content img {
    height: 50vh;
  }
  .banner-content {
    top: 30%;
    width: 80%;
    left: 10%;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  p {
    font-size: 14px;
    line-height:18px
  }
  .img-content img {
    height: 50vh;
  }
  .banner-content {
    top: 30%;
    width: 80%;
    left: 10%;
  }
}

</style>
