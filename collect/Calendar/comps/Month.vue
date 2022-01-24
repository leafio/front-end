<!--  -->
<template>
  <div class>
    <div class="row header">
      <!-- <div class="cell colName ">{{ row }}</div> -->
      <div v-for="(col, colIndex) in headers" :key="colIndex" class="cell">{{ col }}</div>
    </div>
    <div v-for="(row, rowIndex) in dates" :key="rowIndex" class="row">
      <!-- <div class="cell colName">{{ row }}</div> -->
      <div
        v-for="(col, colIndex) in headers"
        :key="colIndex"
        class="cell date"
        :style="[
          row[colIndex].isToday ? todayStyle : {},
          row[colIndex].isHover ? hoverStyle : {},
        ]"
        :class="[row[colIndex].class]"
        @mouseenter="onMouseenter($event, row[colIndex])"
        @mouseleave="onMouseleave($event, row[colIndex])"
        @click="onClick($event,row[colIndex])"
      >
        {{ row[colIndex].day }}
        <div
          v-for="(label, index) in row[colIndex].labels"
          :key="index"
          class="label"
          :style="label.style"
          @mouseenter="onMouseenterLabel($event, row[colIndex],label)"
          @mouseleave="onMouseleaveLabel($event, row[colIndex],label)"
        >{{ label.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {},
  props: {
    currentYearMonth: {
      type: String,
      default: ''
    },
    dateList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      today: moment().format('YYYY-MM-DD'),
      // currentYearMonth: moment().format('YYYY-MM'),
      dates: [],
      headers: ['一', '二', '三', '四', '五', '六', '日'],
      hoverStyle: {
        'background-color': 'rgb(252, 212, 215)'
      },
      todayStyle: {
        color: '#f44e50',
        'background-color': '#ffff99'
      }
    }
  },
  computed: {},
  watch: {
    currentYearMonth() {
      this.createCalendar()
    }
  },
  created() {
    this.createCalendar()
  },
  mounted() { },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { },
  methods: {
    filterLabels(date) {
      // console.log(date, this.dateList.filter(item => item.date === date))
      return this.dateList.filter(item => item.date === date)
    },
    onClick(e, date) {
      // console.log('month-click', e, date)
      this.$emit('click', e, date)
    },
    onMouseenter(e, date) {
      // console.log('enter', e, date)
      if (!date.isHover) {
        date.isHover = true
      }
      // console.log(date.isHover)
    },
    onMouseleave(e, date) {
      // console.log('move', e, date)
      if (date.isHover) {
        date.isHover = false
      }
      // console.log(date.isHover)
    },
    onMouseenterLabel(e, day, label) {
      console.log('eee', e)
      this.$emit('on-label-hover', e, day, label)
    },
    onMouseleaveLabel(e, day, label) {
      this.$emit('on-label-leave', e, day, label)
    },
    createCalendar() {
      this.dates = []
      // 获取当月的一号是星期几 以便来生成上月的日期 填补够42个格子
      const monthFirstDay = moment(this.currentYearMonth + '-01', 'YYYY-MM-DD')
      // 获得一号与第一个格子内应该有的天数距离 这里需要注意的是 weekday 是从周日 为 0 开始的
      let firstDayWeekday = moment(monthFirstDay).weekday()
      if (firstDayWeekday === 0) {
        firstDayWeekday = 7
      }
      let daysDistance = 0 - firstDayWeekday
      for (let weeks = 0; weeks < 6; weeks++) {
        this.dates.push([])
        for (let weekday = 0; weekday < 7; weekday++) {
          // 该对象有两个属性 一个是class属性 还有一个就是日期
          const date = {}
          date.day = moment(monthFirstDay).add(daysDistance, 'days')
          date.isHover = false
          const dayMonth = moment(date.day).month()
          // 是这个月的日期
          if (dayMonth === moment(monthFirstDay).month()) {
            date.class = 'current-month '
            // 日期是今天的高亮
            if (moment(date.day).isSame(this.today, 'days')) {
              date.isToday = true
            }
          } else {
            date.class = 'not-current-month '
          }
          date.date = moment(date.day).format('YYYY-MM-DD')
          date.labels = this.filterLabels(date.date)
          date.day = moment(date.day).format('DD')
          this.dates[weeks].push(date)
          daysDistance++
        }
      }
    }
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
.cell {
  // background-color: aquamarine;
  flex: 1;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  height: 2em;
  font-size: small;
}
.cell.colName {
  flex: 0.5;
}

.date {
  box-sizing: border-box;
  padding: 8px;
  height: 84px;
}
.not-current-month {
  color: #909399;
}
.current-month {
  color: #000000;
}
.today {
  color: #f44e50;
  background-color: #ffff99;
}

.label {
  color: red;
  background-color: rgb(243, 155, 155);
}
</style>
