/**
 * Переход к вопросу
 * @param {Number} number
 */
function openQuestion(number) {
	let work = parent.document.getElementById('work')
	
    if (number > 0) {
        work.onload = () => {
            let radiobuttons = parent.frames["work"].document.querySelectorAll('input[type=radio][name="choice"]')
            for (let i = 0; i < radiobuttons.length; i++) {
                radiobuttons[i].onclick = () => {
                    collectAnswers(number, radiobuttons[i].value)
                }
            }
        }
        work.src = 'questions/' + number + '/' + number + '.html'
    } else {
        work.src = 'final.html'
    }
}

/**
 * Сбор ответов
 * @param {Number} question_number
 * @param {Number} answer
 */
function collectAnswers(question_number, answer) {
    let answers = JSON.parse(localStorage.getItem("answers"))

    if (!answers) {
        answers = {}
    }
    
    answers[question_number] = answer

    localStorage.setItem("answers", JSON.stringify(answers))
}

/**
 * Показ результатов
 */
function showResult() {
    let answers = JSON.parse(localStorage.getItem("answers"))

    const right_answers = {1: '1', 2: '2', 3: '1', 4: '3', 5: '3'}

    if (JSON.stringify(answers) == JSON.stringify(right_answers)) {
        alert('Тест пройден!')
    } else {
        alert('Тест не пройден!')
    }
}

/**
 * Удаление ответов
 */
function clearAnswers() {
    window.localStorage.removeItem('answers')

    alert('Ответы удалены!')
}