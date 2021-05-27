const data = {
    "testName":"JavaScript Test",
    "questions":[
      {
      "title":"Чему равно ?",
      "code": "2 && 1 && null && 0 && undefined",
      "variants" : [
         {"title": "2"},
         {"title": "1"},
         {"title": "0"},
         {"title": "null", "flag": true},
         {"title": "undefined"},
         {"title": "false"}
      ]
      },
       {
      "title":"Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?",
      "code": "",
      "variants" : [
         {"title": "this"},
         {"title": "instanceof"},
         {"title": "constructor"},
         {"title": "parent", "flag": true},
         {"title": "Все имеют специальное использование."}
      ]
      },
       {
      "title":"Что выведет alert?",
      "code": "alert(str); var str = 'Hello';",
      "variants" : [
         {"title": "Hello"},
         {"title": "undefined", "flag": true},
         {"title": "Будет ошибка."}
      ]
      },{
      "title":"Сколько параметров можно передать функции ?",
      "code": "",
      "variants" : [
         {"title": "Ровно столько, сколько указано в определении функции."},
         {"title": "Сколько указано в определении функции или меньше."},
         {"title": "Любое количество.", "flag": true},
         {"title": "Сколько указано в определении функции или больше."}
      ]
      }
    ]
}
export default data