var letterMap = {
    "a": ["image_part_001 (2).jpg", "image_part_001.jpg"],
    "b": ["image_part_002 (2).jpg", "image_part_002.jpg"],
    "c": ["image_part_003 (2).jpg", "image_part_003.jpg"],
    "d": ["image_part_004 (2).jpg", "image_part_004.jpg"],
    "e": ["image_part_005 (2).jpg", "image_part_005.jpg"],
    "f": ["image_part_006 (2).jpg", "image_part_006.jpg"],
    "g": ["image_part_007 (2).jpg", "image_part_007.jpg"],
    "h": ["image_part_008 (2).jpg", "image_part_008.jpg"],
    "i": ["image_part_009 (2).jpg", "image_part_009.jpg"],
    "j": ["image_part_010 (2).jpg", "image_part_010.jpg"],
    "k": ["image_part_011 (2).jpg", "image_part_011.jpg"],
    "l": ["image_part_012 (2).jpg", "image_part_012.jpg"],
    "m": ["image_part_013 (2).jpg", "image_part_013.jpg"],
    "n": ["image_part_014 (2).jpg", "image_part_014.jpg"],
    "o": ["image_part_015 (2).jpg", "image_part_015.jpg"],
    "p": ["image_part_016 (2).jpg", "image_part_016.jpg"],
    "q": ["image_part_017 (2).jpg", "image_part_017.jpg"],
    "r": ["image_part_018 (2).jpg", "image_part_018.jpg"],
    "s": ["image_part_019 (2).jpg", "image_part_019.jpg"],
    "t": ["image_part_020 (2).jpg", "image_part_020.jpg"],
    "u": ["image_part_021 (2).jpg", "image_part_021.jpg"],
    "v": ["image_part_022 (2).jpg", "image_part_022.jpg"],
    "w": ["image_part_023 (2).jpg", "image_part_023.jpg"],
    "x": ["image_part_024 (2).jpg", "image_part_024.jpg"],
    "y": ["image_part_025 (2).jpg", "image_part_025.jpg"],
    "z": ["image_part_026 (2).jpg", "image_part_026.jpg"],
    "space": ["image_part_027 (2).jpg", "image_part_027.jpg"]
};

var word;

$(document).ready(function () {

    document.getElementById("nextBtn").style.display = 'none';
    GenerateWord();
  
    

});

function NextWord(){
    location.reload();
}

function CheckGuess(){
    var x = document.getElementById("guess");
    
    console.log(x.value);
    if(word.toLowerCase() == x.value.toLowerCase()){
        document.getElementById("status").innerHTML = "Correct!"
        document.getElementById("nextBtn").style.display = 'block';
    }else{
        document.getElementById("status").innerHTML = "Wrong!"
    }
    
}
function GenerateWord() {
    var words = ["hit","bat","act","ice","ask","tie","sum","tip","bar","pen","sun","egg","top","lid","fly","lip","man","pie","row","eye","rib","buy","cat","net","war","sit","hut","pin","set","bay","ban","spy","bow","hot","log","pit","ash"];
    word = words[Math.floor(Math.random() * words.length )];
    DisplayWord(word);
};

function DisplayWord(word) {
    chars = word.split('');
    console.log(word);
    for (let index = 0; index < chars.length; index++) {
        $(flagWord).append('<div class="col-sm"><img src="./Images/' + letterMap[chars[index].toLowerCase()][0] + '" class="img-fluid" alt="..."></div>');
        
    };
};