<template>
  <v-app>
    <v-card class="header">
      <v-app-bar>
        <v-app-bar-nav-icon
          icon="mdi-menu"
          class="rounded-0 h-100 ml-0 menuBtn"
          @click.stop="rail = !rail"
        ></v-app-bar-nav-icon>
        <!-- 平台logo start -->
        <div class="logoImg d-flex align-center">
          <v-img class="logo" src="~@/assets/images/logo.png" alt="" />
          <v-img
            aspect-ratio="1/1"
            class=""
            cover
            src="~@/assets/images/logo_text.png"
          ></v-img>
        </div>
        <!-- 平台logo end -->
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      v-model="drawer"
      :class="['navDrawer', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      :width="240"
      @click="rail = false"
    >
      <v-list
        density="compact"
        nav
        class="text-navText"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <v-list-group value="Home1">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-application-edit-outline"
              v-bind="props"
              append-icon=""
              title="活動管理"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-group value="Home2">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-chart-bar"
              v-bind="props"
              append-icon=""
              title="統計報表"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-group value="Home3">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-account-cog"
              v-bind="props"
              append-icon=""
              title="帳號管理"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- <v-list-group value="Element">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Element"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Grid System"
            value="Grid System"
            @click="pushLink('system')"
          >
          </v-list-item>
          <v-list-item
            title="Component"
            value="Component"
            @click="pushLink('component')"
          >
          </v-list-item>
          <v-list-item title="From" value="From" @click="pushLink('from')">
          </v-list-item>
          <v-list-item title="Table" value="Table" @click="pushLink('table')">
          </v-list-item>
          <v-list-item title="Card" value="Card" @click="pushLink('card')">
          </v-list-item>
          <v-list-item title="Chart" value="Chart" @click="pushLink('chart')">
          </v-list-item>
        </v-list-group>

        <v-list-group value="Basic Layout">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-layers"
              v-bind="props"
              title="Basic Layout"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Widget"
            value="Widget"
            @click="pushLink('widget')"
          >
          </v-list-item>
          <v-list-item
            title="新增資料"
            value="addNews"
            @click="pushLink('addNews')"
          >
          </v-list-item>
          <v-list-item
            title="多媒體資料庫"
            value="mediaPhoto"
            @click="pushLink('mediaPhoto')"
          >
          </v-list-item>
        </v-list-group>

        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-login"
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('login')"
            >
            </v-list-item>
          </template>
        </v-list-group> -->
      </v-list>
      <div class="userInfo bg-primary">
        <v-avatar image="~@/assets/images/account.jpg" size="35"></v-avatar>
        <ul class="">
          <li>Elle Wang</li>
          <li>企劃處</li>
        </ul>
        <button><span class="material-icons-round"> logout </span></button>
      </div>
    </v-navigation-drawer>
    <v-main>
      <div>
        <pageView />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "1",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      // this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 1);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
