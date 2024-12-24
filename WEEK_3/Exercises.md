# Networking Exercises: Hands-On Practice

These exercises are designed to help you practice using the command-line interface (CLI) while reinforcing fundamental networking concepts covered in the lesson.

---

## Introduction

Networking is the backbone of modern communication. These exercises will help you understand how data flows across networks and how to interact with key networking tools. By completing these tasks, you’ll gain confidence in using the CLI to troubleshoot and explore networks.

---

## Exercise 1: Observing Data Transmission with `ping`

**Goal:** Understand how data packets are sent and received between devices.

1. Open the terminal (CLI) on your computer.
2. Type the following command and press Enter:
   ```
   ping google.com
   ```
3. Observe the output:
   - You should see information about packets being sent and received, along with their response time.
   - Note the IP address of `google.com` in the output. This demonstrates how DNS resolves domain names into IP addresses.
4. Stop the `ping` command by pressing `Ctrl + C`.

**Questions to consider:**

- What happens if you try to `ping` an incorrect domain, like `ping nonexistentsite.com`?
  **Answer:** The command will display an error message indicating that the host cannot be resolved or is unreachable. This shows that the DNS lookup failed or the destination is not accessible.
- What does the response time indicate?
  **Answer:** The response time indicates how long it takes for a data packet to travel to the destination and back. Lower times are better and typically indicate a closer or faster connection.

---

## Exercise 2: Finding Your IP Address

**Goal:** Learn how to check the IP address of your device.

1. Open the terminal (CLI).
2. Use the following command based on your operating system:
   - **Windows:**
     ```
     ipconfig
     ```
   - **macOS/Linux:**
     ```
     ifconfig
     ```
   - Alternatively, on modern Linux distributions:
     ```
     ip addr
     ```
3. Look for the section corresponding to your active network connection (e.g., `Wi-Fi`, `Ethernet`).
   - Note your IPv4 address (e.g., `192.168.1.5`).
   - If applicable, note your IPv6 address.

**Questions to consider:**

- What is the difference between an IPv4 and an IPv6 address?
  **Answer:** IPv4 addresses are 32-bit numerical addresses (e.g., `192.168.1.1`), while IPv6 addresses are 128-bit and written in hexadecimal format (e.g., `2001:0db8:85a3::8a2e:0370:7334`). IPv6 provides a larger address space.
- Can you identify whether your device is using a private or public IP address?
  **Answer:** Private IP addresses fall within specific ranges (e.g., `192.168.x.x`, `10.x.x.x`, `172.16.x.x` to `172.31.x.x`). If your IP address falls within these ranges, it’s private; otherwise, it’s public.

---

## Exercise 3: Checking Network Routes with `traceroute`

**Goal:** Visualize the path data packets take to reach a destination.

1. Open the terminal (CLI).
2. Type the following command:
   - **Windows:**
     ```
     tracert google.com
     ```
   - **macOS/Linux:**
     ```
     traceroute google.com
     ```
3. Observe the output:
   - Each "hop" represents a device (router) that data packets pass through.
   - Note the IP addresses and response times at each hop.

**Questions to consider:**

- How many hops does it take to reach `google.com`?
  **Answer:** The number of hops will vary depending on your geographical location and network configuration. Typically, it’s between 10 and 20 hops.
- What happens if you use a website closer to your location? Try replacing `google.com` with a local domain.
  **Answer:** The number of hops will likely decrease, as the destination is geographically closer, requiring fewer routers to relay the data packets.

---

## Exercise 4: Inspecting DNS Resolution with `nslookup` or `dig`

**Goal:** Explore how DNS translates domain names to IP addresses.

1. Open the terminal (CLI).
2. Use one of the following commands:
   - **With `nslookup`:**
     ```
     nslookup google.com
     ```
   - **With `dig` (if installed):**
     ```
     dig google.com
     ```
3. Observe the output:
   - Look for the "Address" section to find the IP address of `google.com`.
   - If using `dig`, note the "ANSWER SECTION."

**Questions to consider:**

- What happens if you query a domain that doesn’t exist?
  **Answer:** The command will return an error, indicating that the DNS server could not resolve the domain name.
- Can you find both IPv4 and IPv6 addresses for a domain?
  **Answer:** Yes, many modern domains provide both IPv4 and IPv6 addresses. They will appear as separate entries in the output.

