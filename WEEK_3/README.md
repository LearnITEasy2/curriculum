# Week3: Networking Fundamentals
![](./networking.png)

## Part 1: What is the Internet?

### 1.1 What is a Network?
A **network** is like a group of friends sharing information with each other. Just as friends pass notes or messages, devices in a network share data and resources. A network can be as small as two devices (like a phone and a laptop connected at home) or as big as the entire Internet.

- **Local Area Network (LAN):** A small network in one location, like your home or office. Think of it as a group of friends in one room sharing notes.
- **Wide Area Network (WAN):** A bigger network that connects multiple smaller networks, like different offices in different cities. The Internet is the largest WAN.

### 1.2 What is the Internet?
The **Internet** is like a giant web that connects millions of smaller networks and devices across the world. It allows computers to share information globally, so you can watch videos, send emails, or visit websites no matter where the data is stored.

- **How it works:** Devices use a set of rules called protocols (like TCP/IP) to communicate and understand each other.
- **Key components:**
  - **Servers:** Store and provide information (like websites).
  - **Clients:** Devices (like your smartphone) that request information from servers.
  - **Routers:** Act like traffic directors, making sure data goes to the right place.
  - **ISPs (Internet Service Providers):** Companies that connect your home network to the Internet.

## Part 2: Basic Networking Concepts and Terminology

### 2.1 IP Address
An **IP address** is like the home address of a device on a network. It tells other devices where to send data. There are two types of IP addresses:

- **IPv4:** A short, simple address like `192.168.1.1`. Think of it as a regular house address. IPv4 uses a 32-bit format and supports about 4.3 billion addresses.
  - **Subnetting:** IPv4 networks are divided into smaller parts called subnets. For example, a subnet mask like `255.255.255.0` helps divide the network into smaller segments.
- **IPv6:** A longer, more complex address like `2001:0db8:85a3::8a2e:0370:7334`. IPv6 uses a 128-bit format, which provides an almost unlimited number of addresses and includes features like better security and automatic configuration.

### 2.2 Domain Name System (DNS)
The **Domain Name System (DNS)** works like a phonebook for the Internet. It helps translate human-friendly names like `www.google.com` into machine-friendly IP addresses like `142.250.74.78`. Without DNS, you would need to remember long IP addresses instead of simple names.

#### How DNS Works:
1. You type a website name into your browser.
2. Your computer asks a DNS server to find the IP address for that name.
3. The DNS server checks its cache. If it doesn’t know the address, it contacts other DNS servers to find it.
4. Once the IP address is found, your browser connects to the website.

#### DNS Records:
- **A Record:** Maps a domain name to an IPv4 address.
- **AAAA Record:** Maps a domain name to an IPv6 address.
- **CNAME Record:** Points one domain to another, like an alias.
- **MX Record:** Used for email servers to direct messages.

### 2.3 Packets
When you send data over a network, it gets broken into small pieces called **packets**. Think of packets like puzzle pieces:
- Each packet has some information about where it came from and where it’s going.
- At the other end, the packets are put back together to make the complete data.

#### Key Packet Features:
- **Header:** Contains metadata like source and destination IP addresses, and the protocol being used (e.g., TCP or UDP).
- **Payload:** The actual data being sent, like the contents of an email or a video stream.

There are two main types of packets:
- **TCP Packets:** Reliable but slower, like certified mail with a delivery receipt. Ensures all packets arrive and are in the correct order.
- **UDP Packets:** Faster but less reliable, like sending a postcard. Best for streaming or gaming where speed is more important than reliability.

### 2.4 Protocols
**Protocols** are like languages that devices use to communicate. Some common ones are:
- **HTTP/HTTPS:** Used for browsing websites. HTTP is like a postcard anyone can read, while HTTPS is encrypted and secure.
- **FTP:** For transferring files between devices.
- **TCP:** Ensures data is delivered reliably, like sending registered mail.
- **UDP:** Focuses on speed over reliability, good for things like video streaming or gaming.
- **ICMP:** Used for network diagnostics, like the `ping` command.
- **DHCP:** Automatically assigns IP addresses to devices on a network.

