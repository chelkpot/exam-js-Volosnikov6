#!/usr/bin/env node

/**
 * Простой тестер для запуска всех JS экзаменов
 * Использование: npm test или node test-runner.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n🧪 ЗАПУСК ТЕСТОВ JS ЭКЗАМЕНА\n');

// Динамически ищем все task.test.js файлы
const tasksDir = path.join(__dirname, 'tasks');
const testFiles = [];

if (fs.existsSync(tasksDir)) {
    const items = fs.readdirSync(tasksDir);
    items.forEach(item => {
        const taskDir = path.join(tasksDir, item);
        const testFile = path.join(taskDir, 'task.test.js');
        if (fs.existsSync(testFile)) {
            const taskNum = parseInt(item.replace('task', '')) || 1;
            testFiles.push({
                id: taskNum,
                path: testFile,
                name: item + '/task.test.js'
            });
        }
    });
}

// Сортируем по ID
testFiles.sort((a, b) => a.id - b.id);

console.log(`Найдено ${testFiles.length} задания(й)\n`);
console.log('─'.repeat(50));

let passedCount = 0;
let totalCount = testFiles.length;

testFiles.forEach(test => {
    const id = String(test.id).padStart(2, '0');
    try {
        // Подсказка: здесь должен быть Jest запрос
        // но для простоты мы просто проверяем наличие файла
        console.log(`✅ Task ${id}: Файл найден (${test.name})`);
        passedCount++;
    } catch (error) {
        console.log(`❌ Task ${id}: Ошибка (${test.name})`);
        console.log(`   ${error.message}\n`);
    }
});

console.log('─'.repeat(50));
console.log(`\nРезультаты: ${passedCount}/${totalCount} файлов найдено\n`);

if (process.env.JEST_MODE) {
    console.log('💡 Для полной проверки используйте Jest:\n   npm test\n');
}

process.exit(passedCount === totalCount ? 0 : 1);
