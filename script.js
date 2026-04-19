// Smooth scrolling للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Topic data with explanations and examples
const topicsData = {
    variables: {
        title: 'المتغيرات (Variables)',
        explanation: 'المتغيرات هي حاويات لتخزين القيم والبيانات. في JavaScript، يمكنك إعلان متغير باستخدام var أو let أو const. كل منها لها استخدام مختلف:',
        details: [
            'var: يُستخدم في الإصدارات القديمة، لكن له نطاق عام',
            'let: النطاق محدود بالكتلة، الطريقة الحديثة الموصى بها',
            'const: ثابت، لا يمكن تغيير قيمته بعد التعريف'
        ],
        example: `// إعلان متغيرات
let userName = "أحمد";
const age = 25;
var country = "السعودية";

console.log(userName);  // أحمد
console.log(age);       // 25

// تغيير قيمة متغير let
userName = "محمد";
console.log(userName);  // محمد`
    },
    functions: {
        title: 'الدوال (Functions)',
        explanation: 'الدوال هي مجموعة من الأوامر التي تقوم بمهمة معينة. يمكنك استدعاء الدالة عدة مرات دون إعادة كتابة الكود. الدوال تقبل معاملات (parameters) وتُرجع نتائج (return).',
        details: [
            'الدالة العادية: function myFunction() { }',
            'دالة السهم (Arrow Function): const myFunc = () => { }',
            'يمكن تمرير معاملات واستقبال قيمة إرجاع'
        ],
        example: `// دالة عادية
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // 8

// دالة السهم
const multiply = (x, y) => x * y;
console.log(multiply(4, 5));  // 20

// دالة بدون معاملات
function greet() {
    return "مرحباً بك!";
}
console.log(greet());  // مرحباً بك!`
    },
    arrays: {
        title: 'المصفوفات (Arrays)',
        explanation: 'المصفوفة هي مجموعة من العناصر مرتبة في قائمة واحدة. كل عنصر له موضع (index) يبدأ من 0. المصفوفات تسهل التعامل مع مجموعات من البيانات.',
        details: [
            'الوصول للعنصر: array[0]',
            'الطول: array.length',
            'الدوال المهمة: push(), pop(), map(), filter(), forEach()'
        ],
        example: `// إعلان مصفوفة
const fruits = ["تفاح", "برتقال", "موز"];
console.log(fruits[0]);  // تفاح
console.log(fruits.length);  // 3

// إضافة عنصر
fruits.push("عنب");
console.log(fruits);  // ["تفاح", "برتقال", "موز", "عنب"]

// استخدام map لضرب العناصر
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8]`
    },
    loops: {
        title: 'الحلقات (Loops)',
        explanation: 'الحلقات تسمح لك بتكرار كود معين عدة مرات. هناك أنواع مختلفة من الحلقات في JavaScript، كل منها يُستخدم في حالات مختلفة.',
        details: [
            'for: حلقة تكرارية معروفة عدد التكرارات',
            'while: تستمر ما دام الشرط صحيح',
            'do-while: تنفذ مرة واحدة على الأقل',
            'forEach: للتكرار على عناصر المصفوفة'
        ],
        example: `// حلقة for
for (let i = 1; i <= 3; i++) {
    console.log("الرقم: " + i);
}

// حلقة while
let count = 0;
while (count < 3) {
    console.log("العد: " + count);
    count++;
}

// forEach على مصفوفة
const names = ["علي", "فاطمة", "محمود"];
names.forEach(name => console.log("مرحباً " + name));`
    },
    conditions: {
        title: 'الشرطيات (Conditionals)',
        explanation: 'الشرطيات تسمح للبرنامج بأن يتخذ قرارات مختلفة بناءً على شروط معينة. يمكنك استخدام if و else لتنفيذ أكواد مختلفة حسب الشرط.',
        details: [
            'if: تنفذ الكود إذا كان الشرط صحيح',
            'else if: اختبر شرط جديد إذا فشل الأول',
            'else: تنفذ الكود إذا فشلت جميع الشروط',
            'switch: للاختيار من عدة خيارات'
        ],
        example: `// حالة شرطية
let score = 85;

if (score >= 90) {
    console.log("ممتاز!");
} else if (score >= 70) {
    console.log("جيد جداً");
} else if (score >= 50) {
    console.log("جيد");
} else {
    console.log("راجع الدروس");
}

// switch
let day = 1;
switch(day) {
    case 1:
        console.log("السبت");
        break;
    case 2:
        console.log("الأحد");
        break;
    default:
        console.log("يوم آخر");
}`
    },
    objects: {
        title: 'الكائنات (Objects)',
        explanation: 'الكائنات هي مجموعة من الخصائص والطرق. كل خاصية لها اسم (key) وقيمة (value). الكائنات تسمح بتنظيم البيانات ذات الصلة معاً.',
        details: [
            'الوصول للخاصية: object.property أو object["property"]',
            'إضافة خاصية: object.newProperty = value',
            'الطرق: دوال داخل الكائن',
            'استخدام this للإشارة للكائن نفسه'
        ],
        example: `// إنشاء كائن
const person = {
    name: "أحمد",
    age: 25,
    city: "الرياض",
    greet: function() {
        return "مرحباً، أنا " + this.name;
    }
};

console.log(person.name);  // أحمد
console.log(person.age);   // 25
console.log(person.greet());  // مرحباً، أنا أحمد

// إضافة خاصية جديدة
person.job = "مهندس";
console.log(person.job);  // مهندس`
    }
};