### 2.5 Router
A **router** is like a traffic director. It makes sure that data packets find the best route to their destination, whether that’s within your home network or across the Internet. Routers also provide basic security by isolating your local network from the wider Internet.

### 2.6 Firewall
A **firewall** is like a security guard that protects your network. It carefully checks all incoming and outgoing data to decide what is safe to let through and what should be blocked. This helps keep your network and devices safe from unauthorized access or harmful data.

#### Types of Firewalls:
- **Stateless Firewalls:** These are like basic security guards that check individual pieces of data but don’t remember past conversations.
- **Stateful Firewalls:** Smarter guards that keep track of ongoing conversations and make decisions based on the whole context.
- **Application Firewalls:** These guards focus on specific apps or programs, like monitoring email or web browser traffic.

---

### Summary
- Networks let devices share information.
- The Internet is a giant global network.
- Key terms like IP addresses, DNS, packets, and protocols help us understand how data moves from one place to another.
- Devices like routers and firewalls keep everything running smoothly and securely.


For hands-on practice, please refer to the [Networking Exercises](#file:Exercises.md-context).

---
---


# Неделя 3: Основы сетей

## Часть 1: Что такое интернет?

### 1.1 Что такое сеть?
**Сеть** — это как группа друзей, которые обмениваются информацией друг с другом. Как друзья передают записки или сообщения, устройства в сети делятся данными и ресурсами. Сеть может быть совсем небольшой, например, из двух устройств (телефона и ноутбука дома), или огромной, как весь интернет.

- **Локальная сеть (LAN):** Это небольшая сеть, находящаяся в одном месте, например, дома или в офисе. Представьте себе группу друзей в одной комнате, которые обмениваются записками.
- **Глобальная сеть (WAN):** Это более крупная сеть, которая соединяет несколько меньших сетей, например, офисы в разных городах. Интернет — это самая большая глобальная сеть.

### 1.2 Что такое интернет?
**Интернет** — это как гигантская паутина, соединяющая миллионы меньших сетей и устройств по всему миру. Он позволяет компьютерам делиться информацией глобально, чтобы вы могли смотреть видео, отправлять электронные письма или посещать сайты, где бы ни находились данные.

- **Как это работает:** Устройства используют набор правил, называемых протоколами (например, TCP/IP), чтобы общаться и понимать друг друга.
- **Основные компоненты:**
  - **Серверы:** Хранят и предоставляют информацию (например, сайты).
  - **Клиенты:** Устройства (например, ваш смартфон), которые запрашивают информацию с серверов.
  - **Маршрутизаторы:** Работают как дорожные указатели, обеспечивая доставку данных в нужное место.
  - **Интернет-провайдеры (ISP):** Компании, которые подключают вашу домашнюю сеть к интернету.

## Часть 2: Основные концепции и термины сети

### 2.1 IP-адрес
**IP-адрес** — это как домашний адрес устройства в сети. Он говорит другим устройствам, куда отправлять данные. Существуют два типа IP-адресов:

- **IPv4:** Короткий, простой адрес, например, `192.168.1.1`. Это как обычный домашний адрес. IPv4 использует 32-битный формат и поддерживает около 4,3 миллиарда адресов.
  - **Субсети:** Сети IPv4 делятся на меньшие части, называемые подсетями. Например, маска подсети `255.255.255.0` помогает разделить сеть на меньшие сегменты.
- **IPv6:** Длинный, более сложный адрес, например, `2001:0db8:85a3::8a2e:0370:7334`. IPv6 использует 128-битный формат, который предоставляет почти неограниченное количество адресов и включает функции, такие как улучшенная безопасность и автоматическая настройка.

### 2.2 Система доменных имен (DNS)
**Система доменных имен (DNS)** работает как телефонная книга интернета. Она помогает переводить понятные человеку имена, такие как `www.google.com`, в машинные IP-адреса, такие как `142.250.74.78`. Без DNS вам пришлось бы запоминать длинные IP-адреса вместо простых имен.

#### Как работает DNS:
1. Вы вводите имя веб-сайта в браузере.
2. Ваш компьютер запрашивает у DNS-сервера IP-адрес для этого имени.
3. DNS-сервер проверяет свой кэш. Если он не знает адрес, он связывается с другими DNS-серверами, чтобы найти его.
4. После того, как IP-адрес найден, ваш браузер подключается к сайту.

#### DNS-записи:
- **A-запись:** Связывает доменное имя с IPv4-адресом.
- **AAAA-запись:** Связывает доменное имя с IPv6-адресом.
- **CNAME-запись:** Указывает одно доменное имя на другое, как псевдоним.
- **MX-запись:** Используется почтовыми серверами для направления сообщений.

### 2.3 Пакеты данных
Когда вы отправляете данные по сети, они разбиваются на маленькие части, называемые **пакетами данных**. Представьте, что пакеты — это кусочки пазла:
- Каждый пакет содержит информацию о том, откуда он пришел и куда направляется.
- На другом конце пакеты собираются вместе, чтобы получить полные данные.

#### Основные характеристики пакетов:
- **Заголовок:** Содержит метаданные, такие как IP-адреса отправителя и получателя, и протокол, который используется (например, TCP или UDP).
- **Полезная нагрузка:** Это фактические данные, которые отправляются, например, содержание электронного письма или потоковое видео.

Существует два основных типа пакетов:
- **TCP-пакеты:** Надежные, но более медленные, как заказное письмо с уведомлением о доставке. Гарантируют, что все пакеты прибудут и будут в правильном порядке.
- **UDP-пакеты:** Быстрые, но менее надежные, как открытка. Подходят для потокового видео или игр, где важна скорость.

### 2.4 Протоколы
**Протоколы** — это как языки, которые устройства используют для общения. Некоторые из них:
- **HTTP/HTTPS:** Используются для просмотра веб-сайтов. HTTP — это как открытка, которую может прочитать кто угодно, а HTTPS — зашифрованный и безопасный.
- **FTP:** Для передачи файлов между устройствами.
- **TCP:** Обеспечивает надежную доставку данных, как отправка заказного письма.
- **UDP:** Сосредоточен на скорости, а не на надежности, подходит для потокового видео или игр.
- **ICMP:** Используется для диагностики сети, например, командой `ping`.
- **DHCP:** Автоматически назначает IP-адреса устройствам в сети.

### 2.5 Маршрутизатор
**Маршрутизатор** — это как дорожный указатель. Он следит за тем, чтобы пакеты данных находили лучший маршрут до пункта назначения, будь то внутри вашей домашней сети или через интернет. Маршрутизаторы также обеспечивают базовую безопасность, изолируя вашу локальную сеть от более широкой сети.

### 2.6 Брандмауэр
**Брандмауэр** — это как охранник, который защищает вашу сеть. Он тщательно проверяет все входящие и исходящие данные, чтобы решить, что безопасно пропускать, а что следует блокировать. Это помогает защитить вашу сеть и устройства от несанкционированного доступа или вредоносных данных.

#### Типы брандмауэров:
- **Простые брандмауэры:** Проверяют отдельные данные, но не запоминают предыдущие действия.
- **Сложные брандмауэры:** Учитывают весь контекст общения и принимают решения на основе всей сессии.
- **Программные брандмауэры:** Следят за конкретными приложениями, например, за электронной почтой или веб-браузером.

---

### Резюме
- Сети позволяют устройствам обмениваться информацией.
- Интернет — это огромная глобальная сеть.
- Основные термины, такие как IP-адреса, DNS, пакеты и протоколы, помогают понять, как данные перемещаются от одного места к другому.
- Устройства, такие как маршрутизаторы и брандмауэры, обеспечивают бесперебойную и безопасную работу сети.


Для практических упражнений, пожалуйста, обратитесь к [Сетевые упражнения](#file:Exercises.md-context).