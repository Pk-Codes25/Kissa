document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.story-reaction');
  if (!container) return;

  var counter = new Counter({ workspace: 'kissa-pk-codes25' });

  var storyKey = container.getAttribute('data-story');
  var likeBtn = container.querySelector('.like-btn');
  var dislikeBtn = container.querySelector('.dislike-btn');
  var likeCountEl = document.getElementById('like-count');
  var dislikeCountEl = document.getElementById('dislike-count');

  var likeName = storyKey + '-like';
  var dislikeName = storyKey + '-dislike';
  var votedKey = 'kissa-voted-' + storyKey;

  counter.get(likeName)
    .then(function (result) { likeCountEl.textContent = result.value || 0; })
    .catch(function (err) { console.error('like get error', err); });

  counter.get(dislikeName)
    .then(function (result) { dislikeCountEl.textContent = result.value || 0; })
    .catch(function (err) { console.error('dislike get error', err); });

  if (localStorage.getItem(votedKey)) {
    disableButtons();
  }

  likeBtn.addEventListener('click', function () {
    if (localStorage.getItem(votedKey)) return;
    counter.up(likeName)
      .then(function (result) {
        likeCountEl.textContent = result.value;
        localStorage.setItem(votedKey, 'like');
        disableButtons();
      })
      .catch(function (err) { console.error('like up error', err); });
  });

  dislikeBtn.addEventListener('click', function () {
    if (localStorage.getItem(votedKey)) return;
    counter.up(dislikeName)
      .then(function (result) {
        dislikeCountEl.textContent = result.value;
        localStorage.setItem(votedKey, 'dislike');
        disableButtons();
      })
      .catch(function (err) { console.error('dislike up error', err); });
  });

  function disableButtons() {
    likeBtn.disabled = true;
    dislikeBtn.disabled = true;
  }
});
