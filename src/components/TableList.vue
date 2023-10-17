<!--
 * @Author: Jackie
 * @Date: 2023-10-17 17:37:47
 * @LastEditTime: 2023-10-17 18:09:19
 * @LastEditors: Jackie
 * @Description: 表格
 * @FilePath: /my-anniversary-vue/src/components/TableList.vue
 * @version: 
-->
<template>
  <div class="table-box">
    <div class="table">
      <div class="title">
        <h1>事件记录📝</h1>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <template v-for="column in tableColumn">
          <el-table-column
            v-if="column.isShow"
            :key="column.prop"
            :prop="column.prop"
            :fixed="column.fixed"
            :align="column.align"
            :label="column.label"
          >
            <!-- :width="column.width" -->
            <!-- :label="column.label" -->
            <!-- <template #header>
              <div
                v-if="column.label == '收藏'"
                class="collect-btn"
                @click="onCollectBtn"
              >
                <img src="@/assets/images/prices/collect.svg" />
              </div>
              <div v-else>{{ column.label }}</div>
            </template> -->
            <template #default="scope">
              <div v-if="column.prop == 'xh'">
                <!-- 序号 -->
                <span>
                  {{ scope.$index + 1 }}
                  <!-- {{ (page - 1) * pageSize + scope.$index + 1 }} -->
                </span>
              </div>
            </template>
          </el-table-column>
        </template>

        <!-- <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" /> -->
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const tableColumn = ref([
  {
    label: '序号',
    prop: 'xh',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  },
  {
    label: '标题',
    prop: 'title',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  },
  {
    label: '类型',
    prop: 'type',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  },
  {
    label: '概述',
    prop: 'over',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  },
  {
    label: '开始时间',
    prop: 'start_time',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  },
  {
    label: '距今多久',
    prop: 'how_long',
    fixed: false,
    width: 60,
    isShow: true,
    align: 'center'
  }
]);
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
</script>

<style lang="scss" scoped>
.table-box {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  padding: 20px 0;
  .table {
    width: 1200px;
    min-height: 600px;
    .title {
      color: #000;
      font-family: PingFang SC;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
}
</style>
