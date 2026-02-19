/* ═══════════════════════════════════════════════════════════
   HABITTO v4 — Full Habit Tracker
   ═══════════════════════════════════════════════════════════ */

/* ── SVG Icons ─────────────────────────────────────────────── */
const IC = {
  run: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M7 22l4-8m2-2l2 6 3-4"/><path d="M7 12l3-3 2 2 3-3"/></svg>`,
  drop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  dumb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="4" x2="6" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/><line x1="3" y1="8" x2="9" y2="8"/><line x1="15" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="9" y2="16"/><line x1="15" y1="16" x2="21" y2="16"/></svg>`,
  fork: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 2l-5 5-5-5"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12M12 12C12 7 7 4 3 6c0 4 3 8 9 6M12 12c0-5 5-8 9-6 0 4-3 8-9 6"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a5 5 0 015 5v1a5 5 0 01-5 5H8a5 5 0 01-5-5 5 5 0 015-5h1zM15 3a5 5 0 015 5 5 5 0 01-5 5h-1"/><line x1="12" y1="14" x2="12" y2="21"/></svg>`,
  paint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13.5V20a2 2 0 002 2h16a2 2 0 002-2v-6.5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>`,
};
const IK = Object.keys(IC);

/* ── i18n ───────────────────────────────────────────────────── */
const LANGS = {
  uk: {
    months: [
      "січ",
      "лют",
      "бер",
      "кві",
      "тра",
      "чер",
      "лип",
      "сер",
      "вер",
      "жов",
      "лис",
      "гру",
    ],
    weekdays: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    greetings: ["Доброго ранку", "Добрий день", "Добрий вечір"],
    heroSub: (d, t) =>
      t ? `${d} з ${t} виконано` : "Поки немає звичок на сьогодні",
    statToday: "Сьогодні",
    statStreak: "Серія",
    statWeek: "Тиждень",
    statTotal: "Звичок",
    weekTitle: "Тиждень",
    weekPct: (p) => `${p}% за 7 днів`,
    habitsTitle: "Звички",
    sortDate: "За датою",
    sortName: "За назвою",
    sortStreak: "За серією",
    sortCat: "За категорією",
    btnAdd: "Додати",
    btnClose: "Закрити",
    btnSave: "Зберегти",
    btnCancel: "Скасувати",
    btnAddCat: "+ Додати",
    btnContinue: "Продовжити",
    formNewTitle: "Нова звичка",
    fieldName: "Назва",
    fieldColor: "Колір",
    fieldCategory: "Категорія",
    fieldGroup: "Група",
    fieldFreq: "Частота",
    fieldNote: "Нотатка",
    fieldNoteOpt: "(необов'язково)",
    fieldIcon: "Іконка",
    freqDaily: "Щодня",
    freqDays: "Конкретні дні",
    freqNtimes: "N разів",
    freqTimesWeek: "Разів:",
    freqAny: "Будь-які",
    freqDaysChoice: "дні",
    daysSelected: (d) => `Вибрано: ${d}`,
    daysNone: "Оберіть день",
    catPlaceholder: "Своя категорія...",
    catDelTitle: "Видалити",
    modalEditTitle: "Редагувати звичку",
    tagNotToday: "не сьогодні",
    streakDays: "дн.",
    calDays: "21 день",
    filterAll: "Усі",
    emptyTitle: "Створіть першу звичку",
    emptyText:
      "Натисніть «Додати» — кожна велика мета починається з маленького кроку",
    emptyCatTitle: "Немає звичок у цій категорії",
    emptyCatText: "Спробуйте інший фільтр",
    toastDone: "Виконано!",
    toastUndone: "Скасовано",
    toastAdded: "Звичку додано",
    toastSaved: "Збережено",
    toastDeleted: "Видалено",
    toastNoDays: "Оберіть день",
    toastExported: "Файл завантажено",
    toastImported: "Дані імпортовано",
    freqLabelDaily: "Щодня",
    freqLabelNoDay: "Дні не вибрані",
    freqLabelNtimes: (n) => `${n}×/тижд`,
    defaultCats: [
      "здоров'я",
      "спорт",
      "навчання",
      "робота",
      "особисте",
      "харчування",
      "сон",
    ],
    defaultCatSel: "здоров'я",
    groups: {
      morning: "Ранок 🌅",
      evening: "Вечір 🌙",
      work: "Робота 💼",
      sport: "Спорт 🏃",
      none: "Без групи",
    },
    analyticsTitle: "Аналітика",
    chartCompletion: "Виконання (%)",
    chartBreakdown: "Топ звички",
    chartStreaks: "Серії",
    chartHeatmap: "Активність за рік",
    tab7d: "7 днів",
    tab30d: "30 днів",
    less: "Менше",
    more: "Більше",
    exportTitle: "Експорт",
    exportCSVSub: "Зручно для таблиць",
    exportJSONSub: "Повний бекап",
    importTitle: "Імпорт JSON",
    importSub: "Відновлення бекапу",
    prefTitle: "Налаштування",
    prefMotivation: "Мотивація",
    prefMotivationSub: "Цитати при виконанні",
    prefConfetti: "Конфеті",
    prefConfettiSub: "Анімація при виконанні",
    prefGroups: "Групи",
    prefGroupsSub: "Групувати звички по часу дня",
    recsTitle: "Рекомендації",
    badgesTitle: "Досягнення",
    activityTitle: "Активність",
    xpPts: (cur, max) => `${cur} / ${max} XP`,
    levels: [
      "Початківець",
      "Практик",
      "Ентузіаст",
      "Мисливець",
      "Чемпіон",
      "Легенда",
    ],
    levelEmojis: ["🌱", "🌿", "⚡", "🔥", "💎", "👑"],
    levelSubs: [
      "Почни свій шлях",
      "Формуй звички",
      "Ти на правильному шляху",
      "Справжня дисципліна",
      "Непереможний",
      "Ти — натхнення",
    ],
    motivations: [
      {
        emoji: "🎯",
        quote: "Ще один крок вперед!",
        sub: "Кожне виконання наближає до мети.",
      },
      {
        emoji: "💪",
        quote: "Ти крутий!",
        sub: "Сьогодні ти зробив щось важливе.",
      },
      {
        emoji: "🚀",
        quote: "Рух — це життя!",
        sub: "Звичка формується 21 день. Продовжуй.",
      },
      {
        emoji: "✨",
        quote: "Маленькі кроки, великий результат!",
        sub: "Ти вже кращий за себе вчорашнього.",
      },
      {
        emoji: "🌟",
        quote: "Постійність — ключ до успіху!",
        sub: "Ще один день — ще одна перемога.",
      },
      {
        emoji: "🏆",
        quote: "Ти — переможець!",
        sub: "Дисципліна сильніша за мотивацію.",
      },
    ],
    lowProgressTips: [
      "💡 Почни з однієї простої звички — навіть 2 хвилини рахуються.",
      "💡 Прив'яжи нову звичку до існуючої — це полегшить початок.",
      "💡 Зроби звичку видимою — постав нагадування або стікер.",
    ],
    badges: [
      {
        id: "first",
        name: "Перший крок",
        desc: "Перше виконання",
        ico: "🎯",
        condition: (s) => s.totalDone >= 1,
      },
      {
        id: "week7",
        name: "7 днів поспіль",
        desc: "Серія 7 днів",
        ico: "🔥",
        condition: (s) => s.maxStreak >= 7,
      },
      {
        id: "month30",
        name: "Місяць звички",
        desc: "Серія 30 днів",
        ico: "💎",
        condition: (s) => s.maxStreak >= 30,
      },
      {
        id: "multi5",
        name: "Мультитаскер",
        desc: "5+ звичок одночасно",
        ico: "🎪",
        condition: (s) => s.totalHabits >= 5,
      },
      {
        id: "perfect",
        name: "Ідеальний день",
        desc: "Усі звички за день",
        ico: "⭐",
        condition: (s) => s.hadPerfectDay,
      },
      {
        id: "century",
        name: "100 виконань",
        desc: "100 разів відмічено",
        ico: "💯",
        condition: (s) => s.totalDone >= 100,
      },
      {
        id: "early",
        name: "Ранкова пташка",
        desc: "Ранкова звичка виконана",
        ico: "🌅",
        condition: (s) => s.hasMorningDone,
      },
      {
        id: "xp500",
        name: "XP-боєць",
        desc: "500 очок досвіду",
        ico: "⚡",
        condition: (s) => s.totalXP >= 500,
      },
    ],
    recommendations: [
      {
        ico: "🌅",
        title: "Ранкова медитація",
        desc: "5 хвилин щоранку зменшують тривогу і підвищують фокус.",
      },
      {
        ico: "💧",
        title: "Вода натщесерце",
        desc: "Склянка води зранку прискорює метаболізм.",
      },
      {
        ico: "📖",
        title: "10 сторінок на день",
        desc: "Читання 10 стор/день = 12 книг на рік.",
      },
      {
        ico: "🚶",
        title: "Прогулянка після обіду",
        desc: "20 хвилин ходьби покращують травлення і знижують цукор.",
      },
      {
        ico: "📵",
        title: "Без телефону перед сном",
        desc: "1 година без екрану покращує якість сну.",
      },
      {
        ico: "🧘",
        title: "Вечірня розтяжка",
        desc: "5 хвилин стречингу знімають напругу тіла.",
      },
    ],
  },

  ru: {
    months: [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ],
    weekdays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    greetings: ["Доброе утро", "Добрый день", "Добрый вечер"],
    heroSub: (d, t) =>
      t ? `${d} из ${t} выполнено` : "Пока нет привычек на сегодня",
    statToday: "Сегодня",
    statStreak: "Серия",
    statWeek: "Неделя",
    statTotal: "Привычек",
    weekTitle: "Неделя",
    weekPct: (p) => `${p}% за 7 дней`,
    habitsTitle: "Привычки",
    sortDate: "По дате",
    sortName: "По имени",
    sortStreak: "По серии",
    sortCat: "По категории",
    btnAdd: "Добавить",
    btnClose: "Закрыть",
    btnSave: "Сохранить",
    btnCancel: "Отмена",
    btnAddCat: "+ Добавить",
    btnContinue: "Продолжить",
    formNewTitle: "Новая привычка",
    fieldName: "Название",
    fieldColor: "Цвет",
    fieldCategory: "Категория",
    fieldGroup: "Группа",
    fieldFreq: "Частота",
    fieldNote: "Заметка",
    fieldNoteOpt: "(необязательно)",
    fieldIcon: "Иконка",
    freqDaily: "Каждый день",
    freqDays: "Конкретные дни",
    freqNtimes: "N раз",
    freqTimesWeek: "Раз:",
    freqAny: "Любые",
    freqDaysChoice: "дня",
    daysSelected: (d) => `Выбрано: ${d}`,
    daysNone: "Выберите день",
    catPlaceholder: "Своя категория...",
    catDelTitle: "Удалить",
    modalEditTitle: "Редактировать привычку",
    tagNotToday: "не сегодня",
    streakDays: "дн.",
    calDays: "21 день",
    filterAll: "Все",
    emptyTitle: "Создайте первую привычку",
    emptyText:
      "Нажмите «Добавить» — каждая большая цель начинается с маленького шага",
    emptyCatTitle: "Нет привычек в этой категории",
    emptyCatText: "Попробуйте другой фильтр",
    toastDone: "Выполнено!",
    toastUndone: "Отменено",
    toastAdded: "Привычка добавлена",
    toastSaved: "Сохранено",
    toastDeleted: "Удалено",
    toastNoDays: "Выберите день",
    toastExported: "Файл загружен",
    toastImported: "Данные импортированы",
    freqLabelDaily: "Каждый день",
    freqLabelNoDay: "Дни не выбраны",
    freqLabelNtimes: (n) => `${n}×/нед`,
    defaultCats: [
      "здоровье",
      "спорт",
      "обучение",
      "работа",
      "личное",
      "питание",
      "сон",
    ],
    defaultCatSel: "здоровье",
    groups: {
      morning: "Утро 🌅",
      evening: "Вечер 🌙",
      work: "Работа 💼",
      sport: "Спорт 🏃",
      none: "Без группы",
    },
    analyticsTitle: "Аналитика",
    chartCompletion: "Выполнение (%)",
    chartBreakdown: "Топ привычки",
    chartStreaks: "Серии",
    chartHeatmap: "Активность за год",
    tab7d: "7 дней",
    tab30d: "30 дней",
    less: "Меньше",
    more: "Больше",
    exportTitle: "Экспорт",
    exportCSVSub: "Удобно для таблиц",
    exportJSONSub: "Полный бэкап",
    importTitle: "Импорт JSON",
    importSub: "Восстановление бэкапа",
    prefTitle: "Настройки",
    prefMotivation: "Мотивация",
    prefMotivationSub: "Цитаты при выполнении",
    prefConfetti: "Конфетти",
    prefConfettiSub: "Анимация при выполнении",
    prefGroups: "Группы",
    prefGroupsSub: "Группировать привычки по времени суток",
    recsTitle: "Рекомендации",
    badgesTitle: "Достижения",
    activityTitle: "Активность",
    xpPts: (cur, max) => `${cur} / ${max} XP`,
    levels: [
      "Новичок",
      "Практик",
      "Энтузиаст",
      "Охотник",
      "Чемпион",
      "Легенда",
    ],
    levelEmojis: ["🌱", "🌿", "⚡", "🔥", "💎", "👑"],
    levelSubs: [
      "Начни свой путь",
      "Формируй привычки",
      "Ты на верном пути",
      "Настоящая дисциплина",
      "Непобедимый",
      "Ты — вдохновение",
    ],
    motivations: [
      {
        emoji: "🎯",
        quote: "Ещё один шаг вперёд!",
        sub: "Каждое выполнение приближает к цели.",
      },
      {
        emoji: "💪",
        quote: "Ты крут!",
        sub: "Сегодня ты сделал что-то важное.",
      },
      {
        emoji: "🚀",
        quote: "Движение — это жизнь!",
        sub: "Привычка формируется 21 день. Продолжай.",
      },
      {
        emoji: "✨",
        quote: "Маленькие шаги, большой результат!",
        sub: "Ты уже лучше себя вчерашнего.",
      },
      {
        emoji: "🌟",
        quote: "Постоянство — ключ к успеху!",
        sub: "Ещё один день — ещё одна победа.",
      },
      {
        emoji: "🏆",
        quote: "Ты — победитель!",
        sub: "Дисциплина сильнее мотивации.",
      },
    ],
    lowProgressTips: [
      "💡 Начни с одной простой привычки — даже 2 минуты считаются.",
      "💡 Привяжи новую привычку к существующей — это облегчит старт.",
      "💡 Сделай привычку видимой — поставь напоминание или стикер.",
    ],
    badges: [
      {
        id: "first",
        name: "Первый шаг",
        desc: "Первое выполнение",
        ico: "🎯",
        condition: (s) => s.totalDone >= 1,
      },
      {
        id: "week7",
        name: "7 дней подряд",
        desc: "Серия 7 дней",
        ico: "🔥",
        condition: (s) => s.maxStreak >= 7,
      },
      {
        id: "month30",
        name: "Месяц привычки",
        desc: "Серия 30 дней",
        ico: "💎",
        condition: (s) => s.maxStreak >= 30,
      },
      {
        id: "multi5",
        name: "Мультитаскер",
        desc: "5+ привычек одновременно",
        ico: "🎪",
        condition: (s) => s.totalHabits >= 5,
      },
      {
        id: "perfect",
        name: "Идеальный день",
        desc: "Все привычки за день",
        ico: "⭐",
        condition: (s) => s.hadPerfectDay,
      },
      {
        id: "century",
        name: "100 выполнений",
        desc: "100 раз отмечено",
        ico: "💯",
        condition: (s) => s.totalDone >= 100,
      },
      {
        id: "early",
        name: "Ранняя пташка",
        desc: "Утренняя привычка выполнена",
        ico: "🌅",
        condition: (s) => s.hasMorningDone,
      },
      {
        id: "xp500",
        name: "XP-боец",
        desc: "500 очков опыта",
        ico: "⚡",
        condition: (s) => s.totalXP >= 500,
      },
    ],
    recommendations: [
      {
        ico: "🌅",
        title: "Утренняя медитация",
        desc: "5 минут каждое утро уменьшают тревогу и повышают фокус.",
      },
      {
        ico: "💧",
        title: "Вода натощак",
        desc: "Стакан воды утром ускоряет метаболизм.",
      },
      {
        ico: "📖",
        title: "10 страниц в день",
        desc: "Чтение 10 стр/день = 12 книг в год.",
      },
      {
        ico: "🚶",
        title: "Прогулка после обеда",
        desc: "20 минут ходьбы улучшают пищеварение и снижают сахар.",
      },
      {
        ico: "📵",
        title: "Без телефона перед сном",
        desc: "1 час без экрана улучшает качество сна.",
      },
      {
        ico: "🧘",
        title: "Вечерняя растяжка",
        desc: "5 минут стрейчинга снимают напряжение тела.",
      },
    ],
  },

  en: {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    greetings: ["Good morning", "Good afternoon", "Good evening"],
    heroSub: (d, t) =>
      t ? `${d} of ${t} completed` : "No habits scheduled today",
    statToday: "Today",
    statStreak: "Streak",
    statWeek: "Week",
    statTotal: "Habits",
    weekTitle: "Week",
    weekPct: (p) => `${p}% this week`,
    habitsTitle: "Habits",
    sortDate: "By date",
    sortName: "By name",
    sortStreak: "By streak",
    sortCat: "By category",
    btnAdd: "Add",
    btnClose: "Close",
    btnSave: "Save",
    btnCancel: "Cancel",
    btnAddCat: "+ Add",
    btnContinue: "Continue",
    formNewTitle: "New habit",
    fieldName: "Name",
    fieldColor: "Color",
    fieldCategory: "Category",
    fieldGroup: "Group",
    fieldFreq: "Frequency",
    fieldNote: "Note",
    fieldNoteOpt: "(optional)",
    fieldIcon: "Icon",
    freqDaily: "Every day",
    freqDays: "Specific days",
    freqNtimes: "N times",
    freqTimesWeek: "Times:",
    freqAny: "Any",
    freqDaysChoice: "days",
    daysSelected: (d) => `Selected: ${d}`,
    daysNone: "Pick a day",
    catPlaceholder: "Custom category...",
    catDelTitle: "Delete",
    modalEditTitle: "Edit habit",
    tagNotToday: "not today",
    streakDays: "d.",
    calDays: "21 days",
    filterAll: "All",
    emptyTitle: "Create your first habit",
    emptyText: 'Click "Add" — every great goal starts with a small daily step',
    emptyCatTitle: "No habits in this category",
    emptyCatText: "Try a different filter",
    toastDone: "Done!",
    toastUndone: "Cancelled",
    toastAdded: "Habit added",
    toastSaved: "Saved",
    toastDeleted: "Deleted",
    toastNoDays: "Pick at least one day",
    toastExported: "File downloaded",
    toastImported: "Data imported",
    freqLabelDaily: "Every day",
    freqLabelNoDay: "No days selected",
    freqLabelNtimes: (n) => `${n}×/wk`,
    defaultCats: [
      "health",
      "sport",
      "learning",
      "work",
      "personal",
      "nutrition",
      "sleep",
    ],
    defaultCatSel: "health",
    groups: {
      morning: "Morning 🌅",
      evening: "Evening 🌙",
      work: "Work 💼",
      sport: "Sport 🏃",
      none: "No group",
    },
    analyticsTitle: "Analytics",
    chartCompletion: "Completion (%)",
    chartBreakdown: "Top habits",
    chartStreaks: "Streaks",
    chartHeatmap: "Activity this year",
    tab7d: "7 days",
    tab30d: "30 days",
    less: "Less",
    more: "More",
    exportTitle: "Export",
    exportCSVSub: "Spreadsheet-friendly",
    exportJSONSub: "Full backup",
    importTitle: "Import JSON",
    importSub: "Restore backup",
    prefTitle: "Preferences",
    prefMotivation: "Motivation",
    prefMotivationSub: "Quotes when completing",
    prefConfetti: "Confetti",
    prefConfettiSub: "Animation when completing",
    prefGroups: "Groups",
    prefGroupsSub: "Group habits by time of day",
    recsTitle: "Recommendations",
    badgesTitle: "Achievements",
    activityTitle: "Activity",
    xpPts: (cur, max) => `${cur} / ${max} XP`,
    levels: [
      "Beginner",
      "Practitioner",
      "Enthusiast",
      "Hunter",
      "Champion",
      "Legend",
    ],
    levelEmojis: ["🌱", "🌿", "⚡", "🔥", "💎", "👑"],
    levelSubs: [
      "Start your journey",
      "Build your habits",
      "You're on the right track",
      "True discipline",
      "Unbeatable",
      "You are an inspiration",
    ],
    motivations: [
      {
        emoji: "🎯",
        quote: "One more step forward!",
        sub: "Every check-in brings you closer to your goal.",
      },
      {
        emoji: "💪",
        quote: "You're crushing it!",
        sub: "Today you did something important.",
      },
      {
        emoji: "🚀",
        quote: "Keep the momentum!",
        sub: "Habits take 21 days. You're building yours.",
      },
      {
        emoji: "✨",
        quote: "Small steps, big results!",
        sub: "You're already better than yesterday.",
      },
      {
        emoji: "🌟",
        quote: "Consistency is the key!",
        sub: "One more day — one more win.",
      },
      {
        emoji: "🏆",
        quote: "You are a winner!",
        sub: "Discipline beats motivation every time.",
      },
    ],
    lowProgressTips: [
      "💡 Start with one simple habit — even 2 minutes counts.",
      "💡 Attach a new habit to an existing one to make it easier.",
      "💡 Make the habit visible — set a reminder or leave a note.",
    ],
    badges: [
      {
        id: "first",
        name: "First Step",
        desc: "First completion",
        ico: "🎯",
        condition: (s) => s.totalDone >= 1,
      },
      {
        id: "week7",
        name: "7-day streak",
        desc: "7 days in a row",
        ico: "🔥",
        condition: (s) => s.maxStreak >= 7,
      },
      {
        id: "month30",
        name: "Month of habit",
        desc: "30 days in a row",
        ico: "💎",
        condition: (s) => s.maxStreak >= 30,
      },
      {
        id: "multi5",
        name: "Multitasker",
        desc: "5+ habits at once",
        ico: "🎪",
        condition: (s) => s.totalHabits >= 5,
      },
      {
        id: "perfect",
        name: "Perfect day",
        desc: "All habits done in a day",
        ico: "⭐",
        condition: (s) => s.hadPerfectDay,
      },
      {
        id: "century",
        name: "100 completions",
        desc: "Checked 100 times",
        ico: "💯",
        condition: (s) => s.totalDone >= 100,
      },
      {
        id: "early",
        name: "Early bird",
        desc: "Morning habit completed",
        ico: "🌅",
        condition: (s) => s.hasMorningDone,
      },
      {
        id: "xp500",
        name: "XP warrior",
        desc: "500 experience points",
        ico: "⚡",
        condition: (s) => s.totalXP >= 500,
      },
    ],
    recommendations: [
      {
        ico: "🌅",
        title: "Morning meditation",
        desc: "5 minutes every morning reduces anxiety and sharpens focus.",
      },
      {
        ico: "💧",
        title: "Water on waking",
        desc: "A glass of water in the morning boosts metabolism.",
      },
      {
        ico: "📖",
        title: "10 pages a day",
        desc: "Reading 10 pages/day = 12 books a year.",
      },
      {
        ico: "🚶",
        title: "Post-lunch walk",
        desc: "20 minutes of walking aids digestion and lowers blood sugar.",
      },
      {
        ico: "📵",
        title: "No phone before bed",
        desc: "1 hour screen-free improves sleep quality dramatically.",
      },
      {
        ico: "🧘",
        title: "Evening stretch",
        desc: "5 minutes of stretching releases tension from the body.",
      },
    ],
  },
};

let lang = localStorage.getItem("hb3_lang") || "ru";
const T = () => LANGS[lang];
const t = (k) => T()[k] || k;

/* ── State ──────────────────────────────────────────────────── */
let habits = JSON.parse(localStorage.getItem("hb3_h") || "[]");
let logs = JSON.parse(localStorage.getItem("hb3_l") || "{}");
let custCats = JSON.parse(localStorage.getItem("hb3_cats") || "{}");
let prefs = JSON.parse(
  localStorage.getItem("hb3_prefs") ||
    '{"motivation":true,"confetti":true,"groups":true}'
);
let activity = JSON.parse(localStorage.getItem("hb3_act") || "[]"); // [{date,type,text}]

let editId = null,
  selIcon = "star",
  editIcon = "star";
let selCat = "",
  editCat = "",
  selGroup = "none",
  editGroup = "none";
let activeFilter = "all",
  sortMode = "created";
let fFreq = { type: "daily", days: [], n: 3 };
let eFreq = { type: "daily", days: [], n: 3 };
let chartPeriod = 7;

const JS_TO_IDX = [6, 0, 1, 2, 3, 4, 5];

/* ── Persistence ────────────────────────────────────────────── */
function save() {
  localStorage.setItem("hb3_h", JSON.stringify(habits));
  localStorage.setItem("hb3_l", JSON.stringify(logs));
  localStorage.setItem("hb3_cats", JSON.stringify(custCats));
  localStorage.setItem("hb3_prefs", JSON.stringify(prefs));
  localStorage.setItem("hb3_act", JSON.stringify(activity.slice(-100)));
}

/* ── XP / Gamification ──────────────────────────────────────── */
const XP_PER_DONE = 10;
const XP_PER_STREAK_BONUS = 5; // extra per streak milestone (7,30)
const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500];

function calcXP() {
  let xp = 0;
  habits.forEach((h) => {
    const entries = (logs[h.id] || []).length;
    xp += entries * XP_PER_DONE;
    const s = calcStreak(h);
    if (s >= 30) xp += XP_PER_STREAK_BONUS * 3;
    else if (s >= 7) xp += XP_PER_STREAK_BONUS;
  });
  return xp;
}

function getLevel(xp) {
  let lvl = 0;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      lvl = i;
      break;
    }
  }
  return lvl;
}

function getGameStats() {
  const totalDone = habits.reduce((s, h) => s + (logs[h.id] || []).length, 0);
  const maxStreak = habits.reduce((m, h) => Math.max(m, calcStreak(h)), 0);
  const totalXP = calcXP();
  const totalHabits = habits.length;

  // Perfect day: all due habits completed on same day (scan last 90 days)
  let hadPerfectDay = false;
  for (let i = 0; i < 90; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = dStr(d);
    const due = habits.filter((h) => habitDue(h, d));
    const done = due.filter((h) => (logs[h.id] || []).includes(ds));
    if (due.length > 0 && due.length === done.length) {
      hadPerfectDay = true;
      break;
    }
  }

  // Morning done: any morning-group habit done today
  const td = today();
  const hasMorningDone = habits.some(
    (h) => h.group === "morning" && (logs[h.id] || []).includes(td)
  );

  return {
    totalDone,
    maxStreak,
    totalXP,
    totalHabits,
    hadPerfectDay,
    hasMorningDone,
  };
}

function renderXPBar() {
  const xp = calcXP();
  const lvl = getLevel(xp);
  const curThresh = LEVEL_THRESHOLDS[lvl];
  const nxtThresh =
    LEVEL_THRESHOLDS[lvl + 1] ||
    LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] + 500;
  const pct = Math.round(((xp - curThresh) / (nxtThresh - curThresh)) * 100);

  document.getElementById("xpLevelBadge").textContent = lvl + 1;
  document.getElementById("xpLevelName").textContent = T().levels[lvl];
  document.getElementById("xpPts").textContent = T().xpPts(xp, nxtThresh);
  document.getElementById("xpFill").style.width = pct + "%";

  // Level page
  const el = document.getElementById("lvlAvatar");
  if (el) el.textContent = T().levelEmojis[lvl];
  const lt = document.getElementById("lvlTitle");
  if (lt) lt.textContent = `${T().levels[lvl]} — Lvl ${lvl + 1}`;
  const ls = document.getElementById("lvlSubtitle");
  if (ls) ls.textContent = T().levelSubs[lvl];
  const lxp = document.getElementById("lvlXpFill");
  if (lxp) lxp.style.width = pct + "%";
  const lxt = document.getElementById("lvlXpText");
  if (lxt) lxt.textContent = T().xpPts(xp, nxtThresh);
}

function showXpPop(el) {
  const rect = el.getBoundingClientRect();
  const pop = document.createElement("div");
  pop.className = "xp-pop";
  pop.textContent = `+${XP_PER_DONE} XP`;
  pop.style.cssText = `left:${rect.left + rect.width / 2 - 20}px;top:${
    rect.top - 10
  }px`;
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 1500);
}

/* ── Activity Feed ──────────────────────────────────────────── */
function addActivity(type, text) {
  activity.push({ date: new Date().toISOString(), type, text });
  save();
}

function renderActivity() {
  const el = document.getElementById("activityFeed");
  if (!el) return;
  const colors = {
    done: "var(--green)",
    badge: "var(--amber)",
    level: "var(--a2)",
    streak: "var(--pink)",
  };
  const recent = [...activity].reverse().slice(0, 12);
  if (!recent.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:13px;padding:12px 0">${t(
      "emptyTitle"
    )}</div>`;
    return;
  }
  el.innerHTML = recent
    .map((a) => {
      const ago = timeAgo(new Date(a.date));
      return `<div class="activity-item">
      <div class="activity-dot" style="background:${
        colors[a.type] || "var(--a2)"
      }"></div>
      <div class="activity-text">${a.text}</div>
      <div class="activity-time">${ago}</div>
    </div>`;
    })
    .join("");
}

