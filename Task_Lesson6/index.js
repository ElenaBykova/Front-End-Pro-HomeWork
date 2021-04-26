function story() {

  let kolobok = {
    name: 'kolobok',
    age: 17,
    sex: 'talking pie',
    state: 'alive',
    character: 'cheeky',
    home: 'with grandMa & grandFa',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  let grandMa = {
    name: 'grandMa',
    age: 75,
    sex: 'woman',
    state: 'alive',
    character: 'grandmotherly',
    home: 'house in the village',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  let grandFa = {
    name: 'grandFa',
    age: 83,
    sex: 'man',
    state: 'alive',
    character: 'kindly',
    home: 'house in the village',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  let rabit = {
    name: 'rabit',
    age: 25,
    sex: 'animal',
    state: 'alive',
    character: 'fun',
    home: 'glade',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  let bear = {
    name: 'bear',
    age: 46,
    sex: 'animal',
    state: 'alive',
    character: 'hard',
    home: 'forest',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  let fox = {
    name: 'fox',
    age: 35,
    sex: 'animal',
    state: 'alive',
    character: 'crafty',
    home: 'forest',
    say: function(phrase) {
      console.log(phrase);
    },
    act: function (action) {
      console.log(action);
    },
  };

  chapter1(kolobok, grandFa, grandMa);
  chapter2(kolobok, rabit);
  chapter3(kolobok, bear);
  chapter4(kolobok, fox)

  console.log(grandFa);
  console.log(grandMa);
  console.log(rabit);
  console.log(bear);
  console.log(fox);
  console.log(kolobok);
}

story();


function chapter1(kolobok, grandFa, grandMa) {
  console.log(kolobok);
  console.log(grandMa);
  console.log(grandFa);
  kolobok.say(`${kolobok.name}: "Privet"`);
  grandFa.say(`${grandFa.name}: "Privet ${kolobok.name}"`);
  grandMa.say(`${grandMa.name}: "Privet ${kolobok.name}"`);
  kolobok.say(`${kolobok.name}: "I tyt podymal, chto projuvy kak-to bez vas"`);
  grandMa.state = 'v pechali';
  grandMa.act(`${grandMa.name}: 'plachet:('  ${grandMa.state}`);
  grandFa.state = 'v shoke';
  grandFa.act(`${grandFa.name}: 'otkachivaet grandMa:(' ${grandFa.state}`);
  kolobok.act(`${kolobok.name}: 'ykatil pripevauchi;))'`);
  kolobok.home = 'v begax';
};

function chapter2(kolobok, rabit) {
  console.log(kolobok);
  console.log(rabit);
  kolobok.act(`${kolobok.name}: 'radostno kotitsia po polianke'`);
  rabit.act(`${rabit.name}: 'prygaet na vstrechy kolobky'`);
  kolobok.say(`${kolobok.name}: "Privet. Ty kto?"`);
  rabit.say(`${rabit.name}: "Privet! I ${rabit.name}. A ty kto?"`);
  kolobok.face = 'ydivlen & napyschen';
  console.log(`${kolobok.name} : ${kolobok.face}`);
  kolobok.say(`${kolobok.name}: "I?! ${kolobok.name}!"`);
  rabit.act(`${rabit.name}: 'nuxaet ${kolobok.name}'`);
  rabit.face = 'zainteresovan';
  console.log(`${rabit.name} : ${rabit.face}`);
  rabit.say(`${rabit.name}: "${kolobok.name}, ${kolobok.name}, I tebia siem!"`);
  kolobok.state = 'v shoke';
  kolobok.face = 'poker face';
  console.log(`${kolobok.name}: ${kolobok.state}, but ${kolobok.face}`);
  kolobok.say(`${kolobok.name}: "Xa! I ot GrandFa ybezhal,  ot GrandMa ybezhal! I ot tebia ${rabit.name} ykachy!"`);
  kolobok.act(`${kolobok.name}: 'ykatyvaet po bystromy!'`);
  delete kolobok.face;
  kolobok.state = 'ybezhal ot rabit';
  delete rabit.face;
  rabit.state = 'alive no v neponiatkax';
};

function chapter3(kolobok, bear) {
  console.log(kolobok)
  console.log(bear);
  kolobok.act(`${kolobok.name}: 'podkatyvaet k lesy i ostanavlivaetsia'`);
  kolobok.sixth_sense = 'Atantion!';
  console.log(`kolobok_sixth_sense: ${kolobok.sixth_sense}`);
  bear.act(`${bear.name}: 'vyxodit iz lesa, lomaia kystu. prismatrivaetsia k pyzatoi melochi i govorit'`);
  bear.say(`${bear.name}: "Ny privet! I ${bear.name}, esli chto. A ty kto?"`);
  kolobok.state = 'ymry, no gaz ne broshy';
  kolobok.face = 'smile';
  console.log(`${kolobok.name} : ${kolobok.face} v sostoianii ${kolobok.state}`);
  kolobok.say(`${kolobok.name}: "I?! ${kolobok.name}! I mne nekogda s toboi boltat!"`);
  bear.state = 'v shoke ot naglosti';
  console.log(`bear state: ${bear.state}`);
  bear.act(`${bear.name}: 'nakloniaetsia k ${kolobok.name}'`);
  bear.say(`${bear.name}: "${kolobok.name}, ${kolobok.name}, I tebia siem!"`);
  kolobok.thing = 'Ny vot opiat!';
  kolobok.face = 'poker face';
  console.log(`mysli v golove ${kolobok.name}: "${kolobok.thing}", - but ${kolobok.face}`);
  kolobok.say(`${kolobok.name}: "Xa! I ot GrandFa ybezhal,  ot GrandMa ybezhal! I ot tebia ${bear.name} ykachy!"`);
  bear.state = 'nedoymevaet';
  kolobok.act(`${kolobok.name}: kiss ${bear.name} v schechky i poka ${bear.name} ${bear.state}, ykatyvaet po bystromy!`);
  delete kolobok.face
  kolobok.state = 'chydom yshel ot bear';
  delete kolobok.thing
};

function chapter4(kolobok, fox) {
  console.log(kolobok)
  console.log(fox);
  kolobok.act(`${kolobok.name}: 'vkatyvaetsia v gystoi i dark forest'`);
  kolobok.sixth_sense = 'Atantion!';
  kolobok.state = 'skvoz terni k zvezdam!'
  console.log(`kolobok sixth sense: ${kolobok.sixth_sense} But state: ${kolobok.state}!`);
  fox.act(`${fox.name}: 'vyplyvaia iz-za sosny'`);
  fox.say(`${fox.name}: "Wow! Kakoi impozantnyi i harizmatichnyi molodoi chelovek! I ${fox.name}, a kak tvoe imia?"`);
  kolobok.state = '"I zvezda!"';
  kolobok.face = 'smile na ves face';
  console.log(`${kolobok.name} : ${kolobok.face} v sostoianii ${kolobok.state}`);
  kolobok.say(`${kolobok.name}: "I  ${kolobok.name}! A ty kto ryzhaia bestiai!"`);
  fox.state = 'v shoke ot bespardonstva';
  console.log(`fox state: ${fox.state}`);
  fox.thing = '"Ny ok! Ty sam prishol!"';
  console.log(`fox thing: ${fox.thing}`);
  fox.act(`${fox.name}: nakloniaetsia k ${kolobok.name} i obvivaet ego hvostom`);
  fox.state = 'glyxovata'
  fox.say(`${fox.name}: "${kolobok.name}, ${kolobok.name}, mne tyt bear na yxo nastypil i teper a ${fox.state}! Skazy mne escho razochek, kak ty menia nazval!"`);
  kolobok.sixth_sense = 'Valit nado i bystro!';
  kolobok.face = 'samonadeiannyi glypec';
  console.log(`sixth sense ${kolobok.name}: "${kolobok.sixth_sense}". K sozhaleniu ${kolobok.name} was unyi ${kolobok.face}!`);
  kolobok.act(`${kolobok.name}: priblizhaetsia k ${fox.name}, chtoby sing a song "Say my name. Say my name."`);
  fox.say(`${fox.name}: "Doprygalsia golybchik!"`);
  fox.act(`${fox.name}: Nym!`);
  fox.state = 'dovolnaia';
  fox.thing = '"Vkysno, no vsia dieta na smarky!"';
  console.log(`fox thing: ${fox.thing}`);
  kolobok.state = 'Dovydelyvalsya && Was eaten!'
  console.log(`kolobok state: ${kolobok.state}`);
  kolobok.home = 'yzhe nikto nikyda ne idet!';
  delete kolobok.sixth_sense
  delete kolobok.thing
  delete fox.thing
  delete kolobok.face
};