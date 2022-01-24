<template>
  <div class="parent">
    <div class="header">
      <div class="left">
        <el-button-group>
          <el-button type="primary" size="mini" @click="prev">&lt;</el-button>
          <el-button type="primary" size="mini" @click="next">&gt;</el-button>
          <el-button type="primary" size="mini" @click="toToday">今天</el-button>
        </el-button-group>
        &nbsp;&nbsp;&nbsp;{{ headerContent }}
      </div>
      <div class="right">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            @click="switchMonth"
          >月</el-button>
          <el-button
            type="primary"
            size="mini"
            @click="switchWeek"
          >周</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="body">
      <Month
        v-show="showMonth"
        ref="month"
        :key="`m${key}`"
        :current-year-month="currentYearMonth"
        :date-list="dateList"
        @click="handleDateClick"
        @on-label-hover="handleLabelHover"
        @on-label-leave="handleLabelLeave"
      />
      <Week
        v-show="!showMonth"
        ref="week"
        :key="`w${key}`"
        :current-weekday="currentWeekday.format('YYYY-MM-DD')"
        :week-table-header="weekTableHeader"
        :date-list="dateList"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Month from './comps/Month.vue'
import Week from './comps/Week.vue'
export default {
  components: { Month, Week },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      today: moment().format('YYYY-MM-DD'),
      currentYearMonth: moment().format('YYYY-MM'),
      weekTableHeader: [],
      showMonth: true,
      headerContent: moment().format('YYYY-MM'),
      currentWeekday: '',
      key: 1,
      dateList: [
        // {
        //   date: '2021-12-17',
        //   startTime: '10:00',
        //   endTime: '12:00',
        //   name: 'hahha',
        //   style: {
        //     color: 'red',
        //     'background-color': 'grey'
        //   }
        // },
        // {
        //   date: '2021-12-17',
        //   startTime: '13:00',
        //   endTime: '16:00',
        //   name: 'kkk',
        //   style: {
        //     color: 'blue',
        //     'background-color': 'green'
        //   }
        // }, {
        //   date: '2022-01-17',
        //   startTime: '09:00',
        //   endTime: '11:00',
        //   name: 'kkk',
        //   style: {
        //     color: 'blue',
        //     'background-color': 'green'
        //   }
        // }
      ]
    }
  },
  watch: {
    list(val) {
      console.log('--val', val)
      this.dateList = val
      this.key++
    }
  },
  created() {
    // v-show是在创建后 保留dom 只是做切换的 不会v-if那样 销毁dom 所以只需要创建一次

    const weekday = moment().weekday() === 7 ? 0 : moment().weekday()
    this.currentWeekday = moment().add(-weekday, 'days')
  },
  methods: {
    // 点击上个月 通过改变currentYearMonth来获取上个月的 YYYY-MM 格式
    prev() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .subtract(1, 'months')
          .format('YYYY-MM')
        this.headerContent = this.currentYearMonth
      } else {
        this.currentWeekday = moment(this.currentWeekday).subtract(7, 'days')
        this.weekHeaderContent()
      }
    },
    next() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .add(1, 'months')
          .format('YYYY-MM')
        this.headerContent = this.currentYearMonth
      } else {
        this.currentWeekday = moment(this.currentWeekday).add(7, 'days')
        this.weekHeaderContent()
      }
    },
    toToday() {
      if (this.showMonth) {
        this.currentYearMonth = moment().format('YYYY-MM')
        this.headerContent = this.currentYearMonth
      } else {
        const weekday = moment().weekday() === 7 ? 0 : moment().weekday()
        this.currentWeekday = moment().add(weekday, 'days')
        this.weekHeaderContent()
      }
    },
    switchMonth() {
      this.showMonth = true
      this.headerContent = this.currentYearMonth
    },
    switchWeek() {
      this.showMonth = false
      this.weekHeaderContent()
    },

    weekHeaderContent() {
      this.headerContent =
        moment(this.currentWeekday).format('MM/DD') +
        '~' +
        moment(this.currentWeekday).add(6, 'days').format('MM/DD')
    },
    handleDateClick(e, date) {
      // console.log('calendar-click', e, date)
      this.$emit('on-date-click', e, date)
    },
    handleLabelHover(e, day, label) {
      console.log('fff')
      this.$emit('on-label-hover', e, day, label)
    },
    handleLabelLeave(e, day, label) {
      this.$emit('on-label-leave', e, day, label)
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ebeef5;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ebeef5;
}
.body {
  padding: 12px 20px 35px;
}
</style>
