var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var describe = document.getElementById('describe')
var email = document.getElementById('email')
var phone = document.getElementById('phone')

var preview = document.getElementById('preview')
var raw = document.getElementById('raw')

firstName.addEventListener('input', function () {
  addText
})

lastName.addEventListener('input', function () {
  addText
})

describe.addEventListener('input', function () {
  addText
})

email.addEventListener('input', function () {
  addText
})

phone.addEventListener('input', function () {
  addText
})

function addText () {
  var text = '<h1>Hi, my name is ' + firstName.value + ' ' + lastName.value + ' !</h1>'  + 
                '<p>' + describe.value + '</p>' + 
                '<p> If you\'re interested in a date, you can email me at' + 
                    '<a href="mailto:' + email.value + '" target="_blank">' + email.value + '</a>'  + 
                    'or give me a call at <a href="tel:' + phone.value + '" target="_blank">' + phone.value + '</a>.' + 
                '</p>'

  preview.innerHTML = text
  raw.textContent = text
}
