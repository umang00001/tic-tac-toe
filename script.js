let turn = "x"
let boxes = document.querySelectorAll('.box');
let turn_audio = new Audio('ting.mp3')
let gameOverAudio = new Audio('gameover.mp3')
let your_turn = document.querySelector('.your_turn');
let result = document.querySelector('.result');
let reset_btn = document.querySelector('.reset_btn');
let gameover_img = document.querySelector('.gameover_img');
function change_turn() {

    if (turn == "x") {
        turn = "o"
        your_turn.innerHTML = "turn o"
    }
    else {
        turn = "x"
        your_turn.innerHTML = "turn x"
    }

}
let line = document.querySelector('.line')
let box_content = document.querySelectorAll('.box_content');
function check_win() {

    let win = [
        [0, 1, 2,2,5,0],
        [3, 4, 5,2,15,0],
        [6, 7, 8,2,25,0],
        [0, 3, 6,15,7,90],
        [1, 4, 7,15,-3,90],
        [2, 5, 8,15,-12,90],
        [0, 4, 8,-12,-10,218],
        [2, 4, 6,9,-12,134]
    ]
    win.forEach(task => {
        if (box_content[task[0]].innerHTML === box_content[task[1]].innerHTML && box_content[task[1]].innerHTML === box_content[task[2]].innerHTML && box_content[task[1]].innerHTML !== "") {
            result.innerHTML = "game over" + "<br>" + box_content[task[0]].innerHTML + " " + "won"
            your_turn.innerText=""
            turn="x"
            gameover_img.style.width="200px"
            line.style.width="25vw";
            line.style.transform =`translate3d(${task[3]}vw,${task[4]}vw,0)`
            line.style.rotate=`${task[5]}deg`
            gameOverAudio.play()
        }
    })
}


boxes.forEach(task => {
    let box_text = task.querySelector('span');

    task.onclick = function () {
        turn_audio.play()
        box_text.innerText = turn
        
        change_turn()
        check_win()
    }

})



reset_btn.onclick = function () {
    for (let i = 0; i < box_content.length; i++) {
        box_content[i].innerText = ""
    }
    your_turn.innerHTML="turn x"
    result.innerHTML=""
    gameover_img.style.width="0px"
    line.style.width="0"
}

