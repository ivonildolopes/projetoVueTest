import axios from 'axios'

export default {
  getCDAs(data){
    axios({
      method: 'POST',
      url: '/public_api/divida_ativas/buscar_dividas',
      data: {
        "buscar_dividas": {
          "documento": data.documento,
          "valor": data.valor
        }
      }
    })
  }
}