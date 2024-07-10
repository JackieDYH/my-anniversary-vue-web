<!--
 * @Author: Jackie
 * @Date: 2023-10-17 17:37:47
 * @LastEditTime: 2024-07-10 16:14:04
 * @LastEditors: Jackie
 * @Description: 表格
 * @FilePath: /my-anniversary-vue-web/src/components/TableList.vue
 * @version: 
-->
<template>
  <div class="table-box">
    <div class="table">
      <div class="title">
        <h1 @click="showEye">事件记录📝📊</h1>
      </div>
      <!-- border -->
      <el-table class="table-style" :data="tableData" style="width: 100%">
        <template v-for="column in tableColumn">
          <el-table-column
            v-if="column.isShow"
            :key="column.prop"
            :prop="column.prop"
            :fixed="column.fixed"
            :align="column.align"
            :label="column.label"
            :width="column.width"
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
                  {{ tableData.length - scope.$index }}
                  <!-- {{ scope.$index + 1 }} -->
                  <!-- {{ (page - 1) * pageSize + scope.$index + 1 }} -->
                </span>
              </div>
              <div v-if="column.prop == 'title'">
                <span>{{ scope.row.title }}</span>
                <img
                  v-if="sameDay(scope.row.start_time)"
                  src="@/assets/images/time-2.svg"
                  alt="time"
                  class="remind"
                />
              </div>
              <div v-if="column.prop == 'type'">
                <!-- 类型 -->
                <el-tag>{{ scope.row.type }}</el-tag>
              </div>
              <div v-if="column.prop == 'how_long'">
                <!-- 距今多久 -->
                <span> {{ howDay(scope.row.start_time) }} 天 </span>
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
import { ref, computed, defineEmits } from 'vue';
defineOptions({ name: 'TableList' });
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import MyData from '@/utils/MyData.json';

const emits = defineEmits(['showBtn']);
const showEye = () => {
  emits('showBtn');
};
// const getTime = (start) => {
//   dayjs.extend(relativeTime);
//   // const a = dayjs('1997-12-28').fromNow(true); // 22 年前
//   // console.log('a', a);
//   // console.log(dayjs().diff('1997-12-28', 'day'), '两个日期之间相差的天数');
//   return dayjs().diff(start, 'day');
// };
// getTime();

/**
 * 距今多久
 */
const howDay = computed(() => start => {
  dayjs.extend(relativeTime);
  return dayjs().diff(start, 'day');
});

/**
 * 是否是今天
 */
const sameDay = computed(() => start => {
  // 输入日期
  const inputDayjs = dayjs(start);
  // 当前日期
  const today = dayjs();
  // 比较当前日期和传入日期的月份和天是否相同
  const isToday = today.date() === inputDayjs.date() && today.month() === inputDayjs.month();
  return isToday;
});

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
    width: 220,
    isShow: true,
    align: 'left'
  },
  {
    label: '概述',
    prop: 'content',
    fixed: false,
    width: 358,
    isShow: true,
    align: 'left'
  },
  {
    label: '类型',
    prop: 'type',
    fixed: false,
    width: 110,
    isShow: true,
    align: 'center'
  },
  {
    label: '开始时间',
    prop: 'start_time',
    fixed: false,
    width: 200,
    isShow: true,
    align: 'center'
  },
  {
    label: '距今多久',
    prop: 'how_long',
    fixed: false,
    width: 200,
    isShow: true,
    align: 'center'
  }
]);
const tableData = ref(MyData);
</script>

<style lang="scss" scoped>
.table-box {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  padding: 20px 0;
  min-height: 100vh;
  .table {
    width: 60%;
    @media (max-width: 768px) {
      width: 90%;
    }
    .title {
      color: #000;
      font-family: PingFang SC;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    /*表格样式  */
    .table-style {
      :deep(.el-table__header) {
        .el-table__cell {
          height: 50px;
          color: #5f6062;
        }
      }
      .remind {
        width: 10%;
        transform: rotate(45deg);
        margin-left: 6px;
      }
      /* $gray-bg: #f5f5f5;
      --el-table-border: none;
      :deep(.el-table__header) {
        .el-table__cell {
          padding: 0;
          height: 49px;
          background: $gray-bg;
          font-weight: 400;
          color: #868e9b;

          &.ascending {
            .caret-wrapper {
              .sort-caret.ascending {
                border-bottom-color: #0ecb81;
              }
            }
          }

          &.descending {
            .caret-wrapper {
              .sort-caret.descending {
                border-top-color: #0ecb81;
              }
            }
          }
        }
      } */

      /* :deep(.el-table__body) {
        .el-table__row:nth-child(2n) {
          background: $gray-bg;
        }

        .el-table__cell {
          padding: 0;
          height: 88px;
          font-family: DIN-Medium, arial, sans-serif;
          font-size: 18px;
          color: #000;
        }
      } */
    }
  }
}
</style>
