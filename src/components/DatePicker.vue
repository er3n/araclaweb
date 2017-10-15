<template>
  <table class="aracla-date-picker">
    <caption>
      <a @click="prevCalendar" class="prev">Önceki</a>
      <span>{{ currentCalendar.caption }}</span>
      <a @click="nextCalendar" class="next">Sonraki</a>
    </caption>
    <thead>
    <tr>
      <th>Ptesi</th>
      <th>Salı</th>
      <th>Çarş</th>
      <th>Perş</th>
      <th>Cuma</th>
      <th>Ctesi</th>
      <th>Pzr</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="week in currentCalendar.weeks">
      <td
        v-for="day in week"
        :class="{ disabled: !day.enable, current: day.current, selected: (day.selected || false) }"
        @click="selectDate(day)"
      >
        {{ day.text }}
      </td>
    </tr>
    </tbody>
  </table>
</template>


<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        calendar: {
          currentIndex: 0,
          selectedDate: {},
          calendars: [this.createCalendar(new Date().getFullYear(), new Date().getMonth())]
        }
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      minDate: {
        type: Date,
        required: false, // since we do not need this prop in start date picker
        default () {
          return null
        }
      }
    },
    updated () {
      // datepickerdan seçim yapıldığında o picker için tetiklenir.
    },
    watch: {
      minDate: function (v) {
        this.calendar.calendars.map((calendar) => {
          calendar.weeks.map((week) => {
            week.map((day) => {
              if (day.date == null || day.date < v) {
                day.enable = false
                day.selected = false
                day.current = false
              } else {
                day.enable = true
              }
            })
          })
        })
      }
    },
    computed: {
      currentCalendar () {
        return this.calendar.calendars[this.calendar.currentIndex]
      }
    },
    methods: {
      getMonthString (number) {
        let months = [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık'
        ]
        return months[number]
      },
      selectDate (day) {
        if (!day.enable) return
        if (this.calendar.selectedDate) {
          this.calendar.selectedDate.selected = false
        }
        day.selected = true
        this.calendar.selectedDate = day
        this.$emit('dayselectedoncalendar', day)
      },
      nextCalendar () {
        if (this.calendar.currentIndex < this.calendar.calendars.length - 1) {
          this.calendar.currentIndex++
        } else {
          let calendar = this.createCalendar(this.currentCalendar.year, this.currentCalendar.month + 1)
          this.calendar.calendars.push(calendar)
          this.calendar.currentIndex++
        }
      },
      prevCalendar () {
        if (this.calendar.currentIndex > 0) {
          this.calendar.currentIndex--
        } else {
          let calendar = this.createCalendar(this.currentCalendar.year, this.currentCalendar.month - 1)
          this.calendar.calendars.splice(0, 0, calendar)
          this.calendar.currentIndex = 0
        }
      },
      createCalendar (year, month) {
        let date = new Date()
        let createdDate = new Date(year, month)
        let count = 0
        let started = false
        let calendar = {
          caption: `${this.getMonthString(createdDate.getMonth())} ${createdDate.getFullYear()}`,
          year: year,
          month: month,
          weeks: []
        }

        let firstDayOfMonth = new Date(year, month, 1)
        let lastDayOfMonth = new Date(year, month + 1, 0)
        let weeksOfMonth = Math.ceil(((firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7) + lastDayOfMonth.getDate() - 1) / 7)

        for (var i = 1; i <= weeksOfMonth; i++) {
          var week = []
          for (var j = 1; j <= 7; j++) {
            count++

            if (!started && count % 7 === firstDayOfMonth.getDay()) {
              started = true
              count = 1
            }

            if (started) {
              let _date = new Date(year, month, count)
              if (count <= lastDayOfMonth.getDate()) {
                var day = {
                  text: count,
                  enable: _date > this.minDate,
                  current: false,
                  day: count,
                  month: month,
                  year: year,
                  date: _date,
                  selected: false
                }
                if (count === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
                  day.current = true
                  day.enable = true
                }
                week.push(day)
              } else {
                week.push({
                  text: '',
                  enable: false
                })
              }
            } else {
              week.push({
                text: '',
                enable: false
              })
            }
          }
          calendar.weeks.push(week)
        }
        return calendar
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../styles/global";
  @import "../styles/components";
</style>
