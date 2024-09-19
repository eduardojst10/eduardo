<template>
  <nav>
    <div id="menuToggle">
      <input type="checkbox" ref="checkbox" @change="drawer = !drawer" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu" :style="drawer ? menuOpenStyle : menuClosedStyle">    
        <li>
          <router-link :to="'#services'" @click="toggleDrawer">Skills</router-link>
        </li>
        <li>
          <router-link :to="'#about'" @click="toggleDrawer">About Me</router-link>
        </li>
        <li>
          <router-link :to="'#portfolio'" @click="toggleDrawer">Portfolio</router-link>
        </li>
        <li>
          <router-link :to="'#contact'" @click="toggleDrawer">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const drawer = ref(false);
    const checkbox = ref(null);

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
      checkbox.value.checked = false;
  };


    const menuOpenStyle = {
      transform: "translate(0, 0)",
      transition: "transform 0.5s ease-in-out",
    };

    const menuClosedStyle = {
      transform: "translate(-100%, 0)",
      transition: "transform 0.5s ease-in-out",
    };

    return {
      drawer,
      toggleDrawer,
      checkbox,
      menuOpenStyle,
      menuClosedStyle,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';
#menuToggle {
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 11;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 12;
}

/* Hamburger icon bars */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  background: $highlight-color;
  border-radius: 3px;
  transition: transform 0.5s, opacity 0.5s ease;
  position: relative;
   z-index: 10;

}

/* Transformations when menu is open */
#menuToggle input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

#menuToggle input:checked ~ span:nth-of-type(2) {
  opacity: 0; /* Hide the middle bar */
}

#menuToggle input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Menu styles */
#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  height: 102vh;
  background: #ededed;
  list-style-type: none;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s ease-in-out;
  z-index:9;
}

#menuToggle input:checked ~ ul {
  transform: translate(0, 0);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
  font-weight: bold;
}

#menu a {
  text-decoration: none;
  color: #232323;
}

#menu a:hover {
  color: $accent-color;
}
</style>
