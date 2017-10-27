<template>
  <div>

    <div class="main" style="">
      <AraclaNotification ref="notification" />
      <h1>aracla.com</h1>
      <h2>Türkiyenin Saatlik Araç Kiralama Platformu</h2>
      <div id="search-widget" v-cloak v-click-outside="closeSubMenus">
        <div class="col parking-points">
          <span class="title">Park Noktası</span>
          <span class="content" @click="loadParkingPoints"
                :class="{ active: selectedColumn === 'col1' }">{{ selectedParkingPoint.name || "Alış Yeri Seçiniz"
            }}</span>
          <div v-show="selectedColumn === 'col1'" v-cloak class="sub-menu">
            <p v-if="isParkinPointsLoading">Lütfen Bekleyin..</p>
            <h4>Park Noktası Seçiniz <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg" alt="Kapat" height="16"></a></h4>
            <ul>
              <li v-for="item in parkingPoints">
                <a @click="selectParkingPoint(item)">{{ item.name }} <span class="address">{{ item.description }}</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col date-time">
          <span class="title">Alış Tarih - Saat</span>
          <span class="content" @click="showDateTime('col2')"
                :class="{ active: selectedColumn === 'col2' }">{{ startDateLabel }}</span>
          <div v-show="selectedColumn === 'col2' || selectedColumn === 'col3'" v-cloak class="sub-menu">
            <div class="slider" :class="selectedColumn">
              <div class="content">
                <h4>Alış Tarihi ve Saati <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg"
                                                                                      alt="Kapat" height="16"></a></h4>
                <date-picker
                  name="startDatePicker"
                  @dayselectedoncalendar="selectStartDate"
                  :min-date="today"
                >
                </date-picker>
                <div v-if="startDate" class="time-picker">
                  <select v-model="selectedStartTimeOptionValue">
                    <option value="-1" selected disabled>Alış Saati</option>
                    <option
                      v-for="option in startTimeOptions"
                      :value="option.value"
                    >{{ option.name }}
                    </option>
                  </select>
                  <span>Lütfen alış saatini seçiniz:</span>
                </div>
              </div>
              <div class="content">
                <h4>Teslim Tarihi ve Saati <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg"
                                                                                        alt="Kapat" height="16"></a>
                </h4>
                <date-picker
                  name="endDatePicker"
                  @dayselectedoncalendar="selectEndDate"
                  :min-date="startDate"
                ></date-picker>
                <div v-if="endDate" class="time-picker">
                  <select v-model="selectedEndTimeOptionValue">
                    <option value="-1" selected disabled>Teslim Saati</option>
                    <option
                      v-for="option in endTimeOptions"
                      :value="option.value"
                      :disabled="option.disabled"
                    >{{ option.name }}
                    </option>
                  </select>
                  <span>Lütfen teslim saatini seçiniz:</span>
                  <a @click="checkAvailableCars" class="search-btn mobile-search-btn">Ara</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col date-time">
          <span class="title">Teslim Tarih - Saat</span>
          <span class="content" @click="showDateTime('col3')"
                :class="{ active: selectedColumn === 'col3' }">{{ endDateLabel }}</span>
        </div>
        <a @click.prevent="checkAvailableCars" href="#" class="search-btn">Ara</a>
      </div>
    </div>

    <WhyAracla />

    <AboutVideo />

    <CarPricing />

    <CarParks />

    <RentalSteps />

    <AraclaClub />

  </div>
</template>

