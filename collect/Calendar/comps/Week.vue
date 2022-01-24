<template>
  <div>
    <!-- 首行 -->
    <div class="header" style="display: flex;">
      <div class="col colName">
        <div class="cell" />
      </div>
      <div v-for="(col,colIndex) in weekTableHeader" :key="colIndex" class="col">
        <div class="cell" :style="col.style">{{ col.date }}</div></div>
    </div>

    <div class="content" style="display:flex">
      <!-- 首列 -->
      <div class="currentTime" :style="currentTimeStyle" />
      <div class="col colName">
        <div v-for="(row,rowIndex) in weekList[0]" :key="rowIndex" class="cell" :class="rowIndex % 2 ===0?'cell-odd':''">
          {{ row }}
        </div>
      </div>
      <!-- 内容 -->
      <div v-for="(col,colIndex) in weekTableHeader" :key="colIndex" class="col">
        <!-- <div class="cell" :style="col.style">{{ col.date }}</div> -->
        <div v-for="(row,rowIndex) in weekList[0]" :key="rowIndex" class="cell" :class="rowIndex % 2 ===0?'cell-odd':''">
          <!-- <div  /> -->
        </div>
        <div
          v-for="(label, index) in col.labels"
          :key="'l'+index"
          class="label"
          :style="[label.style,label.positionStyle]"
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
    // weekTableHeader: {
    //   type: Array,
    //   default: () => []
    // },
    dateList: {
      type: Array,
      default: () => []
    },
    currentWeekday: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      today: moment().format('YYYY-MM-DD'),
      weekTableHeader: [],
      dates: [],
      showMonth: true,
      weekList: [],
      hoverStyle: {
        'background-color': 'rgb(252, 212, 215)'
      },
      todayStyle: {
        color: '#f44e50',
        'background-color': '#ffff99'
      },
      currentTime: moment()

    }
  },
  computed: {
    currentTimeStyle() {
      return {
        top: moment(this.currentTime, 'hh:mm').diff(moment('00:00', 'hh:mm'), 'minutes') / (24 * 60) * 24 * 48 + 'px'
      }
    }
  },
  watch: {
    currentWeekday() {
      this.createWeekList()
    }
  },
  created() {
    this.createWeekList()
  },
  mounted() { },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { },
  methods: { filterLabels(date) {
    console.log(date, this.dateList.filter(item => item.date === date))
    return this.dateList.filter(item => item.date === date)
  },
  createWeekList() {
    this.weekTableHeader = ['一', '二', '三', '四', '五', '六', '日']
    this.weekList = []
    for (let index = 0; index < 7; index++) {
      const item = {}
      item.date = moment(this.currentWeekday).add(index, 'days')
      if (item.date.isSame(this.today, 'days')) {
        item.style = [this.todayStyle]
      }
      item.labels = this.filterLabels(item.date.format('YYYY-MM-DD'))
      item.labels.forEach(label => {
        const top = moment(label.startTime, 'hh:mm').diff(moment('00:00', 'hh:mm'), 'minutes') / (24 * 60) * 24 * 48 + 'px'
        const height = moment(label.endTime, 'hh:mm').diff(moment(label.startTime, 'hh:mm'), 'minutes') / (24 * 60) * 24 * 48 + 'px'
        label.positionStyle = {
          top,
          height
        }
      })
      item.date = this.weekTableHeader[index] + item.date.format('MM/DD')
      this.weekTableHeader[index] = item
    }
    for (let days = 0; days < 7; days++) {
      this.weekList.push([])
      let item = ''
      for (let hours = 0; hours < 48; hours++) {
        if (hours % 2 === 0) {
          item = hours / 2 + '点'
        } else {
          item = ''
        }
        this.weekList[days].push(item)
      }
    }
  }
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.col {
  // display: flex;
  // flex-direction: column;
  flex: 1;
  position: relative;
}
.label {
  position: absolute;
}
.cell {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid 	#e6e6e6;
  height: 24px;
  font-size: small;
}
.cell.cell-odd{
  border-bottom: 1px dashed #ebeef5;
}
.col.colName {
  flex: 0.5;
}

.content{
  position: relative;
  height: 600px;
  overflow-y: scroll;
}

.currentTime{
  position: absolute;
  height: 1px;
  border-bottom: 1px dashed blue;
  width: 100%;
}
</style>
