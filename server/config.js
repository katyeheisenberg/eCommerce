require('dotenv').config()

const options = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV,
  secret: process.env.SECRET_JWT || 'secretKey'
}

export default options
