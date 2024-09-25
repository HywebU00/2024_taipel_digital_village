<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    show-select
    :loading="loading"
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item.iron="{ item }">
      <!-- <div class="btnGroup d-flex">
        <v-btn elevation="0" color="primary" class="mr-1">刪除</v-btn>
        <v-btn elevation="0" color="primary" variant="outlined">新增</v-btn>
      </div> -->
      <v-select
        width="160"
        label="下拉式選單"
        single-line
        density="compact"
        hide-details="auto"
        :items="['選項ㄧ', '選項二', '選項三']"
      ></v-select>
    </template>
    <template v-slot:item.export="{ item }">
      <v-dialog class="dialogCard" max-width="500" scrollable>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            elevation="0"
            color="primary"
            class="mr-1"
            variant="text"
            v-bind="activatorProps"
            icon="mdi-tray-arrow-down"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card title="匯出名單">
            <v-card-text class="px-4">
              <div>
                <h4 class="text-gray subtitle ml-3">
                  名單將以加密壓縮檔案下載，請設定您的密碼！
                </h4>
                <v-form>
                  <v-container>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >檔案格式
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-select
                          label="下拉式選單"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="[
                            'Microsoft Excel(.xlsx)',
                            'OpenDocument 試算表(.ods) ',
                          ]"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >密碼設定
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          label="文字標準表單"
                          density="compact"
                          single-line
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >再次確認密碼
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          label="文字標準表單"
                          density="compact"
                          single-line
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-card-text>
            <v-card-actions class="d-block">
              <div class="d-flex justify-center pa-4 pt-2">
                <v-btn
                  class="bg-secondary btn mx-2"
                  text="取消"
                  variant="flat"
                  @click="isActive.value = false"
                ></v-btn>
                <v-btn
                  text="確認匯出"
                  class="btn mx-2"
                  variant="flat"
                  @click="isActive.value = false"
                ></v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!-- <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-cog" class="ma-2" v-bind="props" size="small">
          </v-btn>
        </template>
        <v-card class="pa-2">
          <v-btn
            variant="outlined"
            class="my-1"
            block
            color="primary"
            prepend-icon="mdi-delete"
            >刪除</v-btn
          >
          <v-btn
            variant="outlined"
            class="my-1"
            block
            prepend-icon="mdi-pencil"
            color="primary"
            >編輯</v-btn
          >
        </v-card>
      </v-menu> -->
    </template>
    <!-- <template v-slot:item="{ item }">
      <tr>
        <td class="">{{ item.id }}</td>
        <td class="">{{ item.name }}</td>
        <td class="">{{ item.class }}</td>
        <td class="">{{ item.title }}</td>
        <td class="">{{ item.password }}</td>
        <td>{{ item.status }}</td>
        <td>
          <div class="btnGroup d-flex">
            <v-btn elevation="0" color="primary" class="mr-1">刪除</v-btn>
            <v-btn elevation="0" color="primary" variant="outlined">新增</v-btn>
          </div>
        </td>
        <td class="d-flex justify-center align-center">
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" class="ma-2" v-bind="props" size="small">
              </v-btn>
            </template>
            <v-card class="pa-2">
              <v-btn
                variant="outlined"
                class="my-1"
                block
                color="primary"
                prepend-icon="mdi-delete"
                >刪除</v-btn
              >
              <v-btn
                variant="outlined"
                class="my-1"
                block
                prepend-icon="mdi-pencil"
                color="primary"
                >編輯</v-btn
              >
            </v-card>
          </v-menu>
        </td>
      </tr>
    </template> -->
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    id: "001",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班1",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
  },
  {
    id: "002",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班2",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
  },
  {
    id: "003",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班3",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    selected: [],
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "活動日期", key: "time", align: "start", sortable: false },
      { title: "標題", key: "name", align: "start", sortable: false },
      { title: "表單類型", key: "class", align: "start", sortable: false },
      { title: "規則", key: "rule", align: "start", sortable: false },
      { title: "行政區", key: "admin", align: "start", sortable: false },
      { title: "村里", key: "village", align: "start", sortable: false },
      { title: "審核", key: "status", align: "start", sortable: false },
      { title: "登記人數", key: "num", align: "start", sortable: false },
      { title: "匯出名單", key: "export", align: "start", sortable: false },
      { title: "備註", key: "note", align: "start", sortable: false },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>