function timeAgo(d) {
  const s = Math.floor((Date.now() - d) / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}d`;
}

/* ── Badges ─────────────────────────────────────────────────── */
function renderBadges() {
  const el = document.getElementById("badgesGrid");
  if (!el) return;
  const stats = getGameStats();
  const unlocked = JSON.parse(localStorage.getItem("hb3_badges") || "[]");

  el.innerHTML = T()
    .badges.map((b) => {
      const isUnlocked = b.condition(stats);
      // New badge unlocked?
      if (isUnlocked && !unlocked.includes(b.id)) {
        unlocked.push(b.id);
        localStorage.setItem("hb3_badges", JSON.stringify(unlocked));
        addActivity("badge", `🏅 ${b.name} — ${b.desc}`);
      }
      return `<div class="badge-card ${isUnlocked ? "unlocked" : "locked"}">
      <div class="badge-ico">${b.ico}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
      ${isUnlocked ? `<div class="badge-unlocked-tag">✓ Unlocked</div>` : ""}
    </div>`;
    })
    .join("");
}

/* ── Motivation Popup ───────────────────────────────────────── */
function showMotivation(streak) {
  if (!prefs.motivation) return;
  const motives = T().motivations;
  const m = motives[Math.floor(Math.random() * motives.length)];
  document.getElementById("motiveEmoji").textContent = m.emoji;
  document.getElementById("motiveQuote").textContent = m.quote;
  document.getElementById("motiveSub").textContent =
    streak > 1 ? `🔥 Серия: ${streak} дн. — ${m.sub}` : m.sub;
  document.getElementById("motivationOverlay").classList.add("show");
}

/* ── Frequency helpers ──────────────────────────────────────── */
function habitDue(h, d) {
  const f = h.freq;
  if (!f || f.type === "daily") return true;
  if (f.type === "days") return f.days.includes(JS_TO_IDX[d.getDay()]);
  return true;
}

function freqLabel(h) {
  const f = h.freq;
  if (!f || f.type === "daily") return t("freqLabelDaily");
  if (f.type === "days") {
    if (!f.days.length) return t("freqLabelNoDay");
    return f.days.map((i) => T().dayNames[i]).join(", ");
  }
  if (f.type === "ntimes") return T().freqLabelNtimes(f.n);
  return "—";
}

function calcStreak(h) {
  let s = 0,
    d = new Date();
  for (let i = 0; i < 365; i++) {
    const ds = dStr(d);
    if (!habitDue(h, d)) {
      d.setDate(d.getDate() - 1);
      continue;
    }
    if ((logs[h.id] || []).includes(ds)) {
      s++;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  return s;
}

function weekPctH(h) {
  let total = 0,
    done = 0;
  for (let i = 0; i < 7; i++) {
    const dd = new Date();
    dd.setDate(dd.getDate() - i);
    if (habitDue(h, dd)) {
      total++;
      if ((logs[h.id] || []).includes(dStr(dd))) done++;
    }
  }
  return total ? Math.round((done / total) * 100) : 0;
}

function globalWeekPct() {
  return habits.length
    ? Math.round(habits.reduce((s, h) => s + weekPctH(h), 0) / habits.length)
    : 0;
}

/* ── Date Utils ─────────────────────────────────────────────── */
function dStr(d) {
  return d.toISOString().slice(0, 10);
}
const today = () => new Date().toISOString().slice(0, 10);

function renderDate() {
  const d = new Date();
  const dw = T().weekdays[d.getDay()];
  const mo = T().months[d.getMonth()];
  document.getElementById(
    "dateBadge"
  ).textContent = `${dw}, ${d.getDate()} ${mo}`;
}

function renderHeroGreeting() {
  const h = new Date().getHours();
  const gi = h < 12 ? 0 : h < 18 ? 1 : 2;
  document.getElementById("heroGreeting").textContent =
    T().greetings[gi] + " 👋";
  const due = habits.filter((hb) => habitDue(hb, new Date()));
  const done = due.filter((hb) => (logs[hb.id] || []).includes(today()));
  document.getElementById("heroSub").textContent = T().heroSub(
    done.length,
    due.length
  );

  const pct = due.length ? Math.round((done.length / due.length) * 100) : 0;
  document.getElementById("ringPct").textContent = pct + "%";
  const circ = 2 * Math.PI * 40; // r=40
  const fill = document.getElementById("ringFill");
  fill.style.strokeDasharray = circ;
  fill.style.strokeDashoffset = circ - (circ * pct) / 100;
}

/* ── Stats ──────────────────────────────────────────────────── */
function renderStats() {
  const due = habits.filter((h) => habitDue(h, new Date()));
  const done = due.filter((h) => (logs[h.id] || []).includes(today()));
  document.getElementById(
    "sToday"
  ).textContent = `${done.length}/${due.length}`;
  document.getElementById("sStreak").textContent = habits.reduce(
    (m, h) => Math.max(m, calcStreak(h)),
    0
  );
  document.getElementById("sWeek").textContent = globalWeekPct() + "%";
  document.getElementById("sTotal").textContent = habits.length;
}

/* ── Week Strip ─────────────────────────────────────────────── */
function renderWeek() {
  const td = today();
  let html = "";
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = dStr(d);
    const isT = ds === td;
    const due = habits.filter((h) => habitDue(h, d));
    const dots = due
      .map((h) => {
        const ok = (logs[h.id] || []).includes(ds);
        return `<div class="wdot${ok ? " done" : ""}" style="${
          ok ? "background:" + h.color : ""
        }" title="${h.name}"></div>`;
      })
      .join("");
    const idx = JS_TO_IDX[d.getDay()];
    html += `<div class="wday${isT ? " today" : ""}">
      <div class="wday-name">${T().dayNames[idx]}</div>
      <div class="wday-num">${d.getDate()}</div>
      <div class="wday-dots">${
        dots ||
        '<div style="width:5px;height:5px;border-radius:50%;background:var(--border2)"></div>'
      }</div>
    </div>`;
  }
  document.getElementById("weekDays").innerHTML = html;
  document.getElementById("weekPct").textContent = T().weekPct(globalWeekPct());
}

