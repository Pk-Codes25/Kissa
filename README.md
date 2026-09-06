# किस्सा — Story Website

एक साधारण, स्टैटिक (बिना डेटाबेस के) हिंदी स्टोरी वेबसाइट। सिर्फ़ HTML और CSS से बनी है, इसलिए हर ब्राउज़र (Chrome, Firefox, Safari, Edge) पर एक जैसी दिखेगी और चलेगी।

## Folder structure

```
kissa/
├── index.html          ← होम पेज (सभी कहानियों की लिस्ट)
├── about.html          ← परिचय पेज
├── style.css           ← पूरी वेबसाइट की स्टाइलिंग
├── sitemap.xml          ← Google को बताता है कि साइट पर कौन-कौन से पेज हैं
├── robots.txt           ← सर्च इंजनों को क्रॉल करने की अनुमति देता है
└── stories/
    ├── kagaz-ki-kashti.html
    ├── purani-haveli.html
    └── last-bus.html
```

## नई कहानी कैसे जोड़ें

1. `stories/` फ़ोल्डर में किसी भी मौजूदा story file (जैसे `last-bus.html`) की कॉपी बनाएँ और उसका नाम बदलें (जैसे `naya-kissa.html`)।
2. फ़ाइल खोलें और बदलें:
   - `<title>`
   - `meta name="description"`
   - `<h1>` और कहानी का पूरा टेक्स्ट (`.story-body` के अंदर)
   - `story-nav` में पिछली/अगली कहानी के लिंक
3. `index.html` में `story-list` के अंदर एक नई `<li>` जोड़कर नई कहानी का लिंक, तारीख़ और excerpt डालें।
4. `sitemap.xml` में नए पेज का URL जोड़ें।

## Website को लाइव कैसे करें (मुफ़्त में)

**सबसे आसान तरीक़ा — GitHub Pages:**
1. GitHub पर एक नया repository बनाएँ (जैसे `kissa`)।
2. इस फ़ोल्डर की सारी फ़ाइलें उसमें अपलोड करें।
3. Repository की Settings → Pages में जाकर "Deploy from branch" चुनें और `main` branch सेव करें।
4. कुछ मिनट में वेबसाइट `https://your-username.github.io/kissa/` पर लाइव हो जाएगी — यह सभी ब्राउज़र्स पर काम करती है।

दूसरे विकल्प: Netlify या Vercel — फ़ोल्डर को ड्रैग-एंड-ड्रॉप करके भी डिप्लॉय कर सकते हैं।

## Easily searchable कैसे बनाएँ (Google पर दिखने के लिए)

1. जब वेबसाइट लाइव हो जाए, तो हर फ़ाइल में `https://example.com/` को अपने असली डोमेन से बदलें (`canonical`, `og:url`, `sitemap.xml`, `robots.txt` — सभी जगह)।
2. [Google Search Console](https://search.google.com/search-console) पर जाकर अपनी साइट जोड़ें (verify करें)।
3. वहाँ `sitemap.xml` सबमिट करें — इससे Google को नए पेज तुरंत मिल जाएँगे।
4. हर कहानी में पहले से ही SEO के लिए ज़रूरी चीज़ें लगी हैं — title, meta description, और Schema.org structured data (ताकि Google कहानी को ठीक से समझे)।
5. जितनी बार नई कहानी जोड़ें, sitemap.xml अपडेट करना न भूलें।

## Cross-browser compatibility

इस साइट में कोई जटिल JavaScript फ़्रेमवर्क नहीं है — सिर्फ़ standard HTML5 और CSS3, इसलिए यह Chrome, Firefox, Safari, Edge, और मोबाइल ब्राउज़र्स — सभी पर एक जैसी दिखेगी और तेज़ लोड होगी।
