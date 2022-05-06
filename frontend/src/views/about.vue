<template>
  <main>
    <div class="content">
      <Title> Our Background </Title>
      <div class="description-container">
        <div>
          <img src="src/assets/images/feature-image.jpg" />
        </div>
        <div class="description">
          <span class="description-title">Who we are & what we do?</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            illum error non placeat, ipsa vero fugiat, blanditiis quae quod
            corrupti ut laborum ipsam. Quia minima delectus earum non, neque
            architecto?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            illum error non placeat, ipsa vero fugiat, blanditiis quae quod
            corrupti ut laborum ipsam. Quia minima delectus earum non, neque
            architecto?
          </p>
          <div class="links">
            <button class="socials">F</button>
            <button class="socials">T</button>
            <button class="socials">In</button>
            <button class="socials">Be</button>
          </div>
        </div>
      </div>
      <Title> Our team members </Title>
      <div class="members">
        <div class="card">
          <img src="src/assets/images/team_01.jpg" />
          <span class="card-name">Johnny William</span>
          <span class="card-title">CO-Founder</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
        <div class="card">
          <img src="src/assets/images/team_02.jpg" />
          <span class="card-name">Karry Pitcher</span>
          <span class="card-title">Product Expert</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
        <div class="card">
          <img src="src/assets/images/team_03.jpg" />
          <span class="card-name">Michael Soft</span>
          <span class="card-title">Chief Marketing</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
        <div class="card">
          <img src="src/assets/images/team_04.jpg" />
          <span class="card-name">Mary Cool</span>
          <span class="card-title">Product Specialist</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
        <div class="card">
          <img src="src/assets/images/team_05.jpg" />
          <span class="card-name">George Walker</span>
          <span class="card-title">Product Photographer</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
        <div class="card">
          <img src="src/assets/images/team_06.jpg" />
          <span class="card-name">Kate Town</span>
          <span class="card-title">General Manager</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
            nulla.
          </p>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="services-cards">
        <div class="card front">
          <div class="card-top">
            <div class="icon">
              <img src="src/assets/images/gear.png" />
            </div>
          </div>
          <span class="card-name">Product Management</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <Button :class="'btn'">Read More</Button>
        </div>
        <div class="card front">
          <div class="card-top">
            <div class="icon">
              <img src="src/assets/images/gear.png" />
            </div>
          </div>
          <span class="card-name">Customer Relations</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <Button>Details</Button>
        </div>
        <div class="card front">
          <div class="card-top">
            <div class="icon">
              <img src="src/assets/images/gear.png" />
            </div>
          </div>
          <span class="card-name">Global Collection</span>
          <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
    <div class="content">
      <Title> Happy Partners </Title>
      <div class="partners">
        <img src="src/assets/images/client-01.png" />
        <img src="src/assets/images/client-01.png" />
        <img src="src/assets/images/client-01.png" />
        <img src="src/assets/images/client-01.png" />
        <img src="src/assets/images/client-01.png" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Button from "../components/btn.vue";
import Title from "../components/title.vue";
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

.description-container {
  padding: 60px 0;
  display: flex;
}

.description {
  margin-left: 2rem;

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

.members {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px 0 40px 0;
  width: 100%;
}

.front {
  background-color: white;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid rgb(238, 238, 238);

  img {
    width: 100%;
  }

  &-name {
    color: rgb(26, 101, 146);
    font-weight: 600;
    font-size: 18px;
    margin-top: 2rem;
  }

  &-title {
    color: rgb(243, 63, 63);
    font-weight: 600;
    font-size: 15px;
    margin-top: 0.25rem;
  }

  &-description {
    padding: 1rem 1.5rem;
  }

  &-top {
    background-color: rgb(238, 238, 238);
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.services {
  background-image: url("src/assets/images/services-bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 7rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  &-cards {
    width: 1200px;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.btn {
  margin-bottom: 2.5rem;
}

.icon {
  height: 7rem;
  width: 7rem;
  background-color: rgb(243, 63, 63);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 32px;
    width: 32px;
  }
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
