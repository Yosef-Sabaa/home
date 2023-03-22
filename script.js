const translation = {
    
    en: {
        welcome: 'Welcome to Youssef Sabaa El-Regal links',
        facebook: 'Facebook',
        instagram: 'Instagram',
        whatsapp: 'Whats App',
        telegram: 'Telegram',
        selectlanguage: 'Select a Language',
        english: 'English',
        arabic: 'Arabic',
        create: 'Created by student Youssef Sabaa El-Regal'

    },
    ar: {
        welcome: 'مرحبا بكم في مواقع الارتباط الخاصة بـ  يوسف سبع الرجال',
        facebook: 'فيس بوك',
        instagram: 'انستجرام',
        whatsapp: 'واتس اب',
        telegram: 'تيليجرام',
        selectlanguage: 'اختر اللغة',
        english: 'الانجلزية',
        arabic: 'العربية',
        create: 'انشاء  الطالب  يوسف  سبع  الرجال'

    },
};

const LanguageSelector = document.querySelector("select");

LanguageSelector.addEventListener("change", (event) => {
    setlanguage(event.target.value);
});

const setlanguage = (language) =>{
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element)=> {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translation[language][translationKey];


    });
const welcome = document.getElementById('my-welcome');
welcome.style.color = 'red';
};