/* ── Habits List ────────────────────────────────────────────── */
function renderHabits() {
  const usedCats = ["all", ...new Set(habits.map((h) => h.cat))];
  document.getElementById("filterRow").innerHTML = usedCats
    .map(
      (c) =>
        `<button class="fpill${
          c === activeFilter ? " active" : ""
        }" data-f="${c}">${c === "all" ? t("filterAll") : cap(c)}</button>`
    )
    .join("");
  document.querySelectorAll(".fpill").forEach((b) =>
    b.addEventListener("click", () => {
      activeFilter = b.dataset.f;
      renderHabits();
    })
  );

  let list = habits.filter(
    (h) => activeFilter === "all" || h.cat === activeFilter
  );
  if (sortMode === "name")
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (sortMode === "streak")
    list = [...list].sort((a, b) => calcStreak(b) - calcStreak(a));
  if (sortMode === "cat")
    list = [...list].sort((a, b) => a.cat.localeCompare(b.cat));

  const cont = document.getElementById("hlist");
  if (!list.length) {
    cont.innerHTML = `<div class="empty"><div class="empty-ico">${
      IC.target
    }</div>
      <h3>${habits.length ? t("emptyCatTitle") : t("emptyTitle")}</h3>
      <p>${habits.length ? t("emptyCatText") : t("emptyText")}</p></div>`;
    return;
  }

  // Low progress tip
  const pct = globalWeekPct();
  let tipHtml = "";
  if (habits.length > 0 && pct < 40) {
    const tips = T().lowProgressTips;
    tipHtml = `<div style="background:var(--amber2);border:1px solid var(--amber);border-radius:var(--r-sm);padding:12px 16px;font-size:12px;color:var(--amber);margin-bottom:12px;line-height:1.5">${
      tips[Math.floor(Math.random() * tips.length)]
    }</div>`;
  }

  if (prefs.groups) {
    // Group mode
    const groups = { morning: [], evening: [], work: [], sport: [], none: [] };
    list.forEach((h) => {
      const g = h.group || "none";
      if (groups[g]) groups[g].push(h);
      else groups.none.push(h);
    });
    cont.innerHTML =
      tipHtml +
      Object.entries(groups)
        .filter(([, arr]) => arr.length > 0)
        .map(([gKey, arr]) => {
          const gName = T().groups[gKey] || gKey;
          const isCollapsed = localStorage.getItem(`hb3_grp_${gKey}`) === "1";
          return `<div class="habit-group${
            isCollapsed ? " collapsed" : ""
          }" data-group="${gKey}">
          <div class="group-header">
            <div class="group-icon">${gName.split(" ")[1] || "📌"}</div>
            <div class="group-name">${gName}</div>
            <div class="group-count">${arr.length}</div>
            <div class="group-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </div>
          <div class="group-body">${arr
            .map((h, i) => habitCardHTML(h, i))
            .join("")}</div>
        </div>`;
        })
        .join("");
    // Collapse toggle
    cont.querySelectorAll(".group-header").forEach((h) => {
      h.addEventListener("click", () => {
        const g = h.parentElement;
        const gKey = g.dataset.group;
        g.classList.toggle("collapsed");
        localStorage.setItem(
          `hb3_grp_${gKey}`,
          g.classList.contains("collapsed") ? "1" : "0"
        );
      });
    });
  } else {
    cont.innerHTML = tipHtml + list.map((h, i) => habitCardHTML(h, i)).join("");
  }

  cont.querySelectorAll(".chk").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleHabit(b.dataset.id, b);
    })
  );
  cont
    .querySelectorAll(".ahbtn.e")
    .forEach((b) => b.addEventListener("click", () => openEdit(b.dataset.id)));
}