---

## Exercise 5: Monitoring Network Traffic with `netstat`

**Goal:** Identify active network connections on your device.

1. Open the terminal (CLI).
2. Run the following command:
   ```
   netstat -an
   ```
3. Observe the output:
   - Look at the list of active connections and their states (e.g., `ESTABLISHED`, `LISTENING`).

**Questions to consider:**

- Can you identify which IP addresses your device is connected to?
  **Answer:** Yes, the output will list the local and foreign IP addresses for each active connection.
- What do the different states of connections mean?
  **Answer:** For example, `ESTABLISHED` means an active connection is ongoing, and `LISTENING` means a port is open and waiting for incoming connections.

---

## Exercise 6: Bonus - Simulating a Simple HTTP Request with `curl`

**Goal:** Learn how to interact with web servers.

1. Open the terminal (CLI).
2. Run the following command:
   ```
   curl -I https://google.com
   ```
3. Observe the output:
   - This shows the HTTP headers returned by the server.

**Questions to consider:**

- What does the `HTTP/1.1 200 OK` status mean?
  **Answer:** It means the request was successful, and the server is responding with the requested resource.
- Can you identify other useful headers, like `Content-Type` or `Server`?
  **Answer:** Yes, the `Content-Type` header indicates the type of content (e.g., `text/html`), and the `Server` header provides information about the web server software (e.g., `nginx`).

---
---

# Практические упражнения по работе с сетями

Эти упражнения помогут вам попрактиковаться в использовании интерфейса командной строки (CLI) и закрепить основные сетевые концепции, рассмотренные в уроке.

---

## Введение

Сети являются основой современной коммуникации. Эти упражнения помогут вам понять, как данные перемещаются по сетям, и как работать с ключевыми сетевыми инструментами. Выполнив эти задачи, вы повысите уверенность в использовании CLI для диагностики и исследования сетей.

---

## Упражнение 1: Наблюдение за передачей данных с помощью команды `ping`

**Цель:** Понять, как пакеты данных отправляются и принимаются между устройствами.

1. Откройте терминал (CLI) на вашем компьютере.
2. Введите следующую команду и нажмите Enter:
   ```
   ping google.com
   ```
3. Наблюдайте за выводом:
   - Вы должны увидеть информацию о пакетах, которые отправляются и принимаются, а также их время отклика.
   - Обратите внимание на IP-адрес `google.com` в выводе. Это показывает, как DNS преобразует доменные имена в IP-адреса.
4. Остановите выполнение команды `ping`, нажав `Ctrl + C`.

**Вопросы для размышления:**

- Что произойдет, если попытаться выполнить `ping` для некорректного домена, например, `ping nonexistentsite.com`?
  **Ответ:** Команда выдаст сообщение об ошибке, указывающее, что хост не может быть разрешен или недоступен. Это демонстрирует, что запрос DNS не удался или адрес назначения недоступен.
- Что означает время отклика?
  **Ответ:** Время отклика показывает, сколько времени требуется для отправки пакета данных до адресата и обратно. Меньшие значения времени означают более близкое или быстрое соединение.

---

## Упражнение 2: Определение вашего IP-адреса

**Цель:** Научиться определять IP-адрес вашего устройства.

1. Откройте терминал (CLI).
2. Используйте следующую команду в зависимости от вашей операционной системы:
   - **Windows:**
     ```
     ipconfig
     ```
   - **macOS/Linux:**
     ```
     ifconfig
     ```
   - Альтернативно, на современных Linux-дистрибутивах:
     ```
     ip addr
     ```
3. Найдите раздел, соответствующий вашему активному сетевому соединению (например, `Wi-Fi`, `Ethernet`).
   - Обратите внимание на ваш IPv4-адрес (например, `192.168.1.5`).
   - При необходимости, обратите внимание на ваш IPv6-адрес.

**Вопросы для размышления:**

- В чем разница между IPv4 и IPv6 адресами?
  **Ответ:** IPv4-адреса — это 32-битные числовые адреса (например, `192.168.1.1`), а IPv6-адреса — 128-битные и записываются в шестнадцатеричном формате (например, `2001:0db8:85a3::8a2e:0370:7334`). IPv6 предоставляет гораздо больше адресов.
