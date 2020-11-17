<template>
  <div class="popup-bg">
    <div class="popup">
      <div class="content-wraper">
        <h3 class="popup-title">Клиент создан!</h3>
        <p class="popup-msg">
          Вы можете приступить к созданию нового клиента или перейти к общей
          клиентской базе
        </p>
        <div class="btn-wrapper">
          <button
            v-on:click.prevent="$emit('click-create-more')"
            class="popup-btn create-another"
          >
            Создать еще клиента
          </button>
          <button
            v-on:click.prevent="$emit('click-db')"
            class="popup-btn to-db"
          >
            Перейти к базе
          </button>
        </div>
        <button v-on:click.prevent="$emit('close-complete')" class="btn-close">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.popup-bg
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center
  z-index: 1
  backdrop-filter: blur(3px)
.popup
  width: 450px
  height: 225px
  background: #FFF
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08)
  border-radius: 8px
  display: flex
  justify-content: center
  align-items: center
  z-index: 2
  &-title
    font-weight: 600
    font-size: 24px
    line-height: 32px
    margin-top: 0
    margin-bottom: 12px
  &-msg
    font-size: 16px
    line-height: 24px
    color: #808080
    margin-bottom: 28px
.content-wraper
  width: 400px
  height: 176px
  position: relative
.btn-wrapper
  width: 100%
  display: flex
  justify-content: space-between
.popup-btn
  height: 56px
  text-align: center
  font-size: 16px
  border: none
  line-height: 24px
  border-radius: 4px
  cursor: pointer
  &:hover
    opacity: 0.9
.create-another
  background: #0796E5
  color: #fff
  width: 54%
  text-decoration: none
  display: flex
  align-items: center
  justify-content: center
.to-db
  width: 42%
.btn-close
  background: none
  border: none
  font-size: 30px
  cursor: pointer
  position: absolute
  right: -10px
  top: -15px
  &:focus
    outline: none
@media (max-width: 500px)
  .popup
    width: 90%
    height: 360px
    &-title
      font-size: 28px
    &-msg
      font-size: 20px
  .content-wraper
    width: 90%
    height: 90%
  .btn-wrapper
    width: 100%
    height: 150px
    display: flex
    justify-content: space-between
    flex-direction: column
  .popup-btn
    height: 60px
    font-size: 20px
    width: 100%
  .btn-close
    font-size: 40px
</style>
