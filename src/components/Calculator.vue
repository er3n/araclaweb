<template>
  <div class="section" id="ne-oderim">
    <div class="inner">
      <h2>Ne Öderim?</h2>
      <h3>Hesaplayıcıyı kullanın, ne ödeyeceğinizi önceden bilin!</h3>
      <div class="controls">
        <!-- <select name="araclar" id="araclar" data-relation="selectCar"> -->
        <span class="col select">
                    <label for="araclar">Araç Seçiniz</label>
                    <select name="araclar" id="araclar" v-model="selectedCar">
                        <option disabled value="">Araç Seçiniz</option>
                        <option v-for="car in cars" :value="car">
                            {{ car.name }}
                        </option>
                    </select>
                    <em v-if="carNotSelected">Araç seçilmedi</em>
                </span>
        <span class="col input">
                    <label for="kac-km">Kaç Km</label>
                    <input type="number" id="kac-km" min="10" v-model="kacKm">
                    <em v-if="kmEmpty">Km giriniz</em>
                </span>
        <span class="col input">
                    <label for="kac-gun">Kaç Gün</label>
                    <input type="number" id="kac-gun" min="0" v-model="kacGun">
                    <em>Aynı gün için 0 girin</em>
                    <em v-if="gunEmpty">Günü giriniz</em>
                </span>
        <span class="col input">
                    <label for="kac-saat">Kaç Saat</label>
                    <input type="number" id="kac-saat" min="1" placeholder="Kaç Saat?" v-model="kacSaat">
                    <em v-if="saatEmpty">Saati giriniz</em>
                </span>
        <span class="col button">
                        <a @click="calculatePrice" class="btn-hesapla"><i></i> Hesapla</a>
                </span>
      </div>
      <div class="results">
        <div class="titles">
          <div class="title arac">Seçilen Araç <span>{{ selectedCar.name || "Araç Seçiniz" }}</span></div>
          <div class="title mesafe">Mesafe <span>{{ kacKm }} km</span></div>
          <div class="title gun">Gün <span>{{ kacGun }} gün</span></div>
          <div class="title saat">Saat <span>{{ kacSaat }} saat</span></div>
        </div>
        <div class="result">
          <div class="title ucretsiz_mesafe">Ücretsiz Mesafe <span>0 km</span></div>
          <div class="title odenecek_mesafe">Ödenecek Mesafe <span>0 km</span></div>
          <div class="title mesafe_ucreti">Mesafe Ücreti <span>0 TL</span></div>
          <div class="title toplam">Toplam Fiyat <span>0 TL</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        cars: [],
        selectedCar: {},
        kacKm: 0,
        kacGun: 0,
        kacSaat: 0,
        canCalculate: true,
        carNotSelected: false,
        kmEmpty: false,
        saatEmpty: false,
        gunEmpty: false,

        ucretsizMesafe: 0,
        odenecekMesafe: 0,
        mesafeUcreti: 0,
        toplamTutar: 0
      }
    },
    methods: {
      loadCars () {
        this.araclar = []
        fetch('static/js/jsons/araclar.json')
          .then((res) => { return res.json() })
          .then((res) => {
            this.cars = res.cars
            localStorage.setItem('cars', JSON.stringify(this.cars))
          })
      },
      calculatePrice () {
        this.canCalculate = true
        this.carNotSelected = false
        this.kmEmpty = false
        this.saatEmpty = false
        this.gunEmpty = false

        if (!this.selectedCar.name) {
          this.carNotSelected = true
          this.canCalculate = false
        }
        if (this.kacKm === '') {
          this.kmEmpty = true
          this.canCalculate = false
        }
        if (this.kacGun === '') {
          this.gunEmpty = true
          this.canCalculate = false
        }
        if (this.kacSaat === '') {
          this.saatEmpty = true
          this.canCalculate = false
        }

        if (this.canCalculate) {
          console.log(this.selectedCar)
        }
      }
    },
    created () {
      console.log('ne öderim yüklendi')
      this.loadCars()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/global";
  @import "../styles/section";
  @import "../styles/ne-oderim";
</style>
