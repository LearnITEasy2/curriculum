
# 🗃️ Неделя 4: Введение в базы данных и API  
*#databases #api #backend #webdevelopment*

До этого твои сайты могли **показывать контент**, **красиво выглядеть** и **реагировать на действия пользователя**. Но что, если ты хочешь **хранить информацию** — например, данные пользователей, результаты форм или записи блога?

А что, если ты хочешь, чтобы твой сайт **получал данные с другого сайта** — например, погоду, новости или Google Maps?

Добро пожаловать в мир **Баз данных и API**! 🌐💾

---

## 🧠 Часть 1: Что такое база данных?

**База данных** — это цифровое хранилище, где данные **сохраняются**, **организуются** и **извлекаются**.

### 📦 Простая аналогия:  
Представь себе **таблицу Excel** с строками и колонками. Каждая строка = одна запись. Каждая колонка = свойство (имя, возраст и т.д.).  
Базы данных — это более мощные версии таблиц, в которых легко выполнять поиск.

---

### 📊 Почему использовать базы данных?

- Хранить регистрацию пользователей  
- Сохранять записи блога или комментарии  
- Вести учёт инвентаря или данных о товарах  
- Запоминать состояние приложения  

---

### 🧱 Типы баз данных

1. **SQL-базы данных** (структурированные)  
   - Примеры: MySQL, PostgreSQL, SQLite  
   - Данные хранятся в **таблицах** (строки и колонки)  
   - Для взаимодействия используется **язык SQL**  
   Пример:  
   ```sql
   SELECT * FROM users WHERE age > 18;
   ```

2. **NoSQL-базы данных** (гибкие)  
    - Примеры: MongoDB, Firebase  
    - Данные хранятся в документах или парах ключ-значение  
    - Легче масштабируются для некоторых приложений  
    Пример (MongoDB-стиль):
    ```json
    {
      "name": "Алиса",
      "age": 25,
      "interests": ["программирование", "музыка"]
    }
    ```

Пока достаточно просто знать, что они существуют и что твоё приложение может подключаться к базе данных для сохранения и загрузки данных.

---

## 🧠 Часть 2: Что такое API?

API — это Application Programming Interface (интерфейс программирования приложений).  
API — это как меню в ресторане. Оно говорит, что можно запросить — и как это сделать.

Тебе не нужно знать, как работает кухня — достаточно правильно сделать заказ!

---

### 🧾 Аналогия из реальной жизни:  
Когда ты используешь погодное приложение, оно не хранит все данные о погоде. Оно делает запрос к API погоды:

- «Привет, какая погода в Алматы сегодня?»

И API отвечает:

- «Солнечно, 23°C 🌞»

### 📡 Зачем использовать API?  
- Получать данные с других сайтов (погода, новости и т.д.)  
- Отправлять данные в другие сервисы (формы, платежи и т.д.)  
- Подключать приложение к внешним сервисам (Google Maps, Twitter и т.д.)  
- Экономить время, используя готовые инструменты вместо написания всего с нуля  

### 🧪 Как выглядит ответ API?  
Обычно API возвращает данные в формате JSON (JavaScript Object Notation).

Пример:
```json
{
  "location": "Алматы",
  "temperature": 23,
  "condition": "Солнечно"
}
```

### 🛠️ Как использовать API?  
Чтобы использовать API, обычно делают запрос с помощью JavaScript (или другого языка программирования). Пример с использованием `fetch`:
```javascript
fetch("https://api.example.com/weather/almaty")
  .then(response => response.json())
  .then(data => {
    console.log("Температура:", data.temperature);
  });
```

### 🧩 Как это всё работает?  
![](./image.png)  
- [Отличная статья про 3-уровневую архитектуру](https://vfunction.com/blog/3-tier-application/).

## Практический пример
* Установи PostgreSQL на свой компьютер (поиск «PostgreSQL download» для своей ОС)  
* Создай новую базу данных `myapp`  
* Запусти скрипт для создания таблицы:
```sql
-- Подключись к базе данных и запусти:
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO items (name) VALUES ('Item 1'), ('Item 2');
```
* Теперь можешь использовать эту базу данных в своём приложении!
* Создай файл server.js:
```javascript
import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;

// Конфигурация базы данных
const pool = new pg.Pool({
  user: 'postgres',         // измени при необходимости
  host: 'localhost',
  database: 'myapp',
  password: 'your_password', // измени на свой пароль
  port: 5432,
});

// Middleware для парсинга JSON
app.use(express.json());

// Получить элементы
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// Добавить элемент
app.post('/items', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (name) VALUES ($1) RETURNING *',
      [name]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
```

* Установи зависимости:
```bash
npm init -y
npm install express pg
```

* Запусти сервер:
```bash
node server.js
```

* Открой браузер, открой Dev Tools (F12), вкладку Console.  
* Выполни код для получения элементов из базы данных:
```javascript
// Получить элементы
fetch('http://localhost:3000/items')
  .then(res => res.json())
  .then(console.log);

// Добавить новый элемент
fetch('http://localhost:3000/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Новый элемент' })
})
  .then(res => res.json())
  .then(console.log);
```

Это очень базовый пример, но он показывает, как подключить приложение к базе данных и использовать API для взаимодействия с ней.

---

## 🧪 Домашнее задание

1. Придумай 3 вещи, которые твоё приложение могло бы хранить в базе данных  
   (например: задачи, имена пользователей, рекорды в игре)
2. Зайди на сайт с публичными API  
   (например, https://publicapis.dev или https://rapidapi.com, https://jsonplaceholder.typicode.com/)  
   - Найди API, который хочешь попробовать (например, факты о собаках, цитаты, погода)
3. **Бонус-челлендж 💡**:  
   - Попробуй скопировать пример с `fetch()` и выполнить его в браузере (F12 → Console)
   - Измени пример, чтобы запросить данные с другого API

---

## 📝 Ресурсы
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)  
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
- [JSON Placeholder (фейковый онлайн REST API)](https://jsonplaceholder.typicode.com/)  
- [Node JS & PostgreSQL полный курс 2021 Rest API (YouTube)](https://www.youtube.com/watch?v=p3RFMEixUOE&ab_channel=UlbiTV)
