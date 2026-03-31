//importa o k6
import http from 'k6/http';
//usa o sleep parar por alguns segundos
import { sleep, check } from 'k6';

export const options = {
  //quantidade de inteirações (no nosso exemlplo logins)
  iterations: 50,
  thresholds: {
    http_req_duration: ['p(90)<5', 'max<2'],
    http_req_failed: ['rate<0.01']
  }
};

export default function () {
  //Teste é realizado aqui
  const url = 'http://localhost:3000/login';
  const payload = JSON.stringify({
    username: 'leo',
    senha: '1234',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o Status é 200':(r) => r.status === 200,
    'Validar que o Token é uma String': (r) => typeof(r.json().token) == 'string'
  })
  //http_req_duration
  // tempo de espera para cada
  sleep(1);
}