- Можете ли вы определить, используется ли вашим устройством частный или публичный IP-адрес?
  **Ответ:** Частные IP-адреса попадают в определенные диапазоны (например, `192.168.x.x`, `10.x.x.x`, `172.16.x.x` — `172.31.x.x`). Если ваш IP-адрес находится в этих диапазонах, он частный; в противном случае — публичный.

---

## Упражнение 3: Проверка маршрута сети с помощью команды `traceroute`

**Цель:** Визуализировать путь, который проходят пакеты данных для достижения адресата.

1. Откройте терминал (CLI).
2. Введите следующую команду:
   - **Windows:**
     ```
     tracert google.com
     ```
   - **macOS/Linux:**
     ```
     traceroute google.com
     ```
3. Наблюдайте за выводом:
   - Каждый "хоп" представляет устройство (маршрутизатор), через которое проходят пакеты данных.
   - Обратите внимание на IP-адреса и время отклика на каждом этапе.

**Вопросы для размышления:**

- Сколько хопов требуется, чтобы достичь `google.com`?
  **Ответ:** Количество хопов зависит от вашего географического положения и конфигурации сети. Обычно это от 10 до 20 хопов.
- Что произойдет, если использовать веб-сайт, находящийся ближе к вашему местоположению? Попробуйте заменить `google.com` на локальный домен.
  **Ответ:** Количество хопов, вероятно, уменьшится, так как пункт назначения находится ближе, и требуется меньше маршрутизаторов для передачи данных.

---

## Упражнение 4: Исследование DNS с помощью `nslookup` или `dig`

**Цель:** Узнать, как DNS преобразует доменные имена в IP-адреса.

1. Откройте терминал (CLI).
2. Используйте одну из следующих команд:
   - **С помощью `nslookup`:**
     ```
     nslookup google.com
     ```
   - **С помощью `dig` (если установлен):**
     ```
     dig google.com
     ```
3. Наблюдайте за выводом:
   - Найдите раздел "Address", чтобы определить IP-адрес `google.com`.
   - Если вы используете `dig`, обратите внимание на раздел "ANSWER SECTION".

**Вопросы для размышления:**

- Что произойдет, если вы запросите несуществующий домен?
  **Ответ:** Команда вернет ошибку, указывающую на то, что DNS-сервер не смог разрешить доменное имя.
- Можете ли вы найти как IPv4, так и IPv6 адреса для домена?
  **Ответ:** Да, многие современные домены предоставляют как IPv4, так и IPv6 адреса. Они будут отображаться в виде отдельных записей в выводе.

---

## Упражнение 5: Мониторинг сетевого трафика с помощью `netstat`

**Цель:** Определить активные сетевые подключения на вашем устройстве.

1. Откройте терминал (CLI).
2. Выполните следующую команду:
   ```
   netstat -an
   ```
3. Наблюдайте за выводом:
   - Посмотрите на список активных подключений и их состояния (например, `ESTABLISHED`, `LISTENING`).

**Вопросы для размышления:**

- Можете ли вы определить, с какими IP-адресами подключено ваше устройство?
  **Ответ:** Да, в выводе будут указаны локальные и удаленные IP-адреса для каждого активного соединения.
- Что означают различные состояния подключений?
  **Ответ:** Например, `ESTABLISHED` означает активное соединение, а `LISTENING` — порт открыт и ожидает входящих подключений.

---

## Упражнение 6: Бонус — Эмуляция простого HTTP-запроса с помощью `curl`

**Цель:** Научиться взаимодействовать с веб-серверами.

1. Откройте терминал (CLI).
2. Выполните следующую команду:
   ```
   curl -I https://google.com
   ```
3. Наблюдайте за выводом:
   - Вы увидите HTTP-заголовки, возвращаемые сервером.

**Вопросы для размышления:**

- Что означает статус `HTTP/1.1 200 OK`?
  **Ответ:** Это означает, что запрос выполнен успешно, и сервер отвечает с запрошенным ресурсом.
- Можете ли вы определить другие полезные заголовки, такие как `Content-Type` или `Server`?
  **Ответ:** Да, заголовок `Content-Type` указывает тип контента (например, `text/html`), а заголовок `Server` предоставляет информацию о программном обеспечении веб-сервера (например, `nginx`).

