const isPhone = document.body.clientWidth < 600
const isTab = document.body.clientWidth > 600 && document.body.clientWidth < 1200
const isPc = document.body.clientWidth > 1200

export default {
  isPhone: isPhone,
  isTab: isTab,
  isPc: isPc
}
