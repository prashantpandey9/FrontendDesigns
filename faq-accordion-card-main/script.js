let button = document.querySelectorAll('.button');

let faqAnswer = document.querySelectorAll('.ans');

function toggleActive(target) {
  let question = target.querySelector('.ques');
  let answer = target.querySelector('.ans');
  let showBtn = target.querySelector('.close');

  question.classList.toggle('ques_active');
  answer.classList.toggle('ans_active');
  showBtn.classList.toggle('arrow');
}
button.forEach(item => {
    item.addEventListener('click', () => toggleActive(item));
  });

