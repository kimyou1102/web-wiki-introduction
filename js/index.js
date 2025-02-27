console.log(
  '%c' +
    ' __      __  ______   __  __   ______     ' +
    '\n' +
    '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
    '\n' +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    '\n' +
    ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
    '\n' +
    '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
    '\n' +
    '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
    '\n' +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  'color: #d81b60; font-size: 16px; font-weight: bold;'
);

const submit = () => {};

console.log('알맞은 스크립트를 작성하세요');

const $form = document.querySelector('.comment-form');

const $textarea = document.querySelector('.comment-form > textarea');
const $registerButton = document.querySelector(' .button-wrap > .register');
const $cancleButton = document.querySelector(' .button-wrap > .cancle');

$registerButton.addEventListener('click', () => {
  const $ul = document.querySelector('.comment-list');
  const $li = document.createElement('li');
  const $textarea = document.querySelector('.comment-form > textarea');

  $li.innerHTML = `
    <li>
      <div class="comment-item">
        <div class="comment-author">
          <img
            src="./images/comment-author-icon.png"
            alt="사용자 프로필 이미지"
          />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${$textarea.value}
        </div>
      </div>
    </li>
  `;

  $ul.appendChild($li);

  alert('댓글이 등록되었습니다');
  $textarea.value = '';
});

$cancleButton.addEventListener('click', () => {
  $textarea.value = '';
});
