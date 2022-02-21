## Tests

sut = é objecto que estamos testando
Spy = mock
Biblioteca Faker para mockar valores

# Test RemoteAuthentication

## 1 Should call HttpPostClient with corret URL

- crie uma classe RemoteAuthentication onde no construtor ele receba: URL e HttpPostClient(possui metodo auth que recebe URL: string e retorna void);
- crie um Spy da class RemoteAuthentication que implementa interface HttpPostClient;
- dentro do test: crie constante url para testar, instacie Spy e sut (RemoteAuthentication) passando a URL para comparar.

\*\* como vamos construindo aos poucos, e cada nova feature a tendencia é passar mais e mais dependencias, para nao quebrar o sistema a cada nova feature, usamos um design patterns Factory, esse exemplo de factory encontramos teste remote-authentication

## 2 Should call HttpPostClient with correct body

- Crie dados falsos-mock email e password para passar para o test;
- Adicione paramentros RemoteAuthentication onde passa a receber body com parametro;

\*\* Data layer esta no meio do domain e infraestrutura

\*\* tests para rebecer as respostas (error http: 401, 200, 400 ...) do httpPostClient
