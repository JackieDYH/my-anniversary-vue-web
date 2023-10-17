<!--
 * @Author: Jackie
 * @Date: 2023-10-17 17:37:47
 * @LastEditTime: 2023-10-17 17:49:07
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
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
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
    }
  }
}
</style>