function habitCardHTML(h, i) {
  const isDone = (logs[h.id] || []).includes(today());
  const streak = calcStreak(h);
  const due = habitDue(h, new Date());
  let calDays = "";
  for (let j = 20; j >= 0; j--) {
    const dd = new Date();
    dd.setDate(dd.getDate() - j);
    const ds = dStr(dd);
    calDays += `<div class="cday${
      (logs[h.id] || []).includes(ds) ? " done" : ""
    }${ds === today() ? " today" : ""}" style="--hc:${
      h.color
    }" title="${ds}"></div>`;
  }
  let c21 = 0;
  for (let j = 0; j < 21; j++) {
    const dd = new Date();
    dd.setDate(dd.getDate() - j);
    if ((logs[h.id] || []).includes(dStr(dd))) c21++;
  }

  return `<div class="hcard${isDone ? " done" : ""}" style="--hc:${
    h.color
  };animation:cardIn .28s ${i * 30}ms ease both" data-id="${h.id}">
    <div class="hcard-bar"></div>
    <div class="hcard-inner">
      <div class="hcard-ico">${IC[h.icon] || IC.star}</div>
      <div>
        <div class="hcard-name">${h.name}</div>
        <div class="hcard-tags">
          ${
            streak > 0
              ? `<span class="stk">${IC.zap}<span>${streak} ${t(
                  "streakDays"
                )}</span></span>`
              : ""
          }
          <span class="tag">${freqLabel(h)}</span>
          <span class="tag">${cap(h.cat || "")}</span>
          ${
            !due
              ? `<span class="tag" style="color:var(--text3)">${t(
                  "tagNotToday"
                )}</span>`
              : ""
          }
        </div>
      </div>
      <div class="hcard-acts">
        <button class="ahbtn e" data-id="${h.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="ahbtn" onclick="toggleCal('${h.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </button>
        <button class="ahbtn d" onclick="delHabit('${h.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/></svg>
        </button>
        <button class="chk${isDone ? " done" : ""}" data-id="${
    h.id
  }" style="--hc:${h.color}"${!due && !isDone ? " disabled" : ""}>
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      </div>
    </div>
    ${
      h.note
        ? `<div class="hcard-note"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/></svg>${h.note}</div>`
        : ""
    }
    <div class="hcard-cal" id="cal_${h.id}">
      <div class="cal-head"><span>${t(
        "calDays"
      )}</span><span>${c21}/21</span></div>
      <div class="cal-days">${calDays}</div>
    </div>
  </div>`;
}

