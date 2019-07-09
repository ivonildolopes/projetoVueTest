import dividasCnpj from './mocks/dividas_cnpj.json'
import dividasNumeroInscricao from './mocks/dividas_numero_inscricao'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(mockData)
    }, time)
  })
}

export default {
  getCDAs(_data){
    return fetch(dividasCnpj, 1000)
  }
}
