<template>
  <div id="app">
    <form class="form" @submit.prevent="submitForm()" novalidate>
      <h2 class="form__title">Создание клиента</h2>
      <div class="progress-bar">
        <div
          class="progress-bar__fill"
          v-bind:style="`width: calc(100%*(${step}/3));`"
        ></div>
      </div>
      <span class="step-counter">Шаг {{ step }} из 3</span>

      <div v-show="step === 1">
        <h3 class="step-title">Личные данные</h3>
        <div class="inputs">
          <div class="input-parent correct">
            <input
              type="text"
              v-model="clientData.surName"
              class="input-text"
              placeholder="Фамилия*"
            />
          </div>
          <div class="input-parent not-fill-error">
            <input
              type="text"
              v-model="clientData.name"
              class="input-text"
              placeholder="Имя*"
            />
          </div>
          <div class="input-parent incorrect-error">
            <input
              type="text"
              v-model="clientData.patronymic"
              class="input-text"
              placeholder="Отчество (если имеется)"
            />
          </div>
          <div class="input-parent"></div>
          <input
            type="text"
            v-model="clientData.dateOfBirth"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            class="input-text input"
            placeholder="Дата рождения*"
          />
          <div class="input-parent">
            <input
              type="phone"
              v-model="clientData.phone"
              class="input-text"
              placeholder="Номер телефона*"
            />
          </div>

          <div class="input-parent">
            <div class="select-wrap">
              <select v-model="clientData.gender" class="input-text select">
                <option value="" disabled selected>Пол</option>
                <option value="man">Мужчина</option>
                <option value="woman">Женщина</option>
              </select>
              <i class="material-icons select-expand">expand_more</i>
            </div>
          </div>
          <div class="input-parent">
            <div class="select-wrap">
              <select
                v-model="clientData.clientGroup"
                class="input-text select"
              >
                <option value="" disabled selected>Группа клиентов*</option>
                <option value="vip">VIP</option>
                <option value="problem">Проблемные</option>
                <option value="oms">ОМС</option>
              </select>
              <i class="material-icons select-expand">expand_more</i>
            </div>
          </div>
          <div class="input-parent">
            <div class="select-wrap">
              <select v-model="clientData.doctor" class="input-text select">
                <option value="" disabled selected>Лечащий врач*</option>
                <option value="ivanov">Иванов</option>
                <option value="zakharov">Захаров</option>
                <option value="chernishova">Чернышева</option>
              </select>
              <i class="material-icons select-expand">expand_more</i>
            </div>
          </div>
        </div>
        <div class="checkbox">
          <input type="checkbox" v-model="clientData.nSms" id="sms" />
          <label for="sms">Не отправлять СМС</label>
        </div>
      </div>

      <div v-show="step === 2">
        <h3 class="step-title">Адрес проживания</h3>
        <div class="inputs">
          <input
            type="text"
            v-model="clientData.index"
            class="input-text"
            placeholder="Индекс"
          />
          <input
            type="text"
            v-model="clientData.country"
            class="input-text"
            placeholder="Страна"
          />
          <input
            type="text"
            v-model="clientData.region"
            class="input-text"
            placeholder="Область"
          />
          <input
            type="text"
            v-model="clientData.city"
            class="input-text"
            placeholder="Город*"
            required
          />
          <input
            type="text"
            v-model="clientData.street"
            class="input-text"
            placeholder="Улица"
          />
          <input
            type="text"
            v-model="clientData.house"
            class="input-text"
            placeholder="Дом"
          />
        </div>
      </div>

      <div v-show="step === 3">
        <h3 class="step-title">Документ</h3>
        <div class="inputs">
          <div class="select-wrap">
            <select v-model="clientData.document" class="input-text select">
              <option value="" disabled selected>Тип документа*</option>
              <option value="pasport">Паспорт</option>
              <option value="bc">Свидетельство о рождении</option>
              <option value="driver-lic">Вод. удостоверение</option>
            </select>
            <i class="material-icons select-expand">expand_more</i>
          </div>
          <input
            type="text"
            v-model="clientData.dSeries"
            class="input-text"
            placeholder="Серия"
          />
          <input
            type="text"
            v-model="clientData.dNumber"
            class="input-text"
            placeholder="Номер"
          />
          <input
            type="text"
            v-model="clientData.dIssued"
            class="input-text"
            placeholder="Кем Выдан"
          />
          <input
            type="text"
            v-model="clientData.dDateIssue"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            class="input-text input"
            placeholder="Дата выдачи*"
          />
        </div>
        <Complete
          v-if="isComplete"
          v-on:close-complete="hideComplete()"
          v-on:click-db="msg()"
          v-on:click-create-more="(step = 1), hideComplete()"
        />
      </div>

      <div class="button-wrap">
        <button type="button" class="btn-prev button" @click="prevStep">
          <i class="material-icons prev">navigate_before</i>
          Назад
        </button>
        <button
          v-if="step === 3"
          @click.prevent="isComplete = true"
          type="submit"
          class="btn-next button"
        >
          Создать клиента
          <i class="material-icons next">navigate_next</i>
        </button>
        <button v-else type="button" class="btn-next button" @click="nextStep">
          Далее
          <i class="material-icons next">navigate_next</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators/";