window.toggleCal = (id) => {
  const el = document.getElementById("cal_" + id);
  if (el) el.classList.toggle("open");
};
window.delHabit = (id) => {
  habits = habits.filter((h) => h.id !== id);
  delete logs[id];
  save();
  renderAll();
  toast(t("toastDeleted"), "warn");
};

function toggleHabit(id, btn) {
  const td = today();
  if (!logs[id]) logs[id] = [];
  const i = logs[id].indexOf(td);
  if (i === -1) {
    logs[id].push(td);
    const h = habits.find((x) => x.id === id);
    const streak = calcStreak(h);
    if (prefs.confetti) confetti();
    showXpPop(btn);
    addActivity("done", `✅ ${h?.name || ""}`);
    // Check streak milestones
    if (streak === 7) addActivity("streak", `🔥 7 дн. — ${h?.name || ""}`);
    if (streak === 30) addActivity("streak", `💎 30 дн. — ${h?.name || ""}`);
    toast(t("toastDone"), "success");
    setTimeout(() => showMotivation(streak), 400);
  } else {
    logs[id].splice(i, 1);
    toast(t("toastUndone"), "info");
  }
  save();
  renderAll();
  renderBadges();
}

/* ── Category Helpers ───────────────────────────────────────── */
function getCustCats() {
  return custCats[lang] || [];
}
function allCats() {
  return [
    ...T().defaultCats,
    ...getCustCats().filter((c) => !T().defaultCats.includes(c)),
  ];
}
function defaultSelCat() {
  return T().defaultCatSel;
}

