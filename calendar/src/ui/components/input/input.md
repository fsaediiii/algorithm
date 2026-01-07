input/
├─ index.ts                 # public API
│
├─ types/
│   ├─ input.types.ts       # Props & contracts
│   └─ input.enums.ts       # size, variant, state
│
├─ structure/
│   ├─ InputRoot.tsx        # wrapper (label, error, layout)
│   ├─ InputField.tsx       # <input /> واقعی
│   ├─ InputLabel.tsx
│   ├─ InputError.tsx
│   └─ InputIcon.tsx
│
├─ ui/
│   ├─ input.styles.ts      # کلاس‌ها / variant mapping
│   └─ input.classes.ts    # cn / tailwind helpers
│
├─ hooks/
│   └─ useInput.ts          # focus, clear, state helpers
│
├─ adapters/
│   └─ rhf.adapter.tsx      # react-hook-form adapter
│
└─ Input.tsx                # composition entry
