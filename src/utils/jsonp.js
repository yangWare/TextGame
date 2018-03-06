/**
 * Created by yanglei on 2018/3/7.
 */
export default function (url) {
  let script = window.document.createElement('script')
  script.src = url
  window.document.body.appendChild(script)
  setTimeout(function () {
    window.document.body.removeChild(script)
  }, 0)
}