function renderCatPills(cid, cur, onSel) {
  const c = document.getElementById(cid);
  c.innerHTML = allCats()
    .map((cat) => {
      const isC = !T().defaultCats.includes(cat);
      const isS = cat === cur;
      return `<div class="cat-pill${isS ? " sel" : ""}${
        isC ? " custom" : ""
      }" data-cat="${cat}">${cap(cat)}${
        isC
          ? `<span class="del-cat" data-cat="${cat}" title="${t(
              "catDelTitle"
            )}">✕</span>`
          : ""
      }</div>`;
    })
    .join("");
  c.querySelectorAll(".cat-pill").forEach((p) => {
    p.addEventListener("click", (e) => {
      if (e.target.classList.contains("del-cat")) return;
      onSel(p.dataset.cat);
      c.querySelectorAll(".cat-pill").forEach((x) => x.classList.remove("sel"));
      p.classList.add("sel");
    });
  });
  c.querySelectorAll(".del-cat").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cat = btn.dataset.cat;
      if (!custCats[lang]) custCats[lang] = [];
      custCats[lang] = custCats[lang].filter((c) => c !== cat);
      save();
      const ns = cur === cat ? defaultSelCat() : cur;
      onSel(ns);
      renderCatPills(cid, ns, onSel);
    });
  });
}

function setupCatAdd(inpId, btnId, cid, getS, setS) {
  document.getElementById(btnId).addEventListener("click", () => {
    const val = document.getElementById(inpId).value.trim().toLowerCase();
    if (!val) return;
    if (!allCats().includes(val)) {
      if (!custCats[lang]) custCats[lang] = [];
      custCats[lang].push(val);
      save();
    }
    setS(val);
    document.getElementById(inpId).value = "";
    renderCatPills(cid, val, setS);
  });
  document.getElementById(inpId).addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById(btnId).click();
  });
}

/* ── Group Selector ─────────────────────────────────────────── */
function renderGroupSel(cid, cur, onSel) {
  const c = document.getElementById(cid);
  c.innerHTML = Object.entries(T().groups)
    .map(
      ([key, label]) =>
        `<div class="group-pill${
          cur === key ? " sel" : ""
        }" data-g="${key}">${label}</div>`
    )
    .join("");
  c.querySelectorAll(".group-pill").forEach((p) => {
    p.addEventListener("click", () => {
      onSel(p.dataset.g);
      c.querySelectorAll(".group-pill").forEach((x) =>
        x.classList.remove("sel")
      );
      p.classList.add("sel");
    });
  });
}

/* ── Frequency Picker ───────────────────────────────────────── */
function buildFreqPicker(prefix, freqObj, onChange) {
  const typeRow = document.querySelectorAll(
    `#${prefix}FreqWrap .freq-type-btn`
  );
  const daysPicker = document.getElementById(`${prefix}DaysPicker`);
  const ntimesPicker = document.getElementById(`${prefix}NtimesPicker`);
  const daysBtns = document.getElementById(`${prefix}DaysBtns`);
  const daysHint = document.getElementById(`${prefix}DaysHint`);
  const nval = document.getElementById(`${prefix}Nval`);
  const nhint = document.getElementById(`${prefix}Nhint`);

  function applyType(tp) {
    typeRow.forEach((b) => b.classList.toggle("sel", b.dataset.ft === tp));
    daysPicker.style.display = tp === "days" ? "block" : "none";
    ntimesPicker.style.display = tp === "ntimes" ? "block" : "none";
    freqObj.type = tp;
    onChange();
  }
  typeRow.forEach((b) =>
    b.addEventListener("click", () => applyType(b.dataset.ft))
  );

  daysBtns.innerHTML = T()
    .dayNames.map(
      (name, i) =>
        `<button class="freq-day-btn${
          freqObj.days.includes(i) ? " sel" : ""
        }" data-di="${i}" style="${
          freqObj.days.includes(i) ? "background:var(--a1)" : ""
        }">${name}</button>`
    )
    .join("");
  daysBtns.querySelectorAll(".freq-day-btn").forEach((b) => {
    b.addEventListener("click", () => {
      const di = parseInt(b.dataset.di),
        idx = freqObj.days.indexOf(di);
      if (idx === -1) {
        freqObj.days.push(di);
        freqObj.days.sort();
      } else freqObj.days.splice(idx, 1);
      b.classList.toggle("sel", freqObj.days.includes(di));
      b.style.background = freqObj.days.includes(di) ? "var(--a1)" : "";
      daysHint.textContent = freqObj.days.length
        ? T().daysSelected(freqObj.days.map((i) => T().dayNames[i]).join(", "))
        : t("daysNone");
      onChange();
    });
  });
  daysHint.textContent = freqObj.days.length
    ? T().daysSelected(freqObj.days.map((i) => T().dayNames[i]).join(", "))
    : t("daysNone");

  function updateN() {
    nval.textContent = freqObj.n;
    nhint.textContent = freqObj.n;
    onChange();
  }
  document.getElementById(`${prefix}Nminus`).onclick = () => {
    if (freqObj.n > 1) freqObj.n--;
    updateN();
  };
  document.getElementById(`${prefix}Nplus`).onclick = () => {
    if (freqObj.n < 7) freqObj.n++;
    updateN();
  };
  applyType(freqObj.type);
}

/* ── Icon Picker ────────────────────────────────────────────── */
function buildPicker(gid, getS, setS) {
  const c = document.getElementById(gid);
  c.innerHTML = IK.map(
    (k) =>
      `<button class="ipick${getS() === k ? " sel" : ""}" data-k="${k}">${
        IC[k]
      }</button>`
  ).join("");
  c.querySelectorAll(".ipick").forEach((b) =>
    b.addEventListener("click", () => {
      setS(b.dataset.k);
      c.querySelectorAll(".ipick").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
    })
  );
}

/* ── Form ───────────────────────────────────────────────────── */
function openForm() {
  fFreq = { type: "daily", days: [], n: 3 };
  selCat = defaultSelCat();
  selIcon = "star";
  selGroup = "none";
  document.getElementById("addPanel").classList.add("open");
  document.getElementById(
    "btnToggleForm"
  ).innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> <span>${t(
    "btnClose"
  )}</span>`;
  document.getElementById("fName").focus();
  buildPicker(
    "iconGrid",
    () => selIcon,
    (v) => (selIcon = v)
  );
  renderCatPills("fCatList", selCat, (v) => (selCat = v));
  renderGroupSel("fGroupSel", selGroup, (v) => (selGroup = v));
  buildFreqPicker("f", fFreq, () => {});
}

function closeForm() {
  document.getElementById("addPanel").classList.remove("open");
  document.getElementById("fName").value = "";
  document.getElementById("fNote").value = "";
  document.getElementById("cc").textContent = "0/45";
  document.getElementById(
    "btnToggleForm"
  ).innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" style="width:14px;height:14px"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> <span>${t(
    "btnAdd"
  )}</span>`;
}

