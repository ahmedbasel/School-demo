import { Injectable, signal } from '@angular/core';

type Locale = 'ar' | 'en';

const copy: Record<Locale, Record<string, string>> = {
  ar: {
    topTagline: 'نفتح أبواب المستقبل بالعلم والمعرفة', call: 'اتصل بنا', schoolName: 'مدرسه السلام الخاصه', schoolMotto: 'تعليم يصنع فرقاً', closeMenu: 'إغلاق القائمة', openMenu: 'فتح القائمة', mainMenu: 'التنقل الرئيسي', home: 'الرئيسية', about: 'عن المدرسة', stages: 'المراحل الدراسية', activities: 'الأنشطة والفعاليات', articles: 'المقالات', lab: 'المكتبة العلمية', books: 'الكتب', studentGuide: 'دليل الطالب', media: 'البرامج الإعلامية', features: 'المميزات', news: 'الأخبار', contact: 'تواصل معنا', contactUs: 'تواصل معنا', switchToEnglish: 'التبديل إلى الإنجليزية', switchToArabic: 'التبديل إلى العربية', search: 'بحث', years: 'عاماً من', educationExcellence: 'التميّز التعليمي', buildTogether: 'معاً نصنع', brighterFuture: 'مستقبلاً أجمل', morningHours: '٨:٠٠ صباحاً – ٢:٠٠ ظهراً', studentCount: '+٨٥٠', teacherCount: '+٦٠', yearCount: '+١٥', pageTitle: 'مدرسه السلام الخاصه', pageDescription: 'مدرسه السلام الخاصه — تعليم يصنع فرقاً ويبني مستقبلاً أجمل.', dateOne: '١٢ أكتوبر ٢٠٢٦', dateTwo: '٠٥ أكتوبر ٢٠٢٦', dateThree: '٢٨ سبتمبر ٢٠٢٦',
    learningMakesDifference: 'تعليم يصنع فرقاً', everyChild: 'كل طفل عنده', storyOf: 'حكاية', success: 'نجاح', heroIntro: 'في مدرسه السلام الخاصه، نمنح أبناءنا تعليماً متوازناً يجمع بين المعرفة والقيم، ونساعد كل طالب على اكتشاف قدراته وصناعة مستقبله.', discoverSchool: 'اكتشف مدرستنا', schoolTour: 'جولة في المدرسة', inspiringCommunity: 'مجتمع مدرسي ملهم', learnDiscoverGrow: 'نتعلم، نكتشف، وننمو معاً', smallBeginning: 'بداية صغيرة، أحلام كبيرة', welcomeSchool: 'مرحباً بكم في مدرسه السلام الخاصه',
    learnAndGrow: 'مساحة للتعلّم والنمو', qualityEducation: 'تعليم متميز', careAndAttention: 'رعاية واهتمام', activitiesForAll: 'أنشطة متنوعة', familyPartnership: 'شراكة مع الأسرة', story: 'حكايتنا', placeToLearn: 'مكان يتعلّم فيه', mind: 'العقل', imagination: 'ويزدهر فيه الخيال', aboutIntro: 'نؤمن أن التعليم الحقيقي يبدأ بفهم كل طالب. لذلك نصنع بيئة تجمع بين جودة التعليم، والاهتمام الفردي، والأنشطة التي تساعد أبناءنا على النمو بثقة.', individualLearning: 'تعليم يراعي الفروق الفردية', strongValues: 'قيم راسخة وشخصية واثقة', familyCommunication: 'تواصل مستمر مع أولياء الأمور', knowSchool: 'تعرّف على المدرسة',
    learningJourney: 'رحلتك التعليمية', excellenceStep: 'خطوة بخطوة نحو', excellence: 'التميّز', programIntro: 'مسارات تعليمية متكاملة ترافق أبناءنا في كل مرحلة من مراحل نموهم.', startConfidently: 'البداية بثقة', primary: 'المرحلة الابتدائية', primaryDesc: 'نبني أساساً قوياً من المهارات والمعرفة، ونشجّع حب الاستكشاف والتعلّم.', discoverPotential: 'اكتشاف الإمكانات', preparatory: 'المرحلة الإعدادية', preparatoryDesc: 'نرافق طلابنا في رحلة اكتشاف الذات وتنمية التفكير والاستقلالية.', futureReady: 'الاستعداد للمستقبل', secondary: 'المرحلة الثانوية', secondaryDesc: 'نهيّئ أبناءنا للخطوة القادمة بالمعرفة والمهارات والثقة بالنفس.',
    ourImpact: 'أثرنا كل يوم', proudResults: 'نتائج نعتز بها،', endlessAmbition: 'وطموح لا يتوقف', students: 'طالب وطالبة', teachers: 'معلماً ومعلمة', yearsGiving: 'عاماً من العطاء', learnBeyondClass: 'نتعلّم خارج الفصل', talent: 'موهبة صغيرة', world: 'قد تصنع عالماً', activitiesIntro: 'من الرياضة والفنون إلى العلوم والقراءة، يجد كل طالب مساحة يعبّر فيها عن نفسه ويكتشف ما يحب.', exploreActivities: 'اكتشف أنشطتنا', learningIsExperience: 'التعلّم تجربة', everyDay: 'نعيشها كل يوم',
    quote: 'المدرسة ليست مكاناً للتعلّم فقط، إنها بداية الطريق الذي يرسمه كل طالب لمستقبله.', schoolVision: 'رؤية مدرسه السلام الخاصه', fromCommunity: 'من مجتمعنا', stories: 'أخبار وحكايات', allNews: 'كل الأخبار', schoolActivities: 'أنشطة مدرسية', achievements: 'إنجازات', community: 'مجتمعنا', schoolNews: 'أخبار المدرسة', studentAchievements: 'إنجازات طلابنا', dailyStories: 'من يومياتنا', newsTitle1: 'يوم مليء بالاكتشافات والأنشطة الممتعة', newsTitle2: 'نحتفي بأبطالنا وإنجازاتهم التي نفخر بها', newsTitle3: 'خطوات جديدة في رحلة عام دراسي مميز', readArticle: 'اقرأ الخبر',
    startTogether: 'نبدأ الحكاية معاً', nextStep: 'جاهزون لخطوتكم القادمة؟', contactIntro: 'يسعدنا أن نجيب عن استفساراتكم ونتعرّف على أبنائنا الجدد.', contactSchool: 'تواصل مع المدرسة', footerIntro: 'معاً نبني جيلاً محباً للعلم، واثقاً بقدراته، ومؤمناً بمستقبله.', quickLinks: 'روابط سريعة', contactDetails: 'تواصل معنا', address: 'القاهرة، جمهورية مصر العربية', welcomeVisitors: 'يسعدنا استقبالكم', workingHours: 'الأحد – الخميس', rights: 'جميع الحقوق محفوظة.', madeWithCare: 'صُنع بكل اهتمام',
  },
  en: {
    topTagline: 'Opening doors to the future through knowledge', call: 'Call us', schoolName: 'Al Salam Private School', schoolMotto: 'Education that makes a difference', closeMenu: 'Close menu', openMenu: 'Open menu', mainMenu: 'Main navigation', home: 'Home', about: 'About school', stages: 'School stages', activities: 'Activities & events', articles: 'Articles', lab: 'Science library', books: 'Books', studentGuide: 'Student guide', media: 'Media programs', features: 'Features', news: 'News', contact: 'Contact us', contactUs: 'Contact us', switchToEnglish: 'Switch to English', switchToArabic: 'Switch to Arabic', search: 'Search', years: 'years of', educationExcellence: 'educational excellence', buildTogether: 'Together we build', brighterFuture: 'a brighter future', morningHours: '8:00 AM – 2:00 PM', studentCount: '+850', teacherCount: '+60', yearCount: '+15', pageTitle: 'Al Salam Private School', pageDescription: 'Al Salam Private School — education that makes a difference and builds a brighter future.', dateOne: 'Oct 12, 2026', dateTwo: 'Oct 05, 2026', dateThree: 'Sep 28, 2026',
    learningMakesDifference: 'Education that makes a difference', everyChild: 'Every child has a', storyOf: 'story of', success: 'success', heroIntro: 'At Al Salam Private School, we provide a balanced education built on knowledge and values, helping every student discover their strengths and shape their future.', discoverSchool: 'Discover our school', schoolTour: 'Take a school tour', inspiringCommunity: 'An inspiring school community', learnDiscoverGrow: 'Learn, discover, and grow together', smallBeginning: 'Small beginnings, big dreams', welcomeSchool: 'Welcome to Al Salam Private School',
    learnAndGrow: 'A place to learn and grow', qualityEducation: 'Quality education', careAndAttention: 'Care and attention', activitiesForAll: 'Activities for all', familyPartnership: 'Family partnership', story: 'Our story', placeToLearn: 'A place where', mind: 'minds', imagination: 'and imagination flourish', aboutIntro: 'We believe great education starts by understanding every student. We create an environment that brings together quality teaching, individual care, and activities that help every child grow with confidence.', individualLearning: 'Learning that respects every student', strongValues: 'Strong values and confident character', familyCommunication: 'Ongoing communication with families', knowSchool: 'Get to know our school',
    learningJourney: 'Your learning journey', excellenceStep: 'One step at a time toward', excellence: 'excellence', programIntro: 'Learning pathways that support our students at every stage of their growth.', startConfidently: 'A confident start', primary: 'Primary stage', primaryDesc: 'Building strong foundations in knowledge and skills while encouraging curiosity and a love of learning.', discoverPotential: 'Discovering potential', preparatory: 'Preparatory stage', preparatoryDesc: 'Supporting students as they discover themselves and build independent thinking.', futureReady: 'Ready for what is next', secondary: 'Secondary stage', secondaryDesc: 'Preparing students for their next step with knowledge, skills, and confidence.',
    ourImpact: 'Our impact every day', proudResults: 'Results we are proud of,', endlessAmbition: 'and ambition without limits', students: 'students', teachers: 'teachers', yearsGiving: 'years of dedication', learnBeyondClass: 'Learning beyond the classroom', talent: 'A small talent', world: 'can shape a world', activitiesIntro: 'From sports and arts to science and reading, every student can express themselves and discover what they love.', exploreActivities: 'Explore our activities', learningIsExperience: 'Learning is an experience', everyDay: 'we live every day',
    quote: 'School is more than a place to learn. It is where every student begins shaping their future.', schoolVision: 'The vision of Al Salam Private School', fromCommunity: 'From our community', stories: 'News & stories', allNews: 'All news', schoolActivities: 'School activities', achievements: 'Achievements', community: 'Community', schoolNews: 'School news', studentAchievements: 'Student achievements', dailyStories: 'School life', newsTitle1: 'A day full of discoveries and joyful activities', newsTitle2: 'Celebrating the achievements we are proud of', newsTitle3: 'New steps in an exceptional school year', readArticle: 'Read story',
    startTogether: 'Let’s start this story together', nextStep: 'Ready for your next step?', contactIntro: 'We would love to answer your questions and welcome your family.', contactSchool: 'Contact the school', footerIntro: 'Together, we are raising a generation that loves learning, believes in itself, and looks forward to the future.', quickLinks: 'Quick links', contactDetails: 'Contact details', address: 'Cairo, Egypt', welcomeVisitors: 'We would love to welcome you', workingHours: 'Sunday – Thursday', rights: 'All rights reserved.', madeWithCare: 'Made with care',
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly locale = signal<Locale>(this.getSavedLocale());

  constructor() {
    this.applyLocale(this.locale());
  }

  t(key: string): string {
    return copy[this.locale()][key] ?? key;
  }

  toggle(): void {
    const next = this.locale() === 'ar' ? 'en' : 'ar';
    this.locale.set(next);
    this.applyLocale(next);
    localStorage.setItem('demo-school-locale', next);
  }

  private getSavedLocale(): Locale {
    return localStorage.getItem('demo-school-locale') === 'en' ? 'en' : 'ar';
  }

  private applyLocale(locale: Locale): void {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = copy[locale]['pageTitle'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy[locale]['pageDescription']);
  }
}
