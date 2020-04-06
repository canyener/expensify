const { config } = require('dotenv')

process.env.NODE_ENV  = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  config({ path: '.env.development' })
}