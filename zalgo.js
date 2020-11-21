var soul = {
  "up": [
    '̍', '̎', '̄', '̅',
    '̿', '̑', '̆', '̐',
    '͒', '͗', '͑', '̇',
    '̈', '̊', '͂', '̓',
    '̈', '͊', '͋', '͌',
    '̃', '̂', '̌', '͐',
    '̀', '́', '̋', '̏',
    '̒', '̓', '̔', '̽',
    '̉', 'ͣ', 'ͤ', 'ͥ',
    'ͦ', 'ͧ', 'ͨ', 'ͩ',
    'ͪ', 'ͫ', 'ͬ', 'ͭ',
    'ͮ', 'ͯ', '̾', '͛',
    '͆', '̚',
  ],
  "down": [
    '̖', '̗', '̘', '̙',
    '̜', '̝', '̞', '̟',
    '̠', '̤', '̥', '̦',
    '̩', '̪', '̫', '̬',
    '̭', '̮', '̯', '̰',
    '̱', '̲', '̳', '̹',
    '̺', '̻', '̼', 'ͅ',
    '͇', '͈', '͉', '͍',
    '͎', '͓', '͔', '͕',
    '͖', '͙', '͚', '̣',
  ],
  "mid": [
    '̕', '̛', '̀', '́',
    '͘', '̡', '̢', '̧',
    '̨', '̴', '̵', '̶',
    '͜', '͝', '͞',
    '͟', '͠', '͢', '̸',
    '̷', '͡', ' ҉',
  ]
};

var all = [].concat(soul.up, soul.down, soul.mid);

var zalgo = {};

function randomNumber(range) {
  r = Math.floor(Math.random() * range);
  return r;
};

function is_char(character) {
  var bool = false;
  all.filter(function (i) {
    bool = (i == character);
  });
  return bool;
}

zalgo.heComes = function (text) {
  result = '';

  var counts;
  text = text.split('');
  for (let l in text) {
    if (is_char(l)) { continue; }
    result = result + text[l];

    counts = { "up": 0, "down": 100, "mid": 0 };

    let arr = ["up", "mid", "down"];
    for (let d in arr) {
      const index = arr[d];
      for (let i = 0; i <= counts[index]; i++) {

        result += soul[index][randomNumber(soul[index].length)];

      }
    }
  }
  return result;
};