import Complete from "@/components/Complete";
export default {
  components: {
    Complete,
  },
  data() {
    return {
      step: 1,
      isComplete: false,
      clientData: {
        surName: "",
        name: "",
        patronymic: "",
        dateOfBirth: "",
        phone: "",
        gender: "",
        clientGroup: "",
        doctor: "",
        nSms: "",
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        document: "",
        dSeries: "",
        dNumber: "",
        dIssued: "",
        dDateIssue: "",
      },
    };
  },
  methods: {
    nextStep() {
      if (this.step < 3) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    hideComplete() {
      this.isComplete = false;
    },
    msg() {
      alert("База данных не создана!");
    },
    submitForm() {
      console.log("Форма отправлена!");
    },
  },
  validatons: {},
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap')
.base-div
  transition: 1s
  opacity: 0
.active
  opacity: 1

#app
  position: relative
  font-family: 'Open Sans', sans-serif
  font-size: 16px
  padding: 48px 20px 80px

.form
  max-width: 720px
  margin: 0 auto
  &__title
    font-weight: 700
    font-size: 2rem
    line-height: 40px
    margin-top: 16px
    margin-bottom: 32px

.progress-bar
  position: relative
  width: 100%
  height: 2px
  background: #ececec
  margin-bottom: 24px
  &__fill
    position: absolute
    height: 100%
    background: #0796E5
    transition: 1.5s

.step-counter
  line-height: 24px
  font-weight: 400
  color: #999

.step-title
  font-size: 1.5rem
  line-height: 32px
  font-weight: 600
  margin-top: 8px
  margin-bottom: 12px

.select-wrap
  position: relative
  width: 100%

.select-expand
  color: #666
  position: absolute
  top: 50%
  right: 270px
  transform: translateY(-50%)

.select
  appearance: none
  color: #666
  &:focus
    color: #000
    & + .select-expand
      color: #000

.input-text
  margin: 12px 0
  height: 72px
  width: 66%
  border: 1px solid #EAEAEA
  border-radius: 4px
  padding: 24px
  line-height: 24px
  box-sizing: border-box

.inputs:last-child
  margin-bottom: 0

.checkbox
  margin-top: 28px
  margin-bottom: 12px
  display: flex
  align-items: center
  & > *
    cursor: pointer
  & input
    height: 18px
    width: 18px
    margin-right: 12px
  & label
    color: #666
    line-height: 24px

// Кнопки

.button-wrap
  width: 66%
  margin-top: 40px
  display: flex
  justify-content: space-between

.button
  height: 56px
  border-radius: 4px
  border: none
  cursor: pointer
  text-align: left
  display: flex
  align-items: center
  transition: 0.2s
  &:hover
    opacity: 0.8
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2)
  &:active
    box-shadow: 0px 0px 0px

.btn-prev
  width: 40%
  background: #e8e8ea
  color: #000

.btn-next
  width: 50%
  background: #0796E6
  color: #fff
  padding-left: 24px
  padding-right: 16px
  display: flex
  justify-content: space-between

// Классы сообщений

.not-fill-error
  & .input-text
    border: 1px solid #FFA3A3

  &::after
    position: relative
    height: 20px
    font-size: .9rem
    line-height: 16px
    content: 'Необходимо заполнить поле'
    color: #FF8484
    padding-left: 40px
    margin-left: 10px
    background: url(./assets/icons/nf-error.svg) no-repeat left center
    display: block

.input-parent
  position: relative

.incorrect-error
  & .input-text
    border: 1px solid #FFCF52

  &::after
    position: relative
    height: 20px
    font-size: .9rem
    line-height: 16px
    content: 'Данные введены не корректно'
    color: #FFCF52
    padding-left: 40px
    margin-left: 10px
    background: url(./assets/icons/incorrect.svg) no-repeat left center
    display: block

.correct
  display: flex
  align-items: center
  position: relative
  & .input-text
    border: 1px solid #7BFF65
    padding-right: 50px
  &::after
    position: absolute
    width: 20px
    height: 20px
    right: 265px
    line-height: 16px
    content: ''
    color: #7BFF65
    background: url(./assets/icons/correct.svg) no-repeat left center
    display: block

// Медиа-запросы

@media (max-width: 768px)
  .button-wrap
    width: 100%
  .form
    width: 100%
  .input-text
    width: 100%
  .correct::after
    right: 20px
  .button-wrap
    & .btn-prev
      width: 45%
    & .btn-next
      width: 45%
  .select-expand
    right: 70px
  #app
    font-size: 1.2rem

@media (max-width: 466px)
  .select-expand
    right: 12%

@media (max-width: 370px)
  .prev, .next
    display: none
  .btn-prev, .btn-next
    display: flex
    justify-content: center
  .button-wrap .btn-next
    padding: 0
    display: flex
    justify-content: center
    text-align: center
  #app
    padding: 0 20px 20px
</style>
