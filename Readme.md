## Настройка проекта

Это приложение содержит как серверную часть, так и внешний интерфейс в одном репозитории.

```
├── Readme.md
├── backend
├── docker-compose.yml
└── frontend
```

### Клонирование репозитория

```bash
git clone https://github.com/George-Karpenko/ToDo-list.git

```

Перейдите в корневой каталог.

```bash
$ cd ToDo-list
```

### Запуск контейнеров

Запустите контейнеры `frontend`, `backend` и `mongodb` с помощью docker-compose

```bash
$ docker-compose up -d
```

Получите доступ к приложению из вашего браузера по адресу http://localhost:8080