<script>
  import DatePicker from '@/components/DatePicker'
  import AboutVideo from '@/components/AboutVideo'
  import CarPricing from '@/components/CarPricing'
  import CarParks from '@/components/CarParks'
  import RentalSteps from '@/components/RentalSteps'
  import AraclaClub from '@/components/AraclaClub'
  import WhyAracla from '@/components/WhyAracla'
  import AraclaNotification from '@/components/AraclaNotification'
  import {handleException} from '@/utils/ExceptionUtils'
  import axios from 'axios'

  export default {
    name: 'HomePage',
    components: {DatePicker, WhyAracla, AraclaNotification, AboutVideo, CarPricing, CarParks, RentalSteps, AraclaClub},
    data () {
      return {
        active: false,
        selectedColumn: '',
        parkingPoints: [],
        selectedParkingPoint: {},
        isParkinPointsLoading: true,

        startDate: null,
        endDate: null,

        pickUpDate: null,
        pickUpHour: null,
        dropOffDate: null,
        dropOffHour: null,

        startTimeOptions: [],
        selectedStartTimeOptionValue: -1,
        endTimeOptions: [],
        selectedEndTimeOptionValue: -1,

        today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

      }
    },
    methods: {
      loadParkingPoints () {
        this.selectedColumn = 'col1'
        axios.get(`/api/offices`)
          .then((res) => {
            return res.data
          })
          .then((res) => {
            this.parkingPoints = res
            this.isParkinPointsLoading = false
            localStorage.setItem('parkingPoints', JSON.stringify(this.parkingPoints))
          })
      },
      loadTimes () {
        axios.get('static/js/jsons/saatler.json')
          .then((res) => {
            return res.data
          })
          .then((res) => {
            this.startTimeOptions = res.startTime
            this.endTimeOptions = res.endTime
          })
      },
      showDateTime (cname) {
        this.selectedColumn = cname
      },
      selectParkingPoint (item) {
        this.selectedParkingPoint = item
        this.showDateTime('col2')
      },
      closeSubMenus () {
        this.selectedColumn = ''
      },
      selectStartDate (day) {
        this.startDate = day.date
      },
      selectEndDate (day) {
        this.endDate = day.date
      },
      checkAvailableCars () {
        let missingData = !this.dropOffDate || !this.dropOffHour || !this.pickUpDate || !this.pickUpHour || !this.selectedParkingPoint.code
        if (missingData) {
          this.$refs.notification.goster({
            title: 'Hata!',
            content: 'Eksik bilgi girdiniz.'
          })
          return
        }
        let reservationParams = {
          dropOffDate: this.dropOffDate,
          dropOffHour: this.dropOffHour,
          pickUpDate: this.pickUpDate,
          pickUpHour: this.pickUpHour,
          pickUpLocation: this.selectedParkingPoint.code
        }
        axios.post('/api/calculateAvailableReservations', reservationParams).then((response) => {
          sessionStorage.setItem('reservationParams', JSON.stringify(reservationParams))
          this.$router.push({
            name: 'SelectCar', params: { availableCars: response.data, parkingPoints: this.parkingPoints }
          })
        }).catch((err) => {
          handleException(err, (desc) => {
            this.$refs.notification.goster({
              title: 'Hata!',
              content: desc
            })
          })
        })
      }

    },
    created () {
      console.log('yüklendi')
      this.loadTimes()
    },
    watch: {
      selectedStartTimeOptionValue (t) {
        console.log(t)
        setTimeout(() => {
          this.showDateTime('col3')
        }, 500)
      },

      // set disabled times by checking to dates
      endDate (d) {
        if (this.endDate) {
          if (!this.startDate) return
          this.endTimeOptions.map((option) => {
            if (this.startDate.toString() === d.toString()) {
              if (option.value < this.selectedStartTimeOptionValue + 4) {
                option.disabled = true
              } else {
                option.disabled = false
              }
            } else {
              option.disabled = false
            }
          })
        }
      }
    },
    computed: {
      startDateLabel () {
        let sd = new Date(this.startDate)
        if (this.startDate) {
          // first of all, reset end and times
          this.endDate = null
          this.dropOffDate = null
          this.dropOffHour = null
          this.selectedEndTimeOptionValue = -1

          // create temporary variables
          let tarihLabel = ''
          let saatLabel = ''
          if (this.selectedStartTimeOptionValue >= 0) {
            saatLabel = this.startTimeOptions[this.selectedStartTimeOptionValue].name
            this.pickUpHour = saatLabel
            tarihLabel = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()} - ${saatLabel}`
          } else {
            tarihLabel = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()}`
          }
          this.pickUpDate = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()}`
          return tarihLabel
        } else {
          return 'Alış Tarihi Seçiniz'
        }
      },
      endDateLabel () {
        let ed = new Date(this.endDate)
        if (this.endDate) {
          let tarihLabel = ''
          let saatLabel = ''
          if (this.selectedEndTimeOptionValue >= 0) {
            saatLabel = this.startTimeOptions[this.selectedEndTimeOptionValue].name
            this.dropOffHour = saatLabel
            tarihLabel = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()} - ${saatLabel}`
          } else {
            tarihLabel = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()}`
          }
          this.dropOffDate = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()}`
          return tarihLabel
        } else {
          return 'Teslim Tarihi Seçiniz'
        }
      }
    },
    directives: {
      'click-outside': {
        bind: function (el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) {
              warn += `Found in component '${compName}'`
            }

            console.warn(warn)
          }
          // Define Handler and cache it on the element
          const bubble = binding.modifiers.bubble
          const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
              binding.value(e)
            }
          }
          el.__vueClickOutside__ = handler

          // add Event Listeners
          document.addEventListener('click', handler)
        },

        unbind: function (el, binding) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__)
          el.__vueClickOutside__ = null
        }
      }
    }
  }
</script>

<style lang="scss" >
  @import "../styles/main";
</style>

