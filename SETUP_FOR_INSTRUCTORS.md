# 👨‍🏫 Инструкция для преподавателей

## 📋 Структура проекта

```
Exam_js/
├── .github/workflows/
│   └── classroom.yml          ← GitHub Actions workflow
├── mnt/user-data/outputs/js-exam/tasks/
│   ├── task02/ ... task10/     ← Задания 2-10
│   └── task.js, task.test.js
├── task.js                      ← Задание 1
├── task.test.js                 ← Тесты задания 1
├── test-browser.html            ← Браузерный тестер (БЕЗ Node.js)
├── package.json                 ← Зависимости npm
├── README.md                     ← Основная инструкция
├── QUICKSTART.md                ← Быстрый старт
├── GITHUB_ACTIONS.md            ← Как работает автопроверка
└── classroom.yml                ← Оригинальный конфиг (архивное)
```

## ✅ Настройка GitHub Classroom

### Шаг 1: Загрузить шаблон репозитория
1. Создайте организацию на GitHub
2. Загрузите этот репозиторий как **шаблон заданий**
3. В GitHub Classroom создайте новое задание

### Шаг 2: Настроить автоградинг
1. В GitHub Classroom → Settings → Autograding
2. Выберите **Jest** как фреймворк
3. Тесты будут автоматически запускаться из `.github/workflows/classroom.yml`

### Шаг 3: Проверить конфигурацию

**GitHub Actions должны запускаться автоматически** при:
- ✅ Каждом `git push`
- ✅ Каждом pull request
- ✅ Обновлении кода студентом

## 📊 Как видно результаты?

### Вариант 1: Во вкладке "Actions"
```
GitHub → Actions → Автоматическое задание
↓
Выберите последний push
↓
Смотрите результаты тестов и балл
```

### Вариант 2: В GitHub Classroom
```
GitHub Classroom → Задание → Имя студента
↓
Видите балл и комментарии автопроверки
```

## 🧪 Как тестируется работа?

### Локально (для студентов без Node.js)
- Откройте `test-browser.html` в браузере
- Нажмите "Запустить тесты"
- Увидите результаты в браузере

### На GitHub (автоматически)
```
jest → Запускает 5 тестов на каждое задание
↓
Каждое задание должно пройти все 5 тестов
↓
Балл = (пройденные_задания / 10) × 100
```

## 🔍 Проверка тестов перед запуском

Если вы хотите протестировать локально:

```bash
# Установить зависимости
npm install

# Запустить все тесты
npm test

# Запустить конкретное задание
npx jest tasks/task01 --verbose

# С подробным выводом
npm run test:verbose
```

## 📝 Структура каждого задания

```javascript
// task.js
function taskName(params) {
  // Ваш код здесь
}
module.exports = { taskName };

// task.test.js
const { taskName } = require('./task');

describe('Task XX', () => {
  test('test 1', () => {
    expect(taskName(input)).toEqual(expected);
  });
  // ... еще 4 теста
});
```

## ⚙️ Файлы, которые НЕ должны изменяться студентами

- ✋ `task.test.js` — содержит тесты
- ✋ `module.exports` строка в `task.js`
- ✋ Имена функций
- ✋ `.github/workflows/classroom.yml` — конфиг автопроверки

## 🚀 Готовые команды для копирования

### Быстрая проверка на локальной машине
```bash
npm ci
npm test
```

### Просмотр результатов GitHub Actions
```bash
# В браузере откройте:
https://github.com/YOUR_ORG/js-exam/actions
```

### Просмотр оценок в GitHub Classroom
```bash
# Перейдите в:
https://classroom.github.com/classrooms
→ Выберите класс
→ Выберите задание
→ Смотрите оценки студентов
```

## 💡 Советы

1. **Сначала протестируйте сами:**
   ```bash
   npm test
   ```
   Убедитесь, что все тесты проходят корректно.

2. **Проверьте, что workflow запускается:**
   - Сделайте тестовый push
   - Откройте Actions в GitHub
   - Убедитесь, что workflow выполнился

3. **Если GitHub Actions не работает:**
   - Проверьте, что файл в `.github/workflows/classroom.yml`
   - Убедитесь, что `package.json` имеет скрипт `test`
   - Проверьте синтаксис workflow файла (YAML)

4. **Для поддержки браузера без Node.js:**
   - Студенты открывают `test-browser.html`
   - Это работает на локальной машине без установки ничего
   - Не требует интернета!

## 🎓 Процесс для студента

1. Принять задание через GitHub Classroom
2. Клонировать репозиторий
3. Написать код в `task.js`
4. **Проверить локально** (браузер ИЛИ Node.js)
5. `git push`
6. GitHub Actions автоматически проверит
7. Увидит оценку в GitHub Classroom

## 📞 Поддержка

Если возникли проблемы:
- Прочитайте `README.md`
- Посмотрите `GITHUB_ACTIONS.md`
- Проверьте синтаксис YAML в `.github/workflows/classroom.yml`
- Убедитесь, что все зависимости в `package.json`

---

**Готово!** Проект полностью настроен для использования с GitHub Classroom! ✨
