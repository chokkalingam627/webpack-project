import quoteGenerator from "./quotes"
import './styles/styles.scss'
import quote from './assets/quote.png'

const quoteImg = document.getElementById('quoteImg')
quoteImg.src = quote

const quoteBtn = document.getElementById('quoteBtn')
quoteBtn.addEventListener('click', quoteGenerator)

quoteGenerator()