# Тестовое задание для sasflix

## Задача
Реализовать приложение с общим списком постов и отдельными страницами с комментариями. Код на Nuxt3/Vue3, TypeScript и Pinia, и разбит на компоненты.

Приложения должно:

- повторять макет в Фигме;
- выводить первые 5 постов из API на общей странице;
- быть написано без использования готовых библиотек компонентов;
- иметь кликабельные кнопки лайка и дизлайка;
- удалять комментарии, изменять значении и стили кнопок локально.

## Решение
Проект реализован на **Nuxt 3** с использованием **Pinia** для управления состоянием и **Tailwind** для написания стилей. Настроена строгая конфигурация **TSLint** для соблюдения стандартов кода. Весь интерфейс собран по макету из **Figma**, а данные подтягиваются через **API** с [dummyjson.com](https://dummyjson.com). Проект разбит на небольшие, независимые "глупые" компоненты, которые не зависят от хранилища, что позволяет безопасно их переиспользовать и легко изменять без влияния на основное состояние приложения. Такой подход обеспечивает гибкость и масштабируемость проекта. Так же добавлен базовый адаптив для мобильных устройств и методы для установки мета тегов.

**Запуск в режиме разработки**
```
npm run dev
```

**Сборка проекта для продакшена**
```
npm run build
```

**Запуск продакшн-сервера**
```
npm run start
```

**Линтинг кода**
```
npm run lint
```