function saveHabit() {
  const name = document.getElementById("fName").value.trim();
  if (!name) {
    shake("fName");
    return;
  }
  if (fFreq.type === "days" && !fFreq.days.length) {
    toast(t("toastNoDays"), "warn");
    return;
  }
  habits.unshift({
    id: Date.now() + "",
    name,
    cat: selCat,
    group: selGroup,
    freq: { ...fFreq, days: [...fFreq.days] },
    color: document.getElementById("fColor").value,
    icon: selIcon,
    note: document.getElementById("fNote").value.trim(),
    created: Date.now(),
  });
  addActivity("done", `➕ ${name}`);
  save();
  closeForm();
  renderAll();
  toast(t("toastAdded"), "success");
}

/* ── Edit ───────────────────────────────────────────────────── */
function openEdit(id) {
  const h = habits.find((x) => x.id === id);
  if (!h) return;
  editId = id;
  editIcon = h.icon;
  editCat = h.cat;
  editGroup = h.group || "none";
  eFreq = h.freq
    ? {
        type: h.freq.type || "daily",
        days: [...(h.freq.days || [])],
        n: h.freq.n || 3,
      }
    : { type: "daily", days: [], n: 3 };
  document.getElementById("eName").value = h.name;
  document.getElementById("eColor").value = h.color;
  document.getElementById("eNote").value = h.note || "";
  buildPicker(
    "editIconGrid",
    () => editIcon,
    (v) => (editIcon = v)
  );
  renderCatPills("eCatList", editCat, (v) => (editCat = v));
  renderGroupSel("eGroupSel", editGroup, (v) => (editGroup = v));
  buildFreqPicker("e", eFreq, () => {});
  document.getElementById("editModal").classList.add("open");
}

function saveEdit() {
  const h = habits.find((x) => x.id === editId);
  if (!h) return;
  const name = document.getElementById("eName").value.trim();
  if (!name) {
    shake("eName");
    return;
  }
  if (eFreq.type === "days" && !eFreq.days.length) {
    toast(t("toastNoDays"), "warn");
    return;
  }
  h.name = name;
  h.cat = editCat;
  h.group = editGroup;
  h.freq = { ...eFreq, days: [...eFreq.days] };
  h.color = document.getElementById("eColor").value;
  h.note = document.getElementById("eNote").value.trim();
  h.icon = editIcon;
  save();
  closeEditModal();
  renderAll();
  toast(t("toastSaved"), "success");
}

function closeEditModal() {
  document.getElementById("editModal").classList.remove("open");
  editId = null;
}

/* ── Render All ─────────────────────────────────────────────── */
function renderAll() {
  renderHeroGreeting();
  renderStats();
  renderWeek();
  renderHabits();
  renderXPBar();
}

/* ══════════════════════════════════════
   ANALYTICS
══════════════════════════════════════ */
function renderAnalytics() {
  drawLineChart(chartPeriod);
  renderBreakdown();
  renderStreakList();
  renderHeatmap();
}

