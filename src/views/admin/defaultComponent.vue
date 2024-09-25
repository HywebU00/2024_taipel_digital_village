<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>

    <h2>系統首頁儀表板</h2>
    <v-row> </v-row>
    <v-row>
      <v-col class="justify-end d-flex pb-0" cols="12">
        <v-dialog class="dialogCard" max-width="800" scrollable>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              variant="flat"
              class=""
              prepend-icon="mdi-plus"
              v-bind="activatorProps"
              >新增帳號</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="新增/編輯收費項目">
              <div class="py-0 editBtn">
                <v-btn
                  color="primary"
                  prepend-icon="mdi-square-edit-outline"
                  variant="text"
                  >編輯</v-btn
                >
              </div>
              <v-card-text class="px-4">
                <div>
                  <h4 class="text-primary subtitle ml-3">
                    收費項目
                    <v-chip
                      class="ml-2 font-weight-bold"
                      variant="elevated"
                      size="small"
                      color="secondary"
                    >
                      申請停用
                    </v-chip>
                  </h4>
                  <div class="ml-4 mt-2 text-gray info">
                    申請時間:2024/06/07 13:00
                  </div>
                  <v-form>
                    <v-container>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >申請單位</label
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
                            >申請代碼</label
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
                            >申請人姓名</label
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
                            >電話/分機</label
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
                            >Email</label
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
                          <label
                            class="text-gray font-weight-bold mb-3 d-block"
                            for=""
                            >收費項目說明
                            <abbr
                              class="necessary"
                              title="為必填(選)欄位,不能為空白。"
                              >*</abbr
                            ></label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-textarea
                            hide-details="auto"
                            variant="outlined"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >收費性質
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
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col>
                          <label
                            class="text-gray font-weight-bold mb-3 d-block"
                            for=""
                            >是否允許繳款人自行繳費？</label
                          ><v-radio-group
                            inline
                            hide-details="auto"
                            color="secondary"
                          >
                            <v-radio label="是" value="1"></v-radio>
                            <v-radio
                              label="否"
                              value="2"
                            ></v-radio> </v-radio-group
                        ></v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="">
                          <label
                            class="text-gray font-weight-bold mb-3 d-block"
                            for=""
                            >收費方式</label
                          >
                          <v-row class="mt-2">
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="eATM轉帳"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="線上信用卡繳費"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="超商繳款"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="掃碼支付"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="出納臨櫃繳款"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="item py-0 mb-3">
                              <v-checkbox
                                label="悠遊卡"
                                hide-details="auto"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" lg="auto" class="py-0 mb-3 item">
                              <div class="d-flex checkboxHasSelect">
                                <v-checkbox
                                  label="ATM轉帳"
                                  hide-details="auto"
                                  class="pr-0"
                                >
                                </v-checkbox>
                                <!-- variant="outlined" -->
                                <v-select
                                  label="下拉式選單"
                                  single-line
                                  density="compact"
                                  width="180"
                                  class="pl-0"
                                  hide-details="auto"
                                  :items="['選項ㄧ', '選項二', '選項三']"
                                ></v-select>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >電子收據</label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-select
                            label="下拉式選單"
                            single-line
                            density="compact"
                            hide-details="auto"
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >審核單位</label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-select
                            label="下拉式選單"
                            single-line
                            density="compact"
                            hide-details="auto"
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col>
                          <label
                            class="text-gray font-weight-bold mb-3 d-block"
                            for=""
                            >固定繳費金額</label
                          ><v-radio-group
                            inline
                            hide-details="auto"
                            color="secondary"
                          >
                            <v-radio label="是" value="1"></v-radio>
                            <v-text-field
                              label="文字標準表單"
                              density="compact"
                              single-line
                              hide-details="auto"
                            ></v-text-field>
                            <v-radio
                              label="否"
                              value="2"
                            ></v-radio> </v-radio-group
                        ></v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label
                            class="text-gray font-weight-bold d-block mb-3"
                            for=""
                            >停用說明
                            <span class="ml-2 text-gray info"
                              >退回時間:2024/06/07 13:00</span
                            >
                          </label>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-textarea
                            hide-details="auto"
                            variant="outlined"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                  <h4 class="text-primary subtitle my-3 ml-3">主計室確認</h4>
                  <v-form>
                    <v-container>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >主計經費編號</label
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
                            >會計科目</label
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
                  <h4 class="text-primary subtitle my-3 ml-3">出納組確認</h4>
                  <v-form>
                    <v-container>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >校區別</label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-select
                            label="下拉式選單"
                            single-line
                            density="compact"
                            hide-details="auto"
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >銀行帳戶</label
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
                            >特店代號</label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-select
                            label="下拉式選單"
                            single-line
                            density="compact"
                            hide-details="auto"
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col class="pb-2" cols="12" lg="">
                          <label class="text-gray font-weight-bold" for=""
                            >企業識別碼</label
                          >
                        </v-col>
                        <v-col cols="12" class="pt-0">
                          <v-select
                            label="下拉式選單"
                            single-line
                            density="compact"
                            hide-details="auto"
                            :items="['選項ㄧ', '選項二', '選項三']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row class="formGrp">
                        <v-col>
                          <label
                            class="text-gray font-weight-bold mb-3 d-block"
                            for=""
                            >是否採總認列</label
                          ><v-radio-group
                            inline
                            hide-details="auto"
                            color="secondary"
                          >
                            <v-radio label="是" value="1"></v-radio>
                            <v-radio
                              label="否"
                              value="2"
                            ></v-radio> </v-radio-group
                        ></v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>
              </v-card-text>
              <v-card-actions class="d-block">
                <div class="d-flex justify-end px-4">
                  <ul class="infoList">
                    <li class="text-gray">
                      新增人員系統管理者(admin)新增時間2023/02/08 16:56:12
                    </li>
                  </ul>
                </div>

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
      </v-col>
      <v-col cols="12">
        <v-card class="pa-2">
          <dataTableServer />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";

export default {
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    dataTableServer,
  },
};
</script>
<style scoped></style>
