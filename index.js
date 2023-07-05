/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { isim: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya
  for (const item in obj) {
    obj[item] = obj[item].trim()
  }
  return obj
}

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  for (const item in obj) {
    if (item == prop) {
      obj[item] = obj[item].trim()
    }
  }
  return obj
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  let max = 0;
  for (let i = 0; i < tamsayilar.length; i++) {
    if (tamsayilar[i].tamsayi > max) {
      max = tamsayilar[i].tamsayi
    }
  }
  return max
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */
  // ✨ gerekli propları ekleyin
  this.prop = ilkSayi + 1;

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    // ✨ kodlar buraya
    return this.prop > 0 ? this.prop -= 1 : 0
  }
}

// const sayac = new Sayici(3)
// console.log(sayac.asagiSay());
// console.log(sayac.asagiSay());
// console.log(sayac.asagiSay());
// console.log(sayac.asagiSay());
// console.log(sayac.asagiSay());
// console.log(sayac.asagiSay());

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin
  this.mevsimler = ["yaz", "sonbahar", "kış", "ilkbahar"];
  this.counter = -1;
  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya
    return this.mevsimler[(this.counter += 1) % 4]
  }
}
// const mevsimler = new Mevsimler()
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());


function Araba(isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol (lt/km)
   */

  this.odometer = 0 // araba 0 kilometrede yüklenecek
  this.depo = depoBenzin // araba full depoyla yüklenecek
  // ✨ gerekli propları ekleyin
  this.depoKapasite = depoBenzin;
  this.isim = isim;
  this.kml = kml;

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    // this.odometer = 0 // araba 0 kilometrede yüklenecek
    // this.depo = depoBenzin // araba full depoyla yüklenecek
    // this.depoKapasite = depoBenzin; // arabanın depo kapasitesi
    // this.kml = kml; // arabanın 1 litre ile gidebileceği yol

    const menzil = this.depo * this.kml;
    if (gidilecekyol > menzil) {
      this.depo = 0;
      this.odometer += menzil;
    } else {
      this.odometer += gidilecekyol
      this.depo -= gidilecekyol / this.kml;
    }
    // this.depo -= gidilecekyol / this.kml > 0 ?
    //   this.depo -= gidilecekyol / this.kml : this.depo = this.depo;
    // this.depo -= gidilecekyol / this.kml > 0 ?
    //   this.odometer + gidilecekyol : this.odometer = this.odometer;
    return this.odometer
  }

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    // this.odometer = 0 // araba 0 kilometrede yüklenecek
    // this.depo = depoBenzin // araba full depoyla yüklenecek
    // this.depoKapasite = depoBenzin; // arabanın depo kapasitesi
    // this.kml = kml; // arabanın 1 litre ile gidebileceği yol
    this.depo += litre;
    if (this.depo >= this.depoKapasite) {
      this.depo = this.depoKapasite
      return this.depo * this.kml;
    } else {
      return this.depo * this.kml;
    }
  }
}

const focus = new Araba('focus', 20, 30)
// console.log(focus.sur(100)) // 100 döndürür
// console.log(focus.sur(200)) // 200 döndürür
// console.log(focus)

console.log(focus.benzinal(0))
console.log(focus.sur(120))
console.log(focus.sur(120))
console.log(focus.sur(120))
console.log(focus.sur(120))
console.log(focus.benzinal(6))

// console.log(focus.benzinal(2)) 
// console.log(focus.benzinal(50)) 
// console.log(focus.sur(5000)) 
console.log(focus)

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
async function asenkronCiftSayi(sayi) {
  // ✨ implement
  return (sayi % 2 === 0)
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
}