function drawLineChart(days) {
  const canvas = document.getElementById("lineChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.parentElement.clientWidth - 40 || 600;
  const H = 120;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = dStr(d);
    const due = habits.filter((h) => habitDue(h, d));
    const done = due.filter((h) => (logs[h.id] || []).includes(ds));
    data.push(due.length ? Math.round((done.length / due.length) * 100) : 0);
  }

  if (data.length < 2) return;

  const pad = 8,
    gH = H - 2 * pad;
  const step = (W - 2 * pad) / (data.length - 1);

  // Grid lines
  ctx.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue("--border")
    .trim();
  ctx.lineWidth = 1;
  [0, 25, 50, 75, 100].forEach((v) => {
    const y = pad + gH - (v / 100) * gH;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(W - pad, y);
    ctx.setLineDash([4, 4]);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad, 0, H);
  grad.addColorStop(0, "rgba(108,92,231,0.3)");
  grad.addColorStop(1, "rgba(108,92,231,0)");

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad + i * step,
      y = pad + gH - (v / 100) * gH;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  // close fill path
  ctx.lineTo(pad + (data.length - 1) * step, H);
  ctx.lineTo(pad, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad + i * step,
      y = pad + gH - (v / 100) * gH;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#6c5ce7";
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.stroke();

  // Dots
  data.forEach((v, i) => {
    const x = pad + i * step,
      y = pad + gH - (v / 100) * gH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#6c5ce7";
    ctx.fill();
    ctx.strokeStyle = getComputedStyle(document.documentElement)
      .getPropertyValue("--bg2")
      .trim();
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function renderBreakdown() {
  const el = document.getElementById("breakdownList");
  if (!el) return;
  if (!habits.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:13px">${t(
      "emptyTitle"
    )}</div>`;
    return;
  }
  const sorted = [...habits]
    .sort((a, b) => weekPctH(b) - weekPctH(a))
    .slice(0, 6);
  el.innerHTML = sorted
    .map((h) => {
      const pct = weekPctH(h);
      return `<div class="breakdown-row">
      <div class="breakdown-name">${h.name}</div>
      <div class="breakdown-bar"><div class="breakdown-fill" style="width:${pct}%;background:${h.color}"></div></div>
      <div class="breakdown-pct">${pct}%</div>
    </div>`;
    })
    .join("");
}

function renderStreakList() {
  const el = document.getElementById("streakList");
  if (!el) return;
  if (!habits.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:13px">${t(
      "emptyTitle"
    )}</div>`;
    return;
  }
  const sorted = [...habits]
    .map((h) => ({ h, s: calcStreak(h) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 5);
  el.innerHTML = sorted
    .map(
      ({ h, s }, i) =>
        `<div class="streak-row">
      <div class="streak-rank">${i + 1}</div>
      <div class="streak-dot" style="background:color-mix(in srgb,${
        h.color
      } 20%,transparent);color:${h.color}">${IC[h.icon] || IC.star}</div>
      <div class="streak-info">
        <div class="streak-name">${h.name}</div>
        <div class="streak-sub">${freqLabel(h)}</div>
      </div>
      <div class="streak-badge">🔥 ${s}</div>
    </div>`
    )
    .join("");
}

function renderHeatmap() {
  const el = document.getElementById("heatmapGrid");
  if (!el) return;
  el.innerHTML = "";
  const COLS = 18; // weeks
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - COLS * 7 + 1);

  for (let w = 0; w < COLS; w++) {
    const col = document.createElement("div");
    col.className = "heatmap-col";
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);
      if (date > end) {
        const empty = document.createElement("div");
        col.appendChild(empty);
        continue;
      }
      const ds = dStr(date);
      const due = habits.filter((h) => habitDue(h, date));
      const done = due.filter((h) => (logs[h.id] || []).includes(ds)).length;
      const pct = due.length ? done / due.length : 0;
      const lvl =
        pct === 0
          ? ""
          : pct < 0.34
          ? "l1"
          : pct < 0.67
          ? "l2"
          : pct < 1
          ? "l3"
          : "l4";
      const cell = document.createElement("div");
      cell.className = `hmap-cell ${lvl}`;
      cell.title = `${ds}: ${done}/${due.length}`;
      col.appendChild(cell);
    }
    el.appendChild(col);
  }
}

/* ══════════════════════════════════════
   RECOMMENDATIONS
══════════════════════════════════════ */
function renderRecommendations() {
  const el = document.getElementById("recsList");
  if (!el) return;

  // Smart: filter out recs that match existing habit categories
  const existingNames = habits.map((h) => h.name.toLowerCase());
  const recs = T().recommendations.filter(
    (r) =>
      !existingNames.some((n) => n.includes(r.title.toLowerCase().slice(0, 5)))
  );

  if (!recs.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:13px;padding:10px 0">🎉 ${
      lang === "ru"
        ? "Отлично! У тебя уже есть всё"
        : lang === "uk"
        ? "Чудово! У тебе вже є всі"
        : "Great! You already have it all"
    }</div>`;
    return;
  }
  el.innerHTML = recs
    .map(
      (r) =>
        `<div class="rec-card">
      <div class="rec-ico">${r.ico}</div>
      <div class="rec-text">
        <div class="rec-title">${r.title}</div>
        <div class="rec-desc">${r.desc}</div>
      </div>
    </div>`
    )
    .join("");
}

/* ══════════════════════════════════════
   EXPORT / IMPORT
══════════════════════════════════════ */
function exportCSV() {
  const rows = [
    [
      "ID",
      "Name",
      "Category",
      "Group",
      "Color",
      "Icon",
      "Streak",
      "Done this week",
      "Total done",
    ],
  ];
  habits.forEach((h) => {
    rows.push([
      h.id,
      h.name,
      h.cat || "",
      h.group || "none",
      h.color,
      h.icon || "star",
      calcStreak(h),
      weekPctH(h) + "%",
      (logs[h.id] || []).length,
    ]);
  });
  const csv = rows.map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
  download("habitto-export.csv", "text/csv", csv);
  toast(t("toastExported"), "success");
}

function exportJSON() {
  const data = {
    habits,
    logs,
    custCats,
    activity,
    exportedAt: new Date().toISOString(),
  };
  download(
    "habitto-backup.json",
    "application/json",
    JSON.stringify(data, null, 2)
  );
  toast(t("toastExported"), "success");
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.habits) habits = data.habits;
      if (data.logs) logs = data.logs;
      if (data.custCats) custCats = data.custCats;
      if (data.activity) activity = data.activity;
      save();
      renderAll();
      renderBadges();
      renderActivity();
      toast(t("toastImported"), "success");
    } catch {
      toast("Invalid file", "error");
    }
  };
  reader.readAsText(file);
}

function download(filename, mime, content) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: mime }));
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
const PAGE_TITLES = {
  today: "habitsTitle",
  analytics: "analyticsTitle",
  gamification: "badgesTitle",
  settings: "exportTitle",
};

function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn[data-page]")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === id));
  const page = document.getElementById("page-" + id);
  if (page) page.classList.add("active");
  document.getElementById("pageTitle").textContent = t(PAGE_TITLES[id]) || "";

  if (id === "analytics") {
    renderAnalytics();
  }
  if (id === "gamification") {
    renderBadges();
    renderActivity();
  }
  if (id === "settings") {
    renderRecommendations();
  }
}

/* ══════════════════════════════════════
   PREFERENCES (settings toggles)
══════════════════════════════════════ */
function initPrefs() {
  ["motivation", "confetti", "groups"].forEach((key) => {
    const btn = document.getElementById(
      "toggle" + key[0].toUpperCase() + key.slice(1)
    );
    if (!btn) return;
    btn.classList.toggle("on", !!prefs[key]);
    btn.addEventListener("click", () => {
      prefs[key] = !prefs[key];
      btn.classList.toggle("on", prefs[key]);
      save();
      renderAll();
    });
  });
}

/* ══════════════════════════════════════
   THEME
══════════════════════════════════════ */
function initTheme() {
  const th = localStorage.getItem("hb3_theme") || "dark";
  document.documentElement.setAttribute("data-theme", th);
}
document.getElementById("themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("hb3_theme", next);
  // Redraw chart on theme change
  if (document.getElementById("page-analytics").classList.contains("active"))
    drawLineChart(chartPeriod);
});

/* ══════════════════════════════════════
   i18n apply
══════════════════════════════════════ */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n,
      val = T()[key];
    if (typeof val === "string") {
      if (el.tagName === "OPTION") el.textContent = val;
      else el.textContent = val;
    }
  });
  // Placeholders
  const fni = document.getElementById("fCatInp"),
    eni = document.getElementById("eCatInp");
  if (fni) fni.placeholder = t("catPlaceholder");
  if (eni) eni.placeholder = t("catPlaceholder");

  // Nav tooltips (title on nav-btn)
  const navLabels = {
    today: t("habitsTitle"),
    analytics: t("analyticsTitle"),
    gamification: t("badgesTitle"),
    settings: t("exportTitle"),
  };
  document.querySelectorAll(".nav-btn[data-page]").forEach((b) => {
    b.title = navLabels[b.dataset.page] || "";
  });

  // Lang buttons
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  // Sort select options
  document.querySelectorAll(".sort-sel option[data-i18n]").forEach((o) => {
    o.textContent = t(o.dataset.i18n);
  });

  renderDate();
  renderAll();
}

/* ── Utils ──────────────────────────────────────────────────── */
function cap(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}
function shake(id) {
  const el = document.getElementById(id);
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "shake .3s ease";
  el.addEventListener("animationend", () => (el.style.animation = ""), {
    once: true,
  });
}

/* ── Toast ──────────────────────────────────────────────────── */
const TICO = {
  success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
};
let toastTimer;
function toast(msg, type = "info") {
  const el = document.getElementById("toast");
  el.className = `toast ${type}`;
  el.innerHTML = (TICO[type] || "") + msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ── Confetti ───────────────────────────────────────────────── */
function confetti() {
  const cols = [
    "#6c5ce7",
    "#a29bfe",
    "#00d4a0",
    "#ffd166",
    "#4ecdc4",
    "#fd79a8",
  ];
  for (let i = 0; i < 24; i++) {
    const el = document.createElement("div");
    el.className = "cp";
    const dx = (Math.random() - 0.5) * 300,
      dy = Math.random() * -200 - 60;
    el.style.cssText = `left:${35 + Math.random() * 30}%;top:${
      15 + Math.random() * 25
    }%;background:${cols[i % cols.length]};width:${
      5 + Math.random() * 8
    }px;height:${5 + Math.random() * 8}px;--dy:${dy};--dx:${dx};--dur:${
      0.6 + Math.random() * 0.7
    }s;animation-delay:${Math.random() * 0.25}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }
}

/* ══════════════════════════════════════
   BOOT — Event Listeners
══════════════════════════════════════ */
// Navigation
document
  .querySelectorAll(".nav-btn[data-page]")
  .forEach((b) => b.addEventListener("click", () => showPage(b.dataset.page)));

// Language
document.querySelectorAll(".lang-btn").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    localStorage.setItem("hb3_lang", lang);
    applyLang();
    if (document.getElementById("page-analytics").classList.contains("active"))
      renderAnalytics();
  })
);

// Form
document.getElementById("btnToggleForm").addEventListener("click", () => {
  document.getElementById("addPanel").classList.contains("open")
    ? closeForm()
    : openForm();
});
document.getElementById("btnSave").addEventListener("click", saveHabit);
document.getElementById("btnCancel").addEventListener("click", closeForm);
document.getElementById("fName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveHabit();
});
document.getElementById("fName").addEventListener("input", (e) => {
  document.getElementById("cc").textContent = e.target.value.length + "/45";
});

// Sort
document.getElementById("sortSel").addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderHabits();
});

// Edit modal
document
  .getElementById("btnCloseModal")
  .addEventListener("click", closeEditModal);
document.getElementById("btnEditSave").addEventListener("click", saveEdit);
document
  .getElementById("btnEditCancel")
  .addEventListener("click", closeEditModal);
document.getElementById("editModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditModal();
});
document.getElementById("eName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveEdit();
});

// Category add
setupCatAdd(
  "fCatInp",
  "fCatAdd",
  "fCatList",
  () => selCat,
  (v) => (selCat = v)
);
setupCatAdd(
  "eCatInp",
  "eCatAdd",
  "eCatList",
  () => editCat,
  (v) => (editCat = v)
);

// Chart tabs
document.querySelectorAll(".chart-tab").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".chart-tab")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    chartPeriod = parseInt(b.dataset.period);
    drawLineChart(chartPeriod);
  })
);

// Export
document.getElementById("exportCSV").addEventListener("click", exportCSV);
document.getElementById("exportJSON").addEventListener("click", exportJSON);
document
  .getElementById("importJSON")
  .addEventListener("click", () =>
    document.getElementById("importFile").click()
  );
document.getElementById("importFile").addEventListener("change", (e) => {
  if (e.target.files[0]) importJSON(e.target.files[0]);
});

// Motivation close
document.getElementById("motiveClose").addEventListener("click", () => {
  document.getElementById("motivationOverlay").classList.remove("show");
});
document.getElementById("motivationOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget)
    document.getElementById("motivationOverlay").classList.remove("show");
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
initTheme();
initPrefs();
applyLang();
showPage("today");