// Event listeners for topic cards
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', function () {
        const topic = this.getAttribute('data-topic');
        openTopicModal(topic);
    });
});

// Function to open modal and display topic details
function openTopicModal(topic) {
    const modal = document.getElementById('topicModal');
    const modalBody = document.getElementById('modalBody');
    const data = topicsData[topic];

    if (data) {
        let html = `
            <h2>${data.title}</h2>
            <p><strong>الشرح:</strong></p>
            <p>${data.explanation}</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.8;">
        `;

        data.details.forEach(detail => {
            html += `<li style="color: #555; margin-bottom: 0.5rem;">${detail}</li>`;
        });

        html += `
            </ul>
            <h3>💡 مثال عملي:</h3>
            <pre><code>${escapeHtml(data.example)}</code></pre>
        `;

        modalBody.innerHTML = html;
        modal.classList.add('show');
    }
}

// Function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Close modal
const modal = document.getElementById('topicModal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.classList.remove('show');
    }
});

// Emotion interactions

// Emotion responses data
const emotionResponses = {
    happy: {
        icon: '😄',
        responses: [
            'شكراً! أنا سعيد أنك سعيد! 🎉',
            'جميل جداً! تابع تعلمك! 💪',
            'رائع! حافظ على هذا المزاج! ⭐'
        ]
    },
    love: {
        icon: '❤️',
        responses: [
            'شكراً! حبك يعني الكثير لنا! ❤️',
            'نحن نحبك أيضاً! 💕',
            'شكراً على دعمك! 🙏'
        ]
    },
    surprised: {
        icon: '😲',
        responses: [
            'رائع! هناك الكثير لتتعلمه! 🌟',
            'أتمنى أن تستمتع بالدروس! 😊',
            'المفاجآت في كل مكان! 🎁'
        ]
    },
    sad: {
        icon: '😢',
        responses: [
            'آسف على أنك حزين، هل تريد مساعدة؟ 💙',
            'لا تيأس! كل شيء سيكون بخير! 💪',
            'تحدث معنا إذا احتجت مساعدة! 🤝'
        ]
    },
    angry: {
        icon: '😠',
        responses: [
            'أتفهم غضبك! كيف يمكننا تحسين الأمور؟ 💪',
            'آسف أن حدث شيء يزعجك! 😔',
            'نحن هنا لمساعدتك! 🙌'
        ]
    }
};

// Add click listeners to emotion elements
document.querySelectorAll('.emotion').forEach(emotionEl => {
    emotionEl.addEventListener('click', function () {
        const emotionType = this.getAttribute('data-emotion');
        showEmotionResponse(emotionType);

        // Add animation to the emotion card
        this.style.animation = 'heartbeat 0.6s';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Function to show emotion response
function showEmotionResponse(emotion) {
    const notification = document.getElementById('emotionNotification');
    const emotionData = emotionResponses[emotion];

    if (emotionData) {
        const randomResponse = emotionData.responses[Math.floor(Math.random() * emotionData.responses.length)];

        document.getElementById('emotionIcon').textContent = emotionData.icon;
        document.getElementById('emotionResponse').textContent = randomResponse;
        document.getElementById('emotionSmall').textContent = `شكراً على مشاركة مشاعرك معنا! 🌟`;

        // Show notification
        notification.classList.add('show');

        // Hide after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }
}

// Add heartbeat animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.15); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);