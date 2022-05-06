<template>
  <main>
    <div class="content">
      <Title> Our Location on Maps </Title>
      <div class="container">
        <div>
          <img src="/src/assets/images/map.jpg" />
        </div>
        <div class="description">
          <span class="description-title">About our office</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            voluptate nihil eumester consectetur similiqu consectetur.
            architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            consequuntur, modi mollitia corporis ipsa voluptate corrupti.
          </p>
          <div class="links">
            <button class="socials">F</button>
            <button class="socials">T</button>
            <button class="socials">In</button>
            <button class="socials">Be</button>
          </div>
        </div>
      </div>
      <Title> Send us a Message </Title>
      <div class="container">
        <div>
          <FormKit type="text" placeholder="Full Name" />
          <FormKit type="email" placeholder="E-Mail Adress" />
          <FormKit type="text" placeholder="Subject" />
          <FormKit type="textarea" placeholder="Your Message" />
          <Button>Send Message</Button>
        </div>
        <div class="description">
          <span class="description-title red">Accordion Title One</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            voluptate nihil eumester consectetur similiqu consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.
          </p>
          <span class="description-title sub">Second Title Here</span>
          <span class="description-title sub">Accordion Title Three</span>
          <span class="description-title sub">Fourth Accordion Title</span>
        </div>
      </div>
      <Title> Our Happy Customers </Title>
      <div class="partners">
        <img src="/src/assets/images/client-01.png" />
        <img src="/src/assets/images/client-01.png" />
        <img src="/src/assets/images/client-01.png" />
        <img src="/src/assets/images/client-01.png" />
        <img src="/src/assets/images/client-01.png" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Title from "../components/title.vue";
import Button from "../components/btn.vue";
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 1200px;
}

.container {
  padding: 60px 0;
  display: grid;
  grid-template-columns: 65% 35%;

  img {
    width: 100%;
  }
}

.description {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  &-title {
    color: rgb(26, 101, 146);
    font-weight: 600;
    font-size: 18px;
  }

  p {
    margin-top: 1.5rem;
  }

  p:last-of-type {
    border-bottom: 2px solid rgb(238, 238, 238);
    padding-bottom: 2rem;
  }
}

.links {
  padding-top: 1.25rem;
}

.socials {
  background-color: rgb(238, 238, 238);
  border: none;
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
}

.red {
  color: rgb(243, 63, 63);
  border-top: 2px solid rgb(238, 238, 238);
  padding-top: 1rem;
  font-weight: 500;
}

.sub {
  font-weight: 500;
  border-bottom: 2px solid rgb(238, 238, 238);
  padding: 1rem 0;
}

.partners {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  width: 100%;
  padding: 60px 0 120px 0;
  border-bottom: 2px solid rgb(238, 238, 238);

  img {
    width: 100%;
  }
}
</style>
