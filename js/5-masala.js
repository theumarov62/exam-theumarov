// 4 ta masala uchun sharh yozasiz. Har bir qator kod uchun izoh yozasiz. Bu narsa kodni siz yozganizi bilish uchun muhim. Agar menda zarracha siz gptdan foydalanganiz haqida shubha tug'ilsa live coding qildiraman. O'shanda kodni yozib bera olmasangiz so'zsiz imtihondan yiqilasiz. Shuning uchun gptdan foydalanmang. Sizga yordam berishi mumkin bo'lgan eng katta narsa bu sizning miyyangiz.

// -------------------
// Misol:

// --- 1-masala:
// 1-qator:const filtered = array.filter( (s) => s.gender === "female" && s.grade === "A" ); -> array ichidan faqat ayol va olgan bahosi "A" bo‘lgan elementlarni ajratib, yangi array filteredga saqlaydi.
// 2-qator:167 qatordan 176 qatorgacha bo'lgan kodlar -> filtered arraydagi har birini olib yosh ni 3 ga oshiradi yangi obyekt qiladi va up saqlidi.
// 3-qator:178 qatordan 182 qatorgacha bo'lgan kodlar -> up arrayidagi obyektlarni name propertysi bo‘yicha alifbo tartibida sortlaydi.
// 4-qator:return up; -> natijani qaytaradi

// --- 2-masala:
// 1-qator:let girls = array.filter((s) => s.gender === "female"); -> faqat gender = "female" bo‘lgan obyektlarni ajratib oladi.
// 2-qator:girls.sort((a, b) => (a.major > b.major ? 1 : -1)); -> Qizlarni fan bo‘yicha alifbo tartibida joylashtiradi.
// 3-qator:let bir = girls[0].name.length; -> Tartiblangan ro‘yxatdagi birinchi qizning ismini olib uzunligini  hisoblaydi.
// 4-qator:let oxir = girls[girls.length - 1].name.length; -> 3-qatordagi kodday bir xil ishlidi faqat oxirgi qizning ismini olib uzunligini hisoblaydi.

// --- 3-masala:
// 1-qator:
// 2-qator:
// 3-qator:
// 4-qator:

// --- 4-masala:
// 1-qator:const females = array.filter(student => student.gender === "female"); -> array ichidan ayolarni ajratdik.
// 2-qator:const males = array.filter(student => student.gender === "male"); -> bu kod ham tepadagi kod bilan bir xil ishlidi faqat eng kichik erkaklarni ajratib oladi.
// 3-qator:let oldestFemale = females[0]; ->  eng katta yoshli ayolni topadi va oldestFemale ga saqlaydi.
// 4-qator:let youngestMale = males[0]; ->  eng kichik yoshli erkakni topadi va youngestMale ga saqlaydi.
// 5-qator:return youngestMale.age - oldestFemale.age; -> eng kichik yoshli erkakni eng katta yoshli ayolning yoshlarni oradagi farq hisobliydi.
