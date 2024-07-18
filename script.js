const ht_chord_note = document.getElementById('chord_note');
const ht_chord_type = document.getElementById('chord_type');
const ht_tonality = document.getElementById('tonality');
NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
GRADES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
ACCIDENTALS = ['#', 'b'];
EXTENSIONS = [7, 9, 11, 13];

function make_chord() {
    let rand = Math.floor(Math.random() * GRADES.length);
    let tonic = GRADES[rand];
    let type = EXTENSIONS[Math.floor(Math.random() * EXTENSIONS.length)];

    ht_chord_note.innerText = tonic;
    ht_chord_type.innerText = type
}

function make_tonality() {
    let aux_r = Math.random()
    let rand = Math.floor(Math.random() * NOTES.length);
    let new_tonality = NOTES[rand];

    if(aux_r < 0.2) {
        new_tonality += ' ' + ACCIDENTALS[0];
    } else if (aux_r > 0.8) {
        new_tonality += ' ' + ACCIDENTALS[1];
    }

    ht_tonality.innerText = new_tonality;

}