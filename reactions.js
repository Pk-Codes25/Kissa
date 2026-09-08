(function () {
  var NAMESPACE = 'kissa-pk-codes25';
  var API = 'https://api.counterapi.dev/v1/' + NAMESPACE + '/';

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.story-reaction');
    if (!container) return;

    var storyKey = container.getAttribute('data-story');
    var likeBtn = container.querySelector('.like-btn');
    var dislikeBtn = container.querySelector('.dislike-btn');
    var likeCountEl = document.getElementById('like-count');
    var dislikeCountEl = document.getElementById('dislike-count');

    var likeName = storyKey + '-like';
    var dislikeName = storyKey + '-dislike';
    var votedKey = 'kissa-voted-' + storyKey;

    fetch(API + likeName).then(function (r) { return r.json(); })
      .then(function (data) { likeCountEl.textContent = data.count || 0; })
      .catch(function () {});

    fetch(API + dislikeName).then(function (r) { return r.json(); })
      .then(function (data) { dislikeCountEl.textContent = data.count || 0; })
      .catch(function () {});

    if (localStorage.getItem(votedKey)) {
      disableButtons();
    }

    likeBtn.addEventListener('click', function () {
      if (localStorage.getItem(votedKey)) return;
      fetch(API + likeName + '/up').then(function (r) { return r.json(); })
        .then(function (data) {
          likeCountEl.textContent = data.count;
          localStorage.setItem(votedKey, 'like');
          disableButtons();
        });
    });

    dislikeBtn.addEventListener('click', function () {
      if (localStorage.getItem(votedKey)) return;
      fetch(API + dislikeName + '/up').then(function (r) { return r.json(); })
        .then(function (data) {
          dislikeCountEl.textContent = data.count;
          localStorage.setItem(votedKey, 'dislike');
          disableButtons();
        });
    });

    function disableButtons() {
      likeBtn.disabled = true;
      dislikeBtn.disabled = true;
    }
  });
})();
