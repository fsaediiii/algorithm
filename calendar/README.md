/my-project
│
├── /src
│   ├── /domain                 # لایه Domain – قوانین و مدل‌های اصلی پروژه
│   │   ├── /entities           # Entityهای اصلی
│   │   ├── /value-objects      # Value Objectها
│   │   ├── /repositories       # Interfaceهای Repository
│   │   └── /services           # Domain services (مثلاً محاسبات یا منطق خاص دامنه)
│   │
│   ├── /application            # لایه Application – Use Caseها
│   │   ├── /dto                # Data Transfer Objects
│   │   ├── /services           # Application services (Use Caseها)
│   │   └── /interfaces         # Interfaceها برای ارتباط با Infrastructure
│   │
│   ├── /infrastructure         # لایه Infrastructure – پیاده‌سازی جزئیات
│   │   ├── /api                # Axios client, HTTP services
│   │   ├── /redux              # Store, slices, thunks
│   │   ├── /repositories       # پیاده‌سازی Repositoryها
│   │   └── /persistence        # ذخیره‌سازی (LocalStorage, IndexedDB, etc.)
│   │
│   ├── /ui                     # لایه Presentation / UI
│   │   ├── /components         # کامپوننت‌های عمومی (InputKit, ButtonKit, LabelKit…)
│   │   ├── /layouts            # Layoutها و Wrapperها
│   │   ├── /pages              # صفحات Next.js
│   │   ├── /hooks              # Custom Hooks
│   │   └── /styles             # استایل‌ها (Tailwind configs, global.css, etc.)
│   │
│   ├── /shared                 # Shared resources بین لایه‌ها
│   │   ├── /enums              # Enumها
│   │   ├── /constants          # مقادیر ثابت
│   │   ├── /utils              # توابع کمکی
│   │   └── /types              # Typeها و Interfaceهای عمومی
│   │
│   └── /config                 # Configها و environment setup
│       ├── /env                # فایل‌های .env و مدیریت متغیرها
│       └── /axiosConfig.ts     # Config برای Axios
│
├── /public                     # تصاویر، فونت‌ها و assets عمومی
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
