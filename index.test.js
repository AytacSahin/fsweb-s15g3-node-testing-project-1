const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  test('[3] verilen propu trimliyor', () => {
    const input = { isim: '  jane  ', yas: ' 34 ' }
    const prop = "isim";
    const expected = input[prop].trim()
    const actual = utils.verileniTrimle(input, prop)[prop]
    expect(actual).toEqual(expected)
  })
  test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    const input = { isim: '   jane', yas: '   34' }
    const prop = "yas";
    // const expected = { isim: '   jane' , yas: '34'}
    let expected = { ...input };
    expected[prop] = expected[prop].trim()
    const actual = utils.verileniTrimle(input, prop)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    const expected = 3;
    const actual = utils.enBuyukTamsayiyiBul(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    const expected = sayici.asagiSay();
    expect(expected).toBe(3)
  })
  test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    let expected = sayici.asagiSay();
    expected = sayici.asagiSay();
    expect(expected).toBe(2)
  })
  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    let expected = sayici.asagiSay();
    expected = sayici.asagiSay();
    expected = sayici.asagiSay();
    expected = sayici.asagiSay();
    expect(expected).toBe(0)
  })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    let expected = mevsimler.sonraki();
    expect(expected).toBe("yaz");
  })
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    let expected = mevsimler.sonraki();
    expected = mevsimler.sonraki();
    expect(expected).toBe("sonbahar");
  })
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    let expected = "";
    for (let i = 1; i <= 3; i++) {
      expected = mevsimler.sonraki()
    };
    expect(expected).toBe("kış");
  })
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    let expected = "";
    for (let i = 1; i <= 4; i++) {
      expected = mevsimler.sonraki()
    };
    expect(expected).toBe("ilkbahar");
  })
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    let expected = "";
    for (let i = 1; i <= 5; i++) {
      expected = mevsimler.sonraki()
    };
    expect(expected).toBe("yaz");
  })
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    let expected = "";
    for (let i = 1; i <= 40; i++) {
      expected = mevsimler.sonraki()
    };
    expect(expected).toBe("ilkbahar");
  })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    focus.sur(100);
    let actual = focus.sur(100);
    expect(actual).toBe(200)
  })
  test('[16] arabayı sürmek benzin tüketiyor', () => {
    focus.sur(100)
    focus.sur(100)
    focus.sur(100)
    expect(focus.depo).toBe(10);
  })
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    focus.sur(600)
    focus.benzinal(20)
    focus.sur(600)
    focus.benzinal(20)
    focus.sur(600)
    focus.benzinal(20)
    let actual = focus.sur(600)
    expect(actual).toBe(2400)
  })
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    focus.benzinal(5)
    focus.benzinal(5)
    focus.benzinal(5)
    focus.benzinal(5)
    let actual = focus.benzinal(5)
    expect(focus.depo).toBe(20)
  })
})

describe('[Görev 7] asenkronCiftSayi', () => {
  test('[19] bir çift sayı verilirse true çözümlüyor', () => {
    utils.asenkronCiftSayi(2).then((res) => {
      expect(res).toBe(true);
    })
  })
  test('[20] tek sayı verilirse false çözümlüyor', () => {
    utils.asenkronCiftSayi(1).then((res) => {
      expect(res).toBe(false);
    })
  })
})
